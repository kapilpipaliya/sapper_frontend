<svelte:options immutable/>
<script>
  import { all, ins_, upd_, makeObject } from "../../../_modules/functions.js";
  import { onMount, createEventDispatcher } from "svelte";
  const dp = createEventDispatcher();

  export let rowIdx = 0;
  export let item = [];
  export let hs = [];
  export let event = "ins"
  export let isSubmited = false // used to change parent boolean variable easily.

  let isSaving = false;
  let er = "";
  let form = { name: "", email: "", phone: "", message: "" };
  let metals = [];

  if (item.length) { form = makeObject(hs, item)};
  const evt_type = event == "ins" && item.length == 0 && !form.id ? 1 : 2
  const save_ = evt_type == 1 ? ins_ : upd_
  
  let S; 
  onMount(async()=>{
    const { Server: S_ } = await import( "../../../_modules/ws_normal.js" );
    if (typeof S_ == "function") { S = new S_(); } else { S = S_; }
    S.bind$(save_("support", rowIdx), ([d]) => { isSaving = false; if (d.ok) {  isSubmited = true; er = ""; dp("successSave", { rowIdx, d });  } else { er = d.error; } }, 1);
  })
  
  async function save() { isSaving = true; S.trigger([[ save_("support", rowIdx), [form, [form.id]] ]]); }
  function clearError() { er = ""; }
</script>

<style src="./_SupportForm.scss"></style>
<form on:submit|preventDefault={save} >

  <label><span>Name</span><input type="text" bind:value={form.name} required on:focus={clearError}/></label>
  <label><span>Email</span><input type="text" bind:value={form.email} required on:focus={clearError}/></label>
  <label><span>Phone</span><input type="text" bind:value={form.phone} required on:focus={clearError}/></label>
  <label><span>Query</span><textarea bind:value={form.message} required on:focus={clearError}/></label>

  <div> {er} </div>

  <footer>
    <button type="submit">Submit</button>
  </footer>
</form>