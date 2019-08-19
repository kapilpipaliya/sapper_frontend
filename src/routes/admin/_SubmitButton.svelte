<script>
  export let isSaving = false;
  $: buttonSaveClass = isSaving === true ? "loading" : "success";
</script>

<style>
  .success {
    color: green;
  }
  .loading {
    color: grey;
  }
</style>
<button type="submit" class={buttonSaveClass} disabled={isSaving}>Save changes</button>