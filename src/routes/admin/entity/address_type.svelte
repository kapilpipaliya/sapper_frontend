<script context="module">
  import { Server as S_ } from "../../_modules/ws_normal.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "address_type");
  }
</script>

<script>
  import TablePage from "../_TablePage.svelte";
  import AddressTypeForm from "./_AddressTypeForm.svelte";
  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />
<svelte:head>
  <title>Address Type</title>
</svelte:head>
{#if isAuth}
  <h1>Address Type</h1>
  <span>Do not change in this table.</span>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={AddressTypeForm}
    quickcomponent={AddressTypeForm} />
{/if}
