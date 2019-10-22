<template lang="pug">
.row.border-bottom.bd-lightGray.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Table
      small classes
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') Table
      li.page-item
        a.page-link(href='\#;') Classes
.m-3
  .row
    .cell-lg-6
      .bg-white.p-4.mt-2.h-100
        h5
          | Default 
          code HTML
          |  table
        hr
        table
          thead
            tr
              th #
              th First Name
              th Last Name
              th Username
          tbody
            tr
              td 1
              td Bill
              td Gates
              td @billy
            tr
              td 2
              td Steve
              td Jobs
              td @stevy
            tr
              td 3
              td Larry
              td Page
              td @larry
    .cell-lg-6
      .bg-white.p-4.mt-2.h-100
        h5
          | Make table with class 
          code .table
        hr
        table.table
          thead
            tr
              th #
              th First Name
              th Last Name
              th Username
          tbody
            tr
              td 1
              td Bill
              td Gates
              td @billy
            tr
              td 2
              td Steve
              td Jobs
              td @stevy
            tr
              td 3
              td Larry
              td Page
              td @larry
  .row.mt-4
    .cell-lg-6
      .bg-white.p-4.mt-2.h-100
        h5 Sortable columns classes
        hr
        table.table
          thead
            tr
              th.sortable-column.sort-asc #
              th.sortable-column First Name
              th.sortable-column Last Name
              th.sortable-column Username
          tbody
            tr
              td 1
              td Bill
              td Gates
              td @billy
            tr
              td 2
              td Steve
              td Jobs
              td @stevy
            tr
              td 3
              td Larry
              td Page
              td @larry
    .cell-lg-6
      .bg-white.p-4.mt-2.h-100
        h5 Striped rows
        hr
        table.table.striped
          thead
            tr
              th #
              th First Name
              th Last Name
              th Username
          tbody
            tr
              td 1
              td Bill
              td Gates
              td @billy
            tr
              td 2
              td Steve
              td Jobs
              td @stevy
            tr
              td 3
              td Larry
              td Page
              td @larry
  .row.mt-4
    .cell-lg-6
      .bg-white.p-4.mt-2.h-100
        h5
          | Hover rows with class 
          code .row-hover
        hr
        table.table.row-hover
          thead
            tr
              th #
              th First Name
              th Last Name
              th Username
          tbody
            tr
              td 1
              td Bill
              td Gates
              td @billy
            tr
              td 2
              td Steve
              td Jobs
              td @stevy
            tr
              td 3
              td Larry
              td Page
              td @larry
    .cell-lg-6
      .bg-white.p-4.mt-2.h-100
        h5
          | Hover cells with class 
          code .cell-hover
        hr
        table.table.cell-hover
          thead
            tr
              th #
              th First Name
              th Last Name
              th Username
          tbody
            tr
              td 1
              td Bill
              td Gates
              td @billy
            tr
              td 2
              td Steve
              td Jobs
              td @stevy
            tr
              td 3
              td Larry
              td Page
              td @larry
  .row.mt-4
    .cell-lg-4
      .bg-white.p-4.mt-2.h-100
        h5
          | Class 
          code .table-border
        hr
        table.table.table-border
          thead
            tr
              th #
              th First Name
              th Last Name
              th Username
          tbody
            tr
              td 1
              td Bill
              td Gates
              td @billy
            tr
              td 2
              td Steve
              td Jobs
              td @stevy
            tr
              td 3
              td Larry
              td Page
              td @larry
    .cell-lg-4
      .bg-white.p-4.mt-2.h-100
        h5
          | Class 
          code .row-border
        hr
        table.table.row-border
          thead
            tr
              th #
              th First Name
              th Last Name
              th Username
          tbody
            tr
              td 1
              td Bill
              td Gates
              td @billy
            tr
              td 2
              td Steve
              td Jobs
              td @stevy
            tr
              td 3
              td Larry
              td Page
              td @larry
    .cell-lg-4
      .bg-white.p-4.mt-2.h-100
        h5
          | Class 
          code .cell-border
        hr
        table.table.cell-border
          thead
            tr
              th #
              th First Name
              th Last Name
              th Username
          tbody
            tr
              td 1
              td Bill
              td Gates
              td @billy
            tr
              td 2
              td Steve
              td Jobs
              td @stevy
            tr
              td 3
              td Larry
              td Page
              td @larry
  .row.mt-4
    .cell-lg-4
      .bg-white.p-4.mt-2.h-100
        h5 Default table paddings
        hr
        table.table.table-border.cell-border
          thead
            tr
              th #
              th First Name
              th Last Name
              th Username
          tbody
            tr
              td 1
              td Bill
              td Gates
              td @billy
            tr
              td 2
              td Steve
              td Jobs
              td @stevy
            tr
              td 3
              td Larry
              td Page
              td @larry
    .cell-lg-4
      .bg-white.p-4.mt-2.h-100
        h5
          | Class 
          code .compact
        hr
        table.table.table-border.cell-border.compact
          thead
            tr
              th #
              th First Name
              th Last Name
              th Username
          tbody
            tr
              td 1
              td Bill
              td Gates
              td @billy
            tr
              td 2
              td Steve
              td Jobs
              td @stevy
            tr
              td 3
              td Larry
              td Page
              td @larry
    .cell-lg-4
      .bg-white.p-4.mt-2.h-100
        h5
          | Class 
          code .subcompact
        hr
        table.table.table-border.cell-border.subcompact
          thead
            tr
              th #
              th First Name
              th Last Name
              th Username
          tbody
            tr
              td 1
              td Bill
              td Gates
              td @billy
            tr
              td 2
              td Steve
              td Jobs
              td @stevy
            tr
              td 3
              td Larry
              td Page
              td @larry


</template>