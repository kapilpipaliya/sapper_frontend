<script>
  import { Server as S } from "../../_modules/ws_events_dispatcher.js";
  import { all, ins_, upd_, makeObject } from "../../_modules/functions.js";
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import flatpickr from 'flatpickr';
  import SubmitButton from '../_SubmitButton.svelte'
  import CancelButton from '../_CancelButton.svelte';
  const dp = createEventDispatcher();

  export let rowIdx = 0;
  export let item = [];
  export let hs = [];
  export let event = "ins"
  export let isSubmited = false

  let isSaving = false;
  let er = "";
  let form = {
    // id: 0,
    entity_type_id: 0,
    no: "",
    sequence_id: 0,
    slug: "",
    parent_id: 0,
    legal_name: "",
    tax_no: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    birth_date: "",
    start_date: "",
    end_date: "",
    salary: 0.0,
    rate: 0.0,
    active: true,
    pay_to_name: "",
    threshold: 0.0,
    credit_limit: 0.0,
    terms: 0,
    discount: 0.0,
    discount_terms: 0,
    discount_account_id: 0,
    ar_ap_account_id: 0,
    cash_account_id: 0,
    currency_id: 0,
    price_group_id: 0,
    tax_included: false,
    // create_user_id: 0,
    // update_user_id: 0,
    ea_entity_address: [],
    email: "",
    eu_password: ""
  }
  let birth_date = null;
  let start_date = null;
  let entity_type_id = [];
  let address_type_id = [];
  const fns = [];

  if (item.length) { form = makeObject(hs, item)};
  const evt_type = event == "ins" && item.length == 0 && !form.id ? 1 : 2
  const save_ = evt_type == 1 ? ins_ : upd_
  S.bind$(save_('entity', rowIdx), ([d]) => { isSaving = false; if (d.ok) { isSubmited = true;  er = ""; dp("successSave", {rowIdx, d});  } else { er = d.error; } }, 1); 

  async function save() { isSaving = true; S.trigger([[ save_('entity', rowIdx), [form, [form.id]] ]]); }
  function clearError() { er = ""; }

  fns.push(all("entity_type", rowIdx)); S.bind_(fns.i(-1), ([d]) => { entity_type_id = d; form.entity_type_id = item.length ? form["entity_type_id"] : (entity_type_id[0] ? entity_type_id[0][0] : 0) }, [[]]);
  fns.push(all("address_type", rowIdx)); S.bind_(fns.i(-1), ([d]) => { address_type_id = d;}, [[]]);


    onMount(async () => {
    // setup birth_date:
    {
      const elem = birth_date
      const defaultDate = form.birth_date || (new Date()).toISOString();
      form.birth_date = defaultDate;
      flatpickr(elem, {
            altInput: true,
            altFormat: "F j, Y G:i K",
            //dateFormat: "Y-m-d",
            //allowInput: true,
            enableTime: true,
            defaultDate,
            onChange: (selectedDates, dateStr, instance) => {
              form.birth_date = selectedDates[0].toISOString()
            }
      })
    }
    {
      const elem = start_date
      const defaultDate = form.start_date || (new Date()).toISOString();
      form.start_date = defaultDate;
      flatpickr(elem, {
            altInput: true,
            altFormat: "F j, Y G:i K",
            //dateFormat: "Y-m-d",
            //allowInput: true,
            enableTime: true,
            defaultDate,
            onChange: (selectedDates, dateStr, instance) => {
              form.start_date = selectedDates[0].toISOString()
            }
      })
    }
  });
  onDestroy(() => { if(process.browser) S.unbind_(fns) });
  function handleAddressAdd() {
    form.ea_entity_address = form.ea_entity_address.concat([[0, address_type_id[0] && address_type_id[0][0] || 0, "", "", "", "", "", "", "", ""]])
  }
  const handleAddressDelete = (row) => () => {
    form.ea_entity_address = form.ea_entity_address.filter((_, i) => i !== row);
  }
</script>


<form class="admin" on:submit|preventDefault={save} >
  <label><span>Entity Type</span>
    <select bind:value={form.entity_type_id} >
      {#each entity_type_id as s}
      <option value={s[0]}> {s[1]} </option>
      {/each}
    </select>
  </label>
  <label><span>Code</span><input type="text" bind:value={form.slug} on:focus={clearError}/></label>
  <label><span>Legal Name</span><input type="text" bind:value={form.legal_name} required on:focus={clearError}/></label>
  <label><span>First Name</span><input type="text" bind:value={form.first_name} on:focus={clearError}/></label>
  <label><span>Last Name</span><input type="text" bind:value={form.last_name} on:focus={clearError}/></label>
	<label><span>Date</span><input bind:this={birth_date} /></label>
	<label><span>Start Date</span><input bind:this={start_date} /></label>
	<label><span>Email</span><input bind:value={form.email} type="email" required/></label>
	<label><span>Password</span><input type="password" bind:value={form.eu_password} required/></label>

  <div><b>Addresses:</b>
  {#if form.ea_entity_address.length}
    <table>
      <tbody>
        <tr>
          <th>Address Type</th>
          <th>Line1</th>
          <th>line2</th>
          <th>Line3</th>
          <th>City</th>
          <th>State</th>
          <th>Country</th>
          <th>Zip Code</th>
          <th>Pin Code</th>
          <th>Actions</th>
        </tr>
        {#each form.ea_entity_address as a, index}
        <tr>
          {#if a[1]}
              <td>
                <select bind:value={form.ea_entity_address[index][1]}  required>
                  {#each address_type_id as c}
                    <option value={c[0]}> {c[1]} </option>
                  {/each}
                </select>
              </td>
              <td> <input bind:value={form.ea_entity_address[index][2]} required/> </td>              
              <td> <input bind:value={form.ea_entity_address[index][3]} required/> </td>              
              <td> <input bind:value={form.ea_entity_address[index][4]} /> </td>              
              <td> <input bind:value={form.ea_entity_address[index][5]} required/> </td>              
              <td> <input bind:value={form.ea_entity_address[index][6]} required/> </td>              
              <td> <input bind:value={form.ea_entity_address[index][7]} required/> </td>              
              <td> <input bind:value={form.ea_entity_address[index][8]} required/> </td>              

              <td><button type="button" on:click={handleAddressDelete(index)} >delete</button></td>
          {/if}
        </tr>
        {/each}
      </tbody>
    </table>
  {/if}
  </div>
  <button type="button" on:click={handleAddressAdd} >Add</button>




  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
    <CancelButton {isSaving} {rowIdx} on:close />
  </footer>
</form>