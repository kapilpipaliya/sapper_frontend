<script>
  export let isSaving = false;
  $: buttonSaveClass = isSaving === true ? "loading" : "success";
</script>
<style src="./_SubmitButton.scss"></style>
<button type="submit" class={buttonSaveClass} disabled={isSaving}>Save changes</button>