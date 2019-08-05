<script>
  // How TO - Fading Buttons
  // https://www.w3schools.com/howto/howto_css_fading_buttons.asp
  export let class1 = ""
</script>
<style>
button {
  background-color: #f4511e;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;

  margin: 4px 0px;
  opacity: 1;
  transition: 0.3s;
}

button:hover {opacity: 0.6}

.w100p {
  width: 100%;
}
</style>
<button type="button" class={class1 == "w100p" ? "w100p" : ""} on:click ><slot></slot></button>