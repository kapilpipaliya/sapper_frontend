<script>
  import TablePage from "../../_components/table/TablePage.svelte";
  import DiamondColorForm from "./_DiamondColorForm.svelte";
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
  <title>Diamond Color</title>
</svelte:head>

{#if isAuth}
  <h1>Diamond Color</h1>
  <TablePage
    url="d_color"
    formcomponent={DiamondColorForm}
    quickcomponent={DiamondColorForm} />
{/if}
