<script context="module">
  import { Server as S_ } from "../../_modules/ws_events_dispatcher.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "department");
  }
</script>
<script>
  import TablePage from "../_TablePage.svelte";
  import DepartmentForm from "./_DepartmentForm.svelte";

  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />

<svelte:head>
  <title>Department</title>
</svelte:head>

{#if isAuth}
  <h1>Department</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={DepartmentForm}
    quickcomponent={DepartmentForm}
     />
{/if}
