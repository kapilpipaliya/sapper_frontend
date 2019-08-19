<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import CategoryRow from "./_CategoryRow.svelte";
  // This not look good:
  // https://svelte.dev/repl/41c553c42c0c424790eb552594aecd88?version=3.6.8
  
  export let categories = [];
  export let headerData = {};
  export let isAuth = false;

</script>

<style>
  /* Logo */
  .logo {
    width: 80px;
  }

  .grid {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }
  .item1 {
    grid-row-start: 1;
    grid-row-end: 3;

    
    display: flex;

    margin: auto;
  }
  .line1 {
    font-weight: 600;
    padding: 0 10px 0 12px;
    color: #3579b8;

    margin: auto;
  }
  .item3{
     margin: auto;
     display: flex;
  }
  a {
    color: #3579b8;
    text-decoration: none;
  }
  .item3 a{
    display: flex; /*This make text and image in center*/
    align-items: center;
  }
  .item3 img{
    margin: 0 5px;
  }
  .small{
    width: 25px;
    
    margin-left: 5px;
  }

  h1{
    margin: 0;
    align-self: center;
  }
@media screen and (max-width: 755px) {
		h1{
			font-size: 2rem;
		}
}
</style>

<div class="grid">

  <div class="item1">
    <a href="." title="{headerData.company[0][4]}"> <img class="logo" src="../../images/logo.svg" alt="logo" /> </a>
    <h1>{headerData.company[0][4]}</h1>
  </div>

    <div class="line1">
      <a href="./f/page/contact_us"> Customer care </a> |
      <span> <a href="./f/page/store"> Visit Our Stores </a> </span> |
      {#if isAuth}
        <a href="./f/auth/LogOut">Logout</a>
      {:else}
      <a href="./f/auth/Login">Login</a> |
      <a href="./f/auth/Register">Signup</a>
      {/if}

    </div>

    <div class="item3">
      <a href="#!"><img class="small" alt="Recently Viewed" src="../../images/flaticon/clock-history.svg" /> <span>Recently Viewed |</span></a>
      {#if false}
        <a href="#!"><img class="small" alt="Free Try at Home" src="../../images/feather/home.svg" /> <span>Free Try at Home |</span></a>
      {/if}
      <a href="#!"><img class="small" alt="Recently Viewed" src="../../images/feather/heart.svg" /><span>Wishlist |</span></a>
      <a href="/f/cart"> <img class="small" alt="Recently Viewed" src="../../images/feather/shopping-cart.svg" /> </a>
    </div>

</div>

{#if false}
  <input placeholder="Search for Jewellery" />
{/if}
<CategoryRow {categories} />
