<script context="module">
  import { Server as S_ } from "../../_modules/ws_normal.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "post", [null, 'post']);
  }
</script>

<script>
  import TablePage from "../_TablePage.svelte";
  import PostForm from "./_PostForm.svelte";
  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<svelte:options immutable />
<svelte:head>
  <title>Post</title>
</svelte:head>

{#if isAuth}
  <h1>Post</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={PostForm}
    quickcomponent={PostForm}
    requiredFilter={{ 1: 'post' }} />
{/if}
