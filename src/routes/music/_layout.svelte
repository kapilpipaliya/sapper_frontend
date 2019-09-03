<script>
  import { stores } from "@sapper/app";
	const { page, preloading } = stores();
	export let segment;
</script>

<style src="./_layout.scss"></style>
{#if $preloading}
  <!-- <div class="loader"></div> -->
{/if}
<slot>
</slot>
