<script context="module">
  import { Server as S_ } from "../../_modules/ws_normal.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "shape");
  }
</script>
<script>
  import TablePage from "../_TablePage.svelte";
  import ShapeForm from "./_ShapeForm.svelte";
  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />
<svelte:head>
  <title>Shape</title>
</svelte:head>

{#if isAuth}
  <h1>Shape</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={ShapeForm}
    quickcomponent={ShapeForm} />
{/if}
