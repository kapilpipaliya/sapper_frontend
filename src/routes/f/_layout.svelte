<script>
  import { stores } from "@sapper/app";
	const { page, preloading } = stores();
	export let segment;
// 	in svelte head
// 	script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
// 	script src="https://code.createjs.com/1.0.0/createjs.min.js"
//
</script>

<style src="./_layout.scss"></style>
{#if $preloading}
  <img src="./images/spinner/Eclipse-1s-200px.svg" alt=""/>
{/if}
<slot></slot>