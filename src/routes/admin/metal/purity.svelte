<script context="module">
  import { Server as S_ } from "../../_modules/ws_normal.js";
  import { getTableData, ws_admin } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, ws_admin, "purity");
  }
</script>
<script>
  import TablePage from "../_TablePage.svelte";
  import MetalPurityForm from "./_PurityForm.svelte";
  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />
<svelte:head>
  <title>Metal Purity</title>
</svelte:head>

{#if isAuth}
  <h1>Metal Purity</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={MetalPurityForm}
    quickcomponent={MetalPurityForm} />
{/if}
