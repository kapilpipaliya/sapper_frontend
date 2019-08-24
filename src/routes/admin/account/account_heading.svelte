<script context="module">
  import { Server as S_ } from "../../_modules/ws_normal.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "account_heading");
  }
</script>

<script>
  import TablePage from "../_TablePage.svelte";
  import AccountHeadingForm from "./_AccountHeadingForm.svelte";
  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />

<svelte:head>
  <title>Account Heading Type</title>
</svelte:head>

{#if isAuth}
  <h1>Account Heading Type</h1>
  <TablePage
  {url}
  {h}
  items={data}
  formcomponent={AccountHeadingForm}
  quickcomponent={AccountHeadingForm}
   />
{/if}
