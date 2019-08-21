<svelte:options immutable/>
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
  let form = { slug: "", name: "", specific_density: 0, currency_id: 0, price: 0, melting_point_in_c: 0 };

  if (item.length) { form = makeObject(hs, item) };
  S.bind$(save_('metal', rowIdx), ([d]) => { isSaving = false; if (d.ok) {  er = ""; dp("successSave", {rowIdx, d});  } else { er = d.error; } }, 1);

  async function save() { isSaving = true; S.trigger([[ save_('metal', rowIdx), form ]]); }
  function clearError() { er = ""; }
</script>


<form on:submit|preventDefault={save} >
  <label><span>Slug</span><input type="text" bind:value={form.slug} required on:focus={clearError}/></label>
  <label><span>Name</span><input type="text" bind:value={form.name} required on:focus={clearError}/></label>
	<label><span>Specific Dencity</span><input type="number" bind:value={form.specific_density} step="any" disabled={item.length}/></label>
	<label><span>Melting Point</span><input type="number" bind:value={form.melting_point_in_c} step="any" /></label>
	<label><span>price</span><input type="number" bind:value={form.price} step="any"/></label>

  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
    <CancelButton {isSaving} {rowIdx} on:close />
  </footer>
</form>