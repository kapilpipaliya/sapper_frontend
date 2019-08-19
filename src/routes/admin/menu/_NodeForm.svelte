<script>
  import { Server as S } from "../../_modules/ws_events_dispatcher.js";
  import { save_, makeObject } from "../../_modules/functions.js";
  import { onMount, createEventDispatcher } from "svelte";
  import SubmitButton from '../../_components/SubmitButton.svelte'
  import CancelButton from '../../_components/CancelButton.svelte';
  const dp = createEventDispatcher();

  export let rowIdx = 0;
  export let item = [];
  export let hs = [];

    let isSaving = false;
  let er = "";
  let form = {
    parent_id: 0,
    rank: 0,
    slug: "",
    label: "",
    active: true,
    url: "",
    web_icon: "",
    description: "",
    class: ""
    }
  let parent = []

  if (item.length) { form = makeObject(hs, item) }; 
  S.bind$(save_("node", rowIdx), ([d]) => { isSaving = false; if (d.ok) {  er = ""; dp("successSave", { rowIdx, d }); } else { er = d.error; } }, 1);
  
  async function save() { isSaving = true; S.trigger([[ save_("node", rowIdx), form ]]); }
  function clearError() { er = ""; }
</script>


<style>

</style>

<form on:submit|preventDefault={save} >

  <label><span>Position</span><input type="number" bind:value={form.rank} /></label>
  <label><span>Slug</span><input type="text" bind:value={form.slug} /></label>
	<label><span>Name</span><input type="text" bind:value={form.name} /></label>
	<label><span>Active</span><input type="checkbox" bind:checked={form.active} /></label>
	<label><span>Url</span><input type="text" bind:value={form.url} /></label>
	<label><span>Web Icon</span><input type="text" bind:value={form.web_icon} /></label>
	<label><span>Class</span><input type="text" bind:value={form.class} /></label>
  <label><span>Description</span><textarea cols="20" rows="2" bind:value={form.description}></textarea></label>

  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
    <CancelButton {isSaving} {rowIdx} on:close />
  </footer>


</form>