
<svelte:head><title>Pandora :: 404 Page not found</title></svelte:head>
<script>
          var customButtons = [
            {
                html: "<span class='mif-search mif-2x'>",
                onclick: function(){
                    J(this.form).submit()
                }
            }
        ];
</script>

<template lang="pug">

.h-vh-100.d-flex.flex-justify-center.flex-align-center
  .container.text-center
    img(alt='image' src='images/pandora/images/p-120x120.png')
    .display4.fg-orange.mt-0 404
    .h1.text-center.m-8
      | Oops!
      br
      | Page not found.
    .text-leader2.text-center.page-error-box.mx-auto
      | We could not find the page you were looking for.
      br
      | Meanwhile, you may 
      a(href='index.html') return to dashboard
      |  or try using the search form.
    form.p-4.mx-auto.page-error-box(action='javascript:')
      input.input-large(type='text' data-role='input' data-custom-buttons='customButtons' placeholder='Search...')

</template>