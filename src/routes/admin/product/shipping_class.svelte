<script context="module">
  import { Server as S_ } from "../../_modules/ws_events_dispatcher.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "shipping_class");
  }
</script>
<script>
  import TablePage from "../_TablePage.svelte";
  import ShippingClassForm from "./_ShippingClassForm.svelte";
  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />
<svelte:head>
  <title>Shipping Class</title>
</svelte:head>

{#if isAuth}
  <h1>Shipping Class</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={ShippingClassForm}
    quickcomponent={ShippingClassForm} />
{/if}
