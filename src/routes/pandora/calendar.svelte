<template lang="pug">
.row.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Calendar
      small ui elements
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') UI Elements
      li.page-item
        a.page-link(href='\#;') Calendar
.p-1.m-3
  .row.bg-white
    .cell-lg-4.mt-2.mb-2
      h5.mt-0 Default
      div(data-role='calendar')
    .cell-lg-4.mt-2.mb-2
      h5.mt-0 Start from monday
      div(data-role='calendar' data-week-start='1')
    .cell-lg-4.mt-2.mb-2
      h5.mt-0 i18n
      div(data-role='calendar' data-week-start='1' data-locale='uk-UA')
  br
  .row.bg-white
    .cell-lg-4.mt-2.mb-2
      h5.mt-0 Multi select
      div(data-role='calendar' data-multi-select='true')
    .cell-lg-4.mt-2.mb-2
      h5.mt-0 One day select
      div(data-role='calendar' data-multi-select='false')
    .cell-lg-4.mt-2.mb-2
      h5.mt-0 Picker
      div(data-role='calendar' data-picker-mode='true')
  br
  .row.bg-white
    .cell-lg-4.mt-2.mb-2
      h5.mt-0 Exclude days
      div(data-role='calendar' data-input-format='dd-mm-yyyy' data-show='15-10-2017' data-exclude='\
      10-10-2017,\
      11-10-2017,\
      12-10-2017,\
      13-10-2017,\
      14-10-2017,\
      15-10-2017\
      ')
    .cell-lg-4.mt-2.mb-2
      h5.mt-0 Pre-select days
      div(data-role='calendar' data-show='2017/10/15' data-preset='\
      2017/10/10,\
      2017/10/11,\
      2017/10/12,\
      2017/10/13,\
      2017/10/14,\
      2017/10/15,\
      2017/10/16')
    .cell-lg-4.mt-2.mb-2
      h5.mt-0 Special days
      div(data-role='calendar' data-show='2017/10/15' data-special='\
      2017/10/10,\
      2017/10/11,\
      2017/10/12,\
      2017/10/13,\
      2017/10/14,\
      2017/10/15,\
      2017/10/16')
  br
  .row.bg-white
    .cell-lg-4.mt-2.mb-2
      h5.mt-0 min and max dates
      div(data-role='calendar' data-show='2017/10/15' data-min-date='2017/10/08' data-max-date='2017/10/25')
    .cell-lg-4.mt-2.mb-2
      h5.mt-0 Show specific date
      div(data-role='calendar' data-show='1972/12/21')
    .cell-lg-4.mt-2.mb-2
      h5.mt-0 Customize
      div(data-role='calendar' data-show='2017/10/15' data-exclude='2017/10/01, 2017/10/02, 2017/10/03' data-preset='2017/10/15, 2017/10/16, 2017/10/17' data-cls-selected='bg-cyan fg-white' data-cls-excluded='bg-dark fg-white' data-cls-today='bg-pink fg-white' data-cls-today-button='success' data-cls-clear-button='alert' data-cls-done-button='primary' data-cls-calendar-header='bg-green' data-cls-calendar-content='bg-orange fg-white' data-cls-calendar-footer='bg-teal')
  br
  .row.bg-white
    .cell-lg-6.mt-2.mb-2
      h5.mt-0 Wide mode
      div(data-role='calendar' data-wide='true')
      h5 Compact wide mode
      .compact(data-role='calendar' data-wide='true')
    .cell-lg-6.mt-2.mb-2
      h5.mt-0 Compact mode
      .compact(data-role='calendar')


</template>