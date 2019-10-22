
<svelte:head><title>Pandora :: 500 Server error</title></svelte:head>

<template lang="pug">
.h-vh-100.d-flex.flex-justify-center.flex-align-center
  .container.text-center
    img(alt='image' src='images/pandora/images/p-120x120.png')
    .display4.fg-red.mt-0 500
    .h1.text-center.m-8
      | Oops!
      br
      | Something went wrong.
    .text-leader2.text-center.page-error-box.mx-auto
      | We will work on fixing that right away.
      br
      | Meanwhile, you may 
      a(href='index.html') return to dashboard
      |  or try using the search form.
    form.p-4.mx-auto.page-error-box(action='javascript:')
      input.input-large(type='text' data-role='input' data-custom-buttons='customButtons' placeholder='Search...')

</template>