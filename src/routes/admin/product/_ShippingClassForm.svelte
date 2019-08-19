<script>
  import { Server as S } from "../../_modules/ws_events_dispatcher.js";
  import { all, save_, makeObject } from "../../_modules/functions.js";
  import { onMount, createEventDispatcher } from "svelte";
  import SubmitButton from '../../_components/SubmitButton.svelte'
  import CancelButton from '../../_components/CancelButton.svelte';
  const dp = createEventDispatcher();

  export let rowIdx = 0;
  export let item = [];
  export let hs = [];

    let isSaving = false;
  let er = "";
  let form = { slug: "", name: "", description: "", display_type: "default" }
  let parent = []

  if (item.length) { form = makeObject(hs, item) }; 
  S.bind$(save_("shipping_class", rowIdx), ([d]) => { isSaving = false; if (d.ok) {  er = ""; dp("successSave", { rowIdx, d }); } else { er = d.error; } }, 1);
  
  async function save() { isSaving = true; S.trigger([[ save_("shipping_class", rowIdx), form ]]); }
  function clearError() { er = ""; }
</script>


<style>

</style>

<form on:submit|preventDefault={save} >

	<label><span>Slug</span><input type="text" bind:value={form.slug} /></label>
	<label><span>Name</span><input type="text" bind:value={form.name} /></label>
	<label><span>Description</span><textarea cols="20" rows="2" bind:value={form.description}></textarea></label>

  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
    <CancelButton {isSaving} {rowIdx} on:close />
  </footer>


</form>