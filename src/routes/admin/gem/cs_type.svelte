<script context="module">
  import { Server as S_ } from "../../_modules/ws_events_dispatcher.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "cs_type");
  }
</script>
<script>
  import TablePage from "../_TablePage.svelte";
  import CSTypeForm from "./_CSTypeForm.svelte";
  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />
<svelte:head>
  <title>Color Stone Type</title>
</svelte:head>

{#if isAuth}
  <h1>Color Stone Type</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={CSTypeForm}
    quickcomponent={CSTypeForm} />
{/if}
