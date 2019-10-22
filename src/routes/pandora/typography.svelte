<template lang="pug">
.row.border-bottom.bd-lightGray.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Typography
      small UI Elements
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') UI Elements
      li.page-item
        a.page-link(href='\#;') Typography
.m-3
  .p-1
    .row
      .cell-lg-6
        .bg-white.p-4.h-100
          h4.mt-0 Super headlines
          hr
          table.table.row-border
            tbody
              tr
                td
                  span.display4 .display4
              tr
                td
                  span.display3 .display3
              tr
                td
                  span.display2 .display2
              tr
                td
                  span.display1 .display1
      .cell-lg-6
        .bg-white.p-4.h-100
          h4.mt-0 Headlines
          hr
          table.table.row-border
            tbody
              tr
                td(style='width: 80px')
                  span.tally &lt;h1&gt;
                td.d-none.d-block-sm
                  span.h1 .h1 Heading
                td 48px
              tr
                td
                  span.tally &lt;h2&gt;
                td.d-none.d-block-sm
                  span.h2 .h2 Heading
                td 32px
              tr
                td
                  span.tally &lt;h3&gt;
                td.d-none.d-block-sm
                  span.h3 .h3 Heading
                td 28px
              tr
                td
                  span.tally &lt;h4&gt;
                td.d-none.d-block-sm
                  span.h4 .h4 Heading
                td 24px
              tr
                td
                  span.tally &lt;h5&gt;
                td.d-none.d-block-sm
                  span.h5 .h5 Heading
                td 20px
              tr
                td
                  span.tally &lt;h6&gt;
                td.d-none.d-block-sm
                  span.h6 .h6 Heading
                td 18px
  br
  .p-1
    .bg-white.p-4
      h4.mt-0 Heading secondary text
      hr
      table.table.row-border
        tbody
          tr
            td
              code &lt;h1&gt;
            td
              h1
                | Header 
                small Secondary
          tr
            td
              code &lt;h2&gt;
            td
              h2
                | Header 
                small Secondary
          tr
            td
              code &lt;h3&gt;
            td
              h3
                | Header 
                small Secondary
          tr
            td
              code &lt;h4&gt;
            td
              h4
                | Header 
                small Secondary
          tr
            td
              code &lt;h5&gt;
            td
              h5
                | Header 
                small Secondary
          tr
            td
              code &lt;h6&gt;
            td
              h6
                | Header 
                small Secondary
  br
  .p-1
    .bg-white.p-4
      h4.mt-0 Inline text elements
      hr
      p
        | You can use the mark tag to 
        mark highlight
        |  text.
      p
        del This line of text is meant to be treated as deleted text.
      p
        s This line of text is meant to be treated as no longer accurate.
      p
        ins This line of text is meant to be treated as an addition to the document.
      p
        u This line of text will render as underlined
      p
        small This line of text is meant to be treated as fine print.
      p
        strong This line rendered as bold text.
      p
        em This line rendered as italicized text.
  br
  .p-1
    .bg-white.p-4
      h4.mt-0 Paragraph
      hr
      .row
        .cell-lg-12
          h5 Default
          p
            | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          p
            | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      .row.mt-2
        .cell-lg-6
          h5 Indent
          p.indent
            | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        .cell-lg-6
          h5 Indent letter
          p.indent-letter
            | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      .row.mt-2
        .cell-lg-6
          h5 Leader
          p.text-leader
            | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        .cell-lg-6
          h5 Leader2
          p.text-leader2
            | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      .row.mt-2
        .cell-lg-6
          h5 Secondary
          p.text-secondary
            | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        .cell-lg-6
          h5 Small
          p.text-small
            | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  br
  .p-1
    .row
      .cell-lg-6
        .bg-white.p-4
          h4.mt-0 Blockquote
          blockquote
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            small
              | Someone famous
              cite(title='Source Title') Source Title
          blockquote.right-side
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            small
              | Someone famous
              cite(title='Source Title') Source Title
      .cell-lg-6
        .bg-white.p-4.clear
          h4.mt-0 Remark
          .d-flex.flex-wrap
            .remark.m-1
              | Lorem Ipsum is simply dummy text.
            .remark.alert.m-1
              | Lorem Ipsum is simply dummy text.
            .remark.success.m-1
              | Lorem Ipsum is simply dummy text.
            .remark.info.m-1
              | Lorem Ipsum is simply dummy text.
            .remark.warning.m-1
              | Lorem Ipsum is simply dummy text.
            .remark.primary.m-1
              | Lorem Ipsum is simply dummy text.
            .remark.secondary.m-1
              | Lorem Ipsum is simply dummy text.
            .remark.dark.m-1
              | Lorem Ipsum is simply dummy text.
            .remark.yellow.m-1
              | Lorem Ipsum is simply dummy text.
  br
  .p-1
    .row
      .cell-lg-6
        .bg-white.p-4
          h4.mt-0 Ordered list
          hr
          ol
            li Sunt tataes consumere talis, emeritis orgiaes.
            li Nunquam transferre plasmator.
            li Heu, germanus calcaria!
            li
              | Vortexs resistere in mare!
              ol
                li Resistentias cantare!
                li Lacteas volare in camerarius rugensis civitas!
                li Nunquam manifestum genetrix.
                li Pol, a bene diatria, cotta!
            li Sunt tataes consumere talis, emeritis orgiaes.
            li Nunquam transferre plasmator.
            li Heu, germanus calcaria!
      .cell-lg-6
        .bg-white.p-4
          h4.mt-0 Unordered list
          hr
          ul
            li Sunt tataes consumere talis, emeritis orgiaes.
            li Nunquam transferre plasmator.
            li Heu, germanus calcaria!
            li
              | Vortexs resistere in mare!
              ul
                li Resistentias cantare!
                li Lacteas volare in camerarius rugensis civitas!
                li Nunquam manifestum genetrix.
                li Pol, a bene diatria, cotta!
            li Sunt tataes consumere talis, emeritis orgiaes.
            li Nunquam transferre plasmator.
            li Heu, germanus calcaria!
  br
  .p-1
    .row
      .cell-lg-6
        .bg-white.p-4
          h4.mt-0 Un-styled list
          hr
          ul.unstyled-list
            li Sunt tataes consumere talis, emeritis orgiaes.
            li Heu, germanus calcaria!
            li
              | Vortexs resistere in mare!
              ul.unstyled-list
                li Resistentias cantare!
                li Lacteas volare in camerarius rugensis civitas!
                li Pol, a bene diatria, cotta!
            li Sunt tataes consumere talis, emeritis orgiaes.
            li Nunquam transferre plasmator.
            li Heu, germanus calcaria!
        br
        .bg-white.p-4
          h4.mt-0 Inline list
          hr
          ul.inline-list
            li Home.
            li Base
            li Widgets
            li Contacts
            li Inline item
      .cell-lg-6
        .bg-white.p-4
          h4.mt-0 Step list
          hr
          ul.step-list
            li
              h4 First step
              p
                | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
            li
              h4 Second step
              p
                | Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            li
              h4 Third step
              p
                | There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.
  br
  .p-1
    .row
      .cell-lg-6
        .bg-white.p-4.h-100
          h4.mt-0 Description vertical
          hr
          dl
            dt Description lists
            dd A description list is perfect for defining terms.
            dt Euismod
            dd Vestibulum id ligula porta felis euismod semper eget nec elit.
            dd Donec id elit non mi porta gravida at eget metus.
            dt Malesuada porta
            dd Etiam porta sem malesuada magna mollis euismod.
      .cell-lg-6
        .bg-white.p-4.h-100
          h4.mt-0 Description horizontal
          hr
          dl.horizontal
            dt Description lists
            dd A description list is perfect for defining terms.
            dt Euismod
            dd Vestibulum id ligula porta felis euismod semper eget sem nec elit.
            dd Donec id elit non mi porta gravida at eget metus.
            dt Malesuada porta
            dd Etiam porta sem malesuada magna mollis euismod.
            dt Felis euismod semper eget lacinia
            dd Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
  br
  .p-1
    .bg-white.p-4
      h4.mt-0 Text alignment
      hr
      p.text-left Left aligned text on all viewport sizes.
      p.text-center Center aligned text on all viewport sizes.
      p.text-right Right aligned text on all viewport sizes.
  br
  .p-1
    .bg-white.p-4
      h4.mt-0 Text transform
      hr
      p.text-lower lowercased text
      p.text-upper uppercased text
      p.text-cap &scy;apitalized text
  br
  .p-1
    .bg-white.p-4
      h4.mt-0 Font weight
      hr
      table.table.striped.bordered
        thead
          tr
            th Name
            th Weight
        tbody
          tr
            td
              p.text-ultralight .text-ultralight
            td 100
          tr
            td
              p.text-light .text-light
            td 200
          tr
            td
              p.text-normal .text-normal
            td 400
          tr
            td
              p.text-medium .text-medium
            td 500
          tr
            td
              p.text-bold .text-bold
            td 700

</template>