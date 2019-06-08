<script>
  // import { getFirstElementOr, tailOrEmpty } from "../jreason/src/list.bs.js";
  // import * as _ from "lamb";
  import { onMount, beforeUpdate } from "svelte";
  import { Server } from "../_modules/ws_events_dispatcher.js";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let url = "";
  let event_name = `get_${url}_data`;
  let event_h_name = `get_${url}_h_data`;
  let event_hidden_name = `get_${url}_hidden_columns`;
  let event_columns_offset_name = `get_${url}_offset_columns`;
  let event_columns_tooltip_name = `get_${url}_tooltip_offset_columns`;
  let event_columns_type_name = `get_${url}_column_types`;
  // let event_columns_filters_name = `set_${url}_column_filters`;

  let items = [];
  let headers = [];
  let hidden_columns = [];
  let offset_columns = [];
  let tooltip_offset_columns = [];

  let filterSettings = []

  onMount(() => {
    Server.unbind(event_name);
    Server.unbind(event_h_name);
    Server.unbind(event_hidden_name);
    Server.unbind(event_columns_offset_name);
    Server.unbind(event_columns_tooltip_name);
    Server.unbind(event_columns_type_name);
    Server.unbind(event_columns_type_name);
    // Server.unbind(event_columns_filters_name);
    
    Server.bind(event_name, function(data) {
      items = data || [];
    });
    Server.bind(event_h_name, function(data) {
      headers = data;
      resetFilter_();
    });
    Server.bind(event_hidden_name, function(data) {
      hidden_columns = data;
    });
    Server.bind(event_columns_offset_name, function(data) {
      offset_columns = data;
    });
    Server.bind(event_columns_tooltip_name, function(data) {
      tooltip_offset_columns = data;
    });
    Server.trigger(event_hidden_name, {});
    Server.trigger(event_columns_offset_name, {});
    Server.trigger(event_columns_tooltip_name, {});
    Server.trigger(event_columns_type_name, {});
    // Server.trigger(event_columns_filters_name, {});
    Server.trigger(event_h_name, {});
    refresh();
    return true;
  });

  function onItemClick(litem) {
    dispatch("onItemClick", {
      item: litem
    });
    //item = litem;
    //openModal();
  }

  function onDeleteClick(litem) {
    dispatch("onDeleteClick", {
      item: litem
    });
    return true;
    //item = litem;
    //if (confirm(`Delete "${item.name}"?`)){
    // await http.delete(`/items/${item.id}`)
    //items = getItems(url);
    //}
  }

  export let refresh = () => {
    // items = await getItems(baseUrl + url); // This not working..
    //items = getItems(baseUrl + url);
    Server.trigger(event_name, [filterSettings]);
    return true;
  }

  const handleSort = col => {
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
    // Server.trigger(event_columns_filters_name, filterSettings);
    refresh();
  };
  const resetFilter_ = () => {
      const array = new Array(headers.length);
      array.fill(null);
      filterSettings = array;
  }
  const resetFilter = event => {
    resetFilter_();
    //Server.trigger(event_columns_filters_name, filterSettings);
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
</script>
<svelte:options accessors={true} immutable/>

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

</style>
<a href="javascript:;" on:click={resetFilter}>Reset Filters</a>
<div>
  <table class="table is-striped is-hoverable">
    <thead>
      <tr>
        {#each headers as h, index}
          {#if !hidden_columns.includes(index)}
            <th on:click={() => handleSort(index)} on:contextmenu|preventDefault={onHeaderContext} >{h}</th>
          {/if}
        {/each}
        <th width="100px">Actions ▲ ▼</th>
      </tr>
      <tr>
        {#each headers as h, index}
          {#if !hidden_columns.includes(index)}
            <th><input type="numer" bind:value={filterSettings[index]} on:input={handleFilter(index)} on:contextmenu|preventDefault={onTextInputContext} /></th>
          {/if}
        {/each}
        <th width="100px"></th>
      </tr>
    </thead>
    <tbody>
      {#each items as l}
      

        <tr>
          {#each l as c, index}
            {#if !hidden_columns.includes(index)}
              {#if !hidden_columns.includes(index)}
                <td title={l[index + (tooltip_offset_columns[index] || 0)]}>{l[index + (offset_columns[index] || 0)]}</td>
              {/if}
            {/if}
          {/each}

          <td>
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
          </td>
        </tr>
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
