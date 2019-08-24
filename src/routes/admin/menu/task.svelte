<script context="module">
  import { Server as S_ } from "../../_modules/ws_normal.js";
  import { getTableData, ws_server } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, ws_server, "task");
  }
</script>
<script>
  import TablePage from "../_TablePage.svelte";
  import TaskForm from "./_TaskForm.svelte";

  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />

<svelte:head>
  <title>Task</title>
</svelte:head>

{#if isAuth}
  <h1>Task</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={TaskForm}
    quickcomponent={TaskForm}
     />
{/if}
