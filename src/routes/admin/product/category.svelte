<script context="module">
  import { Server as S_ } from "../../_modules/ws_events_dispatcher.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "category");
  }
</script>

<script>
  import TablePage from "../_TablePage.svelte";
  import CategoryForm from "./_CategoryForm.svelte";
  export let isAuth = false;
  export let url = "";
  export let h = []
  export let data = []
</script>

<svelte:head>
  <title>Categories</title>
</svelte:head>

{#if isAuth}
  <h1>Categories</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={CategoryForm}
    quickcomponent={CategoryForm} />
{/if}