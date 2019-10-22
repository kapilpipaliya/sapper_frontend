<template lang="pug">
.row.border-bottom.bd-lightGray.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Buttons
      small UI Elements
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') UI Elements
      li.page-item
        a.page-link(href='\#;') Buttons
.m-3
  .p-1
    h4 Push button
    .row
      .cell-lg-6
        .bg-white.p-4.h-100
          h5.mt-0 Simple
          div
            button.button.mt-1 Default
            button.button.primary.mt-1 Primary
            button.button.secondary.mt-1 Secondary
            button.button.success.mt-1 Success
            button.button.alert.mt-1 Alert
            button.button.warning.mt-1 Warning
            button.button.yellow.mt-1 Yellow
            button.button.info.mt-1 Info
            button.button.dark.mt-1 Dark
            button.button.light.mt-1 Light
            button.button.link.mt-1 Link
      .cell-lg-6
        .bg-white.p-4.h-100
          h5.mt-0 With icon
          div
            button.button.mt-1
              span.mif-checkmark
              |  Font
            button.button.mt-1
              span.mif-users
            button.button.mt-1
              img(alt='image' src='images/pandora/images/checkmark.png')
              |  Image
            button.button.mt-1
              img(alt='image' src='images/pandora/images/keycdn-logo.svg')
    br
    .row
      .cell-lg-6
        .bg-white.p-4.h-100
          h5.mt-0 Outline
          div
            button.button.outline.mt-1 Default
            button.button.outline.primary.mt-1 Primary
            button.button.outline.secondary.mt-1 Secondary
            button.button.outline.success.mt-1 Success
            button.button.outline.alert.mt-1 Alert
            button.button.outline.warning.mt-1 Warning
            button.button.outline.yellow.mt-1 Yellow
            button.button.outline.info.mt-1 Info
            button.button.outline.dark.mt-1 Dark
            button.button.outline.light.mt-1 Light
            button.button.outline.link.mt-1 Link
      .cell-lg-6
        .bg-white.p-4.h-100
          h5.mt-0 Shadowed
          div
            button.button.drop-shadow.mt-1 Default
            button.button.primary.drop-shadow.mt-1 Primary
            button.button.secondary.drop-shadow.mt-1 Secondary
            button.button.success.drop-shadow.mt-1 Success
            button.button.alert.drop-shadow.mt-1 Alert
            button.button.warning.drop-shadow.mt-1 Warning
            button.button.yellow.drop-shadow.mt-1 Yellow
            button.button.info.drop-shadow.mt-1 Info
            button.button.dark.drop-shadow.mt-1 Dark
            button.button.light.drop-shadow.mt-1 Light
    br
    .row
      .cell-lg-6
        .bg-white.p-4
          h5.mt-0 Push button size
          hr
          div
            button.button.primary.mini mini
            button.button.primary.small small
            button.button.primary default
            button.button.primary.large Large button
      .cell-lg-6
        .bg-white.p-4
          h5.mt-0 Square &amp; cycle buttons
          hr
          div
            button.button.primary.square.mini
              span.mif-checkmark
            button.button.primary.square.small
              span.mif-checkmark
            button.button.primary.square
              span.mif-checkmark
            button.button.primary.square.large
              span.mif-checkmark
            button.button.primary.cycle.mini
              span.mif-checkmark
            button.button.primary.cycle.small
              span.mif-checkmark
            button.button.primary.cycle
              span.mif-checkmark
            button.button.primary.cycle.large
              span.mif-checkmark
  .p-1
    h4 Command button
    .bg-white.p-4
      div
        button.command-button.m-1
          span.mif-share.icon
          span.caption
            | Yes, share and connect
            small Use this option for home or work
        button.command-button.primary.outline.rounded.m-1
          span.mif-share.icon
          span.caption
            | Yes, share and connect
            small Use this option for home or work
        button.command-button.icon-right.warning.m-1
          span.mif-share.icon
          span.caption
            | Yes, share and connect
            small Use this option for home or work
  .p-1
    h4 Image button
    .bg-white.p-4
      div
        .mt-1
          button.image-button.mt-1
            span.mif-share.icon
            span.caption Share it
          button.image-button.icon-right.mt-1
            span.mif-share.icon
            span.caption Share it
        .mt-1
          button.image-button.primary.mt-1
            span.mif-share.icon
            span.caption Share it
          button.image-button.secondary.mt-1
            span.mif-share.icon
            span.caption Share it
          button.image-button.success.mt-1
            span.mif-share.icon
            span.caption Share it
          button.image-button.warning.mt-1
            span.mif-share.icon
            span.caption Share it
          button.image-button.alert.mt-1
            span.mif-share.icon
            span.caption Share it
          button.image-button.info.mt-1
            span.mif-share.icon
            span.caption Share it
        .mt-1
          button.image-button.primary.outline.mt-1
            span.mif-share.icon
            span.caption Share it
          button.image-button.secondary.outline.mt-1
            span.mif-share.icon
            span.caption Share it
          button.image-button.success.outline.mt-1
            span.mif-share.icon
            span.caption Share it
          button.image-button.warning.outline.mt-1
            span.mif-share.icon
            span.caption Share it
          button.image-button.alert.outline.mt-1
            span.mif-share.icon
            span.caption Share it
          button.image-button.info.outline.mt-1
            span.mif-share.icon
            span.caption Share it
  .p-1
    h4 Shortcuts
    .bg-white.p-4
      div
        button.shortcut.mt-1
          span.caption Rocket
          span.mif-rocket.icon
        button.shortcut.mt-1
          span.tag 10
          span.caption Rocket
          span.mif-rocket.icon
        button.shortcut.primary.mt-1
          span.tag 10
          span.caption Rocket
          span.mif-rocket.icon
        button.shortcut.secondary.outline.mt-1
          span.tag 10
          span.caption Rocket
          span.mif-rocket.icon
        button.shortcut.alert.rounded.mt-1
          span.tag 10
          span.caption Rocket
          img.icon(alt='image' src='images/pandora/images/checkmark.png')
        button.shortcut.info.outline.rounded.no-caption.mt-1
          span.tag 10
          span.mif-rocket.icon
  .p-1
    h4 Dropdown and split buttons
    .row
      .cell-lg-3
        .bg-white.p-4
          .dropdown-button
            button.button.dropdown-toggle Button
            ul.d-menu(data-role='dropdown')
              li
                a(href='\#;') Reply
              li
                a(href='\#;') Reply All
              li
                a(href='\#;') Forward
      .cell-lg-3
        .bg-white.p-4.clear
          .dropdown-button.place-right
            button.button.dropdown-toggle Button
            ul.d-menu.place-right(data-role='dropdown')
              li
                a(href='\#;') Reply
              li
                a(href='\#;') Reply All
              li
                a(href='\#;') Forward
      .cell-lg-3
        .bg-white.p-4.clear
          .split-button
            button.button Reply
            button.split.dropdown-toggle
            ul.d-menu(data-role='dropdown')
              li
                a(href='\#;') Reply All
              li
                a(href='\#;') Forward
              li.divider
              li
                a(href='\#;') Delete
      .cell-lg-3
        .bg-white.p-4.clear
          .split-button.place-right
            button.button Reply
            button.split.dropdown-toggle
            ul.d-menu.place-right(data-role='dropdown')
              li
                a(href='\#;') Reply All
              li
                a(href='\#;') Forward
              li.divider
              li
                a(href='\#;') Delete
  .p-1
    h4 Toolbar
    .row
      .cell-lg-6
        .bg-white.p-4.h-100
          h5.mt-0 Horizontal toolbar
          hr
          .example
            .toolbar.mt-1
              button.tool-button
                span.mif-floppy-disk
              button.tool-button
                img(alt='image' src='images/pandora/images/checkmark.png')
              button.tool-button.text-button Open
            .toolbar.mt-1
              button.tool-button.primary
                span.mif-floppy-disk
              button.tool-button.info
                span.mif-printer
              button.tool-button.success.text-button Open
            .toolbar.mt-1
              button.tool-button.primary.outline
                span.mif-floppy-disk
              button.tool-button.info.outline
                span.mif-printer
              button.tool-button.success.outline.text-button Open
            .toolbar.mt-1
              button.tool-button.primary.rounded
                span.mif-floppy-disk
              button.tool-button.info.rounded
                span.mif-printer
              button.tool-button.success.rounded.text-button Open
      .cell-lg-6
        .bg-white.p-4.h-100
          h5.mt-0 Vertical toolbar
          hr
          .example
            .toolbar.mt-1.vertical
              button.tool-button
                span.mif-floppy-disk
              button.tool-button
                img(alt='image' src='images/pandora/images/checkmark.png')
              button.tool-button
                span.mif-open-book
            .toolbar.mt-1.vertical
              button.tool-button.primary
                span.mif-floppy-disk
              button.tool-button.info
                span.mif-printer
              button.tool-button.success
                span.mif-open-book
            .toolbar.mt-1.vertical
              button.tool-button.primary.outline
                span.mif-floppy-disk
              button.tool-button.info.outline
                span.mif-printer
              button.tool-button.success.outline
                span.mif-open-book
            .toolbar.mt-1.vertical
              button.tool-button.primary.rounded
                span.mif-floppy-disk
              button.tool-button.info.rounded
                span.mif-printer
              button.tool-button.success.rounded
                span.mif-open-book
  .p-1
    h4 Action button
    .row
      .cell-lg-3
        .bg-white.p-4
          .multi-action.d-block.mx-auto
            button.action-button.rotate-minus.bg-red.fg-white(onclick="$(this).toggleClass('active')")
              span.icon
                span.mif-plus
            ul.actions.drop-right
              li.bg-blue
                a(href='\#;')
                  span.mif-user-plus
              li.bg-teal
                a(href='\#;')
                  span.mif-library
              li.bg-pink
                a(href='\#;')
                  span.mif-alarm
              li.bg-orange
                a(href='\#;')
                  span.mif-lock
      .cell-lg-3
        .bg-white.p-4
          .multi-action.d-block.mx-auto
            button.action-button.rotate-minus.bg-green.fg-white(onclick="$(this).toggleClass('active')")
              span.icon
                span.mif-plus
            ul.actions.drop-top
              li.bg-blue
                a(href='\#;')
                  span.mif-user-plus
              li.bg-teal
                a(href='\#;')
                  span.mif-library
              li.bg-pink
                a(href='\#;')
                  span.mif-alarm
              li.bg-orange
                a(href='\#;')
                  span.mif-lock
      .cell-lg-3
        .bg-white.p-4
          .multi-action.d-block.mx-auto
            button.action-button.rotate-minus.bg-cyan.fg-white(onclick="$(this).toggleClass('active')")
              span.icon
                span.mif-plus
            ul.actions.drop-bottom
              li.bg-blue
                a(href='\#;')
                  span.mif-user-plus
              li.bg-teal
                a(href='\#;')
                  span.mif-library
              li.bg-pink
                a(href='\#;')
                  span.mif-alarm
              li.bg-orange
                a(href='\#;')
                  span.mif-lock
      .cell-lg-3
        .bg-white.p-4.clear
          .multi-action.d-block.mx-auto
            button.action-button.rotate-minus.bg-orange.fg-white(onclick="$(this).toggleClass('active')")
              span.icon
                span.mif-plus
            ul.actions.drop-left
              li.bg-blue
                a(href='\#;')
                  span.mif-user-plus
              li.bg-teal
                a(href='\#;')
                  span.mif-library
              li.bg-pink
                a(href='\#;')
                  span.mif-alarm
              li.bg-orange
                a(href='\#;')
                  span.mif-lock
  .p-1
    h4 Info button
    .bg-white.p-4
      .info-button.mt-1
        a.button(href='\#;')
          span.mif-star-full
          |  Star
        a.info(href='\#;') 5,547
      .info-button.bg-red.fg-white.bd-red.mt-1
        a.button(href='\#;')
          span.mif-star-full
          |  Star
        a.info(href='\#;') 5,547
      .info-button.success.bd-green.rounded.mt-1
        a.button(href='\#;')
          span.mif-star-full
          |  Star
        a.info(href='\#;') 5,547
  .p-1
    h4 Button group
    .row
      .cell-lg-4
        .bg-white.p-4
          h5.mt-0 Default
          hr
          div(data-role='buttongroup')
            button.button 1
            button.button 2
            button.button.active 3
      .cell-lg-4
        .bg-white.p-4
          h5.mt-0 Multi state
          hr
          div(data-role='buttongroup' data-mode='multi' data-cls-active='bg-red fg-white')
            button.button 1
            button.button 2
            button.button 3
      .cell-lg-4
        .bg-white.p-4
          h5.mt-0 Toolbar
          hr
          div
            .toolbar(data-role='buttongroup' data-mode='multi')
              button.tool-button.rounded
                span.mif-bold
              button.tool-button.rounded
                span.mif-italic
              button.tool-button.rounded
                span.mif-underline
            .toolbar(data-role='buttongroup')
              button.tool-button.rounded
                span.mif-sort-asc
              button.tool-button.rounded
                span.mif-sort-desc
  .p-1
    h4 Pagination
    .row
      .cell-lg-6
        .bg-white.p-4.h-100
          h5.mt-0 Default
          hr
          ul.pagination
            li.page-item.disabled
              a.page-link(href='\#;' tabindex='-1') Previous
            li.page-item
              a.page-link(href='\#;') 1
            li.page-item.active
              a.page-link(href='\#;') 2
            li.page-item
              a.page-link(href='\#;') 3
            li.page-item.no-link
              a.page-link(href='\#;') ...
            li.page-item
              a.page-link(href='\#;') 7
            li.page-item
              a.page-link(href='\#;') 8
            li.page-item
              a.page-link(href='\#;') 9
            li.page-item.service
              a.page-link(href='\#;') Next &gt;
          ul.pagination.alert
            li.page-item.disabled
              a.page-link(href='\#;' tabindex='-1') Previous
            li.page-item
              a.page-link(href='\#;') 1
            li.page-item.active
              a.page-link(href='\#;') 2
            li.page-item
              a.page-link(href='\#;') 3
            li.page-item.no-link
              a.page-link(href='\#;') ...
            li.page-item
              a.page-link(href='\#;') 7
            li.page-item
              a.page-link(href='\#;') 8
            li.page-item
              a.page-link(href='\#;') 9
            li.page-item.service
              a.page-link(href='\#;') Next &gt;
          ul.pagination.success.rounded
            li.page-item.disabled
              a.page-link(href='\#;' tabindex='-1') Previous
            li.page-item
              a.page-link(href='\#;') 1
            li.page-item.active
              a.page-link(href='\#;') 2
            li.page-item
              a.page-link(href='\#;') 3
            li.page-item.no-link
              a.page-link(href='\#;') ...
            li.page-item
              a.page-link(href='\#;') 7
            li.page-item
              a.page-link(href='\#;') 8
            li.page-item
              a.page-link(href='\#;') 9
            li.page-item.service
              a.page-link(href='\#;') Next &gt;
      .cell-lg-6
        .bg-white.p-4.h-100
          h5.mt-0 No gap
          hr
          ul.pagination.no-gap
            li.page-item.disabled
              a.page-link(href='\#;' tabindex='-1') Previous
            li.page-item
              a.page-link(href='\#;') 1
            li.page-item.active
              a.page-link(href='\#;') 2
            li.page-item
              a.page-link(href='\#;') 3
            li.page-item.no-link
              a.page-link(href='\#;') ...
            li.page-item
              a.page-link(href='\#;') 7
            li.page-item
              a.page-link(href='\#;') 8
            li.page-item
              a.page-link(href='\#;') 9
            li.page-item.service
              a.page-link(href='\#;') Next &gt;
          ul.pagination.alert.no-gap
            li.page-item.disabled
              a.page-link(href='\#;' tabindex='-1') Previous
            li.page-item
              a.page-link(href='\#;') 1
            li.page-item.active
              a.page-link(href='\#;') 2
            li.page-item
              a.page-link(href='\#;') 3
            li.page-item.no-link
              a.page-link(href='\#;') ...
            li.page-item
              a.page-link(href='\#;') 7
            li.page-item
              a.page-link(href='\#;') 8
            li.page-item
              a.page-link(href='\#;') 9
            li.page-item.service
              a.page-link(href='\#;') Next &gt;
          ul.pagination.success.rounded.no-gap
            li.page-item.disabled
              a.page-link(href='\#;' tabindex='-1') Previous
            li.page-item
              a.page-link(href='\#;') 1
            li.page-item.active
              a.page-link(href='\#;') 2
            li.page-item
              a.page-link(href='\#;') 3
            li.page-item.no-link
              a.page-link(href='\#;') ...
            li.page-item
              a.page-link(href='\#;') 7
            li.page-item
              a.page-link(href='\#;') 8
            li.page-item
              a.page-link(href='\#;') 9
            li.page-item.service
              a.page-link(href='\#;') Next &gt;
    br
    .row
      .cell-lg-12
        .bg-white.p-4
          h5.mt-0 Size
          hr
          div
            ul.pagination.size-large
              li.page-item.disabled
                a.page-link(href='\#;' tabindex='-1') Previous
              li.page-item
                a.page-link(href='\#;') 1
              li.page-item.active
                a.page-link(href='\#;') 2
              li.page-item
                a.page-link(href='\#;') 3
              li.page-item.no-link
                a.page-link(href='\#;') ...
              li.page-item
                a.page-link(href='\#;') 7
              li.page-item
                a.page-link(href='\#;') 8
              li.page-item
                a.page-link(href='\#;') 9
              li.page-item.service
                a.page-link(href='\#;') Next
            ul.pagination
              li.page-item.disabled
                a.page-link(href='\#;' tabindex='-1') Previous
              li.page-item
                a.page-link(href='\#;') 1
              li.page-item.active
                a.page-link(href='\#;') 2
              li.page-item
                a.page-link(href='\#;') 3
              li.page-item.no-link
                a.page-link(href='\#;') ...
              li.page-item
                a.page-link(href='\#;') 7
              li.page-item
                a.page-link(href='\#;') 8
              li.page-item
                a.page-link(href='\#;') 9
              li.page-item.service
                a.page-link(href='\#;') Next
            ul.pagination.size-small
              li.page-item.disabled
                a.page-link(href='\#;' tabindex='-1') Previous
              li.page-item
                a.page-link(href='\#;') 1
              li.page-item.active
                a.page-link(href='\#;') 2
              li.page-item
                a.page-link(href='\#;') 3
              li.page-item.no-link
                a.page-link(href='\#;') ...
              li.page-item
                a.page-link(href='\#;') 7
              li.page-item
                a.page-link(href='\#;') 8
              li.page-item
                a.page-link(href='\#;') 9
              li.page-item.service
                a.page-link(href='\#;') Next
            br
            ul.pagination.no-gap.size-large
              li.page-item.disabled
                a.page-link(href='\#;' tabindex='-1') Previous
              li.page-item
                a.page-link(href='\#;') 1
              li.page-item.active
                a.page-link(href='\#;') 2
              li.page-item
                a.page-link(href='\#;') 3
              li.page-item.no-link
                a.page-link(href='\#;') ...
              li.page-item
                a.page-link(href='\#;') 7
              li.page-item
                a.page-link(href='\#;') 8
              li.page-item
                a.page-link(href='\#;') 9
              li.page-item.service
                a.page-link(href='\#;') Next
            ul.pagination.no-gap
              li.page-item.disabled
                a.page-link(href='\#;' tabindex='-1') Previous
              li.page-item
                a.page-link(href='\#;') 1
              li.page-item.active
                a.page-link(href='\#;') 2
              li.page-item
                a.page-link(href='\#;') 3
              li.page-item.no-link
                a.page-link(href='\#;') ...
              li.page-item
                a.page-link(href='\#;') 7
              li.page-item
                a.page-link(href='\#;') 8
              li.page-item
                a.page-link(href='\#;') 9
              li.page-item.service
                a.page-link(href='\#;') Next
            ul.pagination.no-gap.size-small
              li.page-item.disabled
                a.page-link(href='\#;' tabindex='-1') Previous
              li.page-item
                a.page-link(href='\#;') 1
              li.page-item.active
                a.page-link(href='\#;') 2
              li.page-item
                a.page-link(href='\#;') 3
              li.page-item.no-link
                a.page-link(href='\#;') ...
              li.page-item
                a.page-link(href='\#;') 7
              li.page-item
                a.page-link(href='\#;') 8
              li.page-item
                a.page-link(href='\#;') 9
              li.page-item.service
                a.page-link(href='\#;') Next
    br
    .row
      .cell-lg-12
        .bg-white.p-4
          h5.mt-0 Alignment
          hr
          div
            ul.pagination.no-gap.flex-justify-start
              li.page-item.disabled
                a.page-link(href='\#;' tabindex='-1') Previous
              li.page-item
                a.page-link(href='\#;') 1
              li.page-item.active
                a.page-link(href='\#;') 2
              li.page-item
                a.page-link(href='\#;') 3
              li.page-item.no-link
                a.page-link(href='\#;') ...
              li.page-item
                a.page-link(href='\#;') 7
              li.page-item
                a.page-link(href='\#;') 8
              li.page-item
                a.page-link(href='\#;') 9
              li.page-item.service
                a.page-link(href='\#;') Next
            ul.pagination.no-gap.flex-justify-center
              li.page-item.disabled
                a.page-link(href='\#;' tabindex='-1') Previous
              li.page-item
                a.page-link(href='\#;') 1
              li.page-item.active
                a.page-link(href='\#;') 2
              li.page-item
                a.page-link(href='\#;') 3
              li.page-item.no-link
                a.page-link(href='\#;') ...
              li.page-item
                a.page-link(href='\#;') 7
              li.page-item
                a.page-link(href='\#;') 8
              li.page-item
                a.page-link(href='\#;') 9
              li.page-item.service
                a.page-link(href='\#;') Next
            ul.pagination.no-gap.flex-justify-end
              li.page-item.disabled
                a.page-link(href='\#;' tabindex='-1') Previous
              li.page-item
                a.page-link(href='\#;') 1
              li.page-item.active
                a.page-link(href='\#;') 2
              li.page-item
                a.page-link(href='\#;') 3
              li.page-item.no-link
                a.page-link(href='\#;') ...
              li.page-item
                a.page-link(href='\#;') 7
              li.page-item
                a.page-link(href='\#;') 8
              li.page-item
                a.page-link(href='\#;') 9
              li.page-item.service
                a.page-link(href='\#;') Next
  .p-1
    .row
      .cell-lg-12
        .bg-white.p-4
          h5.mt-0 Breadcrumbs
          hr
          ul.breadcrumbs
            li.page-item
              a.page-link(href='\#;') Home
            li.page-item
              a.page-link(href='\#;') Products
            li.page-item
              a.page-link(href='\#;') Downloads
            li.page-item
              a.page-link(href='\#;') Windows 10

</template>