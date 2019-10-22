<script>
// import i18n from 'i18n-js'
import * as s from '../_/settings.js'
// let title =  html_title(i18n.l("label_login"));
let label_login =  "Sign in"
// let disable_password_login = false;
// import password_login_form from './_password_login_form.svelte'
</script>

<style>
  
</style>

<svelte:head>
	<title>{s.html_title(label_login)}</title>
</svelte:head>

<template lang="pug">
.d-flex.flex-justify-center.flex-align-center
  .login-box
    form.bg-white.p-4(action='javascript:' data-role='validator' data-clear-invalid='2000' data-on-error-form='invalidForm')
      img.place-right.mt-4-minus.mr-6-minus(alt='image' src='images/pandora/images/p-120x120.png')
      h1.mb-0 Login
      .text-muted.mb-4 Sign in to start your session
      .form-group
        input(type='text' data-role='input' placeholder='Email' data-append="<span class='mif-envelop'>" data-validate='required')
        span.invalid_feedback Please enter a valid email address
      .form-group
        input(type='password' data-role='input' placeholder='Password' data-append="<span class='mif-key'>" data-validate='required')
        span.invalid_feedback Please enter a password
      .form-group.d-flex.flex-align-center.flex-justify-between
        input(type='checkbox' data-role='checkbox' data-caption='Remember Me')
        button.button.primary Sign In

      .form-group.border-top.bd-default.pt-2
        a.d-block(href='time/account/lost_password;') I forgot my password
        a.d-block(href='time/account/register;') Register a new membership


</template>