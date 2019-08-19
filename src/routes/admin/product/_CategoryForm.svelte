<script>
  import { Server as S } from "../../_modules/ws_events_dispatcher.js";
  import { all, save_, del, makeObject } from "../../_modules/functions.js";
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import SubmitButton from '../_SubmitButton.svelte'
  import CancelButton from '../_CancelButton.svelte';
  const dp = createEventDispatcher();

  export let rowIdx = 0;
  export let item = [];
  export let hs = [];

    let isSaving = false;
  let er = "";
  let form = { parent_id: 0, slug: "", name: "", description: "", display_type: "default", position: 0 }
  let parent = []

  const fns = [];
  if (item.length) { form = makeObject(hs, item)};
  fns.push(save_("category", rowIdx)); S.bind$(fns.i(-1), ([d]) => { isSaving = false; if (d.ok) {  er = ""; dp("successSave", { rowIdx, d }); } else { er = d.error; } }, 1);
  fns.push(del("category", rowIdx)); S.bind$(fns.i(-1), ([d]) => { isSaving = false; if (d.ok) {  er = ""; dp("deleteRow", { rowIdx, d }); } else { er = d.error; } }, 1);
  
  fns.push(all("category", rowIdx)); S.bind_(fns.i(-1), ([d]) => { parent = [[0, 0, 0, 0, 0, "No Parent"], ...d]; form.parent_id = item.length ? form["parent_id"] : (parent[0] ? parent[0][0] : 0) }, [[]]);
  onDestroy(() => { if(process.browser) S.unbind_(fns) });

  async function save() { isSaving = true; S.trigger([[save_("category", rowIdx), form ]]); }
  function clearError() { er = ""; }
  
  async function deleteRow() { isSaving = true; S.trigger([[del("category", rowIdx), [form.id] ]]); }
</script>


<style>

</style>

<form on:submit|preventDefault={save} >

  <label><span>Parent</span>
    <select bind:value={form.parent_id} >
      {#each parent as s}
      <option value={s[0]}>
        {s[5]}
      </option>
      {/each}
    </select>
  </label>
	<label><span>Position</span><input type="number" bind:value={form.position} /></label>
	<label><span>Slug</span><input type="text" bind:value={form.slug} /></label>
	<label><span>Name</span><input type="text" bind:value={form.name} /></label>
	<label><span>description</span><textarea cols="20" rows="2" bind:value={form.description}></textarea></label>
	<label><span>Display Type</span>
		<select bind:value={form.display_type} >
			<option value="default">Default</option>
			<option value="products">Products</option>
			<option value="subcategories">Subcategories</option>
			<option value="both">Both</option>
		</select>
	</label>

  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
    <CancelButton {isSaving} {rowIdx} on:close />
    {#if rowIdx !== null} <button type="button" on:click={deleteRow} >Delete</button> {/if}
  </footer>

</form>