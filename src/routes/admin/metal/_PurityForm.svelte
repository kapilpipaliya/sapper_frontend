<script>
  import { Server as S } from "../../_modules/ws_events_dispatcher.js";
  import { all, save_, makeObject } from "../../_modules/functions.js";
  import { onMount, createEventDispatcher } from "svelte";
  import SubmitButton from '../../_components/ui/SubmitButton.svelte'
  import CancelButton from '../../_components/ui/CancelButton.svelte';
  const dp = createEventDispatcher();

  export let rowIdx = 0;
  export let item = [];
  export let hs = [];

  let isSaving = false;
  let er = "";
  let form = { slug: "", name: "", description: "", pt_purity_tone: [], price: 0, metal_id: 0, purity: 0, price: 0 };
  let metals = [];
  let tones = [];

  const fns = [];
  if (item.length) { form = makeObject(hs, item) }; S.bind$(save_("purity", rowIdx), ([d]) => { isSaving = false; if (d.ok) {  er = ""; dp("successSave", { rowIdx, d });  } else { er = d.error; } }, 1);
  fns.push(all("metal", rowIdx)); S.bind_(fns.i(-1), ([d]) => { metals = d; form.metal_id = item.length ? form['metal_id'] : (metals[0] ? metals[0][0] : 0) }, []);
  fns.push(all("tone", rowIdx)); S.bind_(fns.i(-1), ([d]) => { tones = d; form.pt_purity_tone = (form.pt_purity_tone) }, []);
  onDestroy(() => { if(process.browser) S.unbind_(fns) });
  
  async function save() { 
    let isDupTones = false;
    const arr = []
    form.pt_purity_tone.forEach(  x => { if(!isDupTones) {isDupTones = arr.includes(x[0]); arr.push(x[0]) }  } )
    if(isDupTones){alert("Duplicate Tone Not Allowed");return}

    let isDupMetals = false;
    let isSumNot100 = false;
    form.pt_purity_tone.forEach(z=> {
      const arr2 = [form.metal_id]
      let tp = form.purity
      let dup = false
      if(z[1]) {
        z[1].forEach(x => {
          tp+=x[1]
          if(!dup) {dup = arr2.includes(x[0]); arr2.push(x[0]) }
        })
        if(!isDupMetals) isDupMetals = dup
        if(!isSumNot100) isSumNot100 = tp !== 100 ? true : false
      }
    })
    if(isDupMetals){alert("Duplicate Metals Not Allowed");return}
    if(isSumNot100){alert("Total Purity Must be 100");return}

    isSaving = true; S.trigger([[ save_("purity", rowIdx), form ]]); }
  function clearError() { er = ""; }

  // if(item.length) validate = 100

  function handleToneAdd() {
    form.pt_purity_tone = form.pt_purity_tone.concat([[tones[0][0], [], 0]])
  }
  const handleToneDelete = (row) => () => {
    form.pt_purity_tone = form.pt_purity_tone.filter((_, i) => i !== row);
    setTotal()
  }
  const handleMPAdd = (trow) => () => { // metal_id, purity, price
    form.pt_purity_tone[trow][1].push([metals[0] && metals[0][0] || 0, 0, 0])
    form.pt_purity_tone[trow][1] = (form.pt_purity_tone[trow][1])
  }
  const handleMPDelete = (trow, row) => () => {
    form.pt_purity_tone[trow][1] = form.pt_purity_tone[trow][1].filter((_, i) => i !== row);
    setTotal()
  }
  const updPrice = () => {
    const metalRow = metals.find(function(e) { return e[0] == form.metal_id; });
    if(metalRow) {
       form.price = metalRow[6] * form.purity / 100
    } else {
      form.price = 0
    }
    setTotal()
  }
  const purityUpdate = (trow, index) => {
    const metal_id = form.pt_purity_tone[trow][1][index][0]
    const metalRow = metals.find(function(e) { return e[0] == metal_id; });
    if(metalRow) {
       form.pt_purity_tone[trow][1][index][2] = metalRow[6] * form.pt_purity_tone[trow][1][index][1] / 100
    } else {
      form.pt_purity_tone[trow][1][index][2] = 0
    }
    setTotal()
  }
  const setTotal = () => {
    // let sum = 0;
    form.pt_purity_tone.forEach(e => {
      let tp = 0, tprice=form.price
      if(e[1]){
        e[1].forEach(y => {
          //tp+=y[1];
          tprice+=y[2]
        })
      }
      e[2] = tprice;
      // sum += tprice;
    });
    // form.pt_purity_tone = (form.pt_purity_tone)
    // form.price = sum
    // validate = tp
  }

  /*
  const PurityIsMainChange = (e, index) =>{
    for (let i = 0; i < form.mp_metal_purity.length; i++) {
      const ele = form.mp_metal_purity[i];
      ele[3] = false
    }
    form.mp_metal_purity[index][3] = true
    form.mp_metal_purity = (form.mp_metal_purity)
  }*/
