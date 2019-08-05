<script>
  export let tones=[]
  export let value=[]
  export let toneName = ""
/*
  {#if false}
    <td>
      {getToneName(p_tones_tone_id, e[0])}<input type=checkbox use:foo={index, e} on:change={eve=>{
        //bind:group={purity_new_id[index][3]} value={e[0]}
        if(eve.target.checked){
          if(!purity_new_id[index][3].includes(e[0])) purity_new_id[index][3].push(e[0])
        } else {
          const f = purity_new_id[index][3].findIndex(ele=>ele===e[0])
          if(f != -1) purity_new_id[index][3] = purity_new_id[index][3].filter((v) => v !== e[0]);
        }
        }} />
    </td>
    {/if}
*/
	const foo = (node) => {
    // the node has been mounted in the DOM
    if(tones.includes(value)){
      node.checked = true
    }

		return {
      // update(pindex, a) {
      //   if(purity_new_id[pindex][3].includes(a[0])){
      //     node.checked = true
      //   }
      // },
			destroy() {
				// the node has been removed from the DOM
			}
		};
	}
</script>
<style>
  input[type=checkbox] {width:20px; height:20px;}
  .w100{ width: 100px; }
</style>

<td>{toneName}</td>
<td> <input type=checkbox use:foo on:change={eve=>{
        //bind:group={tones} value={value}
        if(eve.target.checked){
          if(!tones.includes(value[0])) tones.push(value)
        } else {
          const f = tones.findIndex(ele=>ele===value)
          if(f != -1) tones = tones.filter((v) => v !== value);
        }
        }}  on:change ></td>
<td><input class="w100" type=number bind:value={value[1]}  step="any" disabled/></td>
<td><input class="w100" type=number bind:value={value[2]}  step="any" disabled/></td>
<td> <input type=checkbox bind:checked={value[3]} on:click></td>
