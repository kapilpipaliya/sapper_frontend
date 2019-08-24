<script context="module">
  import { Server as S_ } from "../../_modules/ws_normal.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "txn");
  }
</script>
<script>
  import TablePage from "../_TablePage.svelte";
  import MfgTxnForm from "./_MfgTxnForm.svelte";

  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />

<svelte:head>
  <title>Mfg Transaction</title>
</svelte:head>

{#if isAuth}
  <h1>Mfg Transaction</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={MfgTxnForm}
    quickcomponent={MfgTxnForm}
     />
{/if}
