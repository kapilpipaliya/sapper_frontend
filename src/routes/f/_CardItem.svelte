<script>
  export let selected = false;
</script>
<style>
  .card {
    border: 1px solid #ccc;
    margin: 10px 10px;
    /* padding: 0 20px; */

    display: flex;
    flex-direction: column;
    
  }

  .card:last-child {
    text-align: center;
    margin-top: auto;
  }

  .card.active{background-color: rgb(103, 138, 138)}
</style>

<div class={selected ? "card active" : "card"} >
    <slot></slot>
</div>
