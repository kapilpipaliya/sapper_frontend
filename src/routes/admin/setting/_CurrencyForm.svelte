<svelte:options immutable/>
<script>
  import { Server as S } from "../../_modules/ws_events_dispatcher.js";
  import { all, ins_, upd_, makeObject } from "../../_modules/functions.js";
  import { onMount, createEventDispatcher } from "svelte";
  import SubmitButton from '../_SubmitButton.svelte'
  import CancelButton from '../_CancelButton.svelte';
  const dp = createEventDispatcher();

  export let rowIdx = 0;
  export let item = [];
  export let hs = [];
  export let event = "ins"

    let isSaving = false;
  let er = "";
  let form = { slug: "", name: "", symbol: "", rounding: 0, active: false };
  let metals = [];

  if (item.length) { form = makeObject(hs, item)};
  const evt_type = event == "ins" && item.length == 0 && !form.id ? 1 : 2
  const save_ = evt_type == 1 ? ins_ : upd_
  S.bind$(save_("currency", rowIdx), ([d]) => { isSaving = false; if (d.ok) {  er = ""; dp("successSave", { rowIdx, d });  } else { er = d.error; } }, 1);
    
  async function save() { isSaving = true; S.trigger([[ save_("currency", rowIdx), [form, [form.id]] ]]); }
  function clearError() { er = ""; }
</script>


<form class="admin" on:submit|preventDefault={save} >

  <label><span>Slug</span><input type="text" bind:value={form.slug} required on:focus={clearError}/></label>
  <label><span>Name</span><input type="text" bind:value={form.name} required on:focus={clearError}/></label>
  <label><span>Symbol</span><input type="text" bind:value={form.symbol} required on:focus={clearError}/></label>
	<label><span>Rounding</span><input type="number" bind:value={form.rounding} min="0" max="100" step="any"/></label>
  <label><span>Active</span><input type="checkbox" bind:checked={form.active} /></label>

  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
    <CancelButton {isSaving} {rowIdx} on:close />
  </footer>
</form>