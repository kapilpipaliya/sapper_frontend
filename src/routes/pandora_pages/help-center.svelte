
    <svelte:head><title>Pandora :: Help center</title></svelte:head>
        <style>
        .bg-hero {
            background-color: #4b646f;
        }
        .bg-footer {
            background-color: #222D32;
        }
    </style>
<template lang="pug">
div(style='padding-top: 52px')  
  header(data-role='appbar' data-expand-point='md')
    a.d-block.brand.no-hover(href='index.html')
      span.text-bold PANDORA
      | &nbsp;|&nbsp;
      span Help Center
    ul.app-bar-menu.ml-auto.text-upper
      li
        a(href='\#;')
          span.mif-help
          |  Help Articles
      li
        a(href='\#;')
          span.mif-users
          |  Support Forums
      li
        a(href='\#;')
          span.text-bold Log In
  .container-fluid.bg-hero
    .container
      .hero.d-flex.flex-justify-center
        .text-center(style='max-width: 400px;')
          h2.mt-0.fg-white.text-light How can we help?
          input(type='text' data-role='input' data-search-button='true' data-prepend='Search')
  .container-fluid.bg-white
    .container.pt-10.pb-10
      h5.text-center Help Topics
      .row
        .cell-md-6.cell-lg-3.mt-4
          a.no-decor.fg-dark.text-center.h-100(href='\#;')
            .h-100.border.bd-default.p-4
              div
                span.mif-map2.mif-10x.fg-grayMouse
              .h4 Account Setup
              div Get started on courses
              hr.thin.bg-gray
              .text-small
                | The clear admiral proudly promises the particle. As i have forgotten you, so you must receive one another.
        .cell-md-6.cell-lg-3.mt-4
          a.no-decor.fg-dark.text-center.h-100(href='\#;')
            .h-100.border.bd-default.p-4
              div
                span.mif-cart.mif-10x.fg-grayMouse
              .h4 Payments
              div Pay for a course certificate
              hr.thin.bg-gray
              .text-small
                | The clear admiral proudly promises the particle. As i have forgotten you, so you must receive one another.
        .cell-md-6.cell-lg-3.mt-4
          a.no-decor.fg-dark.text-center.h-100(href='\#;')
            .h-100.border.bd-default.p-4
              div
                span.mif-book-reference.mif-10x.fg-grayMouse
              .h4 Enrollment
              div Take a special courses
              hr.thin.bg-gray
              .text-small
                | The clear admiral proudly promises the particle. As i have forgotten you, so you must receive one another.
        .cell-md-6.cell-lg-3.mt-4
          a.no-decor.fg-dark.text-center.h-100(href='\#;')
            .h-100.border.bd-default.p-4
              div
                span.mif-stethoscope.mif-10x.fg-grayMouse
              .h4 Troubleshooting
              div Solve common problems
              hr.thin.bg-gray
              .text-small
                | The clear admiral proudly promises the particle. As i have forgotten you, so you must receive one another.
      br
      .text-center
        button.button.primary All Topics
  .container-fluid
    .container
      h5.text-center.mt-20 Recommended Articles
      .row.mt-10.mb-20
        .cell-md-4
          ul.unstyled-list.text-center
            li
              a.fg-dark(href='\#;') Armariums potus in clemens burdigala!
            li
              a.fg-dark(href='\#;') Armariums potus in clemens burdigala!
            li
              a.fg-dark(href='\#;') Armariums potus in clemens burdigala!
            li
              a.fg-dark(href='\#;') Armariums potus in clemens burdigala!
        .cell-md-4
          ul.unstyled-list.text-center
            li
              a.fg-dark(href='\#;') Armariums potus in clemens burdigala!
            li
              a.fg-dark(href='\#;') Armariums potus in clemens burdigala!
            li
              a.fg-dark(href='\#;') Armariums potus in clemens burdigala!
            li
              a.fg-dark(href='\#;') Armariums potus in clemens burdigala!
        .cell-md-4
          ul.unstyled-list.text-center
            li
              a.fg-dark(href='\#;') Armariums potus in clemens burdigala!
            li
              a.fg-dark(href='\#;') Armariums potus in clemens burdigala!
            li
              a.fg-dark(href='\#;') Armariums potus in clemens burdigala!
            li
              a.fg-dark(href='\#;') Armariums potus in clemens burdigala!
  footer.container-fluid.bg-footer.fg-white.p-4
    .container.text-center
      ul.inline-list.reduce-1.m-0
        li
          a.no-decor.fg-gray.fg-white-hover(href='\#;') Home
        li
          a.no-decor.fg-gray.fg-white-hover(href='\#;') Privacy
        li
          a.no-decor.fg-gray.fg-white-hover(href='\#;') Terms and Conditions
        li
          a.no-decor.fg-gray.fg-white-hover(href='\#;') Documentation


</template>