<template lang="pug">
.row.border-bottom.bd-lightGray.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Invoice 
      small e-commerce
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') E-Commerce
      li.page-item
        a.page-link(href='\#;') Invoice
.bg-white.p-4.mt-3-minus
  .p-4
    .row
      .cell-lg-8.pl-4
        h5 Shipper
        address.reduce-1
          strong Fuse Inc.
          br
          | 2810 Country Club Road
          br
          | Cranford, NJ 07016
          br
          | Phone: +66 123 455 87
          br
          | Email: hello@fuseinc.com
          br
          | Web: www.fuseinc.com
        h5 Client
        address.reduce-1
          strong John Doe
          br
          | 9301 Wood Street
          br
          | Philadelphia, PA 19111
          br
          | Phone: +55 552 455 87
          br
          | Email: johndoe@mail.com
      .cell-lg-4.border.bd-default.d-flex.flex-column.flex-justify-center
        .text-center
          img.w-auto(alt='image' src='images/pandora/images/p-120x120.png')
        h3.text-upper.text-center Invoice R12-0007
        table.table.subcompact
          tr
            td.text-right.text-upper Invoice date
            td.text-bold Jul 30, 2019
          tr
            td.text-right.text-upper Due date
            td.text-bold Aug 30, 2019
          tr
            td.text-right.text-upper Total Due
            td.text-bold $12,000.00
  .row
    .cell-lg-12
      .p-4
        table.table.striped.row-border.d-none.d-table-lg
          thead
            tr
              th SERVICE
              th(style='width: 100px') UNIT
              th(style='width: 160px') UNIT PRICE
              th(style='width: 100px') QUANTITY
              th(style='width: 100px') TOTAL
          tbody
            tr
              td
                h5 Prototype &amp; Design
                p.reduce-1.text-muted
                  | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan, quam sed eleifend imperdiet.
              td Hour
              td $12.00
              td 240
              td $2,880.00
            tr
              td
                h5 Coding
                p.reduce-1.text-muted
                  | Vestibulum ligula sem, rutrum et libero id, porta vehicula metus. Cras dapibus neque sit amet laoreet vestibulum.
              td Hour
              td $10.50
              td 350
              td $3,675.00
            tr
              td
                h5 Testing
                p.reduce-1.text-muted
                  | Pellentesque luctus efficitur neque in finibus. Integer ut nunc in augue maximus porttitor id id nulla. In vitae erat.
              td Hour
              td $4.00
              td 50
              td $200.00
            tr
              td
                h5 Documentation &amp; Training
                p.reduce-1.text-muted
                  | Pellentesque luctus efficitur neque in finibus. Integer ut nunc in augue maximus porttitor id id nulla. In vitae erat.
              td Hour
              td $6.50
              td 260
              td $1,690.00
        table.table.striped.row-border.d-none-lg
          thead
            tr
              th SERVICE
              th TOTAL
          tbody
            tr
              td
                h5.reduce-1 Prototype &amp; Design
              td.text-right $2,880.00
            tr
              td
                h5.reduce-1 Coding
              td.text-right $3,675.00
            tr
              td
                h5.reduce-1 Testing
              td.text-right $200.00
            tr
              td
                h5.reduce-1 Documentation &amp; Training
              td.text-right $1,690.00
        hr
        table.table.row-border
          tbody
            tr
              td SUBTOTAL
              td.text-right.text-bold $8,445.00
            tr
              td TAX
              td.text-right.text-bold $675.00
            tr
              td DISCOUNT
              td.text-right.text-bold -$120.00
            tr.border-top.bd-default.h2
              td Total
              td.text-right.text-bold $9,000.00
        p.text-bold.text-center
          | Please pay within 15 days. Thank you for your business.
        p.text-small.text-muted.pl-10.pr-10.text-center
          | In condimentum malesuada efficitur. Mauris volutpat placerat auctor.
          | Ut ac congue dolor. Quisque scelerisque lacus sed feugiat fermentum.
          | Cras aliquet facilisis pellentesque. Nunc hendrerit quam at leo commodo,
          | a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia.
          | Mauris placerat sem sit amet velit mollis, in porttitor ex finibus.
          | Proin eu nibh id libero tincidunt lacinia et eget eros.

</template>