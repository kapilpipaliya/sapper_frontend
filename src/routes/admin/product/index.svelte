<script context="module">
  import { Server as S_ } from "../../_modules/ws_events_dispatcher.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "product");
  }
</script>
<script>
  import TablePage from "../_TablePage.svelte";
  import ProductForm from "./_ProductForm.svelte";

  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />

<svelte:head>
  <title>Product</title>
</svelte:head>

{#if isAuth}
  <h1>Product</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={ProductForm}
    quickcomponent={ProductForm}
    requiredFilter={{ 14: 'product' }} />
{/if}
