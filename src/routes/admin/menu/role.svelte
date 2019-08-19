<script>
  import TablePage from "../../_components/ui/table/TablePage.svelte";
  import RoleForm from "./_RoleForm.svelte";

  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import { authCeck } from "../../_modules/functions.js";
  let isAuth = false;
  onMount(async () => {
    const { Server: S_ } = await import( "../../_modules/ws_events_dispatcher.js" );
    let S; if (typeof S_ == "function") { S = new S_(); } else { S = S_; }
    isAuth = await authCeck(S);
  });
</script>

<svelte:options immutable />

<svelte:head>
  <title>Role</title>
</svelte:head>

{#if isAuth}
  <h1>Role</h1>
  <TablePage
    url="role"
    formcomponent={RoleForm}
    quickcomponent={RoleForm}
     />
{/if}
