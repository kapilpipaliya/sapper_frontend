<template lang="pug">
.row.border-bottom.bd-lightGray.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Pandora 
      small Version 1.0
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') eCommerce
      li.page-item
        a.page-link(href='\#;') Product List
.product-list-wrapper.m-3
  .product-list-service.d-flex.flex-wrap.flex-justify-center.mb-4
    h4 Products
    .ml-auto.d-flex.flex-wrap.flex-justify-center
      .list-sort-as.d-flex.flex-align-center
        span.mr-2 Sort as: 
        .split-button.small
          button.button.bg-transparent.current-sort.text-bold Discount
          button.split.dropdown-toggle.bg-transparent
          ul#product-list-sort.d-menu(data-role='dropdown')
            li
              a(href='\#;' data-sort-col='sales' data-sort-dir='desc') Best selling
            li
              a(href='\#;' data-sort-col='discount' data-sort-dir='desc') Discount
            li
              a(href='\#;' data-sort-col='product-title' data-sort-dir='asc') Name A-Z
            li
              a(href='\#;' data-sort-col='product-title' data-sort-dir='desc') Name Z-A
            li
              a(href='\#;' data-sort-col='current-price' data-sort-dir='asc') Price Low to High
            li
              a(href='\#;' data-sort-col='current-price' data-sort-dir='desc') Price High to Low
      .list-view-as.d-flex.flex-align-center.ml-4
        span.mr-2 View as: 
        div(data-role='buttongroup')
          button.button.small(data-view='list')
            span.mif-list
          button.button.active.small(data-view='tiles')
            span.mif-apps
  ul.product-list(data-role='list' data-show-search='true' data-show-pagination='true' data-show-items-steps='true' data-items='12' data-items-steps='all, 12, 24' data-cls-list-pagination='mt-4 d-flex flex-justify-center' data-cls-list-top='row' data-cls-search='cell-sm-9' data-cls-items-count='cell-sm-3' data-list-items-count-title="<span class='mif-eye'>" data-list-search-title="<span class='mif-search'>" data-sort-class='discount' data-sort-dir='desc')
    li.product-list-item
      .sales(data-format='int') 4
      .product-image
        img(alt='image' src='images/pandora/images/product_1.png')
      .product-title Back Athletic Sport Top
      .product-price
        span.current-price(data-format='money') $480.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 1
      .discount(data-format='int') 60
      .product-image
        img(alt='image' src='images/pandora/images/product_2.png')
        .badge.inside.bg-red.fg-white -60%
        div(data-role='countdown' data-days='3' data-animate='slide')
      .product-title Blazer Open Front
      .product-price
        span.old-price(data-format='money') $300.00
        span.current-price(data-format='money') $180.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 0
      .discount(data-format='int') 60
      .product-image
        img(alt='image' src='images/pandora/images/product_3.png')
        .badge.inside.bg-red.fg-white -60%
        div(data-role='countdown' data-days='2' data-animate='slide')
      .product-title Bow tie neck swing
      .product-price
        span.old-price(data-format='money') $300.00
        span.current-price(data-format='money') $180.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 10
      .discount(data-format='int') 10
      .product-image
        img(alt='image' src='images/pandora/images/product_4.png')
        .badge.inside.bg-red.fg-white -10%
        div(data-role='countdown' data-days='30' data-animate='slide')
      .product-title Color Block Tunic Shirt
      .product-price
        span.old-price $200.00
        span.current-price(data-format='money') $180.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 4
      .product-image
        img(alt='image' src='images/pandora/images/product_5.png')
      .product-title Contrast Shawl Collar
      .product-price
        span.current-price(data-format='money') $580.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 12
      .product-image
        img(alt='image' src='images/pandora/images/product_6.png')
      .product-title Drapey Open Cardigan
      .product-price
        span.current-price(data-format='money') $480.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 20
      .product-image
        img(alt='image' src='images/pandora/images/product_7.png')
        .badge.inside.bg-green.fg-white.enlarge-2 Bestseller
      .product-title Flapper Dress Accessories
      .product-price
        span.current-price(data-format='money') $120.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 54
      .product-image
        img(alt='image' src='images/pandora/images/product_8.png')
        .badge.inside.bg-green.fg-white.enlarge-2 Bestseller
      .product-title Full-Zip Polar Jacket
      .product-price
        span.current-price(data-format='money') $260.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 36
      .product-image
        img(alt='image' src='images/pandora/images/product_9.png')
        .badge.inside.bg-green.fg-white.enlarge-2 Bestseller
      .product-title Lace Bodycon Dress
      .product-price
        span.current-price(data-format='money') $260.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 45
      .product-image
        img(alt='image' src='images/pandora/images/product_10.png')
        .badge.inside.bg-green.fg-white.enlarge-2 Bestseller
      .product-title Men Stylist Tank Tops
      .product-price
        span.current-price(data-format='money') $410.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 13
      .product-image
        img(alt='image' src='images/pandora/images/product_11.png')
      .product-title Neck Reverse Pleat
      .product-price
        span.current-price(data-format='money') $150.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 0
      .product-image
        img(alt='image' src='images/pandora/images/product_12.png')
      .product-title Neck Ruffle Polka
      .product-price
        span.current-price(data-format='money') $350.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 0
      .product-image
        img(alt='image' src='images/pandora/images/product_13.png')
      .product-title Peak Lapel Pants Suit
      .product-price
        span.current-price(data-format='money') $480.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 0
      .product-image
        img(alt='image' src='images/pandora/images/product_14.png')
      .product-title Rolled Sleeve Shirt
      .product-price
        span.current-price(data-format='money') $345.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 0
      .product-image
        img(alt='image' src='images/pandora/images/product_15.png')
      .product-title Sexy Halter Neck Short
      .product-price
        span.current-price(data-format='money') $105.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 0
      .product-image
        img(alt='image' src='images/pandora/images/product_16.png')
      .product-title Sexy Women Sleeveless
      .product-price
        span.current-price(data-format='money') $150.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 0
      .product-image
        img(alt='image' src='images/pandora/images/product_17.png')
      .product-title Skinny Ankle Jean
      .product-price
        span.current-price(data-format='money') $110.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 0
      .product-image
        img(alt='image' src='images/pandora/images/product_18.png')
      .product-title Skinny Stretch Jegging
      .product-price
        span.current-price(data-format='money') $220.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 0
      .product-image
        img(alt='image' src='images/pandora/images/product_19.png')
      .product-title Trousers Ponte Knit
      .product-price
        span.current-price(data-format='money') $105.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 0
      .product-image
        img(alt='image' src='images/pandora/images/product_20.png')
      .product-title V-Neck Pullover Cashmere
      .product-price
        span.current-price(data-format='money') $360.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 0
      .product-image
        img(alt='image' src='images/pandora/images/product_21.png')
      .product-title Wedgie Icon Jeans
      .product-price
        span.current-price(data-format='money') $105.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 0
      .product-image
        img(alt='image' src='images/pandora/images/product_22.png')
      .product-title Women Supersoft Terry
      .product-price
        span.current-price(data-format='money') $150.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 0
      .product-image
        img(alt='image' src='images/pandora/images/product_23.png')
      .product-title Womens Cosima Tops
      .product-price
        span.current-price(data-format='money') $195.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now
    li.product-list-item
      .sales(data-format='int') 0
      .product-image
        img(alt='image' src='images/pandora/images/product_24.png')
      .product-title Womens Sleepshirt Cotton
      .product-price
        span.current-price(data-format='money') $100.00
      .product-desc
        | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
      .product-actions
        button.button.success
          span.mif-add-shopping-cart
        button.button.warning
          span.mif-heart
        button.button.warning
          span.mif-heart
        button.button
          span.mif-balance-scale
        button.button.alert Buy Now

</template>