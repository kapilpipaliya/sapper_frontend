<script>
  export let selected = false;
</script>
<style src="./_CardItem.scss"></style>

<div class={selected ? "card active" : "card"} >
    <slot></slot>
</div>
