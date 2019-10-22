<template lang="pug">
.row.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | InfoBox
      small information
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') Information
      li.page-item
        a.page-link(href='\#;') InfoBox
#demoInfoBox1.info-box(data-role='infobox')
  span.button.square.closer
  .info-box-content
    h3 What is Lorem Ipsum?
    p Lorem Ipsum is simply dummy text of the printing and typesetting industry.
.p-1.m-3
  .bg-white.p-4.text-center
    button.button(onclick="$('#demoInfoBox1').data('infobox').open()") Open pre-defined dialog
    button.button.alert(onclick="\
    var html_content = '<h3>What is Lorem Ipsum?</h3><p>Lorem Ipsum is simply dummy text...</p>';\
    Metro.infobox.create(html_content, null);\
    ") Open runtime dialog
  br
  .row
    .cell-md-6.cell-lg-4.mt-2
      .info-box.pos-relative
        span.button.square.closer
        .info-box-content
          h3.mt-0 What is Lorem Ipsum?
          |                     Strawberries can be mashed up with minced herring, also try seasoning the pudding with sauerkraut sauce.
    .cell-md-6.cell-lg-4.mt-2
      .info-box.primary.pos-relative
        span.button.square.closer
        .info-box-content
          h3.mt-0 What is Lorem Ipsum?
          |                     Strawberries can be mashed up with minced herring, also try seasoning the pudding with sauerkraut sauce.
    .cell-md-6.cell-lg-4.mt-2
      .info-box.secondary.pos-relative
        span.button.square.closer
        .info-box-content
          h3.mt-0 What is Lorem Ipsum?
          |                     Strawberries can be mashed up with minced herring, also try seasoning the pudding with sauerkraut sauce.
    .cell-md-6.cell-lg-4.mt-2
      .info-box.light.pos-relative
        span.button.square.closer
        .info-box-content
          h3.mt-0 What is Lorem Ipsum?
          |                     Strawberries can be mashed up with minced herring, also try seasoning the pudding with sauerkraut sauce.
    .cell-md-6.cell-lg-4.mt-2
      .info-box.dark.pos-relative
        span.button.square.closer
        .info-box-content
          h3.mt-0 What is Lorem Ipsum?
          |                     Strawberries can be mashed up with minced herring, also try seasoning the pudding with sauerkraut sauce.
    .cell-md-6.cell-lg-4.mt-2
      .info-box.alert.pos-relative
        span.button.square.closer
        .info-box-content
          h3.mt-0 What is Lorem Ipsum?
          |                     Strawberries can be mashed up with minced herring, also try seasoning the pudding with sauerkraut sauce.
    .cell-md-6.cell-lg-4.mt-2
      .info-box.warning.pos-relative
        span.button.square.closer
        .info-box-content
          h3.mt-0 What is Lorem Ipsum?
          |                     Strawberries can be mashed up with minced herring, also try seasoning the pudding with sauerkraut sauce.
    .cell-md-6.cell-lg-4.mt-2
      .info-box.info.pos-relative
        span.button.square.closer
        .info-box-content
          h3.mt-0 What is Lorem Ipsum?
          |                     Strawberries can be mashed up with minced herring, also try seasoning the pudding with sauerkraut sauce.
    .cell-md-6.cell-lg-4.mt-2
      .info-box.success.pos-relative
        span.button.square.closer
        .info-box-content
          h3.mt-0 What is Lorem Ipsum?
          |                     Strawberries can be mashed up with minced herring, also try seasoning the pudding with sauerkraut sauce.
  br
  .p-6.text-center
    | Read more about info boxes in the 
    a(href='https://metroui.org.ua/info-box.html') official docs
    | .

</template>