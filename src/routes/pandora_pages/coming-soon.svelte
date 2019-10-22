
    <svelte:head><title>Pandora :: Coming soon</title></svelte:head>
<template lang="pug">    
.h-vh-100-lg.d-flex.flex-column.flex-justify-start.flex-align-start
  .container-fluid.bg-white.h-75.d-flex.flex-align-center.pt-3.pt-0-lg
    .container.text-center
      img(alt='image' src='images/pandora/images/p-512x512.png' style='width: 300px')
      .text-leader Hey! Thank you for checking out our site.
      .text-leader2
        | It&rsquo;s not quite ready yet, but we are working hard and it will be ready in approximately:
      .mt-3.mt-10-lg.mb-3(data-role='countdown' data-days='30' data-animate='slide' style='font-size: 48px;')
  .container-fluid.h-25.d-flex.flex-align-center
    .container
      form.p-4.mx-auto.page-error-box(action='javascript:')
        p.m-2
          | If you would like to be notified when the app is ready, you can subscribe to our e-mail list.
        input.input-large(type='text' data-role='input' data-custom-buttons='customButtons' placeholder='Subscribe...')


</template>