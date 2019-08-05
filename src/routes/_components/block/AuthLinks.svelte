<script>
import { init, isAuth, authChange } from "../../_modules/store";
import { goto, stores } from '@sapper/app'
let { session } = stores()
// session data is available on $session.user
/*
	{#if $session.user && $session.user.isAdmin }
		Voir l'agenda
	{:else}
		Prendre rendez-vous
	{/if}
*/

if($isAuth === null) {
  // This is the responsibility of this component to check authentication.
  // Fix on server it always return null!!
  init()
}

</script>

{#if $isAuth === null}
	Authenticating
{:else if $isAuth}
    <li><a href="/profile">Profile</a></li>
    <li><a  href="javascript:;" on:click={() => authChange(false)} >Sign Out</a></li>
{:else}
    <li><a href="/auth/Register">Register</a></li>
    <li><a href="/auth/Login">Login</a></li>
{/if}
