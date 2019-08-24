<script context="module">
  import { Server as S_ } from "../../_modules/ws_normal.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "casting");
  }
</script>

<script>
  import TablePage from "../_TablePage.svelte";
  import CastingForm from "./_CastingForm.svelte";

  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />

<svelte:head>
  <title>Casting</title>
</svelte:head>

{#if isAuth}
  <h1>Casting</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={CastingForm}
    quickcomponent={CastingForm}
     />
{/if}
