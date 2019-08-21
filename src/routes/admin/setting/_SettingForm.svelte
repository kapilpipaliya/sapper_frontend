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
  let form = { key: "", value_int: 0, value_num: 0.0, value_text: "", setting_type: "integer", setting: {} };
  let metals = [];

  if (item.length) { form = makeObject(hs, item) }; 
  S.bind$(save_("setting", rowIdx), ([d]) => { isSaving = false; if (d.ok) {  er = ""; dp("successSave", { rowIdx, d });  } else { er = d.error; } }, 1);
    
  async function save() { isSaving = true; S.trigger([[ save_("setting", rowIdx), form ]]); }
  function clearError() { er = ""; }
</script>


<form on:submit|preventDefault={save} >
  {#if !item.length}
	  <label><span>Key</span><input type="text" bind:value={form.key} required /></label>
    <label><span>Setting Type</span>
      <select bind:value={form.setting_type} size=3>
        <option value="integer">Integer</option>
        <option value="decimal">Decimal</option>
        <option value="text">Text</option>
      </select>
    </label>
  {/if}
  {#if form.setting_type == "integer"}
	  <label><span>Value</span><input type="number" bind:value={form.value_int} min="0"/></label>
  {:else if form.setting_type == "decimal"}
	  <label><span>Value</span><input type="number" bind:value={form.value_num} min="0" step="any"/></label>
  {:else}
    <label><span>Value</span><input type="text" bind:value={form.value_text} required on:focus={clearError}/></label>
  {/if}

  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
    <CancelButton {isSaving} {rowIdx} on:close />
  </footer>
</form>