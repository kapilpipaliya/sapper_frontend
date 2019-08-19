<script context="module">
  import { Server as S_ } from "../../_modules/ws_events_dispatcher.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "m_transfer");
  }
</script>
<script>
  import TablePage from "../_TablePage.svelte";
  import MTransferForm from "./_MTransferForm.svelte";

  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />

<svelte:head>
  <title>Metal Transfer</title>
</svelte:head>

{#if isAuth}
  <h1>Metal Transfer</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={MTransferForm}
    quickcomponent={MTransferForm}
     />
{/if}
