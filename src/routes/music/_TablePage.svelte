<svelte:options immutable/>
<script>
  // import Card from "../components/Card.svelte";
  import { onMount } from "svelte";
  // import http from "../http";
  //import { getItems } from "../jreason/src/getJson.bs.js";
  import Table from "./_Table.svelte";
  import Modal from "./_Model.svelte";

  export let events = []
  export let formcomponent;
  export let quickcomponent=false;
  export let requiredFilter = {}
  export let items= []
  export let h = []
  export let count = 0
  export let query = {}
  export let customFilter = {}
  let myTable;
  let item = [];

  let modalIsVisible = false;

  function onItemClick(litem) {
    item = litem;
    openModal();
  }

  // not used now, but its good to use this function.
  async function onDeleteClick(litem) {
    item = litem;
    if (confirm(`Delete "${item.name}"?`)) {
      // await http.delete(`/items/${item.id}`)
      //refresh(); // fix
    }
  }

  function closeModal() {
    modalIsVisible = false;
  }

  function openModal() {
    modalIsVisible = true;
  }

  function onNewClick() {
    item = [];
    openModal();
  }
  function refresh() {
    myTable.refresh();
  }
</script>

{#if false}
  <a href="javascript:;" on:click={onNewClick}>New</a>
{/if}


  <Table
    bind:this={myTable}
    on:onItemClick={event => onItemClick(event.detail.item)}
    on:onDeleteClick={event => onDeleteClick(event.detail.item)}
    {events}
    {quickcomponent}
    {requiredFilter}
    {h}
    {items}
    {count}
    {query}
    {customFilter}
    />



{#if modalIsVisible}
  <Modal on:close={closeModal}>
    <header slot="header">
      <button class="pure-button" aria-label="close" on:click={closeModal}>X</button>
    </header>

    <svelte:component
      this={formcomponent}
      {item}
      on:close={closeModal}
      on:successSave={refresh}
      {h}
      {items}
      />
  </Modal>
{/if}
