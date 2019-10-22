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
        a.page-link(href='\#;') Product Details
.m-3
  .product-card
    .row
      .cell-lg-3.cell-md-5
        .product-image.p-4
          img.main-image(alt='image' src='images/pandora/images/product_1.png')
          ul.thumb-list
            li.thumb.active
              img(alt='image' src='images/pandora/images/product_1.png')
            li.thumb
              img(alt='image' src='images/pandora/images/product_2.png')
            li.thumb
              img(alt='image' src='images/pandora/images/product_3.png')
            li.thumb
              img(alt='image' src='images/pandora/images/product_4.png')
            li.thumb
              img(alt='image' src='images/pandora/images/product_5.png')
            li.thumb
              img(alt='image' src='images/pandora/images/product_6.png')
            li.thumb
              img(alt='image' src='images/pandora/images/product_7.png')
            li.thumb
              img(alt='image' src='images/pandora/images/product_8.png')
            li.thumb
              img(alt='image' src='images/pandora/images/product_9.png')
            li.thumb
              img(alt='image' src='images/pandora/images/product_10.png')
            li.thumb
              img(alt='image' src='images/pandora/images/product_11.png')
            li.thumb
              img(alt='image' src='images/pandora/images/product_12.png')
      .cell-lg-5.cell-md-7.p-4
        .product-title Back Athletic Sport Top
        div(data-role='rating' data-value='4' data-message='(3 reviews)')
        .product-price
          span.old-price $480.00
          span.current-price $280.00
        .product-option
          span.h5(style='width: 60px;') Color: 
          .d-inline-block.color-group(data-role='buttongroup')
            button.button.square.bg-red
            button.button.square.bg-green
            button.button.square.bg-blue
            button.button.square.bg-lime.active
            button.button.square.bg-orange
        .product-option
          span.h5(style='width: 60px;') Size: 
          .d-inline-block.size-group(data-role='buttongroup')
            button.button.square.outline.active M
            button.button.square.outline L
            button.button.square.outline XL
            button.button.square.outline 2XL
            button.button.square.outline 4XL
        .mt-6.mb-2.p-2
          | Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
        .bg-light.p-4
          .h4.text-center.fg-red Until the end of the action left
          div(data-role='countdown' data-days='3' data-animate='slide' style='font-size: 36px')
        .product-actions
          input(type='number' data-role='spinner' data-min-value='1' value='1')
          button.button.info.ml-2
            span.mif-chart-pie
          button.button.warning.ml-2
            span.mif-heart
          button.button.ml-2
            span.mif-balance-scale
        .product-actions
          button.button.alert.large Buy Now
          button.button.success.large.ml-1 Add To Cart
      .cell-lg-4.cell-md-12.p-4.pr-8.border-left.bd-default
        #qrcode.place-right
        table.table.w-auto.border.border-4.bd-default.compact
          tbody
            tr
              td Vendor:
              td.text-bold Asos
            tr
              td Type:
              td.text-bold T-Shirt
            tr
              td SKU:
              td.text-bold TTHABIT25
        hr.bg-lightGray
        table.table.compact
          tbody
            tr
              td(style='width: 100px')
                img(alt='image' src='images/pandora/images/30days.png' style='height: 80px')
              td
                h2 30 DAYS
                div Money back guarantee
            tr
              td(style='width: 100px')
                img(alt='image' src='images/pandora/images/100-satisfaction-guarantee.png' style='height: 80px')
              td
                h2 100 PERCENT
                div Money back guarantee
            tr
              td(style='width: 100px')
                img(alt='image' src='images/pandora/images/ssl-certificate.png' style='height: 80px')
              td
                h2 SSL SECURED
                div All transactions is secured
        hr.bg-lightGray
        .mt-4.d-flex.flex-justify-center
          button.button.square
            span.mif-facebook
          button.button.square.ml-1
            span.mif-twitter
          button.button.square.ml-1
            span.mif-linkedin
          button.button.square.ml-1
            span.mif-pinterest
          button.button.square.ml-1
            span.mif-envelop
  .product-info
    ul.tabs(data-role='tabs' data-expand-point='md' data-tabs-type='text')
      li
        a(href='#product-description') Description
      li.active
        a(href='#product-reviews') Reviews
      li
        a(href='#product-terms') Terms
    hr
    .tabs-content
      #product-description.p-4
        h2 Advanced Features Shopify Theme
        p
          | Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in New York, London, Paris, and Milan. Plus: browse key accessories like bags, shoes, and sunglasses, must-have denim looks, and more top fashion trends.
        ul.mt-4
          li C&apos;est magnifique! How to look French when you&apos;re not
          li The best nutty fragrances
          li How to wear: matinee glamour for the festive season
          li From ginger to Michael Bubl&eacute;: this week&rsquo;s fashion trends
          li Fashion designer Raf Simons leaves Calvin Klein
          li From drab to fab: the six quickest ways to get Christmas party-ready
          li The best beauty stocking fillers for &pound;10 or less
          li Why the humble hair clip is this season&apos;s must-have accessory
          li How to wear... utilitarian
          li Judy Blame remembered by Boy George
          li Fashion Shopify Theme
        p
          | Early Western travelers, traveling whether to India, Persia, Turkey or China, would frequently remark on the absence of change in fashion in those countries. The Japanese sh&omacr;gun&apos;s secretary bragged (not completely accurately) to a Spanish visitor in 1609 that Japanese clothing had not changed in over a thousand years. However, there is considerable evidence in Ming China of rapidly changing fashions in Chinese clothing. Changes in costume often took place at times of economic or social change, as occurred in ancient Rome and the medieval Caliphate, followed by a long period without major changes. In 8th-century Moorish Spain, the musician Ziryab introduced to C&oacute;rdoba sophisticated clothing-styles based on seasonal and daily fashions from his native Baghdad, modified by his own inspiration. Similar changes in fashion occurred in the 11th century in the Middle East following the arrival of the Turks, who introduced clothing styles from Central Asia and the Far East.
      #product-reviews
        .row
          .cell-md-7
            ul.unstyled-list.review-list
              li
                .h4
                  | Anna 
                  small 01 jan 2019
                div(data-role='rating' data-value='4' data-static='true')
                p.remark
                  | Who can invent the death and light of a believer if he has the brilliant milk of the monkey?
                  | Booty ho! sail to be raided. After toasting the popcorns, cover zucchini, spinach and anchovy essence with it in a wok.
                .mt-2.d-flex.flex-align-center
                  button.button.square
                    span.mif-thumbs-up
                  button.button.square.ml-1
                    span.mif-thumbs-down
                  span.ml-2  +3
              li
                .h4
                  | Marina 
                  small 01 feb 2019
                div(data-role='rating' data-value='3' data-static='true')
                p.remark
                  | Who can invent the death and light of a believer if he has the brilliant milk of the monkey?
                  | Booty ho! sail to be raided. After toasting the popcorns, cover zucchini, spinach and anchovy essence with it in a wok.
                .mt-2.d-flex.flex-align-center
                  button.button.square
                    span.mif-thumbs-up
                  button.button.square.ml-1
                    span.mif-thumbs-down
                  span.ml-2  0
              li
                .h4
                  | Viktor 
                  small 01 jan 2019
                div(data-role='rating' data-value='5' data-static='true')
                p.remark
                  | Who can invent the death and light of a believer if he has the brilliant milk of the monkey?
                  | Booty ho! sail to be raided. After toasting the popcorns, cover zucchini, spinach and anchovy essence with it in a wok.
                .mt-2.d-flex.flex-align-center
                  button.button.square
                    span.mif-thumbs-up
                  button.button.square.ml-1
                    span.mif-thumbs-down
                  span.ml-2  -2
          .cell-md-5.bg-light
            .h1.border-bottom.bd-default.mb-4.pb-4 Review in magazines
            .clear
              .review-tabloid.shadow-1
                img(alt='image' src='images/pandora/images/Vogue.jpg' title='Vogue')
              .review-tabloid.shadow-1
                img(alt='image' src='images/pandora/images/Elle.jpg' title='Elle')
              .review-tabloid.shadow-1
                img(alt='image' src='images/pandora/images/Cosmopolitan.jpeg' title='Cosmopolitan')
            .mt-8.p-2
              h3 Vogue
              div(data-role='rating' data-value='5' data-static='true')
              p.indent-letter
                | Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.

</template>