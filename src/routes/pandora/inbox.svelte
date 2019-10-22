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
        a.page-link(href='\#;') Inbox
.m-3
  .inbox.p-1.bg-transparent
    .inbox-actions.place-right.mt-3.d-flex.flex-align-center
      #search-wrapper.d-inline-block
        input(type='text' data-role='input' data-search-button='true')
      button.button.ml-2.success Compose new mail
    h1 Inbox
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
            .d-flex.flex-align-center
              .dropdown-checkbox.d-flex.flex-align-center
                input.bg-white.pl-2(type='checkbox' data-role='checkbox' data-cls-caption='d-none' onclick="$('.inbox-table input[type=checkbox]').prop('checked', this.checked)")
                span.button.bg-white.dropdown-toggle(style='padding-right: 0!important; width:24px;') &nbsp;
                ul.d-menu(data-role='dropdown' style='top: 100%')
                  li
                    a(href='\#;') All
                  li
                    a(href='\#;') Read
                  li
                    a(href='\#;') Not read
                  li
                    a(href='\#;') Marked
              button.button.square.ml-1.bg-white
                span.mif-loop2
              button.button.square.ml-1.bg-white
                span.mif-bin
              .dropdown-button.h-auto.ml-1
                button.button.square.bg-white
                  span.mif-more-vert
                ul.d-menu(data-role='dropdown')
                  li
                    a(href='\#;')
                      span.mif-reply.icon
                      |  Reply
                  li
                    a(href='\#;')
                      span.mif-reply_all.icon
                      | Reply All
                  li
                    a(href='\#;')
                      span.mif-arrow-left.icon
                      |  Forward
              .ml-auto.d-flex.flex-justify-end.flex-align-center
                small.mr-1.text-center
                  span.d-none.d-inline-md Showed:
                  |  1-20
                  span.d-none.d-inline-md /100
                button.button.square.ml-1.bg-white
                  span.mif-chevron-left
                button.button.square.ml-1.bg-white
                  span.mif-chevron-right
                button.button.square.ml-1.bg-white
                  span.mif-cog
          .p-1.p-6-lg.bg-white.mt-3
            table.table.striped.row-border.row-hover.inbox-table.compact.normal-md
              tbody
                tr
                  td.check-cell
                    input(type='checkbox' data-role='checkbox' data-style='2')
                  td.star-cell
                    span.mif-star-full.fg-orange
                  td.sender-cell
                    span.text-ellipsis Jack Sparrow
                  td.subject-cell
                    .text-ellipsis
                      span.text-bold Pandora issue
                      span  - 
                      span.text-muted
                        | The mind of your definitions will disturb harmoniously when you discover that uniqueness is the explosion of the death.
                  td.attach-cell
                  td.time-cell
                    span 5 min
                tr
                  td.check-cell
                    input(type='checkbox' data-role='checkbox' data-style='2')
                  td.star-cell
                    span.mif-star-full.fg-orange
                  td.sender-cell
                    span.text-ellipsis Jack Sparrow
                  td.subject-cell
                    .text-ellipsis
                      span.text-bold Pandora issue
                      span  - 
                      span.text-muted
                        | The mind of your definitions will disturb harmoniously when you discover that uniqueness is the explosion of the death.
                  td.attach-cell
                    span.mif-attachment
                  td.time-cell
                    span 5 min
                tr
                  td.check-cell
                    input(type='checkbox' data-role='checkbox' data-style='2')
                  td.star-cell
                    span.mif-star-empty
                  td.sender-cell
                    span.text-ellipsis Jack Sparrow
                  td.subject-cell
                    .text-ellipsis
                      span.text-bold Pandora issue
                      span  - 
                      span.text-muted
                        | The mind of your definitions will disturb harmoniously when you discover that uniqueness is the explosion of the death.
                  td.attach-cell
                  td.time-cell
                    span 5 min
                tr
                  td.check-cell
                    input(type='checkbox' data-role='checkbox' data-style='2')
                  td.star-cell
                    span.mif-star-empty
                  td.sender-cell
                    span.text-ellipsis Jack Sparrow
                  td.subject-cell
                    .text-ellipsis
                      span.text-bold Pandora issue
                      span  - 
                      span.text-muted
                        | The mind of your definitions will disturb harmoniously when you discover that uniqueness is the explosion of the death.
                  td.attach-cell
                    span.mif-attachment
                  td.time-cell
                    span 5 min
                tr
                  td.check-cell
                    input(type='checkbox' data-role='checkbox' data-style='2')
                  td.star-cell
                    span.mif-star-empty
                  td.sender-cell
                    span.text-ellipsis Jack Sparrow
                  td.subject-cell
                    .text-ellipsis
                      span.text-bold Pandora issue
                      span  - 
                      span.text-muted
                        | The mind of your definitions will disturb harmoniously when you discover that uniqueness is the explosion of the death.
                  td.attach-cell
                  td.time-cell
                    span 5 min
                tr
                  td.check-cell
                    input(type='checkbox' data-role='checkbox' data-style='2')
                  td.star-cell
                    span.mif-star-full.fg-orange
                  td.sender-cell
                    span.text-ellipsis Jack Sparrow
                  td.subject-cell
                    .text-ellipsis
                      span.text-bold Pandora issue
                      span  - 
                      span.text-muted
                        | The mind of your definitions will disturb harmoniously when you discover that uniqueness is the explosion of the death.
                  td.attach-cell
                  td.time-cell
                    span 5 min
                tr
                  td.check-cell
                    input(type='checkbox' data-role='checkbox' data-style='2')
                  td.star-cell
                    span.mif-star-empty
                  td.sender-cell
                    span.text-ellipsis Jack Sparrow
                  td.subject-cell
                    .text-ellipsis
                      span.text-bold Pandora issue
                      span  - 
                      span.text-muted
                        | The mind of your definitions will disturb harmoniously when you discover that uniqueness is the explosion of the death.
                  td.attach-cell
                    span.mif-attachment
                  td.time-cell
                    span 5 min
                tr
                  td.check-cell
                    input(type='checkbox' data-role='checkbox' data-style='2')
                  td.star-cell
                    span.mif-star-empty
                  td.sender-cell
                    span.text-ellipsis Jack Sparrow
                  td.subject-cell
                    .text-ellipsis
                      span.text-bold Pandora issue
                      span  - 
                      span.text-muted
                        | The mind of your definitions will disturb harmoniously when you discover that uniqueness is the explosion of the death.
                  td.attach-cell
                  td.time-cell
                    span 5 min
                tr
                  td.check-cell
                    input(type='checkbox' data-role='checkbox' data-style='2')
                  td.star-cell
                    span.mif-star-empty
                  td.sender-cell
                    span.text-ellipsis Jack Sparrow
                  td.subject-cell
                    .text-ellipsis
                      span.text-bold Pandora issue
                      span  - 
                      span.text-muted
                        | The mind of your definitions will disturb harmoniously when you discover that uniqueness is the explosion of the death.
                  td.attach-cell
                  td.time-cell
                    span 5 min
                tr
                  td.check-cell
                    input(type='checkbox' data-role='checkbox' data-style='2')
                  td.star-cell
                    span.mif-star-empty
                  td.sender-cell
                    span.text-ellipsis Jack Sparrow
                  td.subject-cell
                    .text-ellipsis
                      span.text-bold Pandora issue
                      span  - 
                      span.text-muted
                        | The mind of your definitions will disturb harmoniously when you discover that uniqueness is the explosion of the death.
                  td.attach-cell
                    span.mif-attachment
                  td.time-cell
                    span 5 min
                tr
                  td.check-cell
                    input(type='checkbox' data-role='checkbox' data-style='2')
                  td.star-cell
                    span.mif-star-empty
                  td.sender-cell
                    span.text-ellipsis Jack Sparrow
                  td.subject-cell
                    .text-ellipsis
                      span.text-bold Pandora issue
                      span  - 
                      span.text-muted
                        | The mind of your definitions will disturb harmoniously when you discover that uniqueness is the explosion of the death.
                  td.attach-cell
                    span.mif-attachment
                  td.time-cell
                    span 5 min
                tr
                  td.check-cell
                    input(type='checkbox' data-role='checkbox' data-style='2')
                  td.star-cell
                    span.mif-star-empty
                  td.sender-cell
                    span.text-ellipsis Jack Sparrow
                  td.subject-cell
                    .text-ellipsis
                      span.text-bold Pandora issue
                      span  - 
                      span.text-muted
                        | The mind of your definitions will disturb harmoniously when you discover that uniqueness is the explosion of the death.
                  td.attach-cell
                    span.mif-attachment
                  td.time-cell
                    span 5 min
                tr
                  td.check-cell
                    input(type='checkbox' data-role='checkbox' data-style='2')
                  td.star-cell
                    span.mif-star-empty
                  td.sender-cell
                    span.text-ellipsis Jack Sparrow
                  td.subject-cell
                    .text-ellipsis
                      span.text-bold Pandora issue
                      span  - 
                      span.text-muted
                        | The mind of your definitions will disturb harmoniously when you discover that uniqueness is the explosion of the death.
                  td.attach-cell
                  td.time-cell
                    span 5 min
                tr
                  td.check-cell
                    input(type='checkbox' data-role='checkbox' data-style='2')
                  td.star-cell
                    span.mif-star-full.fg-orange
                  td.sender-cell
                    span.text-ellipsis Jack Sparrow
                  td.subject-cell
                    .text-ellipsis
                      span.text-bold Pandora issue
                      span  - 
                      span.text-muted
                        | The mind of your definitions will disturb harmoniously when you discover that uniqueness is the explosion of the death.
                  td.attach-cell
                    span.mif-attachment
                  td.time-cell
                    span 5 min
                tr
                  td.check-cell
                    input(type='checkbox' data-role='checkbox' data-style='2')
                  td.star-cell
                    span.mif-star-empty
                  td.sender-cell
                    span.text-ellipsis Jack Sparrow
                  td.subject-cell
                    .text-ellipsis
                      span.text-bold Pandora issue
                      span  - 
                      span.text-muted
                        | The mind of your definitions will disturb harmoniously when you discover that uniqueness is the explosion of the death.
                  td.attach-cell
                    span.mif-attachment
                  td.time-cell
                    span 5 min
                tr
                  td.check-cell
                    input(type='checkbox' data-role='checkbox' data-style='2')
                  td.star-cell
                    span.mif-star-empty
                  td.sender-cell
                    span.text-ellipsis Jack Sparrow
                  td.subject-cell
                    .text-ellipsis
                      span.text-bold Pandora issue
                      span  - 
                      span.text-muted
                        | The mind of your definitions will disturb harmoniously when you discover that uniqueness is the explosion of the death.
                  td.attach-cell
                    span.mif-attachment
                  td.time-cell
                    span 5 min

</template>