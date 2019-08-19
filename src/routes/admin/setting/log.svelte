<script context="module">
  import { Server as S_ } from "../../_modules/ws_events_dispatcher.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "log");
  }
</script>
<script>
  import TablePage from "../../_components/table/TablePage.svelte";
  import LogForm from "./_LogForm.svelte";
  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />
<svelte:head>
  <title>Currency</title>
</svelte:head>

{#if isAuth}
  <h1>Currency</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={LogForm}
    quickcomponent={LogForm} />
{/if}
