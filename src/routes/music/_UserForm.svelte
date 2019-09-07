
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
  let date = null;
  let form = {
  username: "",
  fullname: "",
  email: "",
  //website: "",
  //apikey: "",
  password: "",
  //access: 0,
  disabled: false,
  // last_seen: ,
  // create_date: 0,
  expiry: null,
  // validation: 0,
  state: "",
  city: "",
  // fullname_public: 0,
  type: "",
  // parent_id: 0
  };
  const fns = [];
  let user_types = []
  if (item.length) {
    form = makeObject(hs, item)
  }

  onMount(async ()=>{
    fns.push(["user", event, rowIdx]); S.bind$(fns.i(-1), ([d]) => {isSaving = false; if (d.ok) {  er = ""; dp("successSave", { rowIdx, d }); } else { er = d.error; } }, 1);
    //fns.push(del("product", rowIdx)); S.bind$(fns.i(-1), ([d]) => { isSaving = false; if (d.ok) {  er = ""; dp("deleteRow", { rowIdx, d }); } else { er = d.error; } }, 1);
    onDestroy(() => { if(process.browser && S) S.unbind_(fns) });
    
    const batch1 = []
    batch1.push([
      ["user", "user_types_form_data", rowIdx], ([d]) => { user_types = d; form.type = item.length ? form["type"] : (user_types[0] ? user_types[0][1] : 0)},
      [[]]
    ]);
    S.batchBind_T(batch1)

    // setup date:
    const elem = date
    const defaultDate = form.expirty || (new Date()).toISOString();
    form.expiry = defaultDate;
    flatpickr(elem, {
          altInput: true,
          altFormat: "F j, Y G:i K",
          //dateFormat: "Y-m-d",
          //allowInput: true,
          enableTime: true,
          defaultDate,
          onChange: (selectedDates, dateStr, instance) => {
            form.expiry = selectedDates[0].toISOString()
          }
    })
  })
  
  async function save() { isSaving = true; S.trigger([[ ["user", event, rowIdx], [form, [form.id]] ]]); }
  function clearError() { er = ""; }

  // ------------
</script>

<form class="admin pure-form pure-form-aligned" on:submit|preventDefault={save} >
  <label><span>User Type</span>
    <select bind:value={form.type} required>
      {#each user_types as u}
        <option value={u[1]}>{u[0]}</option>
      {/each}
    </select>
  </label>
	<label><span>User Name</span><input type="text" bind:value={form.username} required /></label>
	<label><span>Password</span><input type="password" bind:value={form.password} required/></label>
	<label><span>Full Name</span><input type="text" bind:value={form.fullname} required/></label>

	<label><span>Expiry Date</span><input bind:this={date} /></label>
	<label><span>Disabled</span><input type="checkbox" bind:checked={form.disabled} /></label>

  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
    <CancelButton {isSaving} {rowIdx} on:close />
  </footer>
</form>
