<script context="module">
  import { Server as S_ } from "../../_modules/ws_normal.js";
  import { ws_admin, menuCategories, isAuthFn, getFooterData, getHeaderData  } from "../../_modules/functions.js";
	export async function preload(page, session){
    let S; if (typeof S_ == "function") { S = new S_(ws_admin, this.req, this.res); } else { S = S_; }
    // TOdo redirect if alrady authorised.
    // if(isAuth){
      // this.redirect(302, '/')
    // }
    const categories = await menuCategories(S);
    const footerData = await getFooterData(S)
    const headerData = await getHeaderData(S)
    return { categories, footerData, headerData }
	}
</script>

<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import { goto } from "@sapper/app";
  const dp = createEventDispatcher();
  //import {isAuthFn} from '../../_modules/functions.js'
  import MyLayout from '../_myLayout.svelte'
  let isSaving = false;
  let er = "";  
  let form = { email: '', pass: ''};
  export let categories = [];
  export let footerData = {};
  export let headerData = {};
  let countries;
  let formSave = false;
  let getCookie = false;
  $: isAuth = formSave && getCookie
  let username = null // to focus
  const fns = [];
  let S; 

  onMount(async ()=>{
    const { Server: S_ } = await import("../../_modules/ws_normal.js");
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
	<title>{headerData.company[0][4]} - Log In</title>
</svelte:head>

<MyLayout {categories}  {isAuth} {footerData} {headerData} >
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

  <div class="signin">
    <p>I want to create an account. <a href="./f/auth/Register">Sign up</a>.</p>
    <p>An account is needed to purchase a product</p>
  </div>
{:else}
  {#if false}
    <a href="./f/auth/LogOut">Logout</a>
  {/if}
  <div class="header">
    <a href="./"><h1>Logged in successfully</h1></a>
    <p>Now you can visit and explore website with aditional features</p>
  </div>
  <div class="content">
    

  </div>
{/if}
</MyLayout>