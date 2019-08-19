<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  const dp = createEventDispatcher();
  
  let logout = false;
  const fns = [];
  let S; 
  onMount(async ()=>{
    const { Server: S_ } = await import("../../_modules/ws_events_dispatcher.js");
    if (typeof S_ == "function") { S = new S_(); } else { S = S_; }

    fns.push(["legacy", "auth", "admin_logout", 0]); S.bind_(fns.i(-1), (d) => {if (d.ok) {  
      document.cookie = `admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
      logout = true }})
  })
  onDestroy(() => { if(process.browser) S.unbind_(fns) });
</script>
<style>
  span{
    color: red;
  }
</style>
{#if logout}
  <span>Logged out successfully!</span>
{/if}

