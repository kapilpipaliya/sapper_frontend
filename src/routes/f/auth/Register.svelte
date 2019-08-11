<script context="module">
  import { Server as S_ } from "../../_modules/ws_events_dispatcher.js";
  import { menuCategories, isAuthFn, getFooterData, getHeaderData  } from "../../_modules/functions.js";
  export async function preload(page, session){
    let S; if (typeof S_ == "function") { S = new S_(this.req, this.res); } else { S = S_; }
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
    const { Server: S_ } = await import("../../_modules/ws_events_dispatcher.js");
    if (typeof S_ == "function") { S = new S_(); } else { S = S_; }

    fns.push("user_register"); S.bind$(...fns.i(-1), (d) => {isSaving = false; if (d.ok) {  er = ""; formSave = true; dp("successSave", { d }); } else { er = d.error; } })
    fns.push("set_cookie"); S.bind$(...fns.i(-1), (d) => { document.cookie = `user=${d.user}; path=/`; getCookie = true; })

    // check it already logged in
    isAuth = await isAuthFn(S)
    username.focus()
  })
  onDestroy(() => { if(process.browser) S.unbind_(fns) });

  const save = async() => {isSaving = true; S.trigger("user_register", form); }
  const clearError = () => { er = ""; }

</script>

<style>
  .container {
    display: flex;

    /* Add padding to containers */
    padding: 16px; /*looks nice*/
    text-align: center; /*works great*/
  }
  .row {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex: 1;
    justify-content: center;
  }
  .box {
    padding: 0.2rem;
    margin: 0.2rem;
    border-radius: 0.25rem;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);
  }
  h3 {
    margin: 1rem;
    text-align: center;

  }
  table {
    margin: auto;
    table-layout: fixed;
    border-collapse: collapse;
    border: 1px solid #dae1e7;


  }
  
  td {
    border: 1px solid lightgrey;
  }

  /* Header/Logo Title */
.header {
  padding: 5px;
  text-align: center;
  background: #1abc9c;
  color: white;

}
.header a{text-decoration: none}
/* Page Content */
.content {padding:10px;}

  /* input[type=text]:focus, input[type=password]:focus, input[type=email]:focus {
    background-color: #ddd;
    outline: none;
  } */
/* style inputs and link buttons */
input {
  padding: 12px;
  border: none;
  border-radius: 4px;
  opacity: 0.85;

  line-height: 20px;
}

input:hover {
  opacity: 1;
}
  /* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
  /* Set a style for the submit button */
.registerbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}
  a {
  color: dodgerblue;
}
  .signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>

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