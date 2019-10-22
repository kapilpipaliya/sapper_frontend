<template lang="pug">
.row.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Wizard
      small wizards
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') Wizards
      li.page-item
        a.page-link(href='\#;') Wizard
.p-1.m-3
  h4 General
  .row
    .cell-lg-6
      .bg-white.p-4
        h5.mt-0
          | Compact 
          small default
        div(data-role='wizard')
          section
            .page-content Page 1
          section
            .page-content Page 2
          section
            .page-content Page 3
          section
            .page-content Page 4
          section
            .page-content Page 5
    .cell-lg-6
      .bg-white.p-4
        h5.mt-0 Wide
        .wizard-wide-sm(data-role='wizard')
          section
            .page-content Page 1
          section
            .page-content Page 2
          section
            .page-content Page 3
          section
            .page-content Page 4
          section
            .page-content Page 5
  h4 Control style
  .row
    .cell-lg-6
      .bg-white.p-4
        h5.mt-0 Square
        div(data-role='wizard' data-button-mode='square')
    .cell-lg-6
      .bg-white.p-4
        h5.mt-0 Cycle
        div(data-role='wizard' data-button-mode='cycle')
  .row
    .cell-lg-6
      .bg-white.p-4
        h5.mt-0 Outline button
        div(data-role='wizard' data-button-mode='button' data-icon-help='<span>Help</span>' data-icon-prev='<span>Prev</span>' data-icon-next='<span>Next</span>' data-icon-finish='<span>Finish</span>')
    .cell-lg-6
      .bg-white.p-4
        h5.mt-0 Button
        div(data-role='wizard' data-button-mode='default' data-button-outline='false')

</template>