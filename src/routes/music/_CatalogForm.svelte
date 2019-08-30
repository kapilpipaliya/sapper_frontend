
<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import {makeObject} from "../_modules/utils.js"
  import SubmitButton from './_SubmitButton.svelte'
  import CancelButton from './_CancelButton.svelte';
  import { Server as S } from "../_modules/ws_music.js";
  const dp = createEventDispatcher();

  export let rowIdx = 0;
  export let item = [];
  export let hs = [];
  export let event = "ins"

  let isSaving = false;
  let er = "";  
  let form = {
  name: "",
  enabled: true,
  };
  const fns = [];
  let user_types = []
  if (item.length) {
    form = makeObject(hs, item)
  }

  onMount(async ()=>{
    fns.push(["catalog_local", event, rowIdx]); S.bind$(fns.i(-1), ([d]) => {isSaving = false; if (d.ok) {  er = ""; dp("successSave", { rowIdx, d }); } else { er = d.error; } }, 1);
  })
    
  onDestroy(() => { if(process.browser && S) S.unbind_(fns) });
  
  async function save() { isSaving = true; S.trigger([[ ["catalog_local", event, rowIdx], [form, [form.id]] ]]); }
  function clearError() { er = ""; }

  // ------------
</script>

<form class="admin" on:submit|preventDefault={save} >
	<label><span>Catalog Name</span><input type="text" bind:value={form.name} required /></label>
	<label><span>Enabled</span><input type="checkbox" bind:checked={form.enabled} /></label>

  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
    <CancelButton {isSaving} {rowIdx} on:close />
  </footer>
</form>
