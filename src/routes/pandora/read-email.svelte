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
        a.page-link(href='\#;') Mailbox
      li.page-item
        a.page-link(href='\#;') Read email
.m-3
  .inbox.p-1.bg-transparent
    .inbox-actions.place-right.mt-3.d-flex.flex-align-center
      #search-wrapper.d-inline-block
        input(type='text' data-role='input' data-search-button='true')
      button.button.ml-2.success Compose new mail
    h1 Read email
    hr
    .row
      .cell-md-3.cell-xl-2
        button.button.mb-3.success Compose
        div(data-role='panel' data-collapsible='true' data-title-caption='Folders')
          ul.v-menu.inbox-folders.mt-4
            li.active
              a(href='\#;')
                span.icon.mif-download
                |  Inbox
                span.badge.inline.bg-cyan.fg-white 12
            li
              a(href='\#;')
                span.icon.mif-mail-read
                |  Sent
            li
              a(href='\#;')
                span.icon.mif-drafts
                |  Drafts
            li
              a(href='\#;')
                span.icon.mif-filter
                |  Junk
            li
              a(href='\#;')
                span.icon.mif-bin
                |  Trash
            li
              a.dropdown-toggle(href='\#;')
                span.icon.mif-brightness-auto
                |  Labels
              ul.v-menu(data-role='dropdown')
                li
                  a(href='\#;')
                    span.icon.mif-brightness-auto.fg-red
                    |  Important
                li
                  a(href='\#;')
                    span.icon.mif-brightness-auto.fg-orange
                    |  Promotions
                li
                  a(href='\#;')
                    span.icon.mif-brightness-auto.fg-cyan
                    |  Social
        .mt-2(data-role='panel' data-collapsible='true' data-title-caption='Categories')
          ul.v-menu.inbox-folders.mt-4
            li
              a(href='\#;')
                span.icon.mif-users.fg-red
                |  Networks
            li
              a(href='\#;')
                span.icon.mif-bubbles.fg-orange
                |  Forums
            li
              a(href='\#;')
                span.icon.mif-flag.fg-cyan
                |  Promotions
            li
              a(href='\#;')
                span.icon.mif-chat.fg-green
                |  Notifies
      .cell-md-9.cell-xl-10
        .inbox-items-wrapper
          .inbox-actions.mt-2.mt-0-lg
            .d-flex.flex-align-center.flex-wrap
              button.button.square.bg-white
                span.mif-arrow-left
              button.button.square.ml-3.bg-white
                span.mif-file-archive
              button.button.square.ml-1.bg-white
                span.mif-warning
              button.button.square.ml-1.bg-white
                span.mif-bin
              button.button.square.ml-3.bg-white
                span.mif-mail-read
              button.button.square.ml-1.bg-white
                span.mif-history
              button.button.square.ml-3.bg-white
                span.mif-tag
              .dropdown-button.h-auto.ml-1
                button.button.square.bg-white
                  span.mif-more-vert
                ul.d-menu(data-role='dropdown')
                  li
                    a(href='\#;') Marked as read
                  li
                    a(href='\#;') Marked as unread
                  li
                    a(href='\#;') Add to task
                  li
                    a(href='\#;') Add remark
                  li
                    a(href='\#;') Add to calendar
              .ml-auto-lg.d-flex.flex-justify-end.flex-align-center.mt-2.mt-0-lg
                button.button.square.ml-1.bg-white
                  span.mif-chevron-left
                button.button.square.ml-1.bg-white
                  span.mif-chevron-right
                button.button.square.ml-1.bg-white
                  span.mif-cog
          .p-1.p-6-lg.bg-white.mt-3
            .email-read-form
              .row.flex-align-center
                .cell-md-6
                  .email-to
                    | Receive to: 
                    span.text-bold help@example.com
                  .email-to
                    | Copy to: 
                    span.text-bold help@example.com, support@example.com
                .cell-md-6.text-right-md
                  .email-actions
                    button.button.square.small
                      span.mif-star-empty
                    button.button.square.small
                      span.mif-reply
                    button.button.square.small
                      span.mif-print
                    .dropdown-button.ml-1
                      button.button.square.small
                        span.mif-more-vert
                      ul.d-menu.place-right.text-left(data-role='dropdown')
                        li
                          a(href='\#;')
                            span.mif-reply.icon
                            |  Reply
                        li
                          a(href='\#;')
                            span.mif-reply_all.icon
                            |  Reply All
                        li
                          a(href='\#;')
                            span.mif-redo.icon
                            |  Forward
                        li
                          a(href='\#;')
                            span.mif-filter.icon
                            |  Filter by example
                        li
                          a(href='\#;')
                            span.mif-print.icon
                            |  Print
              hr
              h2.email-subject Message Subject Is Placed Here
              .row
                .cell-md-6
                  .email-from
                    | From: 
                    span.text-bold help@example.com
                .cell-md-6.text-right-md
                  .email-date
                    | 15 Feb. 2016 11:03 PM
              hr
              .email-text
                | Hello John,
                br
                br
                |                             Keffiyeh blog actually fashion axe vegan, irony biodiesel. Cold-pressed hoodie chillwave put a bird on it aesthetic, bitters brunch meggings vegan iPhone. Dreamcatcher vegan scenester mlkshk. Ethical master cleanse Bushwick, occupy Thundercats banjo cliche ennui farm-to-table mlkshk fanny pack gluten-free. Marfa butcher vegan quinoa, bicycle rights disrupt tofu scenester chillwave 3 wolf moon asymmetrical taxidermy pour-over. Quinoa tote bag fashion axe, Godard disrupt migas church-key tofu blog locavore. Thundercats cronut polaroid Neutra tousled, meh food truck selfies narwhal American Apparel.
                br
                br
                |                             Raw denim McSweeney&apos;s bicycle rights, iPhone trust fund quinoa Neutra VHS kale chips vegan PBR&amp;B literally Thundercats +1. Forage tilde four dollar toast, banjo health goth paleo butcher. Four dollar toast Brooklyn pour-over American Apparel sustainable, lumbersexual listicle gluten-free health goth umami hoodie. Synth Echo Park bicycle rights DIY farm-to-table, retro kogi sriracha dreamcatcher PBR&amp;B flannel hashtag irony Wes Anderson. Lumbersexual Williamsburg Helvetica next level. Cold-pressed slow-carb pop-up normcore Thundercats Portland, cardigan literally meditation lumbersexual crucifix. Wayfarers raw denim paleo Bushwick, keytar Helvetica scenester keffiyeh 8-bit irony mumblecore whatever viral Truffaut.
                br
                br
                |                             Thanks,
                |                             Jane
              hr
              .email-attachments
                .email-attachment
                  .preview
                    span.mif-file-pdf
                  .desc
                    button.button.square.place-right
                      span.mif-download2
                    .text-bold report.pdf
                    div 1,245 kb
                .email-attachment
                  .preview
                    img(alt='image' src='https://lorempixel.com/200/100/nature/')
                  .desc
                    button.button.square.place-right
                      span.mif-download2
                    .text-bold photo-1.jpg
                    div 1,5 mb
              hr
              .email-actions
                button.button.place-right
                  span.mif-print
                  |  Print
                button.button
                  span.mif-reply
                  |  Reply
                button.button
                  span.mif-reply_all
                  |  Reply All
                button.button
                  span.mif-redo
                  |  Forward

</template>