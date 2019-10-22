
<script>
  import { onMount, onDestroy} from "svelte";
  onMount(() => {
    // var hash = location.hash;
    // var target = hash.length > 0 ? hash.substr(1) : "dashboard";
    // var link = J(".navview-menu a[href*="+target+"]");
    // var menu = link.closest("ul[data-role=dropdown]");
  });
</script>
<template lang="pug">
div(data-role='navview' data-toggle='#paneToggle' data-expanded='xl' data-compact='lg' data-active-state='true')
  .navview-pane
    .bg-cyan.d-flex.flex-align-center
      button.pull-button.m-0.bg-darkCyan-hover
        span.mif-menu.fg-white
      h2.text-light.m-0.fg-white.pl-7(style='line-height: 52px') Pandora
    .suggest-box
      .data-box
        img.avatar(src='images/pandora/images/jek_vorobey.jpg' alt='image')
        .ml-4.avatar-title.flex-column
          a.d-block.fg-white.text-medium.no-decor(href='#!')
            span.reduce-1 Jack Sparrow
          p.m-0
            span.fg-green.mr-2 &#x25CF;
            span.text-small online
      img.avatar.holder.ml-2(src='images/pandora/images/jek_vorobey.jpg' alt='image')
    .suggest-box
      input(type='text' data-role='input' data-clear-button='false' data-search-button='true')
      button.holder
        span.mif-search.fg-white
    ul#side-menu.navview-menu.mt-4
      li.item-header MAIN NAVIGATION
      li
        a(href='/pandora/dashboard')
          span.icon
            span.mif-meter
          span.caption Dashboard
      li
        a(href='/pandora/widgets')
          span.icon
            span.mif-widgets
          span.caption Widgets
      li
        a.dropdown-toggle(href='#!')
          span.icon
            span.mif-versions
          span.caption Sample Pages
        ul.navview-menu.stay-open(data-role='dropdown')
          li.item-header Pages
          li
            a(href='/pandora_pages/login')
              span.icon
                span.mif-lock
              span.caption Login
          li
            a(href='/pandora_pages/register')
              span.icon
                span.mif-user-plus
              span.caption Register
          li
            a(href='/pandora_pages/lockscreen')
              span.icon
                span.mif-key
              span.caption Lock screen
          li
            a(href='/pandora/profile')
              span.icon
                span.mif-profile
              span.caption Profile
          li
            a(href='/pandora_pages/preloader')
              span.icon
                span.mif-spinner
              span.caption Preloader
          li
            a(href='/pandora_pages/404')
              span.icon
                span.mif-cancel
              span.caption 404 Page
          li
            a(href='/pandora_pages/500')
              span.icon
                span.mif-warning
              span.caption 500 Page
          li
            a(href='/pandora/product-list')
              span.icon
                span.mif-featured-play-list
              span.caption Product list
          li
            a(href='/pandora/product')
              span.icon
                span.mif-rocket
              span.caption Product page
          li
            a(href='/pandora/invoice')
              span.icon
                span.mif-open-book
              span.caption Invoice
          li
            a(href='/pandora/orders')
              span.icon
                span.mif-table
              span.caption Orders
          li
            a(href='/pandora/order-details')
              span.icon
                span.mif-library
              span.caption Order details
          li
            a(href='/pandora/price-table')
              span.icon
                span.mif-table
              span.caption Price table
          li
            a(href='/pandora_pages/maintenance')
              span.icon
                span.mif-cogs
              span.caption Maintenance
          li
            a(href='/pandora_pages/coming-soon')
              span.icon
                span.mif-watch
              span.caption Coming soon
          li
            a(href='/pandora_pages/help-center')
              span.icon
                span.mif-help
              span.caption Help center
      li
        a.dropdown-toggle(href='#!')
          span.icon
            span.mif-devices
          span.caption Forms
        ul.navview-menu.stay-open(data-role='dropdown')
          li.item-header Forms
          li
            a(href='/pandora/forms-basic')
              span.icon
                span.mif-spinner2
              span.caption Basic elements
          li
            a(href='/pandora/forms-extended')
              span.icon
                span.mif-spinner2
              span.caption Extended elements
          li
            a(href='/pandora/forms-layouts')
              span.icon
                span.mif-spinner2
              span.caption Layouts
          li
            a(href='/pandora/forms-validating')
              span.icon
                span.mif-spinner2
              span.caption Validating
      li
        a.dropdown-toggle(href='#!')
          span.icon
            span.mif-table
          span.caption Tables
        ul.navview-menu.stay-open(data-role='dropdown')
          li.item-header Tables
          li
            a(href='/pandora/table-classes')
              span.icon
                span.mif-spinner2
              span.caption Table classes
          li
            a(href='/pandora/table-component')
              span.icon
                span.mif-spinner2
              span.caption Table component
      li
        a.dropdown-toggle(href='#!')
          span.icon
            span.mif-air
          span.caption UI Elements
        ul.navview-menu.stay-open(data-role='dropdown')
          li.item-header UI Elements
          li
            a(href='/pandora/colors')
              span.icon
                span.mif-paint
              span.caption Colors
          li
            a(href='/pandora/typography')
              span.icon
                span.mif-bold
              span.caption Typography
          li
            a(href='/pandora/buttons')
              span.icon
                span.mif-apps
              span.caption Buttons
          li
            a(href='/pandora/tabs')
              span.icon
                span.mif-open-book
              span.caption Accordion &amp; Tabs
          li
            a(href='/pandora/tiles')
              span.icon
                span.mif-dashboard
              span.caption Tiles
          li
            a(href='/pandora/treeview')
              span.icon
                span.mif-tree
              span.caption TreeView
          li
            a(href='/pandora/listview')
              span.icon
                span.mif-list
              span.caption ListView
          li
            a(href='/pandora/progress')
              span.icon
                span.mif-spinner5
              span.caption Progress &amp; activities
          li
            a(href='/pandora/list')
              span.icon
                span.mif-list2
              span.caption List component
          li
            a(href='/pandora/splitter')
              span.icon
                span.mif-table
              span.caption Splitter
          li
            a(href='/pandora/calendar')
              span.icon
                span.mif-calendar
              span.caption Calendar
          li
            a(href='/pandora/countdown')
              span.icon
                span.mif-watch
              span.caption Countdown
          li
            a(href='/pandora/notifies')
              span.icon
                span.mif-watch
              span.caption notifies
          li
            a(href='/pandora/toasts')
              span.icon
                span.mif-watch
              span.caption toasts
      li
        a.dropdown-toggle(href='#!')
          span.icon
            span.mif-play
          span.caption Media
        ul.navview-menu.stay-open(data-role='dropdown')
          li.item-header Media
          li
            a(href='/pandora/video')
              span.icon
                span.mif-spinner2
              span.caption Video player
          li
            a(href='/pandora/audio')
              span.icon
                span.mif-spinner2
              span.caption Audio
      li
        a.dropdown-toggle(href='#!')
          span.icon
            span.mif-comment
          span.caption Information
        ul.navview-menu.stay-open(data-role='dropdown')
          li.item-header Information
          li
            a(href='/pandora/windows')
              span.icon
                span.mif-spinner2
              span.caption Windows
          li
            a(href='/pandora/dialogs')
              span.icon
                span.mif-spinner2
              span.caption Dialogs
          li
            a(href='/pandora/info-boxes')
              span.icon
                span.mif-spinner2
              span.caption InfoBox
          li
            a(href='/pandora/hints')
              span.icon
                span.mif-spinner2
              span.caption Hints
      li
        a.dropdown-toggle(href='#!')
          span.icon
            span.mif-envelop
          span.caption Mailbox
          span.badges.ml-auto.mr-3
            span.badge.inline.bg-cyan.fg-white 17
            span.badge.inline.bg-red.fg-white 7
            span.badge.inline.bg-green.fg-white 4
            span.badge.inline.bg-orange.fg-white 3
        ul.navview-menu.stay-open(data-role='dropdown')
          li.item-header Mailbox
          li
            a(href='/pandora/inbox')
              span.icon
                span.mif-mail
              span.caption Inbox
          li
            a(href='/pandora/inbox2')
              span.icon
                span.mif-mail
              span.caption Inbox2
          li
            a(href='/pandora/compose')
              span.icon
                span.mif-mail-read
              span.caption Compose
          li
            a(href='/pandora/read-email')
              span.icon
                span.mif-mail-read
              span.caption Read email
      li
        a(href='/pandora/chat')
          span.icon
            span.mif-bubbles
          span.caption Chat
          span.badges.ml-auto.mr-3
            span.badge.inline.bg-red.fg-white 7
            span.badge.inline.bg-green.fg-white 4
            span.badge.inline.bg-orange.fg-white 3
      li
        a.dropdown-toggle(href='#!')
          span.icon
            span.mif-magic-wand
          span.caption Wizards
        ul.navview-menu.stay-open(data-role='dropdown')
          li.item-header Wizards
          li
            a(href='/pandora/master')
              span.icon
                span.mif-spinner2
              span.caption Master
          li
            a(href='/pandora/wizard')
              span.icon
                span.mif-spinner2
              span.caption Wizard
      li.item-header Documentation
      li
        a(href='https://metroui.org.ua/intro.html')
          span.icon
            span.mif-brightness-auto.fg-red
          span.caption Metro 4
    .w-100.text-center.text-small.data-box.p-2.border-top.bd-grayMouse(style='position: absolute; bottom: 0')
      div
        | &copy; 2019 
        a.text-muted.fg-white-hover.no-decor(href='mailto:sergey@pimenov.com.ua') Sergey Pimenov
      div
        | Created with 
        a.text-muted.fg-white-hover.no-decor(href='https://metroui.org.ua') Metro 4
  .navview-content.h-100
    .pos-absolute.bg-darkCyan.fg-white(data-role='appbar')
      a#paneToggle.app-bar-item.d-block.d-none-lg(href='javascript:void()')
        span.mif-menu
      .app-bar-container.ml-auto
        a.app-bar-item(href='#!')
          span.mif-envelop
          span.badge.bg-green.fg-white.mt-2.mr-1 4
        a.app-bar-item(href='#!')
          span.mif-bell
          span.badge.bg-orange.fg-white.mt-2.mr-1 10
        a.app-bar-item(href='#!')
          span.mif-flag
          span.badge.bg-red.fg-white.mt-2.mr-1 9
        .app-bar-container
          a.app-bar-item(href='#!')
            img.avatar(src='images/pandora/images/jek_vorobey.jpg' alt='image')
            span.ml-2.app-bar-name Jack Sparrow
          .user-block.shadow-1(data-role='collapse' data-collapsed='true')
            .bg-darkCyan.fg-white.p-2.text-center
              img.avatar(src='images/pandora/images/jek_vorobey.jpg' alt='image')
              .h4.mb-0 Jack Sparrow
              div Pirate captain
            .bg-white.d-flex.flex-justify-between.flex-equal-items.p-2
              button.button.flat-button Followers
              button.button.flat-button Sales
              button.button.flat-button Friends
            .bg-white.d-flex.flex-justify-between.flex-equal-items.p-2.bg-light
              button.button.mr-1 Profile
              button.button.ml-1 Sign out
        a.app-bar-item(href='#!')
          span.mif-cogs
    #content-wrapper.content-inner.h-100(style='overflow-y: auto')
      slot

</template>