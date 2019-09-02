<script>
  export let isSaving = false;
  $: buttonSaveClass = isSaving === true ? "pure-button pure-button-disabled loading" : "pure-button success";
</script>
<style src="./_SubmitButton.scss"></style>
<button type="submit" class={buttonSaveClass} disabled={isSaving}>Save changes</button>