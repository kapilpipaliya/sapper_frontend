<script>
import * as R from 'ramda';

import { init, isAuth, authChange } from "../_modules/store";

if(R.isNil($isAuth)) {
  // This is the responsibility of this component to check authentication.
  // Fix on server it always return null!!
  init()
}

</script>

<svelte:head>
  <title>SCE Jewelry Software</title>
</svelte:head>

{#if R.isNil($isAuth)}
	Authenticating
{:else if $isAuth}
  <ul>
    <li><a href="/profile">Profile</a></li>
    <li><a  href="javascript:;" on:click={() => authChange(false)} >Sign Out</a></li>
  </ul>
{:else}
  <ul>
    <li><a href="/auth/register">Register</a></li>
    <li><a href="/auth/login">Login</a></li>
  </ul>
{/if}
