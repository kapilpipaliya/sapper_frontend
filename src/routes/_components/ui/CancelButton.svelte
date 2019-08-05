<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  const dp = createEventDispatcher();
  
  export let isSaving = false;
  $: buttonSaveClass = isSaving === true ? "loading" : "success";
  export let rowIdx = 0;
</script>

<style>
  button {
    color: darkred;
  }
</style>
<button type="button" class={buttonSaveClass} disabled={isSaving} on:click={() => dp('close', rowIdx)}>Cancel</button>
