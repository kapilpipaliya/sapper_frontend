<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import { goto } from "@sapper/app";
  const dp = createEventDispatcher();
  //import {isAuthFn} from '../../_modules/functions.js'
  let isSaving = false;
  let er = "";  
  let form = { email: '', pass: ''};
  let formSave = false;
  let getCookie = false;
  $: isAuth = formSave && getCookie
  $: {
    if(isAuth) {
      goto("/music")
    }
  }
  let username = null // to focus
  const fns = [];
  let S; 

  onMount(async ()=>{
    const { Server: S_ } = await import("../_modules/ws_music.js");
    if (typeof S_ == "function") { S = new S_(); } else { S = S_; }

    fns.push(["legacy", "auth", "user_login", 0]); S.bind$(fns.i(-1), ([d]) => {isSaving = false; if (d.ok) {  er = ""; formSave = true; dp("successSave", { d }); } else { er = d.error; } }, 1)
    fns.push(["legacy", "auth", "set_cookie", 0]); S.bind$(fns.i(-1), ([d]) => { document.cookie = `user=${d.user}; path=/`; getCookie = true; }, 1)

    // check it already logged in
    isAuth = await isAuthFn(S)
    username.focus()
  })
  onDestroy(() => { if(process.browser) S.unbind_(fns) });

  const save = async() => {isSaving = true; S.trigger([[ ["legacy", "auth","user_login",0], form ]]); }
  const clearError = () => { er = ""; }

</script>

<style src="./_Login.scss"></style>
<svelte:head>
	<title>Log In</title>
</svelte:head>

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
                  <td ><input bind:value={form.email} bind:this={username}></td>
                </tr>
                <tr>
                  <td >Password</td>
                  <td ><input type="password" bind:value={form.pass} ></td>
                </tr>
                <tr>
                  <td colspan="2" style="text-align: center;"> <button type="submit" disabled={!form.email || !form.pass} class="registerbtn"> Submit </button> </td>
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