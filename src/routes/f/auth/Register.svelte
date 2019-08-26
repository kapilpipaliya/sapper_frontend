<script context="module">
  import { Server as S_ } from "../../_modules/ws_normal.js";
  import { ws_admin, menuCategories, isAuthFn, getFooterData, getHeaderData  } from "../../_modules/functions.js";
  export async function preload(page, session){
    let S; if (typeof S_ == "function") { S = new S_(ws_admin, this.req, this.res); } else { S = S_; }
    // let user = session.user; if(!!user){ this.redirect(302, '/confirmation') }
    const categories = await menuCategories(S);
    const footerData = await getFooterData(S)
    const headerData = await getHeaderData(S)
    return { categories, footerData, headerData }
  }
</script>

<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import { goto } from "@sapper/app";
  //import {isAuthFn} from '../../_modules/functions.js'
  import MyLayout from '../_myLayout.svelte'
  const dp = createEventDispatcher();
  export let categories = [];
  export let footerData = {};
  export let headerData = {};
  let isSaving = false;
  let er = "";  
  let form = { legal_name: '', email: '', pass: '', mobile: '' };
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

    fns.push(["legacy", "auth", "user_register", 0]); S.bind$(fns.i(-1), ([d]) => {isSaving = false; if (d.ok) {  er = ""; formSave = true; dp("successSave", { d }); } else { er = d.error; } }, 1)
    fns.push(["legacy", "auth", "set_cookie", 0]); S.bind$(fns.i(-1), ([d]) => { document.cookie = `user=${d.user}; path=/`; getCookie = true; }, 1)

    // check it already logged in
    isAuth = await isAuthFn(S)
    username.focus()
  })
  onDestroy(() => { if(process.browser) S.unbind_(fns) });

  const save = async() => {isSaving = true; S.trigger([[ ["legacy", "auth", "user_register", 0], form ]]); }
  const clearError = () => { er = ""; }

</script>

<style src="./_Register.scss"></style>
<svelte:head>
	<title>{headerData.company[0][4]} - Register</title>
</svelte:head>

<MyLayout {categories}  {isAuth} {footerData}  {headerData}>
{#if !isAuth}
  <div class="container">
    <div class="row">
      <div class="box">

        <h3>Registration</h3>
        <form on:submit|preventDefault={save}>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td> <input type="text" bind:value={form.legal_name} bind:this={username}/> </td>
              </tr>
              <tr>
                <td>Email</td>
                <td> <input type="email" bind:value={form.email} /> </td>
              </tr>
              <tr>
                <td>Password</td>
                <td> <input type="password" bind:value={form.pass} /> </td>
              </tr>
              <tr>
                <td colspan="2" style="text-align: center;"> <button type="submit" class="registerbtn" disabled={!form.legal_name || !form.email || !form.pass}> Register </button> </td>
              </tr>
            </tbody>
          </table>
          <hr>
          <p>By creating an account you agree to our <a href="./f/page/privacy">Terms & Privacy</a>.</p>
        </form>

      </div>

    </div>
  </div>

  <div> {er} </div>

  <div class="signin">
    <p>Already have an account? <a href="./f/auth/Login">Sign in</a>.</p>
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