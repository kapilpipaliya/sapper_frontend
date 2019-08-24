<script context="module">
  import { Server as S_ } from "../../_modules/ws_normal.js";
  import { getTableData, ws_server } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, ws_server, "setting");
  }
</script>
<script>
  import TablePage from "../_TablePage.svelte";
  import SettingForm from "./_SettingForm.svelte";
  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />
<svelte:head>
  <title>Setting</title>
</svelte:head>

{#if isAuth}
  <h1>Setting</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={SettingForm}
    quickcomponent={SettingForm} />
{/if}
