<template lang="pug">
.row.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Audio player
      small media
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') Media
      li.page-item
        a.page-link(href='\#;') Audio player
.p-1.m-3
  .bg-white.p-10
    .text-leader.text-center Create cool styled audio player in one command with Metro 4 audio role.
  br
  .row
    .cell-lg-6
      .bg-white.p-4
        h5.mt-0 Dark (default)
        audio(data-role='audio' data-src='https://metroui.org.ua/res/hotel_california.mp3')
    .cell-lg-6
      .bg-white.p-4
        h5.mt-0 Light
        audio.light(data-role='audio' data-src='https://metroui.org.ua/res/hotel_california.mp3')

</template>