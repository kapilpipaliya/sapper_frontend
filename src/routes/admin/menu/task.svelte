<script>
  import TablePage from "../../_components/ui/table/TablePage.svelte";
  import TaskForm from "./_TaskForm.svelte";

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
  <title>Task</title>
</svelte:head>

{#if isAuth}
  <h1>Task</h1>
  <TablePage
    url="task"
    formcomponent={TaskForm}
    quickcomponent={TaskForm}
     />
{/if}
