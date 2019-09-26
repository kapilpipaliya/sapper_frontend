<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  const dp = createEventDispatcher();
  
  export let isSaving = false;
  $: buttonSaveClass = isSaving === true ? "pure-button pure-button-disabled loading" : "pure-button success";
  export let rowIdx = 0;
</script>
<style src="./_CancelButton.scss"></style>
<button type="button" class={buttonSaveClass} disabled={isSaving} on:click={() => dp('close', rowIdx)}>Cancel</button>
