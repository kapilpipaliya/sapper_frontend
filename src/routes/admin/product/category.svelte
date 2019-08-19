<script context="module">
  import { Server as S_ } from "../../_modules/ws_events_dispatcher.js";
  import { all, all_h } from "../../_modules/functions.js";
  
  export async function preload(page, session) {
    let S; if (typeof S_ == "function") { S = new S_(this.req, this.res); } else { S = S_; }
    
    let url="category"
    let h = []
    let data = []
    let isAuth = false;
    await new Promise((resolve, reject) => {
      const batch1 = []
      let r1 = false, r2 = false, r3 = false
      const myResolve = () => {
        if(r1 && r2 && r3) resolve(1)
      }
      batch1.push([
        ["legacy", "auth", "is_admin_auth", 0], ([d]) => {r1 = true; isAuth = d; myResolve()}, [[]]
      ])
      batch1.push([
        all_h(url), ([d]) => {h = d; r2 = true; myResolve()}, [[]]
      ])
      batch1.push([
        all(url), ([d]) => {data = d; r3 = true; myResolve()}, [[]]
      ])
      S.batchBind_T(batch1)
    })
    if(!isAuth){ this.redirect(302, './admin/account/Login') }
    return { url, h, data, isAuth}
  };
</script>

<script>
  import TablePage from "../../_components/table/TablePage.svelte";
  import CategoryForm from "./_CategoryForm.svelte";
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import { authCeck } from "../../_modules/functions.js";
  export let isAuth = false;
  export let url = "";
  export let h = []
  export let data = []
</script>

<svelte:head>
  <title>Categories</title>
</svelte:head>

{#if isAuth}
  <h1>Categories</h1>
  <TablePage
    {url}
    {h}
    items={data}
    formcomponent={CategoryForm}
    quickcomponent={CategoryForm} />
{/if}
