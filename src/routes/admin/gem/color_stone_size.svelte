<script>
  import TablePage from "../../_components/ui/table/TablePage.svelte";
  import ColorStoneSizeForm from "./_ColorStoneSizeForm.svelte";
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
  <title>Color Stone Size</title>
</svelte:head>

{#if isAuth}
  <h1>Color Stone Size</h1>
  <TablePage
      url="cs_size"
      formcomponent={ColorStoneSizeForm}
      quickcomponent={ColorStoneSizeForm} />
{/if}
