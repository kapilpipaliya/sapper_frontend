<script>
  import { stores } from "@sapper/app";
  import PreloadingIndicator from "./_PreloadingIndicator.svelte";
  const { page, preloading } = stores();

  import TopMenu from "./_TopMenu.svelte";
  import Footer from "./_Footer.svelte";
  import LiveChat from "./_LiveChat.svelte";
  export let categories = [];
  export let isAuth = false;
  export let footerData = {};
  export let headerData = {};
</script>

<style src="./_myLayout.scss"></style>
<svelte:head>
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script> -->

  <!-- <script src="https://code.createjs.com/1.0.0/createjs.min.js"></script> -->

</svelte:head>

{#if $preloading}
  <PreloadingIndicator />
{/if}

<div class="container">
  <TopMenu {categories} {isAuth} {headerData}/>
  <div class="content-body">
    <main class="content">
      <slot />
    </main>
    <nav class="sidenav" />
    <aside class="ads" />
  </div>
  <footer class="footer">
    <Footer {footerData} {headerData}/>
  </footer>
</div>

<LiveChat />
