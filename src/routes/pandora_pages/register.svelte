
    <svelte:head><title>Pandora :: Register</title></svelte:head>
<template lang="pug">

.h-vh-100.d-flex.flex-justify-center.flex-align-center
  .login-box
    form.bg-white.p-4(action='javascript:' data-role='validator' data-clear-invalid='2000' data-on-error-form='invalidForm')
      img.place-right.mt-4-minus.mr-5-minus(alt='image' src='images/pandora/images/p-120x120.png')
      h1.mb-0 Register
      .text-muted.mb-4 Register a new membership
      .form-group
        input(type='text' data-role='input' placeholder='Full name' data-append="<span class='mif-user'>" data-validate='required')
        span.invalid_feedback Please enter a valid email address
      .form-group
        input(type='text' data-role='input' placeholder='Email' data-append="<span class='mif-envelop'>" data-validate='required')
        span.invalid_feedback Please enter a valid email address
      .form-group
        input(type='password' data-role='input' placeholder='Password' data-append="<span class='mif-key'>" data-validate='required' name='password')
        span.invalid_feedback Please enter a password
        input.mt-4(type='password' data-role='input' placeholder='Retype password' data-append="<span class='mif-checkmark'>" data-validate='required equals=password')
        span.invalid_feedback Please enter a password
      .form-group.d-flex.flex-align-center.flex-justify-between
        input(type='checkbox' data-role='checkbox' data-caption="I agree to the <a href='#'>terms</a>")
        button.button.primary Register
      .text-center.m-4 - OR -
      .form-group
        button.image-button.w-100.mt-1.bg-facebook.fg-white(type='button')
          span.mif-facebook.icon
          span.caption Sign Up using Facebook
        button.image-button.w-100.mt-1.bg-github.fg-white(type='button')
          span.mif-github.icon
          span.caption Sign Up using GitHub
        button.image-button.w-100.mt-1.bg-gitlab.fg-white(type='button')
          span.mif-gitlab.icon
          span.caption Sign Up using GitLab
      .form-group.border-top.bd-default.pt-2
        a.d-block(href='\#;') I already have a membership


</template>