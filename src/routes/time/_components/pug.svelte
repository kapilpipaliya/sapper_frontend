<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import { Server as S } from "../_modules/ws_my.js";
  const dp = createEventDispatcher();

	export let language = "javascript"
	export let project = "metro"
	export let name = ""
	export let value = ""
  export let event = 2 //insert
	// $: {
    //   if(process.browser){
      //     if(window.pug){
        //       result = window.pug.render(text)
  //     }
  //   }
  // }
  let isSaving = false;
  let er = "";  
  let result = ""
  let data = []

//   let form = {
//     language: language,
//     project: project,
//     name: "button2",
//     template: "hi",
//     result: "result"
// }
  let formSave = false;

  const fns = [];
  let temp_row_id = 0
  onMount(async ()=>{
    const batch1 = []
    const fetch_args = [[null, `=${language}`, `=${project}`, `=${name}`]]
    batch1.push([ [1, 1, name], ([d]) => { data = d; }, fetch_args ]);
    S.batchBind_T(batch1)
  })
  onDestroy(() => { if(process.browser && S) S.unbind_(fns) });

  const save = async() => {isSaving = true; S.trigger([[ [1, 1, 0], form ]]); }
  const clearError = () => { er = ""; }


   async function handleAdd() {
    let form = {
      language: language,
      project: project,
      name: name,
      template: "",
      result: ""
    }
    const id = await new Promise((resolve, reject) => {
        S.bind_( [1, 2, 0], ([d]) => { resolve(d["id"]);}, [form] );
    });
    data = data.concat([[id, language, project, name, "", ""]])
  }
  async function handleUpdate(d) {
    let form = {
      language: language,
      project: project,
      name: d[3],
      template: d[4],
      result: d[5]
    }
    await new Promise((resolve, reject) => {
        S.bind_( [1, 3, 0], ([d]) => { resolve(d);}, [form,[d[0]]] );
    });
  }
  const handleDelete = async(row) => {
    await new Promise((resolve, reject) => {
        S.bind_( [1, 4, 0], ([d]) => { resolve(d);}, [[data[row][0]]] );
    });
    data = data.filter((_, i) => i !== row);
    // data = data.slice(0, row).concat(data.slice(row + 1));
  }

</script>

{#each data as d, i}
<div class="grid">
    <div class="row">
        <div class="cell-1">Id:<input type="number" disabled bind:value={d[0]} /></div>
        <div class="cell-1">Key:<input type="text" bind:value={d[3]} /></div>
        <div class="cell">Template:<textarea bind:value={d[4]} on:change={()=>d[5] = window.pug.render(d[4])}/></div>
        <div class="cell">Result:<br/>{@html d[5]}</div>
        <div class="cell-1"><button class="button info" on:click={()=>handleUpdate(d)}>Update</button></div>
        <div class="cell-1"><button class="button alert" on:click={()=>handleDelete(i)}>Delete</button></div>
    </div>
</div>
{/each}
<button class="button info" on:click={handleAdd}>Insert</button>