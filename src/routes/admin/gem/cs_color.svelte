<script context="module">
  import { Server as S_ } from "../../_modules/ws_events_dispatcher.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "cs_color");
  }
</script>
<script>
  import TablePage from "../_TablePage.svelte";
  import CSColorForm from "./_CSColorForm.svelte";
  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />
<svelte:head>
  <title>Color Stone Color</title>
</svelte:head>

{#if isAuth}
  <h1>Color Stone Color</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={CSColorForm}
    quickcomponent={CSColorForm} />
{/if}
