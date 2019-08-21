<script context="module">
	export async function preload(page, session){
		let user = session.user
		if(!user) return {};
		if(!!user && user.isActive){
			this.redirect(302, '/rdv')
		}
	}
</script>

<script>
	import user from '../../_modules/stores/user.js'
</script>

<!-- <style src="./_confirmation.scss"></style> -->
<svelte:head>
	<title>docteur - confirmation</title>
</svelte:head>

<section >
	<div > 
	 	<div >
	 		<div >
	 			<div >
	 				<div >
	 					<div >
	 						{#if !$user}
			 					<h4 >Vous devez ouvrir un compte pour pouvoir prendre rendez-vous</h4>
				 				<h5 >
				 					Pour éviter tout abus et permettre une communication simple et rapide, la création de compte est obligatoire.<br>Merci de votre compréhension.
				 				</h5>
				 				<a href="/" >
				 					Retour à l'acceuil
				 				</a>
			 				{:else if $user && !$user.isActive}
				 				<h4 >Votre compte n'est pas encore actif</h4>
				 				<h5 >
				 					Tout les nouveaux comptes doivent être validés manuellement par un administrateur.<br>Merci de votre compréhension.
				 				</h5>
				 				<a href="/" >
				 					Retour à l'acceuil
				 				</a>
			 				{/if}
	 					</div>
	 				</div>
	 			</div>
	 		</div>
	 	</div>	
	</div>
</section>
