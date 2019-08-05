<script>
  // import { getFirstElementOr, tailOrEmpty } from "../jreason/src/list.bs.js";
  // import * as _ from "lamb";
  import { onMount, onDestroy, beforeUpdate } from "svelte";
  import { Server as S } from "../../../_modules/ws_events_dispatcher.js";
  import { all, all_h, all_hi, all_o, all_t } from "../../../_modules/functions.js";
  import { createEventDispatcher } from "svelte";
  const dp = createEventDispatcher();

  export let url = ""; //table
  export let quickcomponent=false;
  export let requiredFilter = {}

  let items = [];
  let headers = [];
  let visible_columns = [];
  let offset_columns = [];
  let tooltip_offset_columns = [];
  let headersSelectors = [];
  let headerColTypes = [];

  let hiddenColumns = [1114, 64000, 16, 20, 23, 114, 142, 701, 9999]

  let er =""

  let filterSettings = []
  let sortSettings = []
  let quickview = []
  let first_visibile_column = 0;
  let addnewform = false;

  let limit = 0;

  const fns = [];

  onMount(() => {
    fns.push(all_h(url)); S.bind_(fns.i(-1), (data) => {
      headers = data[0] || [];
      headersSelectors = data[1] || [];
      headerColTypes = data[2] || [];
      visible_columns = data[3] || [];
      let i;
      for (i = 0; i < visible_columns.length; i++) {
        if (visible_columns[i]) {
          first_visibile_column = i;
          break;
        }
      }
      offset_columns = data[4]
      tooltip_offset_columns = data[5]
      resetFilter_();
    }, {});
    /*
    fns.push(all_hi(url)); S.bind_(fns.i(-1), (data) => {
      visible_columns = data || [];
      let i;
      for (i = 0; i < headers.length; i++) { // care
        if (!data.includes(i)) {
          first_visibile_column = i;
          break;
        }
      }
    }, {});
    
    fns.push(all_o(url)); S.bind_(fns.i(-1), (data) => { offset_columns = data || []; }, []);
    fns.push(all_t(url)); S.bind_(fns.i(-1), (data) => { tooltip_offset_columns = data || []; }, []);
    */
      // [...Array(20)].map(_=>0)
    fns.push(all(url)); S.bind$(fns.i(-1), (data) => { quickview = Array.from({length: data.length}, ()=>0); items = data || []; });
    resetFilter_();
    refresh();
    return true;
  });
  onDestroy(() => { 
    if(process.browser) {
      S.unbind_(fns)
    }
  });

  function onItemClick(litem) {
    dp("onItemClick", {
      item: litem
    });
    //item = litem;
    //openModal();
  }

  function onDeleteClick(litem) {
    dp("onDeleteClick", {
      item: litem
    });
    return true;
    //item = litem;
    //if (confirm(`Delete "${item.name}"?`)){
    // await http.delete(`/items/${item.id}`)
    //items = getItems(url);
    //}
  }

  export const refresh = () => {
    // items = await getItems(baseUrl + url); // This not working..
    //items = getItems(baseUrl + url);
    S.trigger(all(url), [filterSettings, sortSettings, [limit]]);
    return true;
  }
  const successSave = (e) => {
    const {rowIdx, d} = e.detail
    if(rowIdx === null) {
      toogleAddForm()
      refresh()
    } else {
      quickview[rowIdx] = false
      reFetchRow(rowIdx)
    }
  }
  const reFetchRow = async(rowIdx) => {
      const e = `get_${url}_data11${rowIdx}`
      const d = await new Promise((resolve, reject) => { S.bind_(e, (data) => { resolve(data) }, [[`=${items[rowIdx][0]}`]]); });
      if(d) {
        for (let i = 0; i < d[0].length; i++) {
          items[rowIdx][i] = d[0][i]
        }
        items[rowIdx] = items[rowIdx]
      } else {
        alert("error")
      }
      S.unbind(e);
  }
  const deleteRow = (e) => {
    const {rowIdx} = e.detail
    if(rowIdx !== null) {
      quickview[rowIdx] = false
      items[rowIdx] = false
    }
  }

  const handleSort = (e, col) => {
    if(e.ctrlKey) {

    } else {
      const sortOrder = sortSettings[col]
      sortSettings = []
      if(sortOrder === undefined) {
        sortSettings[col] = 0
      } else if (sortOrder === 0) {
        sortSettings[col] = 1
      } else {
        sortSettings[col] = undefined
      }
    }
    refresh();
	  // if (col.sortable === true && typeof col.value === "function") {
	  //   if (sortKey === col.key) {
	  //     sortOrder = sortOrder === 1 ? -1 : 1;
	  //   } else {
	  //     sortOrder = 1;
	  //     sortKey = col.key;
	  //     sortBy = r => col.value(r);
	  //   }
	  // }
  };
  const handleFilter = col => event => {
    // S.trigger(event_columns_filters_name, filterSettings);
    refresh();
  };
  const resetFilter_ = () => {
      const array = new Array(headers.length);
      array.fill(null);
      for (let key in requiredFilter) {array[key] = requiredFilter[key]}
      filterSettings = array;
  }
  const resetFilter = event => {
    resetFilter_();
    //S.trigger(event_columns_filters_name, filterSettings);
    refresh();
  };
  let menuDisplayed = false;
  let inputMenuDisplayed = false;

  const onHeaderContext = event => {
    const left = event.clientX;
    const top = event.clientY;
                
    const menuBox = window.document.querySelector(".menu");
    if(menuBox) {
      menuBox.style.left = left + "px";
      menuBox.style.top = top + "px";
      menuBox.style.display = "block";
      
      menuDisplayed = true;
    }

    // window.addEventListener("click", function() {
    //     if(menuDisplayed == true){
    //         menuBox.style.display = "none"; 
    //     }

  }
  const onTextInputContext = event => {
    const left = event.clientX;
    const top = event.clientY;
                
    const menuBox = window.document.querySelector(".menu-input");
    if(menuBox) {
      menuBox.style.left = left + "px";
      menuBox.style.top = top + "px";
      menuBox.style.display = "block";
      
      inputMenuDisplayed = true;
    }

    // window.addEventListener("click", function() {
    //     if(menuDisplayed == true){
    //         menuBox.style.display = "none"; 
    //     }

  }
  const closeInputMenu = event => {
    const menuBox = window.document.querySelector(".menu-input");
        if(inputMenuDisplayed == true){
            menuBox.style.display = "none"; 
        }
  }
  const toogleAddForm = () => {
    addnewform = !addnewform
  }
 
  const deleteRow2 = (i) => async() => {
    const r = confirm("Press a button!");
    if (r == true) {
    	const d = await new Promise((resolve, reject) => { S.bind_(`del_${url}_data${i}`, (data) => { resolve(data) }, [items[i][0]]); });
      if (d.ok) { deleteRow({detail: {rowIdx: i}}) } else { alert(d.error) }
      }
    }
