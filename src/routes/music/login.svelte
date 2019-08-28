<script context="module">
/*
1. check is_logged_in then redirect back to dashboard page..
*/
import { Server as S_ } from "../_modules/ws_music.js";
import { ws_madmin, isAuthFn } from "../_modules/functions.js";
export async function preload({query}, session) {
  const redirect_url = "music/dashboard"
  let S; if (typeof S_ == "function") { S = new S_(ws_madmin, this.req, this.res); } else { S = S_; }
  const isAuth = await new Promise((resolve, reject) => { S.bind_( ["user", `is_logged_in`, 0], ([d]) => { resolve(d); }, [[]] ); });
  if(isAuth){ this.redirect(302, redirect_url) }
  return { isAuth, redirect_url, query };
}
</script>
<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import { goto } from "@sapper/app";
  const dp = createEventDispatcher();
  export let isAuth = false;
  export let redirect_url = ""
  export let query = {}
  
  let isSaving = false;
  let er = "";  
  let form = { user: '', pass: ''};
  let formSave = false;
  let getCookie = false;
  $: isAuth = formSave && getCookie
  $: { if(isAuth) { goto(redirect_url) } }

  let user = null // to focus
  const fns = [];
  let S; 

  onMount(async ()=>{
    const { Server: S_ } = await import("../_modules/ws_music.js");
    if (typeof S_ == "function") { S = new S_(); } else { S = S_; }

    fns.push(["auth","login",0]); S.bind$(fns.i(-1), ([d]) => {isSaving = false; if (d.ok) {  er = ""; formSave = true; dp("successSave", { d }); } else { er = d.error; } }, 1)
    fns.push(["auth", "set_cookie", 0]); S.bind$(fns.i(-1), ([d]) => { 
      document.cookie = `music=${d}; path=/`; getCookie = true; }, 1)

    user.focus()
  })
  onDestroy(() => { if(process.browser) S.unbind_(fns) });

  const save = async() => {isSaving = true; S.trigger([[ ["auth","login",0], form ]]); }
  const clearError = () => { er = ""; }

</script>

<style src="./_Login.scss"></style>
<svelte:head>
	<title>Log In</title>
</svelte:head>

{#if query.message}
  <span class="{query.type}">{query.message}</span>
{/if}

{#if !isAuth}
<div class="container">
      <div class="row">
        <div class="box">

          <h3>Sign In</h3>
          <form on:submit|preventDefault={save}>
            <table>
              <tbody>
                <tr>
                  <td >User Name</td>
                  <td ><input bind:value={form.user} bind:this={user}></td>
                </tr>
                <tr>
                  <td >Password</td>
                  <td ><input type="password" bind:value={form.pass} ></td>
                </tr>
                <tr>
                  <td colspan="2" style="text-align: center;"> <button type="submit" disabled={!form.user || !form.pass} class="registerbtn"> Submit </button> </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        
      </div>
  
    </div>

  <div> {er} </div>

{:else}
  {#if false}
    <a href="./auth/LogOut">Logout</a>
  {/if}
  <div class="header">
    <a href="./"><h1>Logged in successfully</h1></a>
    <p>Now you can visit and explore website with aditional features</p>
  </div>
  <div class="content">
    

  </div>
{/if}