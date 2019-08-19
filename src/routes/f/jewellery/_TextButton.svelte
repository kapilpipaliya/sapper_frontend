<script>
  // https://www.w3schools.com/howto/howto_css_text_buttons.asp
  /*
  <button class="btn info">Info</button>
  <button class="btn warning">Warning</button>
  <button class="btn danger">Danger</button>
  <button class="btn default">Default</button>
  */
</script>

<style>
.btn {
  border: none;
  background-color: inherit;
  padding: 14px 28px;

  cursor: pointer;
  display: inline-block;
}
/* Green */
/* .success { color: green; } */
/* .success:hover { background-color: #4CAF50; color: white; } */
/* Blue */
/* .info { color: dodgerblue; } */
/* .info:hover { background: #2196F3; color: white; } */
/* Orange */
/* .warning { color: orange; } */
/* .warning:hover { background: #ff9800; color: white; } */
/* Red */
/* .danger { color: red; } */
/* .danger:hover { background: #f44336; color: white; } */
/* Gray */
.default { color: black; }
.default:hover { background: #e7e7e7; }
</style>
<button class="btn default"><slot>Default</slot></button>
