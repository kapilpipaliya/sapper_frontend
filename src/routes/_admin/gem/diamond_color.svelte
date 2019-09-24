<script context="module">
  import { Server as S_ } from "../../_modules/ws_normal.js";
  import { getTableData, ws_admin } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, ws_admin, "d_color");
  }
</script>
<script>
  import TablePage from "../_TablePage.svelte";
  import DiamondColorForm from "./_DiamondColorForm.svelte";
  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />
<svelte:head>
  <title>Diamond Color</title>
</svelte:head>

{#if isAuth}
  <h1>Diamond Color</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={DiamondColorForm}
    quickcomponent={DiamondColorForm} />
{/if}
