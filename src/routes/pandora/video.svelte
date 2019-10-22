<template lang="pug">
.row.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Video player
      small media
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') Media
      li.page-item
        a.page-link(href='\#;') Video player
.p-1.m-3
  .bg-white.p-10
    .text-leader.text-center Create cool styled view player in one command with Metro 4 video role.
  br
  .row
    .cell-lg-3
    .cell-lg-6
      .bg-white.p-4.win-shadow
        video(data-role='video' data-src='https://metroui.org.ua/res/oceans.mp4' data-poster='https://metroui.org.ua/res/poster-oceans.jpg' data-logo='images/pandora/images/p-120x120.png' data-logo-height='64')
    .cell-lg-3
  br
  h4 Any aspect ration
  .row
    .cell-lg-4
      .bg-white.p-4
        h5.mt-0 HD
        video(data-role='video' data-aspect-ratio='hd' data-src='https://metroui.org.ua/res/oceans.mp4' data-logo='images/pandora/images/p-120x120.png' data-logo-height='64')
    .cell-lg-4
      .bg-white.p-4
        h5.mt-0 SD
        video(data-role='video' data-aspect-ratio='sd' data-src='https://metroui.org.ua/res/oceans.mp4' data-logo='images/pandora/images/p-120x120.png' data-logo-height='64')
    .cell-lg-4
      .bg-white.p-4
        h5.mt-0 CINEMA
        video(data-role='video' data-aspect-ratio='cinema' data-src='https://metroui.org.ua/res/oceans.mp4' data-logo='images/pandora/images/p-120x120.png' data-logo-height='64')

</template>