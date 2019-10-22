<template lang="pug">
.row.border-bottom.bd-lightGray.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Table
      small component
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') Table
      li.page-item
        a.page-link(href='\#;') Component
.m-3
  div
    .bg-white.p-6.text-center.text-leader
      | Metro 4 InMemory table
      p.text-leader2
        | Turn your table interactive  with search, sorting, filtering, rows counting, pagination and table inspector features with a single attribute 
        code data-role=&quot;table&quot;
    br
    .bg-white.p-4
      .d-flex.flex-wrap.flex-nowrap-lg.flex-align-center.flex-justify-center.flex-justify-start-lg.mb-2
        #t1_search.w-100.mb-2.mb-0-lg
        #t1_rows.ml-2.mr-2
        #t1_actions
          button.button.square(onclick="$('#t1').data('table').toggleInspector()")
            span.mif-cog
      table#t1.table.table-border.cell-border(data-role='table' data-source='data/table.json' data-search-wrapper='#t1_search' data-rows-wrapper='#t1_rows' data-info-wrapper='#t1_info' data-pagination-wrapper='#t1_pagination' data-horizontal-scroll='true')
      .d-flex.flex-column.flex-justify-center
        #t1_info
        #t1_pagination
  br
  .p-1
    .row
      .cell-lg-6
        .bg-white.p-4
          .text-leader2.text-center.mb-2
            | Use event 
            code onDrawCell
            |  to create your own table cell data.
          .d-flex.flex-wrap.flex-nowrap-lg.flex-align-center.flex-justify-center.flex-justify-start-lg.mb-2
            #t2_search.w-100.mb-2.mb-0-lg
            #t2_rows.ml-2
          table#t2.table.table-border.cell-border(data-role='table' data-source='data/skill.json' data-on-draw-cell='skillTableDrawCell' data-search-wrapper='#t2_search' data-rows-wrapper='#t2_rows' data-info-wrapper='#t2_info' data-pagination-wrapper='#t2_pagination' data-horizontal-scroll='true')
          .d-flex.flex-column.flex-justify-center
            #t2_info
            #t2_pagination
      .cell-lg-6
        .bg-white.p-4
          .text-leader2.text-center.mb-2
            | Export your table data to 
            code CSV file
          .d-flex.flex-wrap.flex-nowrap-lg.flex-align-center.flex-justify-center.flex-justify-start-lg.mb-2
            #t3_search.w-100.mb-2.mb-0-lg
            #t3_rows.ml-2.mr-2
            #t3_actions
              button.button.alert(onclick="$('#t3').data('table').export('CSV')")
                span.mif-file-excel
                |  Export
          table#t3.table.table-border.cell-border(data-role='table' data-source='data/table.json' data-search-wrapper='#t3_search' data-rows-wrapper='#t3_rows' data-info-wrapper='#t3_info' data-pagination-wrapper='#t3_pagination' data-horizontal-scroll='true')
          .d-flex.flex-column.flex-justify-center
            #t3_info
            #t3_pagination
  br
  .p-1
    .row
      .cell-lg-6
        .bg-white.p-4
          .text-leader2.text-center.mb-2
            | Built in check boxes to select rows!
          .d-flex.flex-wrap.flex-nowrap-lg.flex-align-center.flex-justify-center.flex-justify-start-lg.mb-2
            #t4_search.w-100.mb-2.mb-0-lg
            #t4_rows.ml-2
          table#t4.table.table-border.cell-border(data-role='table' data-source='data/skill.json' data-check='true' data-check-type='checkbox' data-search-wrapper='#t4_search' data-rows-wrapper='#t4_rows' data-info-wrapper='#t4_info' data-pagination-wrapper='#t4_pagination' data-horizontal-scroll='true')
          .d-flex.flex-column.flex-justify-center
            #t4_info
            #t4_pagination
      .cell-lg-6
        .bg-white.p-4
          .text-leader2.text-center.mb-2
            | Built in radio boxes to select one row!
          .d-flex.flex-wrap.flex-nowrap-lg.flex-align-center.flex-justify-center.flex-justify-start-lg.mb-2
            #t5_search.w-100.mb-2.mb-0-lg
            #t5_rows.ml-2
          table#t5.table.table-border.cell-border(data-role='table' data-source='data/table.json' data-check='true' data-check-type='radio' data-search-wrapper='#t5_search' data-rows-wrapper='#t5_rows' data-info-wrapper='#t5_info' data-pagination-wrapper='#t5_pagination' data-horizontal-scroll='true')
          .d-flex.flex-column.flex-justify-center
            #t5_info
            #t5_pagination
  br
  .bg-white.p-6.text-center
    | And more, more other features... Read the docs for Metro 4 
    a(href='https://metroui.org.ua/table.html') table component
    | .

</template>