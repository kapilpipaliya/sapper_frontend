<script>
  import { Server as S } from "../../_modules/ws_events_dispatcher.js";
  import { all, save_, makeObject } from "../../_modules/functions.js";
  import { onMount, createEventDispatcher } from "svelte";
  import SubmitButton from '../_SubmitButton.svelte'
  import CancelButton from '../_CancelButton.svelte';
  const dp = createEventDispatcher();

  export let rowIdx = 0;
  export let item = [];
  export let hs = [];

  let isSaving = false;
  let er = "";
  let form = { 
    shape_id: 0,
    size_name: "",
    cs_type_id: 0,
    currency_id: 0,
    rate_on_id: 'onweight',
    weight: 0,
    rate: 0
    };
  let shape_id = [];
  let currency_id = [];
  let sizes = [];
  let cs_type_id = [];
  const fns = [];
  let new_name = false;

  if (item.length) { form = makeObject(hs, item) }; S.bind$(save_('color_stone_size', rowIdx), ([d]) => { isSaving = false; if (d.ok) {  er = ""; dp("successSave", {rowIdx, d});  } else { er = d.error; } }, 1); 

  fns.push(all("shape", rowIdx));S.bind_(fns.i(-1), ([d]) => { shape_id = d; form.shape_id = item.length ? form["shape_id"] : (shape_id[0] ? shape_id[0][0] : 0) }, [[]]);
  fns.push(all("currency", rowIdx));S.bind_(fns.i(-1), ([d]) => { currency_id = d; form.currency_id = item.length ? form["currency_id"] : (currency_id[0] ? currency_id[0][0] : 0) }, [[]]);
  fns.push(all("size", rowIdx)); S.bind_(fns.i(-1), ([d]) => { sizes = d; form.size_name = item.length ? form["size_name"] : (sizes[0] ? sizes[0][1] : ""); if(!sizes[0]) {new_name = true}}, [[]]);
  fns.push(all("cs_type", rowIdx)); S.bind_(fns.i(-1), ([d]) => { cs_type_id = d; form.cs_type_id = item.length ? form["cs_type_id"] : (cs_type_id[0] ? cs_type_id[0][0] : 0); }, [[]]);
  onDestroy(() => { if(process.browser) S.unbind_(fns) });

  async function save() { isSaving = true; S.trigger([[ save_('color_stone_size', rowIdx), form ]]); }
  function clearError() { er = ""; }

  const clearSizeName = () => {
    if(!new_name) {
      form.size_name = sizes[0] ? sizes[0][1] : ""
    } else {
      form.size_name = ""
    }
  }
</script>

<form class="admin" on:submit|preventDefault={save} >
  <label><span>Type</span>
    <select bind:value={form.cs_type_id} disabled={item.length} >
      {#each cs_type_id as s}
      <option value={s[0]}> {s[1]} </option>
      {/each}
    </select>
  </label>
  <label><span>Shape</span>
    <select bind:value={form.shape_id} disabled={item.length} >
      {#each shape_id as s}
      <option value={s[0]}> {s[3]} </option>
      {/each}
    </select>
  </label>
  {#if !new_name}
    <label><span>Size Name</span>
      <select bind:value={form.size_name} disabled={item.length} >
        {#each sizes as s}
        <option value={s[1]}> {s[1]} </option>
        {/each}
      </select>
    </label>
  {/if}
	<label><span>New Size?</span><input type="checkbox" bind:checked={new_name} on:change={clearSizeName} disabled={item.length}/></label>
  {#if new_name}
    <label><span>New Size Name</span><input type="text" bind:value={form.size_name} required on:focus={clearError} disabled={item.length}/></label>
  {/if}
	<label><span>Weight</span><input type="number" value={form.weight} step="any"  on:change={e => form.weight = Number(e.target.value)} /></label>
  <label><span>Currency</span>
    <select bind:value={form.currency_id} >
      {#each currency_id as s}
      <option value={s[0]}> {s[1]} </option>
      {/each}
    </select>
  </label>

  <label><span>Rate On</span>
    <select bind:value={form.rate_on_id} size=2 >
      <option value="onweight">On Weight</option>
      <option value="onpcs">On PCs</option>
    </select>
  </label>
	<label><span>Rate</span><input type="number" bind:value={form.rate} step="any"/></label>

  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
    <CancelButton {isSaving} {rowIdx} on:close />
  </footer>
</form>