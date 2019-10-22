<template lang="pug">
.row.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Tiles
      small ui elements
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') UI Elements
      li.page-item
        a.page-link(href='\#;') Tiles
.p-1.m-3
  .row
    .cell-lg-4
      .p-2.clear
        .tiles-grid.tiles-group.size-2
          a.bg-indigo(href='https://github.com/olton/Metro-UI-CSS' data-role='tile')
            span.mif-github.icon
            span.branding-bar Github
            span.badge-bottom 30
          .bg-cyan(data-role='tile')
            span.mif-envelop.icon
            span.branding-bar Email
            span.badge-bottom 10
          .bg-orange(data-role='tile' data-size='wide')
            span.mif-chrome.icon
            span.branding-bar Chrome
          div(data-role='tile' data-size='small')
            span.mif-apple.icon
          .bg-red(data-role='tile' data-size='small')
            span.mif-bell.icon
          .bg-teal.col-1.row-6(data-role='tile' data-size='small')
            span.mif-windows.icon
          .bg-brown.col-2.row-6(data-role='tile' data-size='small')
            span.mif-wind.icon
          .bg-cyan(data-role='tile')
            span.mif-table.icon
            span.branding-bar Tables
    .cell-lg-4
      .p-2.clear
        .tiles-grid.tiles-group.size-2
          div(data-role='tile' data-effect='hover-slide-up')
            .slide-front(data-cover='images/pandora/images/pumba-bg.jpg')
            .slide-back.d-flex.flex-justify-center.flex-align-center.p-4
              p.text-center
                | Tumultumque de brevis historia, aperto heuretes!
            span.branding-bar.fg-dark hover-slide-up
          div(data-role='tile' data-effect='hover-slide-down')
            .slide-front(data-cover='images/pandora/images/pumba-bg.jpg')
            .slide-back.d-flex.flex-justify-center.flex-align-center.p-4
              p.text-center
                | Tumultumque de brevis historia, aperto heuretes!
            span.branding-bar.fg-dark hover-slide-down
          div(data-role='tile' data-effect='hover-slide-left')
            .slide-front(data-cover='images/pandora/images/pumba-bg.jpg')
            .slide-back.d-flex.flex-justify-center.flex-align-center.p-4
              p.text-center
                | Tumultumque de brevis historia, aperto heuretes!
            span.branding-bar.fg-dark hover-slide-left
          div(data-role='tile' data-effect='hover-slide-right')
            .slide-front(data-cover='images/pandora/images/pumba-bg.jpg')
            .slide-back.d-flex.flex-justify-center.flex-align-center.p-4
              p.text-center
                | Tumultumque de brevis historia, aperto heuretes!
            span.branding-bar.fg-dark hover-slide-right
          div(data-role='tile' data-effect='hover-zoom-up')
            .slide-front(data-cover='images/pandora/images/pumba-bg.jpg')
            .slide-back.d-flex.flex-justify-center.flex-align-center.p-4.op-pink
              p.text-center
                | Tumultumque de brevis historia, aperto heuretes!
            span.branding-bar.fg-dark hover-zoom-up
          div(data-role='tile' data-effect='hover-zoom-down')
            .slide-front(data-cover='images/pandora/images/pumba-bg.jpg')
            .slide-back.d-flex.flex-justify-center.flex-align-center.p-4.op-teal
              p.text-center
                | Tumultumque de brevis historia, aperto heuretes!
            span.branding-bar.fg-dark hover-zoom-down
          div(data-role='tile' data-effect='hover-zoom-left')
            .slide-front(data-cover='images/pandora/images/pumba-bg.jpg')
            .slide-back.d-flex.flex-justify-center.flex-align-center.p-4.op-steel
              p.text-center
                | Tumultumque de brevis historia, aperto heuretes!
            span.branding-bar.fg-dark hover-zoom-left
          div(data-role='tile' data-effect='hover-zoom-right')
            .slide-front(data-cover='images/pandora/images/pumba-bg.jpg')
            .slide-back.d-flex.flex-justify-center.flex-align-center.p-4.op-mauve
              p.text-center
                | Tumultumque de brevis historia, aperto heuretes!
            span.branding-bar.fg-dark hover-zoom-right
    .cell-lg-4
      .p-2.clear
        .tiles-grid.tiles-group.size-2
          .bg-white(data-role='tile' data-size='wide' data-effect='image-set')
            img(alt='image' src='images/pandora/images/product_1.png')
            img(alt='image' src='images/pandora/images/product_2.png')
            img(alt='image' src='images/pandora/images/product_3.png')
            img(alt='image' src='images/pandora/images/product_4.png')
            img(alt='image' src='images/pandora/images/product_5.png')
          div(data-role='tile' data-cover='images/pandora/images/jek_vorobey.jpg')
            span.branding-bar Jack Sparrow
          div(data-role='tile' data-effect='animate-fade' data-effect-duration='1000')
            .slide(data-cover='images/pandora/images/shvarcenegger.jpg')
            .slide(data-cover='images/pandora/images/jek_vorobey.jpg')
            .slide(data-cover='images/pandora/images/jeki_chan.jpg')
            span.branding-bar Gallery
          div(data-role='tile' data-size='wide' data-effect='animate-slide-left' data-cover-position1='top center')
            .slide(data-cover='images/pandora/images/product_1.png' data-cover-position='top center')
            .slide(data-cover='images/pandora/images/product_2.png' data-cover-position='top center')
            .slide(data-cover='images/pandora/images/product_3.png' data-cover-position='top center')
            .slide(data-cover='images/pandora/images/product_4.png' data-cover-position='top center')
            .slide(data-cover='images/pandora/images/product_5.png' data-cover-position='top center')
            span.branding-bar.fg-dark Gallery

</template>