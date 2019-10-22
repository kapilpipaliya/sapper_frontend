<template lang="pug">
.row.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | ListView
      small ui elements
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') UI Elements
      li.page-item
        a.page-link(href='\#;') ListView
.p-1.m-3
  .row
    .cell-lg-6
      .bg-white.p-4.h-100
        h2.mt-0 Progress
        hr
        h5 Default
        div
          div(data-role='progress' data-value='35')
          .mt-1(data-role='progress' data-value='35' data-small='true')
        h5 With buffer
        div
          div(data-role='progress' data-type='buffer' data-value='35' data-buffer='60')
          .mt-1(data-role='progress' data-type='buffer' data-value='35' data-buffer='60' data-small='true')
        h5 With buffer and locator
        div
          div(data-role='progress' data-type='load' data-value='35' data-buffer='75')
          .mt-1(data-role='progress' data-type='load' data-value='35' data-buffer='75' data-small='true')
        h5 Line
        div
          div(data-role='progress' data-type='line')
          .mt-1(data-role='progress' data-type='line' data-small='true')
        h5 Custom colors
        div(data-role='progress' data-type='buffer' data-cls-back='bg-yellow' data-cls-bar='bg-blue' data-cls-buffer='bg-pink' data-value='25' data-buffer='65')
    .cell-lg-6
      .bg-white.p-4.h-100
        h2.mt-0 Activities
        hr
        h5 Simple
        .row
          .cell-md-4.bg-dark.p-4
            .mx-auto(data-role='activity' data-type='simple')
          .cell-md-4.p-4
            .mx-auto(data-role='activity' data-type='simple' data-style='dark')
          .cell-md-4.p-4
            .mx-auto(data-role='activity' data-type='simple' data-style='color')
        h5 Ring
        .row
          .cell-md-4.bg-dark.p-4
            .mx-auto(data-role='activity' data-type='ring')
          .cell-md-4.p-4
            .mx-auto(data-role='activity' data-type='ring' data-style='dark')
          .cell-md-4.p-4
            .mx-auto(data-role='activity' data-type='ring' data-style='color')
        h5 Metro
        .row
          .cell-md-4.bg-dark.p-4
            .mx-auto(data-role='activity' data-type='metro')
          .cell-md-4.p-4
            .mx-auto(data-role='activity' data-type='metro' data-style='dark')
          .cell-md-4.p-4
            .mx-auto(data-role='activity' data-type='metro' data-style='color')
        h5 Square
        .row
          .cell-md-4.bg-dark.p-4
            .mx-auto(data-role='activity' data-type='square')
          .cell-md-4.p-4
            .mx-auto(data-role='activity' data-type='square' data-style='dark')
          .cell-md-4.p-4
            .mx-auto(data-role='activity' data-type='square' data-style='color')
        h5 Cycle
        .row
          .cell-md-4.bg-dark.p-4
            .mx-auto(data-role='activity' data-type='cycle')
          .cell-md-4.p-4
            .mx-auto(data-role='activity' data-type='cycle' data-style='dark')
          .cell-md-4.p-4
            .mx-auto(data-role='activity' data-type='cycle' data-style='color')

</template>