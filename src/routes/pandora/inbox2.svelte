<template lang="pug">
.row.border-bottom.bd-lightGray.ml-3.mt-3.mr-3
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
.inbox.bg-white.pt-3
  .inbox-actions.d-flex.flex-align-center.place-right.m-2
    button.button.alert.m-1 Compose new mail
    input.ml-auto(type='text' data-role='input' data-search-button='true')
  h1.ml-3 Inbox
  hr
  .row.flex-nowrap.m-0
    .w-auto
      ul.sidenav-counter.sidenav-counter-expand-lg.bg-white
        li
          a(href='\#;')
            span.mif-download.icon
            span.title Inbox
            span.counter 12
        li
          a(href='\#;')
            span.icon.mif-mail-read
            span.title Sent
            span.counter 0
        li
          a(href='\#;')
            span.icon.mif-drafts
            span.title Drafts
            span.counter 0
        li
          a(href='\#;')
            span.icon.mif-filter
            span.title Junk
            span.counter 0
        li
          a(href='\#;')
            span.icon.mif-bin
            span.title Trash
            span.counter 0
        li
          a(href='\#;')
            span.icon.mif-users.fg-cyan
            span.title Social networks
            span.counter 0
        li
          a(href='\#;')
            span.icon.mif-bubbles.fg-red
            span.title Forums
            span.counter 0
        li
          a(href='\#;')
            span.icon.mif-chat.fg-green
            span.title Chats
            span.counter 0
    .w-100.pr-2
      .inbox-items-wrapper.border-left.bd-default
        .inbox-actions
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
            button.button.small.square.ml-1
              span.mif-redo
            button.button.small.square.ml-1
              span.mif-bin
            .dropdown-button.h-auto.ml-1
              button.button.small.square
                span.mif-more-vert
              ul.d-menu(data-role='dropdown')
                li
                  a(href='\#;') Reply
                li
                  a(href='\#;') Reply All
                li
                  a(href='\#;') Forward
            .ml-auto.d-flex.flex-justify-end.flex-align-center
              small.mr-1.text-center
                span.d-none.d-inline-md Showed:
                |  1-20
                span.d-none.d-inline-md /100
              button.button.small.square.ml-1
                span.mif-chevron-left
              button.button.small.square.ml-1
                span.mif-chevron-right
              button.button.small.square.ml-1
                span.mif-cog
        hr
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