    <script>
        function invalidForm(){
            var form  = J(this);
            form.addClass("ani-ring");
            setTimeout(function(){
                form.removeClass("ani-ring");
            }, 1000);
        }
    </script>
    <svelte:head><title>Pandora :: Log in</title></svelte:head>

<template lang="pug">
.h-vh-100.d-flex.flex-justify-center.flex-align-center
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
      .text-center.m-4 - OR -
      .form-group
        button.image-button.w-100.mt-1.bg-facebook.fg-white(type='button')
          span.mif-facebook.icon
          span.caption Sign In using Facebook
        button.image-button.w-100.mt-1.bg-github.fg-white(type='button')
          span.mif-github.icon
          span.caption Sign In using GitHub
        button.image-button.w-100.mt-1.bg-gitlab.fg-white(type='button')
          span.mif-gitlab.icon
          span.caption Sign In using GitLab
      .form-group.border-top.bd-default.pt-2
        a.d-block(href='\#;') I forgot my password
        a.d-block(href='\#;') Register a new membership


</template>