<script context="module">
/*
1. check is_logged_in then redirect back to dashboard page..
//https://codepen.io/inzrb/pen/vnpwm
*/
import { Server as S_ } from "../_modules/ws_todo.js";
import { server, ws_todo, isAuthFn } from "../_modules/functions.js";
export async function preload({query}, session) {
  const redirect_url = `/${server.redirect}/dashboard`
  let S; if (typeof S_ == "function") { S = new S_(ws_todo, this.req, this.res); } else { S = S_; }
  const isAuth = await new Promise((resolve, reject) => { S.bind_( ["user", `is_logged_in`, 0], ([d]) => { resolve(d); }, [[]] ); });
  if(isAuth){ this.redirect(302, redirect_url) }
  return { isAuth, redirect_url, query };
}
</script>
<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import { goto } from "@sapper/app";
  const dp = createEventDispatcher();
  import { Server as S } from "../_modules/ws_todo.js";
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

  onMount(async ()=>{
    fns.push(["auth","login",0]); S.bind$(fns.i(-1), ([d]) => {isSaving = false; if (d.ok) {  er = ""; formSave = true; dp("successSave", { d }); } else { er = d.error; } }, 1)
    fns.push(["auth", "set_cookie", 0]); S.bind$(fns.i(-1), ([d]) => { 
      document.cookie = `todo=${d}; path=/`; getCookie = true; }, 1)

    user.focus()
  })
  onDestroy(() => { if(process.browser && S) S.unbind_(fns) });

  const save = async() => {isSaving = true; S.trigger([[ ["auth","login",0], form ]]); }
  const clearError = () => { er = ""; }

</script>

<style src="./_Login.scss"></style>
<svelte:head>
	<title>Log In</title>
</svelte:head>
 
<template lang="pug">
+if('query.message')
  span(class="{query.type}") {query.message}

+if('!isAuth')
  h1 Flat Login

  div.stand
    div.outer-screen
      div.inner-screen
        form.form( on:submit|preventDefault="{save}")
          input.zocial-dribbble(
            type="text"
            placeholder="Enter your user name"
            bind:value="{form.user}" bind:this="{user}"
            required=true
          )
          input(
            type="password"
            placeholder="Password"
            bind:value="{form.pass}"
            required=true
          )
          input(
            type="submit"
            value="Login"
            disabled="{!form.user || !form.pass}"
          )
          div.error {er}
  +else()
    div.header
      a(href="./")
        h1 Logged in successfully
      p Now you can visit and explore website with aditional features
    div.content

</template>