<template lang="pug">
.row.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Chat
      small component
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') Components
      li.page-item
        a.page-link(href='\#;') Chat
.p-1.m-3
  .d-none.d-block-md(style='height: 400px')
    .bg-white(data-role='splitter' data-split-sizes='20, 80')
      .p-4
        ul.v-menu
          li.menu-title General
          li.active
            a(href='\#;')
              span.icon.mif-users
              |  Support
          li.menu-title Technical
          li
            a(href='\#;')
              span.icon.mif-local-service
              |  Hosting
          li
            a(href='\#;')
              span.icon.mif-server
              |  VPS
          li
            a(href='\#;')
              span.icon.mif-library
              |  Domains
          li.menu-title Finance
          li
            a(href='\#;')
              span.icon.mif-user-secret
              |  Director
          li
            a(href='\#;')
              span.icon.mif-user-check
              |  Manager
      div
        #chat0(data-role='chat' data-avatar='images/pandora/images/user3-128x128.jpg' data-name='Sandra Bullock' data-height='400' data-title='Support chat' data-welcome='Welcome to Pandora chat!' data-cls-message-left='default fg-dark' data-cls-message-right='info' data-cls-send-button='info' data-on-send='sendMessage')
  .row.mt-4
    .cell-lg-3.cell-sm-6.mt-4
      #chat1.bd-green.op-lightGreen(data-role='chat' data-height='400' data-title='Direct chat' data-welcome='Welcome to Pandora chat!' data-cls-message-left='default' data-cls-message-right='success' data-cls-send-button='success' data-on-send='sendMessage' data-avatar='images/pandora/images/user3-128x128.jpg' data-name='Sandra Bullock')
    .cell-lg-3.cell-sm-6.mt-4
      #chat2.bd-red.op-lightRed(data-role='chat' data-height='400' data-title='Direct chat' data-welcome='Welcome to Pandora chat!' data-cls-message-left='default' data-cls-message-right='alert' data-cls-send-button='alert' data-on-send='sendMessage' data-avatar='images/pandora/images/user3-128x128.jpg' data-name='Sandra Bullock')
    .cell-lg-3.cell-sm-6.mt-4
      #chat3.bd-orange.op-lightOrange(data-role='chat' data-height='400' data-title='Direct chat' data-welcome='Welcome to Pandora chat!' data-cls-message-left='default' data-cls-message-right='warning' data-cls-send-button='warning' data-on-send='sendMessage' data-avatar='images/pandora/images/user3-128x128.jpg' data-name='Sandra Bullock')
    .cell-lg-3.cell-sm-6.mt-4
      #chat4.bd-cyan.op-lightCyan(data-role='chat' data-height='400' data-title='Direct chat' data-welcome='Welcome to Pandora chat!' data-cls-message-left='default' data-cls-message-right='info' data-cls-send-button='info' data-on-send='sendMessage' data-avatar='images/pandora/images/user3-128x128.jpg' data-name='Sandra Bullock')

</template>