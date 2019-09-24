<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import CategoryRow from "./_CategoryRow.svelte";
  // This not look good:
  // https://svelte.dev/repl/41c553c42c0c424790eb552594aecd88?version=3.6.8
  
  export let categories = [];
  export let headerData = {};
  export let isAuth = false;

</script>

<style src="./_TopMenu.scss"></style>
<div class="grid">

  <div class="item1">
    <a href="." title="{headerData.company[0][4]}"> <img class="logo" src="../../images/logo.svg" alt="logo" /> </a>
    <h1>{headerData.company[0][4]}</h1>
  </div>

    <div class="line1">
      <a href="jewel/page/contact_us"> Customer care </a> |
      <span> <a href="jewel/page/store"> Stores </a> </span> |
      {#if isAuth}
        <a href="jewel/auth/LogOut">Logout</a>
      {:else}
      <a href="jewel/auth/Login">Login</a> |
      <a href="jewel/auth/Register">Signup</a>
      {/if}

    </div>

    <div class="item3">
      <a href="#!"><img class="small" alt="Recently Viewed" src="../../images/flaticon/clock-history.svg" /> <span></span></a>
      <a href="#!"><img class="small" alt="Recently Viewed" src="../../images/feather/heart.svg" /><span></span></a>
      <a href="jewel/cart"> <img class="small" alt="Recently Viewed" src="../../images/feather/shopping-cart.svg" /> </a>
    </div>

</div>

{#if false}
  <input placeholder="Search for Jewellery" />
{/if}
<CategoryRow {categories} />
