<script>
  import { Server as S } from "../../_modules/ws_events_dispatcher.js";
  import { save_, makeObject } from "../../_modules/functions.js";
  import { onMount, createEventDispatcher } from "svelte";
  import SubmitButton from '../../_components/ui/SubmitButton.svelte'
  import CancelButton from '../../_components/ui/CancelButton.svelte';
  const dp = createEventDispatcher();

  export let rowIdx = 0;
  export let item = [];
  export let hs = [];

  let isSaving = false;
  let er = "";
  let form = { name: "" };

  if (item.length) { form = makeObject(hs, item) };
  S.bind$(save_('department_type', rowIdx), ([d]) => { isSaving = false; if (d.ok) {  er = ""; dp("successSave", {rowIdx, d});  } else { er = d.error; } }, 1); 

  async function save() { isSaving = true; S.trigger([[ save_('department_type', rowIdx), form ]]); }
  function clearError() { er = ""; }
</script>

<style>

</style>

<form on:submit|preventDefault={save} >
  <label><span>Name</span><input type="text" bind:value={form.name} required on:focus={clearError}/></label>

  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
    <CancelButton {isSaving} {rowIdx} on:close />
  </footer>
</form>