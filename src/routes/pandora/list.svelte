<template lang="pug">
.row.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | List
      small ui elements
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') UI Elements
      li.page-item
        a.page-link(href='\#;') List
.m-3
  div
    .bg-white.p-6.text-center
      | Metro 4 InMemory list
      p.text-leader2
        | Turn your list interactive with search, sorting, filtering, rows counting and pagination features with a single attribute 
        code data-role=&quot;list&quot;
        | .
      p
        | Read more about 
        code List
        |  in the 
        a(href='https://metroui.org.ua/list.html') official docs
        | .
.p-1.m-3
  .bg-white.p-4
    .example
      p.text-center.h3.text-light Sort by
      .d-flex.flex-justify-center.flex-wrap.m-2
        button.button.m-1(onclick="$('#paintings').data('list').sorting('painting-price','asc',true)")
          | Price 
          span.mif-arrow-up
        button.button.m-1(onclick="$('#paintings').data('list').sorting('painting-price','desc',true)")
          | Price 
          span.mif-arrow-down
        button.button.m-1(onclick="$('#paintings').data('list').sorting('painting-author','asc',true)")
          | Author 
          span.mif-arrow-up
        button.button.m-1(onclick="$('#paintings').data('list').sorting('painting-author','desc',true)")
          | Author 
          span.mif-arrow-down
        button.button.m-1(onclick="$('#paintings').data('list').sorting('painting-name','asc',true)")
          | Name 
          span.mif-arrow-up
        button.button.m-1(onclick="$('#paintings').data('list').sorting('painting-name','desc',true)")
          | Name 
          span.mif-arrow-down
        .w-100.row.flex-justify-center
          .cell-md-4.mt-4
            select(data-role='select' data-filter='false' data-prepend='Paints By:' data-on-change="$('#paintings').data('list').filter(this.value)")
              option(value='' selected='') All
              option(value='gogen') Gogen
              option(value='sezann') Sezann
              option(value='bacon') Bacon
              option(value='klimt') Klimt
              option(value='munk') Munk
              option(value='picasso') Picasso
              option(value='kuning') Kuning
      ul#paintings(data-role='list' data-sort-class='painting-price' data-filter-class='painting-author' data-sort-dir='desc' data-cls-list='unstyled-list row flex-justify-center mt-4' data-cls-list-item='cell-sm-6 cell-md-4')
        li
          figure.text-center
            .img-container.thumbnail
              img(alt='image' src='images/pandora/images/gogen.jpg')
            figcaption.painting-price(data-format='money') $ 300M
        li
          figure.text-center
            .img-container.thumbnail
              img(alt='image' src='images/pandora/images/sezann.jpg')
            figcaption.painting-price(data-format='money') $ 250M
        li
          figure.text-center
            .img-container.thumbnail
              img(alt='image' src='images/pandora/images/kuning.jpg')
            figcaption.painting-price(data-format='money') $ 137M
        li
          figure.text-center
            .img-container.thumbnail
              img(alt='image' src='images/pandora/images/klimt.jpg')
            figcaption.painting-price(data-format='money') $ 135M
        li
          figure.text-center
            .img-container.thumbnail
              img(alt='image' src='images/pandora/images/munk.jpg')
            figcaption.painting-price(data-format='money') $ 119M
        li
          figure.text-center
            .img-container.thumbnail
              img(alt='image' src='images/pandora/images/picasso.jpg')
            figcaption.painting-price(data-format='money') $ 106M
        li
          figure.text-center
            .img-container.thumbnail
              img(alt='image' src='images/pandora/images/bacon.jpg')
            figcaption.painting-price(data-format='money') $ 142M

</template>