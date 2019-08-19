<script>
  import TablePage from "../../_components/table/TablePage.svelte";
  import CSTypeForm from "./_CSTypeForm.svelte";
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
  <title>Color Stone Type</title>
</svelte:head>

{#if isAuth}
  <h1>Color Stone Type</h1>
  <TablePage
    url="cs_type"
    formcomponent={CSTypeForm}
    quickcomponent={CSTypeForm} />
{/if}
