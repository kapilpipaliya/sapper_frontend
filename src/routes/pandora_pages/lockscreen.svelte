    <script>
        function invalidForm(){
            var form  = J(this);
            form.addClass("ani-ring");
            setTimeout(function(){
                form.removeClass("ani-ring");
            }, 1000);
        }
    </script>
    
    <svelte:head><title>Pandora :: Lockscreen</title></svelte:head>
<template lang="pug">
.h-vh-100.d-flex.flex-justify-center.flex-align-center
  .lock-box.text-center
    form.p-4(action='javascript:' data-role='validator' data-clear-invalid='2000' data-on-error-form='invalidForm' onsubmit="alert('ku')")
      h1.mb-4
        | Lock 
        span.mif-lock
      img.avatar(alt='image' src='images/pandora/images/jek_vorobey.jpg')
      .m-4.text-bold Jack Sparrow
      input(type='password' data-role='input' data-custom-buttons='lockCustomButtons' data-validate='required')
      span.invalid_feedback Enter a password
      .m-4.text-muted Enter your password to retrieve your session
      a(href='\#;') Or sign in as a different user
      .mt-4.reduce-1
        | Copyright &copy; 2019 
        a.no-decor.text-bold.fg-dark(href='\#;') Sergey Pimenov



</template>