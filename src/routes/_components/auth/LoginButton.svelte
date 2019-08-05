<svelte:options immutable/>
<script>
	import { goto, stores } from '@sapper/app';

	export let redirect = '/';
	export let email = '';
	export let password = '';
	export let large = false;

	let { session } = stores();
	let loading = false;

    /*const handleLogin = () => {
         window.location.href = '/dashboard'      
    }*/

    /*
    1.login on server
    2.get the user data from server
    3.set session ID
				user.set(data);
				session.update(sess => {
					sess.user = data
					return sess
				})
				goto(redirect)
    */
   	async function submit(){
		loading = true
		await login(email, password).then(res => {
			let u = res.user
			db.collection('users').doc(u.uid).get()
			.then(async res => {
				let data = res.data()
				//updating the server session (does not matter if this fails really)
				await post('api/user', {
					user: JSON.stringify(data)
				})
				user.set(data);
				session.update(sess => {
					sess.user = data
					return sess
				})
				goto(redirect)
			});
		})
	}
</script>

<button 
	class:is-primary="{large}"
	class:is-medium="{large}"
	class:is-fullwidth="{large}" 
	class:is-loading="{loading}" 
	class:is-outlined="{!large}"
	on:click="{submit}">
	Log In
</button>