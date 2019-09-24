<script>
  // How TO - Fading Buttons
  // https://www.w3schools.com/howto/howto_css_fading_buttons.asp
  export let class1 = ""
</script>

<style src="./_FadeOutButton.scss"></style>
<button type="button" class={class1 == "w100p" ? "w100p" : ""} on:click ><slot></slot></button>