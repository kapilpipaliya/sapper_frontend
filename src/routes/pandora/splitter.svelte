<template lang="pug">
.row.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Splitter
      small ui elements
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') UI Elements
      li.page-item
        a.page-link(href='\#;') Splitter
.p-1.m-3
  .row
    .cell-lg-4
      .bg-white.p-4
        h5.mt-0 Split horizontal
        .border.bd-default(data-role='splitter' style='height: 400px;')
          .d-flex.flex-justify-center.flex-align-center This is panel 1
          .d-flex.flex-justify-center.flex-align-center This is panel 2
    .cell-lg-4
      .bg-white.p-4
        h5.mt-0 Split vertical
        .border.bd-default(data-role='splitter' data-split-mode='vertical' style='height: 400px;')
          .d-flex.flex-justify-center.flex-align-center This is panel 1
          .d-flex.flex-justify-center.flex-align-center This is panel 2
    .cell-lg-4
      .bg-white.p-4
        h5.mt-0 Multi split
        .border.bd-default(data-role='splitter' style='height: 400px;')
          .d-flex.flex-justify-center.flex-align-center This is panel 1
          div(data-role='splitter' data-split-mode='vertical')
            .d-flex.flex-justify-center.flex-align-center Panel 1
            .d-flex.flex-justify-center.flex-align-center Panel 2
  br
  .row
    .cell-lg-4
      .bg-white.p-4
        h5.mt-0 Panels pre-sizes
        .border.bd-default(data-role='splitter' data-split-sizes='70, 30' style='height: 400px;')
          .d-flex.flex-justify-center.flex-align-center This is panel 1
          .d-flex.flex-justify-center.flex-align-center This is panel 2
    .cell-lg-4
      .bg-white.p-4
        h5.mt-0 Panels min size
        .border.bd-default(data-role='splitter' data-min-sizes='100' style='height: 400px;')
          .d-flex.flex-justify-center.flex-align-center This is panel 1
          .d-flex.flex-justify-center.flex-align-center This is panel 2
    .cell-lg-4
      .bg-white.p-4
        h5.mt-0 Gutter size
        .border.bd-default(data-role='splitter' data-gutter-size='10' style='height: 400px;')
          .d-flex.flex-justify-center.flex-align-center This is panel 1
          .d-flex.flex-justify-center.flex-align-center This is panel 2


</template>