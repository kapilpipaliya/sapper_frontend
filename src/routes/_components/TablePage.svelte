<svelte:options immutable/>
<script>
  // import Card from "../components/Card.svelte";
  import { onMount } from "svelte";
  // import http from "../http";
  //import { getItems } from "../jreason/src/getJson.bs.js";
  import Table from "./Table.svelte";
  import Modal from "./Model.svelte";
  import { Server } from "../_modules/ws_events_dispatcher.js";

  export let formcomponent;
  let myTable;
  let item = [];

  let modalIsVisible = false;

  // const baseUrl = "http://localhost:8800/demo/v1/user";
  export let url = "";

  function onItemClick(litem) {
    item = litem;
    openModal();
  }

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

<svelte:head>
  <title>Items</title>
</svelte:head>

<a href="javascript:;" on:click={onNewClick}>New</a>


  <Table
    bind:this={myTable}
    on:onItemClick={event => onItemClick(event.detail.item)}
    on:onDeleteClick={event => onDeleteClick(event.detail.item)}
    {url} />



{#if modalIsVisible}
  <Modal on:close={closeModal}>
    <header slot="header">
      <button class="delete" aria-label="close" on:click={closeModal}>X</button>
    </header>

    <svelte:component
      this={formcomponent}
      {item}
      on:close={closeModal}
      on:successSave={refresh}
      {url} />
  </Modal>
{/if}
