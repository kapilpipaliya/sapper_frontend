<script>
  export let categories = [];
</script>

<style src="./_CategoryRow.scss"></style>
<ul>
  {#each categories as c}
	  <li><a href="jewel/jewellery/{c[6]}">{c[5]}</a></li>
  {/each} 
  {#if false}
	  <li><a rel=prefetch href='/f/page'>Page</a></li>
  {/if}
</ul>

