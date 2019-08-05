<svelte:options immutable/>
<script context="module">
	export async function preload(page, session){
		/*
		let user = session.user
		if(!user){
			this.redirect(302, '/connexion')
		}

		if(user && !user.isAdmin){
			this.redirect(302, '/connexion')
		}
		*/

		return {}
	}
</script>
<script>
	export let segment;
</script>
<slot>

</slot>
