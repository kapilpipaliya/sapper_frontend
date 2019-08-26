<script>
import { init, isAuth, authChange } from "../../_modules/store";
import { goto, stores } from '@sapper/app'
let { session } = stores()

if($isAuth === null) {
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