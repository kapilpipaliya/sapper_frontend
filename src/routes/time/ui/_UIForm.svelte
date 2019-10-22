
<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import {makeObject} from "../../_modules/utils.js"
  // import flatpickr from 'flatpickr';
  import SubmitButton from './_SubmitButton.svelte'
  import CancelButton from './_CancelButton.svelte';
  import { Server as S } from "../../_modules/ws_todo.js";
  import flatpickr from 'flatpickr';
  const dp = createEventDispatcher();

  export let rowIdx = 0;
  export let item = [];
  export let hs = [];
  export let event = 2//"ins"

  let isSaving = false;
  let er = "";  
  let date = null;
  let form = {
  key: "",
  purpose: "",
  description: "",
  parent_id: null
  };
  const fns = [];
  let parent_ui_data = []
  if (item.length) {
    form = makeObject(hs, item)
  }

  onMount(async ()=>{
    fns.push([1, event, rowIdx]); S.bind$(fns.i(-1), ([d]) => {isSaving = false; if (d.ok) {  er = ""; dp("successSave", { rowIdx, d }); } else { er = d.error; } }, 1);
    //fns.push(del("product", rowIdx)); S.bind$(fns.i(-1), ([d]) => { isSaving = false; if (d.ok) {  er = ""; dp("deleteRow", { rowIdx, d }); } else { er = d.error; } }, 1);
    onDestroy(() => { if(process.browser && S) S.unbind_(fns) });
    
    const batch1 = []
    batch1.push([
      [1, 1, rowIdx], ([d]) => { parent_ui_data = [[null, "", ""], ...d]; form.parent_id = (form.parent_id)},
      [[]]
    ]);
    S.batchBind_T(batch1)
  })
  
  async function save() { isSaving = true; S.trigger([[ [1, event, rowIdx], [form, [form.id]] ]]); }
  function clearError() { er = ""; }

  // ------------
</script>

<form class="admin pure-form pure-form-aligned" on:submit|preventDefault={save} >
  <label><span>Parent</span>
    <select bind:value={form.parent_id}>
      {#each parent_ui_data as u}
        <option value={u[0]}>{u[1]}-{u[2]}</option>
      {/each}
    </select>
  </label>
	<label><span>Key</span><input type="text" bind:value={form.key} required /></label>
	<label><span>Purpose</span><input type="text" bind:value={form.purpose} required /></label>
	<label><span>Description</span><input type="text" bind:value={form.description} required/></label>

  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
    <CancelButton {isSaving} {rowIdx} on:close />
  </footer>
</form>
