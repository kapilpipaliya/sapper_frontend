<svelte:head>
  <link rel="stylesheet" type="text/css" href="./css/glider.min.css">
</svelte:head>
<script>
  import { onMount } from 'svelte';
  import Glider from 'glider-js'

	onMount(() => {
    new Glider(document.querySelector('.glider'), {
      slidesToShow: 1,
      dots: '#dots',
      draggable: true,
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
  });
  })
</script>
<style>

.glider-contain{
  width: 600px;
  margin: auto;
}
  img{
    width: 20px;
    height: 20px;
}
</style>

<div data-name="Single Item" class="glider-contain">
  <div class="gradient-border-bottom">
    <div class="gradient-border">
      <div class="glider" id="glider-single">
        <div><h1>1</h1></div>
        <div><h1>2</h1></div>
        <div><h1>3</h1></div>
        <div><h1>4</h1></div>
        <div><h1>5</h1></div>
        <div><h1>6</h1></div>
        <div><h1>7</h1></div>
        <div><h1>8</h1></div>
        <div><h1>9</h1></div>
        <div><h1>10</h1></div>
      </div>
    </div>
  </div>
  <button role="button" aria-label="Previous" class="glider-prev"> <img src="./images/flaticon/left-arrow.png" alt=""></button>
  <button role="button" aria-label="Next" class="glider-next"><img src="/images/flaticon/right-arrow.png" alt=""></button>
  <div id="dots"></div>
</div>