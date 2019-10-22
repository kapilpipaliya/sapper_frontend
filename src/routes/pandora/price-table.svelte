<template lang="pug">
.row.border-bottom.bd-lightGray.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Pricing 
      small e-commerce
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') E-Commerce
      li.page-item
        a.page-link(href='\#;') Pricing
.p-10
  .row.flex-align-center
    .cell-lg-4
      .price-item.text-center.bg-white.win-shadow
        .price-item-header.p-6
          h1.mb-0 Starter
          div for small teams
        .price-item-price.bg-lightSteel.p-5
          .display3.m-0.text-medium.fg-white
            small $
            | 29
          .fg-white monthly per user
        .price-item-detail.p-5
          div Unlimited projects
          div Unlimited pages
          div Unlimited disk space
          div 24 / 7 Free support
        .price-item-actions.p-5
          button.button.info STARTED FOR FREE
          p.text-small.text-muted 7 days free trial
    .cell-lg-4
      .price-item.text-center.bg-white.win-shadow
        .price-item-header.p-6
          h1.mb-0 Pro
          div for larger teams
        .price-item-price.bg-darkSteel.p-5
          .display3.m-0.text-medium.fg-white
            small $
            | 59
          .fg-white monthly per user
        .price-item-detail.p-5
          div Unlimited projects
          div Unlimited pages
          div Unlimited disk space
          div 24 / 7 Free support
          div Advanced reporting
          div Customizable interface
          div CRM Integration
        .price-item-actions.p-5
          button.button.alert.drop-shadow STARTED FOR FREE
          p.text-small.text-muted 30 days free trial
    .cell-lg-4
      .price-item.text-center.bg-white.win-shadow
        .price-item-header.p-6
          h1.mb-0 Enterprise
          div for big teams
        .price-item-price.bg-lightSteel.p-5
          .display3.m-0.text-medium.fg-white
            small $
            | 99
          .fg-white monthly per user
        .price-item-detail.p-5
          div Unlimited projects
          div Unlimited pages
          div Unlimited disk space
          div For full feature list, call us
        .price-item-actions.p-5
          button.button.info STARTED FOR FREE
          p.text-small.text-muted 90 days free trial


</template>