<script>
  import TablePage from "../../_components/table/TablePage.svelte";
  import JournalTypeForm from "./_JournalTypeForm.svelte";
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
  <title>Journal Type</title>
</svelte:head>

{#if isAuth}
  <h1>Journal Type</h1>
  <TablePage url="journal_type"
  formcomponent={JournalTypeForm}
  quickcomponent={JournalTypeForm}
   />
{/if}
