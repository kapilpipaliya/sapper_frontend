<script>
  import { stores } from "@sapper/app";
  import PreloadingIndicator from "./_PreloadingIndicator.svelte";
  const { page, preloading } = stores();

  import LeftMenu from "./_LeftMenu.svelte"
  export let categories = [];
  export let isAuth = false;
  export let footerData = {};
  export let headerData = {};
  let active = false;
</script>

<svelte:head>
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script> -->
  <!-- <script src="https://code.createjs.com/1.0.0/createjs.min.js"></script> -->
</svelte:head>

{#if $preloading}
  <PreloadingIndicator />
{/if}

<style src="./_side_menu.scss"></style>

<div id="layout" class={active ? "active" : ""}>
    <!-- Menu toggle -->
    <a href="#menu" id="menuLink" class="menu-link {active ? "active" : ""}" on:click|preventDefault={()=>{active = !active}}>
        <!-- Hamburger icon -->
        <span></span>
    </a>


    <LeftMenu bind:active />


    <div id="main" on:click|preventDefault={()=>{ if(active) {active = !active}}} >
      <slot/>
    </div>
</div>