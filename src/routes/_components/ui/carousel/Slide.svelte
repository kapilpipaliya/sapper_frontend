
<script>
	export let image
	export let title
</script>

<div>
	<header style="background-image: url({image})">
		
	</header>
	<section>
		<h4>
			{title}
		</h4>
	</section>
</div>

<style>
	div {
		border: 1px solid #eee;
		height: 160px;
		margin: 2px;
	}
	
	header {
		height: 60%;
		background-size: cover;
	}
	
	section {
		margin: 6px;
	}
	
	h4 {

		margin: 0;
	}
</style>
