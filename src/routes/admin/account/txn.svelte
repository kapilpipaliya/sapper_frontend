<script context="module">
  import { Server as S_ } from "../../_modules/ws_events_dispatcher.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "txn");
  }
</script>
<script>
  import TablePage from "../../_components/table/TablePage.svelte";
  import TxnForm from "./_TxnForm.svelte";
  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />

<svelte:head>
  <title>Orders</title>
</svelte:head>

{#if isAuth}
  <h1>Orders</h1>
  <TablePage
    {url}
    {h}
    items={data}
  formcomponent={TxnForm}
  quickcomponent={TxnForm}
   />
{/if}
