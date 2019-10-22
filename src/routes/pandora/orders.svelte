<template lang="pug">
.row.border-bottom.bd-lightGray.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Orders 
      small e-commerce
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') E-Commerce
      li.page-item
        a.page-link(href='\#;') Orders
.p-1.mt-4-minus
  .bg-white.p-4
    div
      .p-4.mb-3.border.bd-default
        input(type='checkbox' data-role='switch' data-caption='Preparing' data-cls-caption='fg-dark' onclick="setFilter('filterPreparing', this.checked)")
        input(type='checkbox' data-role='switch' data-caption='Awaiting' data-cls-caption='fg-cyan' onclick="setFilter('filterAwaiting', this.checked)")
        input(type='checkbox' data-role='switch' data-caption='Payed' data-cls-caption='fg-green' onclick="setFilter('filterPayed', this.checked)")
        input(type='checkbox' data-role='switch' data-caption='Shipped' data-cls-caption='fg-steel' onclick="setFilter('filterShipped', this.checked)")
        input(type='checkbox' data-role='switch' data-caption='Delivered' data-cls-caption='fg-teal' onclick="setFilter('filterDelivered', this.checked)")
        input(type='checkbox' data-role='switch' data-caption='Error' data-cls-caption='fg-red' onclick="setFilter('filterError', this.checked)")
      .d-flex.flex-wrap.flex-nowrap-lg.flex-align-center.flex-justify-center.flex-justify-start-lg.mb-2
        #t1_search.w-100.mb-2.mb-0-lg
        #t1_rows.ml-2.mr-2
        #t1_actions
          button.button.square(onclick="$('#t1').data('table').toggleInspector()")
            span.mif-cog
      table#t1.table.table-border.cell-border(data-role='table' data-source='data/orders.json' data-search-wrapper='#t1_search' data-rows-wrapper='#t1_rows' data-info-wrapper='#t1_info' data-pagination-wrapper='#t1_pagination' data-horizontal-scroll='true' data-on-draw-cell='drawCell' data-filters-operator='or')
      .d-flex.flex-column.flex-justify-center
        #t1_info
        #t1_pagination


</template>