<script context="module">
  import { Server as S_ } from "../../_modules/ws_normal.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "entity_type");
  }
</script>
<script>
  import TablePage from "../_TablePage.svelte";
  import EntityTypeForm from "./_EntityTypeForm.svelte";
  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />
<svelte:head>
  <title>Entity Type</title>
</svelte:head>
{#if isAuth}
  <h1>Entity Type</h1>
  <span>Do not change in this table.</span>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={EntityTypeForm}
    quickcomponent={EntityTypeForm} />
{/if}
