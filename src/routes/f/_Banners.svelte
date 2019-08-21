<script>
  import {thumb_url} from "../_modules/functions.js"
  export let banners = []

</script>
<style src="./_Banners.scss"></style>

<div class="container">
{#each banners as i}
    <a
        href={i[5]}>
        <img
          src={`${thumb_url}/${i[0]}/${i[10]}`}
          alt={i[4]}
          class="img-responsive-c lazy-img"
           />
        {#if i[6]}
          <span class="collection-starting-price ">
              {i[6]}
          </span>
        {/if}
      </a>
{/each}

</div>
