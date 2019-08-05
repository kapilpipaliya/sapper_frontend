<script>
  export let categories = [];
  // class='{segment === "page" ? "active" : ""}'
</script>
<style>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    overflow: hidden;
    background-color: #f1f1f1;

    /* align-self: flex-start; */
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
  }


  li {
    float: left;
  }

  li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
  }

  /* li a.active {
    background-color: #4caf50;
    color: white;
  } */

  li a:hover:not(.active) {
    background-color: #555;
    color: white;
  }

</style>

<ul>
  {#each categories as c}
	  <li><a href="./f/jewellery/{c[6]}">{c[5]}</a></li>
  {/each} 
  {#if false}
	  <li><a rel=prefetch href='/f/page'>Page</a></li>
  {/if}
</ul>