</script>

<style>
    table {
        border-collapse: collapse;
    }
    table th,
    table td {
        border: 1px solid rgb(191, 191, 191);
        white-space: nowrap;
    }
    table input {
        border: none;
        width: 100%;
    }

    .menu,
    .menu-input
    {
        width: 150px;
        box-shadow: 3px 3px 5px #888888;
        border-style: solid;
        border-width: 1px;
        border-color: grey;
        border-radius: 2px;
        padding-left: 5px;
        padding-right: 5px;
        padding-top: 3px;
        padding-bottom: 3px;
        position: fixed;
        display: none;
        
        background: #fff;
    }
    
    .menu-item
    {
        height: 20px;
    }
    
    .menu-item:hover
    {
        background-color: #6CB5FF;
        cursor: pointer;
    }

    .hidden_attrs .row-actions {
      display: none;
    }
    .row-actions {
      display: unset;
    }

  input {
    background: lightyellow;
  }
  .pressed{
     background-color: lightgrey;
  }
  .w60{
    width: 60px;
  }
  tr:hover {background-color:#f5f5f5;}
  td, th {
    white-space:nowrap
  }
</style>

{er}
<div>
  <span>{items.length}{items.length <= 1 ? " item" : " items"}</span>
  <button on:click={toogleAddForm} class={addnewform ? "pressed" : ""}>Add New</button>
  <button on:click={resetFilter}>Reset Filters</button>
  Limit: <input class="w60" type="number" bind:value={limit} />
    {#if addnewform}
      <svelte:component
        this={quickcomponent}
        rowIdx={null}
        hs={headersSelectors}
        on:close={toogleAddForm}
        on:successSave={successSave }
          />
    {/if}
  <button on:click={refresh}>Refresh</button>

  <table class="table is-striped is-hoverable">
    <thead>
      <tr>
        {#each headers as h, index}
          {#if visible_columns[index]}
            <th on:click={(e) => handleSort(e, index)} on:contextmenu|preventDefault={onHeaderContext} >
            {h}
            {#if sortSettings[index] === 0}
              ▲ 
            {:else if sortSettings[index] === 1}
              ▼
            {:else}
               <!-- content here -->
            {/if}
            </th>
          {/if}
        {/each}
        <th width="100px">Actions</th>
      </tr>
      <tr>
        {#each headers as h, index}
          {#if visible_columns[index]}
            {#if !hiddenColumns.includes(headerColTypes[index])}
              <th><input type="numer" bind:value={filterSettings[index]} on:input={handleFilter(index)} on:contextmenu|preventDefault={onTextInputContext} /></th>
            {:else}
               <th></th>
            {/if}
          {/if}
        {/each}
        <th width="100px"></th>
      </tr>
    </thead>
    <tbody>
      {#each items as l, cindex}
        {#if l}
        {#if !quickview[cindex]}
          <tr class="hidden_attrs" on:mouseenter={(e)=> {e.target.classList.remove('hidden_attrs')}} on:mouseleave={(e)=>{e.target.classList.add('hidden_attrs')}} >
            {#each l as c, index}
                {#if visible_columns[index]}
                  <td title={l[index + (tooltip_offset_columns[index] || 0)]}>
                    {#if l[index + (offset_columns[index] || 0)] != null}
                      {l[index + (offset_columns[index] || 0)]}
                    {/if}
                    {#if index === first_visibile_column}
                      <div class="row-actions">
                        {#if false}<span>ID: {l[0]}</span>{/if}
                        <button type="button" on:click={()=>{ quickview[cindex] = true } }>Edit</button>
                        <button type="button" on:click={deleteRow2(cindex)} > D </button>
                      </div>
                    {/if}
                  </td>
                {/if}
            {/each}
            <td>
            {#if false}
              <a href="javascript:;" on:click={() => onItemClick(l)}>
                <span class="icon is-small">
                  <i class="fas fa-edit" />
                  edit 
                </span>
              </a>

              <a href="javascript:;" on:click={() => onDeleteClick(l)}>
                <span class="icon is-small">
                  <i class="fas fa-trash" />
                  delete
                </span>
              </a>
            {/if}
            </td>
          </tr>
        {/if}
        
        {#if quickview[cindex]}
          <tr>
            <td colspan="{l.length}">
            {#if quickcomponent}
                <svelte:component
                  this={quickcomponent}
                  rowIdx={cindex} 
                  item={l} 
                  hs={headersSelectors}
                  on:close={(event) => quickview[event.detail] = false }
                  on:successSave={successSave }
                  on:deleteRow={deleteRow }
                   />
            {/if}
            </td>
          </tr>
        {/if}
        {/if}
      {/each}
    </tbody>
  </table>

  <div class="menu">
            <div class="menu-item">Share On Facebook</div>
            <div class="menu-item">Share On Twitter</div>
            <hr>
            <div class="menu-item">Search On Google</div>
            <div class="menu-item">Search On Bing</div>
            <hr>
            <div class="menu-item">Bookmark</div>
        </div>

  <div class="menu-input">
            <div class="menu-item" on:click={closeInputMenu}>Close</div>
            <hr>
            <div class="menu-item">What's This?</div>
            <hr>
            <div class="menu-item">Is NULL</div>
            <div class="menu-item">Is not NULL</div>
            <div class="menu-item">Is empty</div>
            <div class="menu-item">Is not empty</div>
            <hr>
            <div class="menu-item">Equal to...</div>
            <div class="menu-item">Not equal to...</div>
            <div class="menu-item">Greater than...</div>
            <div class="menu-item">Less than...</div>
            <div class="menu-item">Greater or equal...</div>
            <div class="menu-item">Less or equal...</div>
            <div class="menu-item">In range...</div>
        </div>

  <div class="menu">
            <div class="menu-item">Share On Facebook</div>
            <div class="menu-item">Share On Twitter</div>
            <hr>
            <div class="menu-item">Search On Google</div>
            <div class="menu-item">Search On Bing</div>
            <hr>
            <div class="menu-item">Bookmark</div>
        </div>



</div>
