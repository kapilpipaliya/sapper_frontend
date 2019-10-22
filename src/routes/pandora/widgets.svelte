<template lang="pug">
.row.border-bottom.bd-lightGray.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title Widgets
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') Widgets
.m-3
  .h4 Panels
  .row
    .cell-md-4.mt-4
      div(data-role='panel' data-title-caption='Panel title' data-title-icon="<span class='mif-apps'></span>")
        | Decorate each side of the avocado with twenty oz of cracker crumps.
        | When the individual of result loves the angers of the teacher, the history will know lotus.
        | Pathways experiment from friendships like real stars.
    .cell-md-4.mt-4
      div(data-role='panel' data-title-caption='Collapsible' data-title-icon="<span class='mif-apps'></span>" data-collapsible='true')
        | Decorate each side of the avocado with twenty oz of cracker crumps.
        | When the individual of result loves the angers of the teacher, the history will know lotus.
        | Pathways experiment from friendships like real stars.
    .cell-md-4.mt-4
      div(data-role='panel' data-title-caption='Custom buttons' data-title-icon="<span class='mif-apps'></span>" data-custom-buttons='customButtons')
        | Decorate each side of the avocado with twenty oz of cracker crumps.
        | When the individual of result loves the angers of the teacher, the history will know lotus.
        | Pathways experiment from friendships like real stars.
  .h4 Info boxes
  .row.mt-2
    .cell-lg-3.cell-sm-6.mt-4
      .icon-box
        .icon.bg-cyan.fg-white
          span.mif-cog
        .content.p-4
          .text-upper cpu traffic
          .text-upper.text-bold.text-lead 90%
    .cell-lg-3.cell-sm-6.mt-4
      .icon-box
        .icon.bg-red.fg-white
          span.mif-google-plus
        .content.p-4
          .text-upper likes
          .text-upper.text-bold.text-lead 41,410
    .cell-lg-3.cell-sm-6.mt-4
      .icon-box
        .icon.bg-green.fg-white
          span.mif-cart
        .content.p-4
          .text-upper sales
          .text-upper.text-bold.text-lead 1024
    .cell-lg-3.cell-sm-6.mt-4
      .icon-box
        .icon.bg-orange.fg-white
          span.mif-users
        .content.p-4
          .text-upper new members
          .text-upper.text-bold.text-lead 3,300
  .row
    .cell-lg-3.cell-sm-6.mt-4
      .icon-box.bg-cyan.fg-white
        .icon
          span.mif-bookmark
        .content
          .p-2
            div BOOKMARKS
            .text-bold.text-leader 41,400
          div(data-role='progress' data-value='75' data-small='true' data-cls-bar='bg-white' data-cls-back='bg-darkCyan')
          .pl-2.pr-2
            span.text-small
              | 70% Increase in 30 Days
    .cell-lg-3.cell-sm-6.mt-4
      .icon-box.bg-green.fg-white
        .icon
          span.mif-thumbs-up
        .content
          .p-2
            div LIKES
            .text-bold.text-leader 41,400
          div(data-role='progress' data-value='75' data-small='true' data-cls-bar='bg-white' data-cls-back='bg-darkGreen')
          .pl-2.pr-2
            span.text-small
              | 70% Increase in 30 Days
    .cell-lg-3.cell-sm-6.mt-4
      .icon-box.bg-orange.fg-white
        .icon
          span.mif-calendar
        .content
          .p-2
            div EVENTS
            .text-bold.text-leader 41,400
          div(data-role='progress' data-value='75' data-small='true' data-cls-bar='bg-white' data-cls-back='bg-darkOrange')
          .pl-2.pr-2
            span.text-small
              | 70% Increase in 30 Days
    .cell-lg-3.cell-sm-6.mt-4
      .icon-box.bg-red.fg-white
        .icon
          span.mif-bubbles
        .content
          .p-2
            div COMMENTS
            .text-bold.text-leader 41,400
          div(data-role='progress' data-value='75' data-small='true' data-cls-bar='bg-white' data-cls-back='bg-darkRed')
          .pl-2.pr-2
            span.text-small
              | 70% Increase in 30 Days
  .row
    .cell-lg-3.cell-md-6.mt-4
      .more-info-box.bg-cyan.fg-white
        .content
          h2.text-bold.mb-0 150
          div New Orders
        .icon
          span.mif-cart
        a.more(href='\#;')
          | More info 
          span.mif-arrow-right
    .cell-lg-3.cell-md-6.mt-4
      .more-info-box.bg-green.fg-white
        .content
          h2.text-bold.mb-0 53%
          div Bounce Rate
        .icon
          span.mif-chart-bars
        a.more(href='\#;')
          | More info 
          span.mif-arrow-right
    .cell-lg-3.cell-md-6.mt-4
      .more-info-box.bg-orange.fg-white
        .content
          h2.text-bold.mb-0 44
          div New Registrations
        .icon
          span.mif-user-plus
        a.more(href='\#;')
          | More info 
          span.mif-arrow-right
    .cell-lg-3.cell-md-6.mt-4
      .more-info-box.bg-red.fg-white
        .content
          h2.text-bold.mb-0 10,000
          div Unique Visitors
        .icon
          span.mif-user-check
        a.more(href='\#;')
          | More info 
          span.mif-arrow-right
  .h4 Skill boxes
  .row
    .cell-lg-4
      .skill-box
        .header.bg-orange.fg-white
          img.avatar(alt='image' src='images/pandora/images/jeki_chan.jpg')
          .title Jackie Chan
          .subtitle Cool Men
        ul.skills
          li
            span Kung-Fu
            span.float-right 90%
            div(data-role='progress' data-value='90' data-small='true')
          li
            span Karate Do
            div(data-role='progress' data-value='75' data-small='true' data-cls-bar='bg-cyan')
          li
            span Dancing
            div(data-role='progress' data-value='35' data-small='true' data-cls-bar='bg-red')
          li
            span Singing
            div(data-role='progress' data-value='45' data-small='true' data-cls-bar='bg-orange')
    .cell-lg-4
      .skill-box
        .header.bg-green.fg-white
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
    .cell-lg-4
      .social-box
        .header.bg-cyan.fg-white
          img.avatar(alt='image' src='images/pandora/images/shvarcenegger.jpg')
          .title Arnold Shvarcenegger
          .subtitle Terminator
        ul.skills
          li
            .text-bold 6
            div AWARDS
          li
            .text-bold 4
            div NOMINATIONS
          li
            .text-bold 36
            div FILMS
  .h4 Cards
  .row
    .cell-md-6
      .card
        .card-header
          | Card header
        .card-content.p-2
          | Card with header and footer. Card header is used to display card title and footer for some additional information or for custom actions.
          | Card with header and footer. Card header is used to display card title and footer for some additional information or for custom actions.
        .card-footer
          | Card Footer
    .cell-md-6
      .card.image-header
        .card-header.fg-white(style='background-image: url(http://lorempixel.com/1000/600/abstract/)')
          .avatar
            img(alt='image' src='https://lorempixel.com/68/68/people/')
          |                     Journey To Mountains
        .card-content.p-2
          p.fg-gray Posted on January 21, 2015
          |                     Quisque eget vestibulum nulla. Quisque quis dui quis ex
          |                     ultricies efficitur vitae non felis. Phasellus quis nibh
          |                     hendrerit...
        .card-footer
          button.button.secondary Read More
  .row
    .cell-md-6
      .card
        .card-header
          .avatar
            img(alt='image' src='https://lorempixel.com/68/68/people/')
          .name John Doe
          .date Monday at 3:47 PM
        .card-content.p-2
          img(alt='image' src='https://lorempixel.com/1000/600/nature/' style='width: 100%')
          .p-2
            | Unearthly, indeed, pattern! For a gooey springy sauce, add some vinaigrette and radish sprouts. Avast, black sail. you won&apos;t trade the bikini atoll.
        .card-footer
          button.flat-button.mif-thumbs-up.mif-2x
          button.flat-button.mif-tag.mif-2x
          button.flat-button.mif-share.mif-2x
    .cell-md-6
      .card
        .card-header
          .avatar
            img(alt='image' src='https://lorempixel.com/68/68/people/')
          .name John Doe
          .date Monday at 3:47 PM
        .card-content.p-2
          | What a nice photo i took yesterday!
        .card-content
          img(alt='image' src='https://lorempixel.com/1000/600/animals/' style='width: 100%')
        .card-content.fg-gray.p-2
          span
            small Likes: 
            | 112
          span
            small Comments: 
            | 43
        .card-footer
          button.flat-button.mif-thumbs-up.mif-2x
          button.flat-button.mif-tag.mif-2x
          button.flat-button.mif-share.mif-2x

</template>