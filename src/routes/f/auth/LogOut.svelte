<script context="module">
  import { Server as S_ } from "../../_modules/ws_events_dispatcher.js";
  import { menuCategories, isAuthFn, getFooterData, getHeaderData  } from "../../_modules/functions.js";
	export async function preload(page, session){
    let S; if (typeof S_ == "function") { S = new S_(this.req, this.res); } else { S = S_; }
    const categories = await menuCategories(S);
    const footerData = await getFooterData(S)
    const headerData = await getHeaderData(S)
    return { categories, footerData, headerData }
	}
</script>
<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import MyLayout from '../_myLayout.svelte'

  const dp = createEventDispatcher();
  export let categories = [];
  export let footerData = {};
  export let headerData = {};
  
  let logout = false;
  let isAuth = false;
  const fns = [];
  let S; 
  onMount(async ()=>{
    const { Server: S_ } = await import("../../_modules/ws_events_dispatcher.js");
    if (typeof S_ == "function") { S = new S_(); } else { S = S_; }

    fns.push(["legacy", "auth", "user_logout", 0]); S.bind_(fns.i(-1), ([d]) => {if (d.ok) {  
      document.cookie = `user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
      logout = true }})
  })
  onDestroy(() => { if(process.browser) S.unbind_(fns) });
</script>
<style src="./_Logout.scss"></style>
<MyLayout {categories}  {isAuth} {footerData} {headerData} >
{#if logout}
  <div class="header">
     <a href="./"><h1>Logged out successfully!</h1></a>
    <p>Thank you for visiting. See you again soon.</p>
  </div>
  <div class="content">
    

  </div>
{/if}

</MyLayout>