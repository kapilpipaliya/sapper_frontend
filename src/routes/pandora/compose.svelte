<style>
    /* .ck-editor__editable {
        min-height: 400px;
    } */
</style>

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
        a.page-link(href='\#;') Compose
.m-3
  .inbox.p-1.bg-transparent
    .row
      .cell-md-3.cell-xl-2.mt-2
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
      .cell-md-9.cell-xl-10.mt-2
        .p-1.p-6-lg.bg-white
          h4 Compose new mail
          form.mt-3
            .row.m-0
              .cell-lg-8.bg-light.p-1.p-6-lg
                .form-group
                  input(type='text' data-role='input' data-prepend='To:')
                .form-group
                  input(type='text' data-role='input' data-prepend='Subject:')
                .form-group
                  textarea#editor
              .cell-lg-4.d-none.d-block-lg
                #selected-files.bg-light.p-2.overflow.reduce-1(style='height: 270px;')
            hr
            .form-actions.d-flex.flex-wrap.flex-justify-center.flex-justify-start-lg
              button.button(type='button')
                span.mif-cancel
                |  Discard
              .ml-auto-lg
                button.button.secondary(type='button')
                  span.mif-pencil
                  |  Draft
                button.button.warning(type='button')
                  span.mif-eye
                  |  Preview
                button.button.info
                  span.mif-paper-plane
                  |  Send


</template>