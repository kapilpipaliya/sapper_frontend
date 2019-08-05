<script>
  import TablePage from "../../_components/ui/table/TablePage.svelte";
  import CertifiedByForm from "../../_components/forms/product/CertifiedByForm.svelte";
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
  <title>Certified By</title>
</svelte:head>

{#if isAuth}
  <h1>Certified By</h1>
  <TablePage
    url="product_certified_by"
    formcomponent={CertifiedByForm}
    quickcomponent={CertifiedByForm} />
{/if}
