
<svelte:options immutable/>
<script context="module">
  import { Server as S_ } from "../../_modules/ws_normal.js";
  import { getTableData } from "../../_modules/functions.js";
  export async function preload(page, session) {
    return await getTableData.call(this, S_, "category");
  }
</script>

<script>
    
</script>


<svelte:head>
  <title>SCE Jewelry Software</title>
</svelte:head>
