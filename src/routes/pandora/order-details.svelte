<script>
import { onMount, onDestroy} from "svelte";
    var shippingPanelButtons = [
        {
            html: "<span class='mif-cog'>",
            cls: "bg-transparent",
            onclick: "alert('You press shipping cog button')"
        }
    ];
    var billingPanelButtons = [
        {
            html: "<span class='mif-cog'>",
            cls: "bg-transparent",
            onclick: "alert('You press billing cog button')"
        }
    ];
    var customerPanelButtons = [
        {
            html: "<span class='mif-cog'>",
            cls: "bg-transparent",
            onclick: "alert('You press customer cog button')"
        }
    ];
    onMount(() => {
        var img = J("<img>").appendTo(J("#barcode-wrapper"));
        img.JsBarcode("5901234123457", {
            flat: true,
            height: 40
        });
    });
</script>
<template lang="pug">
.row.border-bottom.bd-lightGray.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Order details
      small e-commerce
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') E-Commerce
      li.page-item
        a.page-link(href='\#;') Order details
.p-1.m-3
  .d-flex.flex-align-center.p-2.bg-white
    button.button.square.outline
      span.mif-arrow-left
    span.ml-2.text-leader
      | Order # 
      span.text-bold 756442208-00002
    .ml-auto
      button.button.square.outline
        span.mif-chevron-left
      button.button.square.outline
        span.mif-chevron-right
      button.button.square.outline
        span.mif-cog
  br
  .row
    .cell-lg-7
      .p-4.bg-white
        ul(data-role='tabs' data-expand='true')
          li
            a(href='#order-products') General
        div
          #order-products
            table.table.striped
              thead
                tr
                  th Product
                  th Price
                  th.text-center Quantity
                  th.text-right Subtotal
              tbody
                tr
                  td Apple iPhone 6s 32 GB
                  td $299.00
                  td.text-center 1
                  td.text-right $299.00
                tr
                  td Apple iPhone 6s 32 GB
                  td $299.00
                  td.text-center 1
                  td.text-right $299.00
                tr
                  td Apple iPhone 6s 32 GB
                  td $299.00
                  td.text-center 1
                  td.text-right $299.00
                tr
                  td Apple iPhone 6s 32 GB
                  td $299.00
                  td.text-center 1
                  td.text-right $299.00
                tr
                  td Apple iPhone 6s 32 GB
                  td $299.00
                  td.text-center 1
                  td.text-right $299.00
              thead
                tr.border-top.bd-default
                  td.text-right(colspan='3') Subtotal
                  td.text-right $1,495.00
                tr
                  td.text-right(colspan='3') Shipping cost
                  td.text-right $132.00
                tr
                  td.text-right(colspan='3') Taxes
                  td.text-right $149.50
                tr.border-top.bd-default
                  td.text-right.text-leader(colspan='3') Total
                  td.text-leader.text-right $1,776.50
            .order-status
              ul(data-role='tabs' data-expand='true')
                li.active
                  a(href='\#;') Status
              .border-left.border-right.border-bottom.bd-default.p-4
                .d-flex.mt-2.mb-2
                  select#sel-statuses(data-role='select')
                    option(value='1') Pre-order
                    option(value='2') Payed
                    option(value='3') Payment error
                    option(value='4') Delivered
                    option(value='5') Preparing
                    option(value='6') Awaiting payment
                    option(value='7') Shipping
                  button.button.primary.ml-2(onclick='updateOrderStatus()') UPDATE STATUS
                table#table-order-statuses.table.striped.subcompact
                  tbody
                    tr
                      td
                        code.success Payment accepted
                      td.text-right 01/01/2019 12:00
                    tr
                      td
                        code.warning Awaiting payment
                      td.text-right 12/31/2018 10:00
                    tr
                      td
                        code.info Order created
                      td.text-right 12/31/2018 09:30
          #order-addons
    .cell-lg-5
      .row
        .cell-lg-7
          .h-100(data-role='panel' data-title-caption='Customer' data-title-icon="<span class='mif-user'>" data-cls-content='p-4 h-100' data-custom-buttons='customerPanelButtons')
            h5.mt-0.mb-0 John Doe
            hr
            address
              | Customer #: 
              span.text-bold 00002
              br
              | Email: 
              span.text-bold customer@domain.com
              br
              | IP address: 
              span.text-bold 127.0.0.1
              br
              | Phone: 
              span.text-bold +1 646-386-3600
        .cell-lg-5
          .h-100(data-role='panel' data-title-caption='Billing address' data-title-icon="<span class='mif-dollar'>" data-cls-content='p-4 h-100' data-custom-buttons='billingPanelButtons')
            h5.mt-0.mb-0 John Doe
            hr
            address
              | 60 Center Street #5
              br
              | New York, 01324
              br
              | United States
              br
              | +1 646-386-3600
      br
      div(data-role='panel' data-title-caption='Shipping address' data-title-icon="<span class='mif-truck'>" data-cls-content='p-4' data-custom-buttons='shippingPanelButtons')
        .row
          .cell-lg-5
            .p-4.h-100
              h5.mt-0.mb-0 John Doe
              hr
              address
                | 60 Center Street #5
                br
                | New York, 01324
                br
                | United States
                br
                | +1 646-386-3600
              hr
              code.success Shipped
              code.warning Delivered
          .cell-lg-7
            iframe(src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28783.87033164108!2d-73.99476864626776!3d40.68428682594991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2z0JHQsNGA0LrQu9Cw0LnRgS3QptC10L3RgtGA!5e0!3m2!1sru!2sua!4v1554833928953!5m2!1sru!2sua' width='100%' height='300' frameborder='0' style='border:0' allowfullscreen='' title='iframe')
      br
      #barcode-wrapper.d-flex.flex-justify-center
        img#barcode(jsbarcode-height='40' jsbarcode-value='5901234123457' jsbarcode-flat='true' alt='image')


</template>