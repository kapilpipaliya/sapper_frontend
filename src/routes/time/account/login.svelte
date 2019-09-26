<script>
// import i18n from 'i18n-js'
import * as s from '../_/settings.js'
// let title =  html_title(i18n.l("label_login"));
let label_login =  "Sign in"
let disable_password_login = false;
import password_login_form from './_password_login_form.svelte'
</script>

<style>
  
</style>

<svelte:head>
	<title>{s.html_title(label_login)}</title>
</svelte:head>

<template lang="pug">
#login-form.form.-bordered
  h1 { s.t(label_login) }
  hr.form--separator
  +if('!disable_password_login')
    <svelte:component this={password_login_form} />
  //{ render partial: 'auth_providers' %>
</template>