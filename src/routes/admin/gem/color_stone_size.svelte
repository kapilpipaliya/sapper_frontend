<script context="module">
  import { Server as S_ } from "../../_modules/ws_events_dispatcher.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "cs_size");
  }
</script>
<script>
  import TablePage from "../../_components/table/TablePage.svelte";
  import ColorStoneSizeForm from "./_ColorStoneSizeForm.svelte";
  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />
<svelte:head>
  <title>Color Stone Size</title>
</svelte:head>

{#if isAuth}
  <h1>Color Stone Size</h1>
  <TablePage
    {url}
    {h}
    items={data}
      formcomponent={ColorStoneSizeForm}
      quickcomponent={ColorStoneSizeForm} />
{/if}
