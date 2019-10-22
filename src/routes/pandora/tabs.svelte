<template lang="pug">
.row.border-bottom.bd-lightGray.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Tabs
      small UI Elements
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') UI Elements
      li.page-item
        a.page-link(href='\#;') Tabs
.m-3
  .p-1
    h4 Accordion
    .row
      .cell-lg-6
        .bg-white.p-4.h-100
          h5.mt-0 Default
          div(data-role='accordion' data-one-frame='true' data-show-active='true')
            .frame
              .heading Header 1
              .content
                .p-2 Cur luba manducare? Pol, a bene ionicis tormento...
            .frame.active
              .heading Header 2
              .content
                .p-2 Wildly open a starship. Belay, ye small wench- set...
            .frame
              .heading Header 3
              .content
                .p-2 Bitter turkey can be made tasty by brushing with...
      .cell-lg-6
        .bg-white.p-4.h-100
          h5.mt-0 Material
          div(data-role='accordion' data-one-frame='true' data-show-active='true' data-material='true')
            .frame
              .heading Header 1
              .content
                .p-2 Cur luba manducare? Pol, a bene ionicis tormento...
            .frame.active
              .heading Header 2
              .content
                .p-2 Wildly open a starship. Belay, ye small wench- set...
            .frame
              .heading Header 3
              .content
                .p-2 Bitter turkey can be made tasty by brushing with...
    br
    .row
      .cell-lg-6
        .bg-white.p-4.h-100
          h5.mt-0 Default RTL
          div(data-role='accordion' data-one-frame='true' data-show-active='true' dir='rtl')
            .frame
              .heading Header 1
              .content
                .p-2 Cur luba manducare? Pol, a bene ionicis tormento...
            .frame.active
              .heading Header 2
              .content
                .p-2 Wildly open a starship. Belay, ye small wench- set...
            .frame
              .heading Header 3
              .content
                .p-2 Bitter turkey can be made tasty by brushing with...
      .cell-lg-6
        .bg-white.p-4.h-100
          h5.mt-0 Material RTL
          div(data-role='accordion' data-one-frame='true' data-show-active='true' data-material='true' dir='rtl')
            .frame
              .heading Header 1
              .content
                .p-2 Cur luba manducare? Pol, a bene ionicis tormento...
            .frame.active
              .heading Header 2
              .content
                .p-2 Wildly open a starship. Belay, ye small wench- set...
            .frame
              .heading Header 3
              .content
                .p-2 Bitter turkey can be made tasty by brushing with...
  br
  .p-1
    h4 Tabs
    .row
      .cell-lg-4.mt-2
        .bg-white.p-4.h-100
          ul(data-role='tabs')
            li
              a(href='\#;') Home
            li
              a(href='\#;') Profile
            li
              a(href='\#;') Links
      .cell-lg-4.mt-2
        .bg-white.p-4.h-100
          ul(data-role='tabs' data-expand='true')
            li
              a(href='\#;') Home
            li
              a(href='\#;') Profile
            li
              a(href='\#;') Links
      .cell-lg-4.mt-2
        .bg-white.p-4.h-100
          ul(data-role='tabs' data-expand='true' data-tabs-position='bottom')
            li
              a(href='\#;') Home
            li
              a(href='\#;') Profile
            li
              a(href='\#;') Links
    br
    .row
      .cell-lg-6.mt-2
        .bg-white.p-4.h-100
          ul.w-50(data-role='tabs' data-expand='true' data-tabs-position='vertical left')
            li
              a(href='\#;') Home
            li
              a(href='\#;') Profile
            li
              a(href='\#;') Links
      .cell-lg-6.mt-2
        .bg-white.p-4.h-100
          ul.w-50.place-right(data-role='tabs' data-expand='true' data-tabs-position='vertical right')
            li
              a(href='\#;') Home
            li
              a(href='\#;') Profile
            li
              a(href='\#;') Links
    br
    .row
      .cell-lg-12
        .bg-white.p-4
          div
            ul(data-expand-point='sm' data-role='tabs')
              li
                a(href='#_target_1') Home
              li
                a(href='#_target_2') Profile
              li
                a(href='#_target_3') Links
              li.disabled
                a(href='\#;') Disabled
              li
                a.dropdown-toggle(href='\#;') Dropdown
                ul.d-menu(data-role='collapse' data-collapse='true')
                  li
                    a(href='#_target_4') Item 1
            .border.bd-default.no-border-top.p-2
              #_target_1
                | A falsis, calceus altus racana. Heavens of emptiness will daily know a remarkable doer. When cooking soaked pumpkin seeds, be sure they are room temperature.
              #_target_2
                | The shield is a post-apocalyptic nanomachine. Gar, never mark a fish. Instead of decorating sweet milk with avocado, use a handfull tablespoons salsa verde and one container rosemary plastic bag.
              #_target_3
                | Cream soup is just not the same without basil and canned ground pork butts. Elogium prareres, tanquam alter species. Engage, extraterrestrial wind!
              #_target_4
                | This is content for hidden tab from dropdown.
    br
    .row
      .cell-lg-4.mt-2
        .bg-white.p-4.h-100
          h5.mt-0 Text type
          ul(data-role='tabs' data-expand='true' data-tabs-type='text')
            li
              a(href='\#;') Home
            li
              a(href='\#;') Profile
            li
              a(href='\#;') Links
      .cell-lg-4.mt-2
        .bg-white.p-4.h-100
          h5.mt-0 Group type
          ul(data-role='tabs' data-expand='true' data-tabs-type='group')
            li
              a(href='\#;') Home
            li
              a(href='\#;') Profile
            li
              a(href='\#;') Links
      .cell-lg-4.mt-2
        .bg-white.p-4.h-100
          h5.mt-0 Pills type
          ul(data-role='tabs' data-expand='true' data-tabs-type='pills')
            li
              a(href='\#;') Home
            li
              a(href='\#;') Profile
            li
              a(href='\#;') Links

</template>