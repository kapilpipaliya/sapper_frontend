<script>
  import { Server as S } from "../../_modules/ws_events_dispatcher.js";
  import { save_, all, makeObject } from "../../_modules/functions.js";
  import { onMount, createEventDispatcher } from "svelte";
  import SubmitButton from '../../_components/ui/SubmitButton.svelte'
  import CancelButton from '../../_components/ui/CancelButton.svelte';
  const dp = createEventDispatcher();

  export let rowIdx = 0;
  export let item = [];
  export let hs = [];

  let isSaving = false;
  let er = "";
  let form = { slug: "", name: "", department_type_id: 0, parent_id: 0 };
  let department_type_id = [];
  let parent_id = []

  const fns = [];
  if (item.length) { form = makeObject(hs, item) };
  S.bind$(save_('department', rowIdx), ([d]) => { isSaving = false; if (d.ok) {  er = ""; dp("successSave", {rowIdx, d});  } else { er = d.error; } }, 1); 

  fns.push(all("department_type", rowIdx)); S.bind_(fns.i(-1), ([d]) => { department_type_id = d; form.department_type_id = item.length ? form["department_type_id"] : (department_type_id[0] ? department_type_id[0][0] : 0) }, [[]]);
  fns.push(all("department", rowIdx)); S.bind_(fns.i(-1), ([d]) => { if(item.length) { parent_id = d.filter(x=> x[0] !=form.id)} else {parent_id = d}; form.parent_id = item.length ? form["parent_id"] : (parent_id[0] ? parent_id[0][0] : 0) }, [[]]);
  onDestroy(() => { if(process.browser) S.unbind_(fns) });

  async function save() { isSaving = true; S.trigger([[ save_('department', rowIdx), form ]]); }
  function clearError() { er = ""; }
</script>

<style>

</style>

<form on:submit|preventDefault={save} >
  <label><span>Code</span><input type="text" bind:value={form.slug} required on:focus={clearError}/></label>
  <label><span>Name</span><input type="text" bind:value={form.name} required on:focus={clearError}/></label>
  <label><span>Collection</span>
    <select bind:value={form.department_type_id} >
      {#each department_type_id as s}
      <option value={s[0]}> {s[1]} </option>
      {/each}
    </select>
  </label>
  <label><span>Paremt</span>
    <select bind:value={form.parent_id} >
      {#each parent_id as s}
      <option value={s[0]}> {s[3]} </option>
      {/each}
    </select>
  </label>

  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
    <CancelButton {isSaving} {rowIdx} on:close />
  </footer>
</form>