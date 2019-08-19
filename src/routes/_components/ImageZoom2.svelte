<script>
	import { onMount } from 'svelte';
  import Drift from 'drift-zoom'
  
  // https://www.npmjs.com/package/js-image-zoom
  // https://github.com/imgix/drift
  export let src = ""
  	onMount(() => {
		new Drift(document.querySelector('.drift-demo-trigger'), {
			paneContainer: document.querySelector('.detail'),
			// inlinePane: 900,
			// inlineOffsetY: -85,
			// containInline: true,
            // hoverBoundingBox: true,
            // zoomFactor: 2
		});
    })
</script>
<style>
</style>
	<div class="wrapper">
		<img class="drift-demo-trigger" data-zoom={src} src={src} alt="">

		<div class="detail">
		</div>
	</div>