<script context="module">
  import { Server as S_ } from "../../_modules/ws_normal.js";
  import { getTableData, ws_server } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, ws_server, "image");
  }
</script>
<script>
  import TablePage from "../_TablePage.svelte";
  import ImageForm from "./_ImageForm.svelte";
  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />
<svelte:head>
  <title>Image</title>
</svelte:head>

{#if isAuth}
  <h1>Image</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={ImageForm}
    quickcomponent={ImageForm} />
{/if}
