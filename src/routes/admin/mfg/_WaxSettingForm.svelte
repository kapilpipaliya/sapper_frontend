<script>
  import { Server as S } from "../../_modules/ws_events_dispatcher.js";
  import { all, save_, makeObject } from "../../_modules/functions.js";
  import { onMount, createEventDispatcher } from "svelte";
  import SubmitButton from '../../_components/ui/SubmitButton.svelte'
  import CancelButton from '../../_components/ui/CancelButton.svelte';
  const dp = createEventDispatcher();
  import flatpickr from 'flatpickr';

  export let rowIdx = 0;
  export let item = [];
  export let hs = [];

  let isSaving = false;
  let er = "";
  let form = { date: "", department_id: 0, employee_id: 0, description: "", status_id: "" };
  let date = null;
  let department_id = []
  let employee_id = []

  const fns = [];
  if (item.length) { form = makeObject(hs, item) };
  S.bind$(save_('wax_setting', rowIdx), ([d]) => { isSaving = false; if (d.ok) {  er = ""; dp("successSave", {rowIdx, d});  } else { er = d.error; } }, 1); 

  fns.push(all("department", rowIdx)); S.bind_(fns.i(-1), ([d]) => { department_id = d; form.department_id = item.length ? form["department_id"] : (department_id[0] ? department_id[0][0] : 0) }, [[]]);
  fns.push(all("entity", rowIdx)); S.bind_(fns.i(-1), ([d]) => { employee_id = d; form.employee_id = item.length ? form["employee_id"] : (employee_id[0] ? employee_id[0][0] : 0) }, [[null, "=8"]]);
  onDestroy(() => { if(process.browser) S.unbind_(fns) });

  import 'flatpickr/dist/flatpickr.css'
	import 'flatpickr/dist/themes/light.css'

  onMount(async () => {
    // setup date:
    const elem = date
    const defaultDate = form.date || (new Date()).toISOString();
    form.date = defaultDate;
    flatpickr(elem, {
          altInput: true,
          altFormat: "F j, Y G:i K",
          //dateFormat: "Y-m-d",
          //allowInput: true,
          enableTime: true,
          defaultDate,
          onChange: (selectedDates, dateStr, instance) => {
            form.date = selectedDates[0].toISOString()
          }
    })
  })

  async function save() { isSaving = true; S.trigger([[ save_('wax_setting', rowIdx), form ]]); }
  function clearError() { er = ""; }
</script>

<style>

</style>

<form on:submit|preventDefault={save} >
  <label><span>Date</span><input bind:this={date} /></label>
  <label><span>Department</span>
    <select bind:value={form.department_id} >
      {#each department_id as s}
      <option value={s[0]}> {s[3]} </option>
      {/each}
    </select>
  </label>
  <label><span>Employee</span>
    <select bind:value={form.employee_id} >
      {#each employee_id as s}
      <option value={s[0]}> {s[5]} </option>
      {/each}
    </select>
  </label>
  <label><span>Description</span><input type="text" bind:value={form.description} on:focus={clearError}/></label>
  <label><span>Status</span><input type="text" bind:value={form.status_id} on:focus={clearError}/></label>

  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
    <CancelButton {isSaving} {rowIdx} on:close />
  </footer>
</form>