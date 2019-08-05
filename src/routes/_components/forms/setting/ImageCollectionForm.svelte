<script>
  import { Server as S } from "../../../_modules/ws_events_dispatcher.js";
  import { s_all, s_save_, makeObject } from "../../../_modules/functions.js";
  import { onMount, createEventDispatcher } from "svelte";
  import SubmitButton from '../../ui/SubmitButton.svelte'
  import CancelButton from '../../ui/CancelButton.svelte';
  const dp = createEventDispatcher();

  export let rowIdx = 0;
  export let item = [];
  export let hs = [];

  let isSaving = false;
  let er = "";
  let form = { name: ""};
  let metals = [];

  if (item.length) { form = makeObject(hs, item) }; 
  S.bind$(s_save_("image_collection", rowIdx), (d) => { isSaving = false; if (d.ok) {  er = ""; dp("successSave", { rowIdx, d });  } else { er = d.error; } });
    
  //S.bind_(s_all(`metal`, rowIdx), (d) => { metals = d; form.metal_id = item.length ? form['metal_id'] : (metals[0] ? metals[0][0] : 0) }, []);

  async function save() { isSaving = true; S.trigger(s_save_("image_collection", rowIdx), form); }
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