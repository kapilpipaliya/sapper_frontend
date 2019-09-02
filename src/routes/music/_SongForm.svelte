
<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import {makeObject} from "../_modules/utils.js"
  // import flatpickr from 'flatpickr';
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
    title: "",
    catalog_id: 0,
    temp_id: 0
  };
  let message = ""
  const fns = [];
  let local_catalogs = []
  if (item.length) {
    form = makeObject(hs, item)
  }

  onMount(async ()=>{
    fns.push(["song", event, rowIdx]); S.bind$(fns.i(-1), ([d]) => {isSaving = false; if (d.ok) {  er = ""; dp("successSave", { rowIdx, d }); } else { er = d.error; } }, 1);
    //fns.push(del("product", rowIdx)); S.bind$(fns.i(-1), ([d]) => { isSaving = false; if (d.ok) {  er = ""; dp("deleteRow", { rowIdx, d }); } else { er = d.error; } }, 1);
  })
  onDestroy(() => { if(process.browser && S) S.unbind_(fns) });
  
  const batch1 = []
  batch1.push([
    ["catalog_local", "data", rowIdx], ([d]) => { local_catalogs = d; form.catalog_id = item.length ? form["catalog_id"] : (local_catalogs[0] ? local_catalogs[0][0] : 0)},
    [[]]
  ]);
  S.batchBind_T(batch1)
  
  async function save() { isSaving = true; S.trigger([[ ["song", event, rowIdx], [form, [form.id]] ]]); }
  function clearError() { er = ""; }

  let parcentage = 0;
  // ------------

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile.type.startsWith('audio/')){ 
      alert("Please Select Audio File Only")
      return
    }
    const per_change = (n) =>  parcentage = n

    const percentage_change = (bytesNotSent) => {
      if(bytesNotSent==0){
        parcentage = 100
        console.log('file sent');
      }else{
        const loaded = selectedFile.size - bytesNotSent;
        const percentage_ = Math.round((loaded * 100) / selectedFile.size );
        console.log(percentage_);
        per_change(percentage_)
      }
    }
    
    S.bind_F(["song", 'song', 0], ([temp_id]) => {
      form.temp_id = temp_id
      message = "File Saved Successfully"
      // Show Thumbnail when successfully uploaded:
      //thumbnails[row] = URL.createObjectURL(selectedFile)
      /*Method 2
      const reader = new FileReader();
      reader.onload = function(e) { thumbnails[row] = e.target.result };
      reader.readAsDataURL(selectedFile);
      */
    }, selectedFile, 0, ["auth", "file_meta_data", 0], percentage_change);
  }
</script>

<form class="admin pure-form pure-form-aligned" on:submit|preventDefault={save} >
  <label><span>Catalog</span>
    <select bind:value={form.catalog_id} required>
      {#each local_catalogs as c}
        <option value={c[0]}>{c[1]}</option>
      {/each}
    </select>
  </label>
	<label><span>Title</span><input type="text" bind:value={form.title} required /></label>
  {#if !item.length}
    <input type="file" on:change={handleFileChange} accept="audio/*" /> 
    {#if parcentage > 0}
       Uploading...{parcentage}%
    {/if}
  {/if}
  {#if message}
    <span style="color: green;">{message}</span>
  {/if}

  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
    <CancelButton {isSaving} {rowIdx} on:close />
  </footer>
</form>
