<script>
  import TablePage from "../../_components/table/TablePage.svelte";
  import PaymentMethodForm from "./_PaymentMethodForm.svelte";
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
  <title>Payment Method</title>
</svelte:head>

{#if isAuth}
  <h1>Payment Method</h1>
  <TablePage
    url="payment_method"
    formcomponent={PaymentMethodForm}
    quickcomponent={PaymentMethodForm} />
{/if}
