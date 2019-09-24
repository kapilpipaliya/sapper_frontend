<script>
	import { onMount } from 'svelte';

	let p = 0;
	let visible = false;

	onMount(() => {
		function next() {
			visible = true;
			p += 0.1;

			const remaining = 1 - p;
			if (remaining > 0.15) setTimeout(next, 500 / remaining);
		}

		setTimeout(next, 250);
	});
</script>

<style src="./_PreloadingIndicator.scss"></style>
{#if visible}
	<div class="progress-container">
		<div class="progress" style="width: {p * 100}%"></div>
	</div>
{/if}

{#if p >= 0.4}
	<div class="fade"></div>
{/if}