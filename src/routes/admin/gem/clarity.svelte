<script>
  import TablePage from "../../_components/ui/table/TablePage.svelte";
  import ClarityForm from "./_ClarityForm.svelte";
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
  <title>Clarity</title>
</svelte:head>

{#if isAuth}
  <h1>Clarity</h1>
  <TablePage
    url="clarity"
    formcomponent={ClarityForm}
    quickcomponent={ClarityForm} />
{/if}
