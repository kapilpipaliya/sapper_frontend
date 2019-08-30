<script>
  // import { getFirstElementOr, tailOrEmpty } from "../jreason/src/list.bs.js";
  // import * as _ from "lamb";
  import { onMount, onDestroy, beforeUpdate } from "svelte";
  import { createEventDispatcher } from "svelte";
  const dp = createEventDispatcher();

  export let events = []
  export let quickcomponent=false;
  export let requiredFilter = {}

  export let h = []

  export let items = [];
  export let count = 0;
  export let query = {}
  export let customFilter = {}
  let limit = query.limit || 0;
  let pages = [1]
  let current_page = query.page || 1
  $: {
    // if current_page is not exist set it 1
    if(pages.indexOf(current_page) == -1){
      current_page = 1
    }
  }

  $: {
    // update on limit or count change.
    if(limit > 0) {
      const total = Math.ceil(count/limit)
      const arr = []
        for (let i = 1; i <= total; i++) {
          arr.push(i)
        }
        pages = arr
      } else {
        pages = [1]
      }

  }
  
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

  const fns = [];
  
  export const refresh = () => {
    const args = [filterSettings, sortSettings, [limit, 0, current_page]]
    const e1 = [ events[1], args ]
    const e2 = [ events[2], args ]
    S.trigger([e1, e2]);
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
  const fillHeadersArray = (data) => {
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
  }

  let S; 
  onMount(async () => {
    const { Server: S_ } = await import("../_modules/ws_music.js");
    if (typeof S_ == "function") { S = new S_(); } else { S = S_; }
    
    // [...Array(20)].map(_=>0)
    fns.push(events[1]); S.bind$(fns[0], ([data]) => { 
      quickview = Array.from({length: data.length}, ()=>0); items = data || []; 
      }, 1);
    fns.push(events[2]); S.bind$(fns[1], ([c]) => { 
      count = c;
      }, 1);
    if(h.length > 0){
      fillHeadersArray(h)
    } else{
      fns.push(events[0]); S.bind_(fns[2], ([data]) => {
        fillHeadersArray(data)
      }, {}, 1);
    }

    resetFilter_();
    if(items.length == 0) {
      refresh();
    }
    return true;
  });

  onDestroy(() => { if(process.browser) { S.unbind_(fns) } });

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
  }

  const reFetchRow = async(rowIdx) => {
      const e = [...events[1], rowIdx]
      const d = await new Promise((resolve, reject) => { S.bind_(e, ([data]) => { resolve(data) }, [[`=${items[rowIdx][0]}`]]); });
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
    const r = confirm("Are You Sure!");
    if (r == true) {
    	const [d] = await new Promise((resolve, reject) => { S.bind_(events[3], (d) => { resolve(d) }, [ [items[i][0]] ] ); }, 1); // result is not array
      if (d.ok) { deleteRow({detail: {rowIdx: i}}) } else { alert(d.error) }
      }
    }
  const limitChange = () => {
    current_page = 1
    if (limit < 0) limit = 0;
    refresh();
    }
</script>
<style src="./_Table.scss"></style>
{er}
<div>
  <span>{items.length}{items.length <= 1 ? " item" : " items"}</span>
  <button on:click={toogleAddForm} class={addnewform ? "pressed" : ""}>Add New</button>
  <button on:click={resetFilter}>Reset Filters</button>
  Page Size: <input class="w60" type="number" bind:value={limit} on:change={limitChange} min="0"/>
    {#if addnewform}
      <svelte:component
        this={quickcomponent}
        rowIdx={null}
        hs={headersSelectors}
        event={"ins"}
        on:close={toogleAddForm}
        on:successSave={successSave }
          />
    {/if}
  {#if false}<button on:click={refresh}>Refresh</button>{/if}
  Page No:
  <select bind:value={current_page}  on:change={refresh}>
    {#each pages as p}
      <option value={p}>{p}</option>
    {/each}
  </select>

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
        <!-- <th width="100px">Actions</th> -->
      </tr>
      <tr>
        {#each headers as h, index}
          {#if visible_columns[index]}

            {#if customFilter[index]}
              <select bind:value={filterSettings[index]} on:change={handleFilter(index)} >
                {#each customFilter[index] as f}
                  <option value={f[1]}>{f[0]}</option>
                {/each}
              </select>
            {:else if !hiddenColumns.includes(headerColTypes[index])}
                {#if headerColTypes[index] === 20 || headerColTypes[index] === 23}
                  <th><input type="numer" bind:value={filterSettings[index]} on:input={handleFilter(index)} on:contextmenu|preventDefault={onTextInputContext} /></th>
                {:else if  headerColTypes[index] === 25}
                  <th><input type="text" bind:value={filterSettings[index]} on:input={handleFilter(index)} on:contextmenu|preventDefault={onTextInputContext} /></th>
                {:else if  headerColTypes[index] === 701}
                  <th><input type="numer" bind:value={filterSettings[index]} on:input={handleFilter(index)} on:contextmenu|preventDefault={onTextInputContext} step="any"/></th>
                {:else if  headerColTypes[index] === 1114}
                  <th>Date</th>
                {:else }
                  <th>Unknown Type</th>
                {/if}
            {:else}
               <th></th>
            {/if}
          {/if}
        {/each}
        <!-- <th width="100px"></th> -->
      </tr>
    </thead>
    <tbody>
      {#each items as l, cindex}
        {#if l}
        {#if !quickview[cindex]}
          <tr class_="hidden_attrs" on:mouseenter={(e)=> {/*e.target.classList.remove('hidden_attrs')*/}} on:mouseleave={(e)=>{/*e.target.classList.add('hidden_attrs')*/}} >
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
            <!-- <td> -->
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
            <!-- </td> -->
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
                  event={"upd"}
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
