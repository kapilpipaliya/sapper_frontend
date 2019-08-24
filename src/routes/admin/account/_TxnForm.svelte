<script>
  import { Server as S } from "../../_modules/ws_normal.js";
  import { ins_, all, makeObject, first } from "../../_modules/functions.js";
  import { onMount, createEventDispatcher } from "svelte";
  import flatpickr from 'flatpickr';
  import SubmitButton from '../_SubmitButton.svelte'
  import CancelButton from '../_CancelButton.svelte';
  const dp = createEventDispatcher();

  export let rowIdx = 0;
  export let item = [];
  export let hs = [];
  export let event = "ins"

  let isSaving = false;
  let er = "";
  let form = { 
    journal_type_id: 15,
    party_id: 0,
    date: "",
    currency_id: 0, 
    description: "",
    o_i_order_item: []
  };
  let date = null;
  let journal_type_id = [];
  let party_id = [];
  let o_i_order_item = [];
  let product = []
  let purity = []
  let tone = []
  let clarity = []

  const fns = [];
  if (item.length) { form = makeObject(hs, item)};
  const evt_type = event == "ins" && item.length == 0 && !form.id ? 1 : 2
  const save_ = evt_type == 1 ? ins_ : upd_
  S.bind$(save_('txn', rowIdx), ([d]) => { isSaving = false; if (d.ok) {  er = ""; dp("successSave", {rowIdx, d});  } else { er = d.error; } }, 1); 

  fns.push(all("journal_type", rowIdx)); S.bind_(fns.i(-1), ([d]) => { journal_type_id = d; form.journal_type_id = item.length && form["journal_type_id"] ? form["journal_type_id"] : 15 }, [[], [0]]);
  fns.push(all("entity", rowIdx)); S.bind_(fns.i(-1), ([d]) => { party_id = d; form.party_id = item.length ? form["party_id"] : (party_id[0] ? party_id[0][0] : 0) }, [[null, '=6']]);

  const items_ = () => form.o_i_order_item = form.o_i_order_item
  const f_array = []; f_array[14] = `product`;
  fns.push(all("product", rowIdx)); S.bind_(fns.i(-1), ([d]) => { product = d; items_()}, [f_array]);
  fns.push(all("purity", rowIdx)); S.bind_(fns.i(-1), ([d]) => { purity = d; items_()}, [[]]);
  fns.push(all("tone", rowIdx)); S.bind_(fns.i(-1), ([d]) => { tone = d; items_()}, [[]]);
  fns.push(all("clarity", rowIdx)); S.bind_(fns.i(-1), ([d]) => { clarity = d; items_()}, [[]]);

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
  onDestroy(() => { if(process.browser) S.unbind_(fns) });

  function handleItemAdd() { // Id , post_id, pcs, purity_id, tone_id, clarity_id, price, instruction
    form.o_i_order_item = form.o_i_order_item.concat([[0, first(product), 0, first(purity), first(tone), first(clarity), 0, ""]])
  }
  const handleItemDelete = (row) => () => {
    form.o_i_order_item = form.o_i_order_item.filter((_, i) => i !== row);
  }

  async function save() { isSaving = true; S.trigger([[ save_('txn', rowIdx), [form, [form.id]] ]]); }
  function clearError() { er = ""; }
</script>

<form class="admin" on:submit|preventDefault={save} >
  <label><span>Journal Type</span>
    <select bind:value={form.journal_type_id} >
      {#each journal_type_id as s}
      <option value={s[0]}> {s[2]} </option>
      {/each}
    </select>
  </label>
  <label><span>Customer</span>
    <select bind:value={form.party_id} >
      {#each party_id as s}
      <option value={s[0]}> {s[5]} </option>
      {/each}
    </select>
  </label>
	<label><span>Date</span><input bind:this={date} /></label>
  <label><span>Description</span><textarea bind:value={form.description} on:focus={clearError}/></label>


  <div><b>Order Items:</b>
  {#if form.o_i_order_item.length}
    <table>
      <tbody>
        <tr>
          <th>Product</th>
          <th>Pcs</th>
          <th>Purity</th>
          <th>Tone</th>
          <th>Clarity</th>
          <th>Price</th>
          <th>Instruction</th>
          <th>Actions</th>
        </tr>
        {#each form.o_i_order_item as a, index}
        <tr>
          {#if a[1]}
              <td>
                <select bind:value={form.o_i_order_item[index][1]} required   >
                  {#each product as c}
                    <option value={c[0]}> {c[7]} </option>
                  {/each}
                </select>
              </td>
              <td><input class="w100" type="number" bind:value={form.o_i_order_item[index][2]} min=0  required  /></td>   
              <td>
                <select bind:value={form.o_i_order_item[index][3]} required   >
                  {#each purity as c}
                    <option value={c[0]}> {c[3]} </option>
                  {/each}
                </select>
              </td>
              <td>
                <select bind:value={form.o_i_order_item[index][4]} required   >
                  {#each tone as c}
                    <option value={c[0]}> {c[3]} </option>
                  {/each}
                </select>
              </td>              
              <td>
                <select bind:value={form.o_i_order_item[index][5]} required >
                  {#each clarity as s}
                  <option value={s[0]}> {s[3]} </option>
                  {/each}
                </select>
              </td>
              <td><input class="w100" type="number" bind:value={form.o_i_order_item[index][6]} min=0  required  /></td>   
              <td><input type="text" bind:value={form.o_i_order_item[index][7]} required  /></td>   
              <td><button type="button" on:click={handleItemDelete(index)} >delete</button></td>
          {/if}
        </tr>
        {/each}
      </tbody>
    </table>
  {/if}
  </div>
  <button type="button" on:click={handleItemAdd} >Add</button>








  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
    <CancelButton {isSaving} {rowIdx} on:close />
  </footer>
</form>