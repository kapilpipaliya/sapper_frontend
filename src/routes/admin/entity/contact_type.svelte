<script context="module">
  import { Server as S_ } from "../../_modules/ws_normal.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "contact_type");
  }
</script>
<script>
  import TablePage from "../_TablePage.svelte";
  import ContactTypeForm from "./_ContactTypeForm.svelte";
  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />
<svelte:head>
  <title>Contact Type</title>
</svelte:head>

{#if isAuth}
  <h1>Contact Type</h1>
  <span>Do not change in this table.</span>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={ContactTypeForm}
    quickcomponent={ContactTypeForm} />
{/if}
