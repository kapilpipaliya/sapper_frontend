<script>
  import TablePage from "../../_components/ui/table/TablePage.svelte";
  import AddressTypeForm from "../../_components/forms/entity/AddressTypeForm.svelte";
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
  <title>Address Type</title>
</svelte:head>
<style>
span{
  color: red;
}
</style>
{#if isAuth}
  <h1>Address Type</h1>
  <span>Do not change in this table.</span>
  <TablePage url="address_type"
    formcomponent={AddressTypeForm}
    quickcomponent={AddressTypeForm} />
{/if}
