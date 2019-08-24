<script context="module">
  import { Server as S_ } from "../../_modules/ws_normal.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "support");
  }
</script>
<script>
  import TablePage from "../_TablePage.svelte";
  import SupportForm from "./_SupportForm.svelte";
  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />
<svelte:head>
  <title>Support</title>
</svelte:head>

{#if isAuth}
  <h1>Support</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={SupportForm}
    quickcomponent={SupportForm} />
{/if}
