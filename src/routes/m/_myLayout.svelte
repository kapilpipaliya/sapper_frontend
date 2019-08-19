<script context="module">

</script>

<script>
  import { stores } from "@sapper/app";
  import PreloadingIndicator from "../_components/ui/PreloadingIndicator.svelte";
  const { page, preloading } = stores();

  import TopMenu from "../_components/block/TopMenu.svelte";
  import Footer from "../_components/block/Footer.svelte";
  import LiveChat from "../_components/block/LiveChat.svelte";
  export let categories = [];
  export let isAuth = false;
  export let footerData = {};
  export let headerData = {};
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

  .content-body {
    flex: 1 1 auto;

    display: flex;
    flex-direction: row;
  }

  .content-body .content {
    flex: 1 1 auto;
    overflow: auto;
  }

  .content-body .sidenav {
    order: -1;
    flex: 0 0 100px;
    overflow: auto;
  }

  .content-body .ads {
    flex: 0 0 100px;
    overflow: auto;
  }

  .footer {
    flex: 0 0 50px;
    background: #34495e;
  }
  @media (max-width: 600px) {
  .content-body .sidenav {
    display: none;
  }

  .content-body .ads {
    display: none;
  }
	}
</style>

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
