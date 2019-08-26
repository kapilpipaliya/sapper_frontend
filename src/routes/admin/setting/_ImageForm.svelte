<script>
  import { Server as S } from "../../_modules/ws_normal.js";
  import { all, sfx, ins_, upd_, makeObject, thumb_url } from "../../_modules/functions.js";
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import SubmitButton from '../_SubmitButton.svelte'
  import CancelButton from '../_CancelButton.svelte';
  const dp = createEventDispatcher();

  export let rowIdx = 0;
  export let item = [];
  export let hs = [];
  export let event = "ins"

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
  if (item.length) { form = makeObject(hs, item)};
  const evt_type = event == "ins" && item.length == 0 && !form.id ? 1 : 2
  const save_ = evt_type == 1 ? ins_ : upd_
  S.bind$(save_("image", rowIdx), ([d]) => { isSaving = false; if (d.ok) {  er = ""; dp("successSave", { rowIdx, d });  } else { er = d.error; } }, 1);
    
  fns.push(all("image_collection", rowIdx)); S.bind_(fns.i(-1), ([d]) => { image_collection_id = d; form.image_collection_id = item.length ? form["image_collection_id"] : (image_collection_id[0] ? image_collection_id[0][0] : 0) }, [[]]);
  onDestroy(() => { if(process.browser) S.unbind_(fns) });

  let thumbnail = "./images/great-success.png"
  /*
  // request thumnails with websocket:
  if(item.length){
    fns.push(["legacy", "image", "thumb_data", `${sfx(rowIdx)}`]); S.bind_(fns.i(-1), ([data]) => {
      if(data instanceof Blob){
        const url = URL.createObjectURL(data)
        thumbnail = url
      }
    }, form.id);
  }
  */
  if(item.length){
    thumbnail = `${thumb_url}/${form.id}/${form.version}`
  }
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile.type.startsWith('image/')){ return }
    
    S.bind_F(["legacy", "image", 'save_attachment_data', sfx(rowIdx)], ([d]) => {
      form.temp_id = d // d will be temp_id
      // Show Thumbnail when successfully uploaded:
      thumbnail = URL.createObjectURL(selectedFile)
    }, selectedFile);
  }

  async function save() { isSaving = true; S.trigger([[ save_("image", rowIdx), [form, [form.id]] ]]); }
  function clearError() { er = ""; }
</script>


<form class="admin" on:submit|preventDefault={save} >

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