
<script>
	import Siema from 'siema'
	import { onMount, onDestroy } from 'svelte'
	import Slide from './Slide.svelte'
	
	let siema
	let controller
	
	onMount(() => {
		controller = new Siema({
			selector: siema,
			perPage: 1,
			loop: true
		})
	})
	

	
	function left () {
		controller.prev()
	}
	
	function right () {
		controller.next()
	}
</script>

<div class="controls">
	<button on:click={left}>&lt;</button>
	<div class="carousel" bind:this={siema}>
        <slot>
            <Slide image="//placekitten.com/315" title="Hello I am kitten"></Slide>
            <Slide image="//placekitten.com/280" title="I am small"></Slide>
            <Slide image="//placekitten.com/160" title="And furry"></Slide>
            <Slide image="//placekitten.com/240" title="I eat beans"></Slide>
        </slot>
	</div>
	<button on:click={right}>&gt;</button>
</div>

<style>
	.carousel {
		width: 530px;
	}
	
	.controls {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	button {
		width: 32px;
		height: 32px;
	}
</style>
