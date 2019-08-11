<script>
  import TablePage from "../../_components/ui/table/TablePage.svelte";
  import CategoryForm from "../../_components/forms/product/SettingType.svelte";
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
  <title>Setting Type</title>
</svelte:head>

{#if isAuth}
  <h1>Setting Type</h1>
  <TablePage
    url="setting_type"
    formcomponent={CategoryForm}
    quickcomponent={CategoryForm} />
{/if}
