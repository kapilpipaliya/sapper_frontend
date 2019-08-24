<script context="module">
  import { Server as S_ } from "../../_modules/ws_normal.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "tag");
  }
</script>

<script>
  import TablePage from "../_TablePage.svelte";
  import TagForm from "./_TagForm.svelte";
  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />
<svelte:head>
  <title>Tag</title>
</svelte:head>

{#if isAuth}
  <h1>Tag</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={TagForm}
    quickcomponent={TagForm} />
{/if}
