<template lang="pug">
.row.border-bottom.bd-lightGray.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Profile 
      small of user
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') User
      li.page-item
        a.page-link(href='\#;') Profile
.row.m-3
  .cell-lg-4.cell-md-6
    .bg-white.p-4
      .skill-box.mt-4-minus
        .header.border-top.border-bottom.bd-default
          img.avatar(alt='image' src='images/pandora/images/jek_vorobey.jpg')
          .title Jack Sparrow
          .subtitle Pirate captain
        ul.skills
          li
            span Projects
            span.badge.bg-orange.fg-white 25
          li
            span Tasks
            span.badge.bg-cyan.fg-white 5
          li
            span Completed Projects
            span.badge.bg-green.fg-white 21
          li
            span Followers
            span.badge.bg-red.fg-white 1024
        .d-flex.flex-justify-start.flex-align-center.p-4
          button.button.info Follow
          button.button.dark.ml-1 Message
          button.button.square.ml-1
            span.mif-cog
    br
    .bg-white.p-4
      div(data-role='panel' data-title-caption="Friends  <span class='place-right text-bold'>new 3</span>")
        ul.user-list.flex-justify-start
          li
            img.avatar(alt='image' src='images/pandora/images/user1-128x128.jpg')
            .text-ellipsis Sergey
            .text-small.text-muted Today
          li
            img.avatar(alt='image' src='images/pandora/images/user2-160x160.jpg')
            .text-ellipsis Alex
            .text-small.text-muted Yesterday
          li
            img.avatar(alt='image' src='images/pandora/images/user3-128x128.jpg')
            .text-ellipsis Norma
            .text-small.text-muted Yesterday
          li
            img.avatar(alt='image' src='images/pandora/images/user4-128x128.jpg')
            .text-ellipsis Katty
            .text-small.text-muted 11 Jan
          li
            img.avatar(alt='image' src='images/pandora/images/user5-128x128.jpg')
            .text-ellipsis Julia
            .text-small.text-muted 11 Jan
          li
            img.avatar(alt='image' src='images/pandora/images/user6-128x128.jpg')
            .text-ellipsis Mark
            .text-small.text-muted 11 Jan
          li
            img.avatar(alt='image' src='images/pandora/images/user7-128x128.jpg')
            .text-ellipsis Marta
            .text-small.text-muted 11 Jan
          li
            img.avatar(alt='image' src='images/pandora/images/user8-128x128.jpg')
            .text-ellipsis Ustas
            .text-small.text-muted 11 Jan
    br
    .bg-white.p-4
      div(data-role='panel' data-title-caption="Groups <span class='place-right text-bold'>last F</span>")
        ul.items-list
          li
            span.avatar A
            span.label Android
            span.second-label 1.856.546 people
            span.second-action.mif-more-vert
          li
            span.avatar G
            span.label Google
            span.second-label 1.226.546 people
            span.second-action.mif-more-vert
          li
            span.avatar F
            span.label Fallout
            span.second-label 856.546 people
            span.second-action.mif-more-vert
  .cell-lg-8.cell-md-6
    .bg-white.p-4
      ul(data-role='tabs' data-expand='true')
        li
          a(href='#profile-about') About
        li
          a(href='#profile-activity') Activity
        li
          a(href='\#;') Timeline
        li
          a(href='\#;') Projects
      #user-profile-tabs-content
        #profile-about
          br
          div(data-role='panel' data-title-caption='General information' data-title-icon="<span class='mif-info'>" data-collapsible='true')
            .text-bold Gender
            div Male
            .text-bold.mt-2 Birthday
            div February 30th, 1974
            .text-bold.mt-2 Locations
            address
              | Khreschatyk str, Suite 1
              br
              |                             Kiev, Ukraine 01001
              br
              abbr(title='primary phone number') Phone:
              |  (123) 456-7890
            .text-bold.mt-2 About Me
            div
              | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget pharetra felis, sed ullamcorper dui. Sed et elementum neque. Vestibulum pellente viverra ultrices. Etiam justo augue, vehicula ac gravida a, interdum sit amet nisl. Integer vitae nisi id nibh dictum mollis in vitae tortor.
          br
          div(data-role='panel' data-title-caption='Work info' data-title-icon="<span class='mif-library'>" data-collapsible='true')
            .text-bold Occupation
            div Developer
            .text-bold.mt-2 Skills
            code C#
            | , 
            code PHP
            | , 
            code Javascript
            | , 
            code Angular
            | , 
            code JS
            | , 
            code HTML
            | , 
            code CSS
            .text-bold.mt-2 Jobs
            table.table.striped
              tr
                td Self-Employed
                td 2010 - Now
                td
                  span.mif-more-horiz
              tr
                td Google
                td 2008 - 2010
                td
                  span.mif-done.fg-green
              tr
                td Facebook
                td 2006 - 2008
                td
                  span.mif-done.fg-green
        #profile-activity
          br
          div(data-role='panel' data-title-caption='User activity' data-title-icon="<span class='mif-chart-line'>" data-collapsible='true')
            canvas#profileChart1
          br
          div(data-role='panel' data-title-caption='Clients' data-title-icon="<span class='mif-users'>" data-collapsible='true')
            table.table.striped.table-border.mt-4(data-role='table' data-cls-table-top='row' data-cls-search='cell-md-6' data-cls-rows-count='cell-md-6' data-rows='5' data-rows-steps='5, 10' data-show-activity='false' data-source='data/table.json' data-horizontal-scroll='true')

</template>