</script>

<style>
.w100{
  width: 100px;
}

</style>

<form on:submit|preventDefault={save} >

  <label><span>Slug</span><input type="text" bind:value={form.slug} required on:focus={clearError}/></label>
  <label><span>Name</span><input type="text" bind:value={form.name} required on:focus={clearError}/></label>
  <label><span>description</span><textarea cols="20" rows="2" bind:value={form.description}></textarea></label>
  <label><span>Metal</span>
    <select bind:value={form.metal_id} on:change={updPrice}>
      {#each metals as s}
      <option value={s[0]}> {s[2]} </option>
      {/each}
    </select>
  </label>
<label><span>Purity</span><input type="number" bind:value={form.purity} required step="any" min="0" max="100" on:focus={clearError} on:change={updPrice}/></label>
<label><span>Price</span><input type="number" bind:value={form.price} required step="any" on:focus={clearError} disabled /></label>

  <div><b>Tones:</b>
  <table>
    <tbody>
      <tr>
        <th></th>
        <th>Tone</th>
        <th>Price</th>
        <th>Purities</th>
      </tr>
      {#each form.pt_purity_tone as t, mindex}
      {#if t[0]}
        <tr>
          <td><button type="button" on:click={handleToneDelete(mindex)} >delete</button></td>
          <td>
              <select bind:value={form.pt_purity_tone[mindex][0]} required>
                {#each tones as c}
                  <option value={c[0]}> {c[2]} </option>
                {/each}
              </select>
          </td>
          <td><input class="w100" type=number bind:value={form.pt_purity_tone[mindex][2]}  step="any" disabled  /></td>
          <td>
          <div>
            <table>
              <tbody>
                <tr>
                  <th>Metal</th>
                  <th>Purity</th>
                  <th>Price</th>
                </tr>
                {#each t[1] as c, index}
                <tr>
                {#if c[0]}
                  <td> 
                      <select bind:value={form.pt_purity_tone[mindex][1][index][0]} required on:focus={clearError} on:change={e=>purityUpdate(mindex, index)}>
                        {#each metals as m}
                          <option value={m[0]}> {m[2]} </option>
                        {/each}
                      </select>
                  </td>
                  <td><input class="w100" type=number bind:value={form.pt_purity_tone[mindex][1][index][1]}  step="any" min="0" max="100"  on:change={e=>purityUpdate(mindex, index)}/></td>
                  <td><input class="w100" type=number bind:value={form.pt_purity_tone[mindex][1][index][2]}  step="any" disabled  /></td>
                  <td><button type="button" on:click={handleMPDelete(mindex, index)} >delete</button></td>
                {/if}
                </tr>
                {/each}
              </tbody>
            </table>
          </div>
          <button type="button" on:click={handleMPAdd(mindex)} >Add</button>
        </td>
    </tr>
    {/if}
    {/each}
    </tbody>
  </table>
  </div>
  <button type="button" on:click={handleToneAdd} >Tone Add</button>

  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
    <CancelButton {isSaving} {rowIdx} on:close />
  </footer>
</form>