<script>
	import { createEventDispatcher } from 'svelte';

	const dp = createEventDispatcher();
</script>
<style src="./_Model.scss"></style>
<div class='modal-background' on:click='{() => dp("close")}'></div>

<div class='modal'>
	<slot name='header'></slot>
	<hr>
	<slot></slot>
    <slot name='footer'></slot>
	<hr>

</div>
