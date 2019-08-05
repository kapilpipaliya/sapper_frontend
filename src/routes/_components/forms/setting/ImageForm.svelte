<script>
  import { Server as S } from "../../../_modules/ws_events_dispatcher.js";
  import { s_all, sfx, p_save_, s_save_, makeObject } from "../../../_modules/functions.js";
  import { onMount, createEventDispatcher } from "svelte";
  import SubmitButton from '../../ui/SubmitButton.svelte'
  import CancelButton from '../../ui/CancelButton.svelte';
  const dp = createEventDispatcher();

  export let rowIdx = 0;
  export let item = [];
  export let hs = [];

  let isSaving = false;
  let er = "";
  let form = { image_collection_id: 0,
   //name: "", size: 0, type: "",
   temp_id: 0,
   title: "", 
   description: "",
   url: "",
   position: 0 };
  let image_collection_id = [];

  const fns = [];
  if (item.length) { form = makeObject(hs, item) }; 
  S.bind$(s_save_("image", rowIdx), (d) => { isSaving = false; if (d.ok) {  er = ""; dp("successSave", { rowIdx, d });  } else { er = d.error; } });
    
  fns.push(s_all("image_collection", rowIdx)); S.bind_(fns.i(-1), (d) => { image_collection_id = d; form.image_collection_id = item.length ? form["image_collection_id"] : (image_collection_id[0] ? image_collection_id[0][0] : 0) }, [[]]);

  let thumbnail = "./images/great-success.png"
  // setup thumnails:
  if(item.length){
    fns.push(s_all("thumb", `${sfx(rowIdx)}`)); S.bind_(fns.i(-1), (data) => {
      if(data instanceof Blob){
        const url = URL.createObjectURL(data)
        thumbnail = url
      }
    }, form.id);
  }
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile.type.startsWith('image/')){ return }
    
    fns.push(s_save_('attachment', `${sfx(rowIdx)}`)); S.bind_F(fns.i(-1), (d) => {
      form.temp_id = d // d will be temp_id
      // Show Thumbnail when successfully uploaded:
      thumbnail = URL.createObjectURL(selectedFile)
    }, selectedFile);
  }

  async function save() { isSaving = true; S.trigger(s_save_("image", rowIdx), form); }
  function clearError() { er = ""; }
</script>

<style>

</style>

<form on:submit|preventDefault={save} >

  <label><span>Collection</span>
    <select bind:value={form.image_collection_id} >
      {#each image_collection_id as s}
      <option value={s[0]}> {s[1]} </option>
      {/each}
    </select>
  </label>
  {#if false}
    <label><span>Name</span><input type="text" bind:value={form.name} required on:focus={clearError}/></label>
    <label><span>Size</span><input type="number" bind:value={form.size} required on:focus={clearError} step="any" /></label>
    <label><span>Type</span><input type="text" bind:value={form.type} required on:focus={clearError}/></label>
  {/if}
    <label><span>Title</span><input type="text" bind:value={form.title} on:focus={clearError}/></label>
    <label><span>Description</span><input type="text" bind:value={form.description} on:focus={clearError}/></label>
    <label><span>Url</span><input type="text" bind:value={form.url} on:focus={clearError}/></label>
    <label><span>Position</span><input type="number" bind:value={form.position} on:focus={clearError} min="0"/></label>

  <input type="file" on:change={handleFileChange} accept="image/x-png, image/gif, image/jpeg" />
  <img src={thumbnail} width=100 p_height=100 alt="image" />

  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
    <CancelButton {isSaving} {rowIdx} on:close />
  </footer>
</form>