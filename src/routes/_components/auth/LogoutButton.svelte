<script>

	import { goto, stores } from '@sapper/app';
	
	export let beforeLogout = function(){};
	let { session } = stores();
	let loading = false

	async function logout(){
		loading = true
		beforeLogout();
		session.update(s => {
			s.user = undefined 
			return s
		})
		user.set(null)
		//await auth.signOut()
		//await del('api/user').then(() => goto('/'))
	}
</script>

<button class:is-loading="{loading}" on:click="{logout}">Logout</button>