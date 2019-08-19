<script context="module">
  import { Server as S_ } from "../../_modules/ws_events_dispatcher.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "role");
  }
</script>
<script>
  import TablePage from "../../_components/table/TablePage.svelte";
  import RoleForm from "./_RoleForm.svelte";

  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />

<svelte:head>
  <title>Role</title>
</svelte:head>

{#if isAuth}
  <h1>Role</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={RoleForm}
    quickcomponent={RoleForm}
     />
{/if}
