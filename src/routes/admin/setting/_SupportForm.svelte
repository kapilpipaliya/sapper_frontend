<svelte:options immutable/>
<script>
  import { all, save_, makeObject } from "../../_modules/functions.js";
  import { onMount, createEventDispatcher } from "svelte";
  import SubmitButton from '../_SubmitButton.svelte'
  import CancelButton from '../_CancelButton.svelte';
  const dp = createEventDispatcher();

  export let rowIdx = 0;
  export let item = [];
  export let hs = [];
  export let isSubmited = false // used to change parent boolean variable easily.

  let isSaving = false;
  let er = "";
  let form = { name: "", email: "", phone: "", message: "" };
  let metals = [];

  if (item.length) { form = makeObject(hs, item) }; 
  
  let S; 
  onMount(async()=>{
    const { Server: S_ } = await import( "../../_modules/ws_events_dispatcher.js" );
    if (typeof S_ == "function") { S = new S_(); } else { S = S_; }
    S.bind$(save_("support", rowIdx), ([d]) => { isSaving = false; if (d.ok) {  isSubmited = true; er = ""; dp("successSave", { rowIdx, d });  } else { er = d.error; } }, 1);
  })
  
  async function save() { isSaving = true; S.trigger([[ save_("support", rowIdx), form ]]); }
  function clearError() { er = ""; }
</script>

<style>
label { display: flex; margin-bottom: 5px; }
label span { flex-basis: 100px; }
label input,
label textarea { flex-basis: 250px; flex-grow: 1}
</style>

<form on:submit|preventDefault={save} >

  <label><span>Name</span><input type="text" bind:value={form.name} required on:focus={clearError}/></label>
  <label><span>Email</span><input type="text" bind:value={form.email} required on:focus={clearError}/></label>
  <label><span>Phone</span><input type="text" bind:value={form.phone} required on:focus={clearError}/></label>
  <label><span>Query</span><textarea bind:value={form.message} required on:focus={clearError}/></label>

  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
    <CancelButton {isSaving} {rowIdx} on:close />
  </footer>
</form>