<template lang="pug">
.row.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Colors
      small ui elements
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') UI Elements
      li.page-item
        a.page-link(href='\#;') Color
.p-1.m-3
  .bg-white.p-6
    h4.mt-0 Accent colors
    .row
      .cell-md-3.p-10.accent-block.alert.text-center alert
      .cell-md-3.p-10.accent-block.warning.text-center warning
      .cell-md-3.p-10.accent-block.success.text-center success
      .cell-md-3.p-10.accent-block.info.text-center info
      .cell-md-3.p-10.accent-block.yellow.text-center yellow
      .cell-md-3.p-10.accent-block.primary.text-center primary
      .cell-md-3.p-10.accent-block.secondary.text-center secondary
      .cell-md-3.p-10.accent-block.dark.text-center dark
      .cell-md-3.p-10.accent-block.light.text-center light
    p.remark.info
      | You can use accent colors with: 
      code buttons
      | , 
      code inputs
      | , 
      code divs
      | , 
      code paginates
      | , 
      code remarks
      | , 
      code toasts
      | , 
      code notifies
      |  and 
      code info boxes
      | .
.p-1.m-3
  .bg-white.p-6
    h4.mt-0 Simple and additional colors
    p
      | To use simple and additional colors you must add special prefix to color name.
      | Example: 
      code bg-*
      |  - for background, 
      code fg-*
      |  - for text color.
      |             In table below specified all prefixes.
    br
    table.table.table-border.cell-border.compact
      thead
        tr
          td Target
          td Class
      tbody
        tr
          td background
          td bg-*
        tr
          td text color
          td fg-*
        tr
          td border
          td bd-*
        tr
          td outline
          td ol-*
        tr
          td active
          td bg-*-active, fg-*-active, bd-*-active, ol-*-active
        tr
          td hover
          td bg-*-hover, fg-*-hover, bd-*-hover, ol-*-hover
        tr
          td focus
          td bg-*-focus, fg-*-focus, bd-*-focus, ol-*-focus
        tr
          td ribbed background
          td ribbed-*
        tr
          td opacity background
          td op-*
        tr
          td before
          td before-bg-*, before-fg-*
        tr
          td after
          td after-bg-*, after-fg-*
.p-1.m-3
  .bg-white.p-6
    h4.mt-0 Simple colors
    .row
      .cell-md-6
        .p-1.bg-black.fg-white black
        .p-1.bg-white.fg-dark white
        .p-1.bg-dark.fg-white dark
      .cell-md-6
        .p-1.bg-light.fg-dark light
        .p-1.bg-grayWhite.fg-dark grayWhite
        .p-1.bg-grayMouse.fg-white grayMouse
.p-1.m-3
  .bg-white.p-6
    h4.mt-0 Additional colors
    .row
      .cell-md-3
        .p-1.bg-lightLime.fg-white light
        .p-1.bg-lime.fg-white lime
        .p-1.bg-darkLime.fg-white dark
      .cell-md-3
        .p-1.bg-lightGreen.fg-white light
        .p-1.bg-green.fg-white green
        .p-1.bg-darkGreen.fg-white dark
      .cell-md-3
        .p-1.bg-lightEmerald.fg-white light
        .p-1.bg-emerald.fg-white emerald
        .p-1.bg-darkEmerald.fg-white dark
      .cell-md-3
        .p-1.bg-lightBlue.fg-white light
        .p-1.bg-blue.fg-white blue
        .p-1.bg-darkBlue.fg-white dark
    .row.mt-3
      .cell-md-3
        .p-1.bg-lightTeal.fg-white light
        .p-1.bg-teal.fg-white teal
        .p-1.bg-darkTeal.fg-white dark
      .cell-md-3
        .p-1.bg-lightCyan.fg-white light
        .p-1.bg-cyan.fg-white cyan
        .p-1.bg-darkCyan.fg-white dark
      .cell-md-3
        .p-1.bg-lightCobalt.fg-white light
        .p-1.bg-cobalt.fg-white cobalt
        .p-1.bg-darkCobalt.fg-white dark
      .cell-md-3
        .p-1.bg-lightIndigo.fg-white light
        .p-1.bg-indigo.fg-white indigo
        .p-1.bg-darkIndigo.fg-white dark
    .row.mt-3
      .cell-md-3
        .p-1.bg-lightViolet.fg-white light
        .p-1.bg-violet.fg-white violet
        .p-1.bg-darkViolet.fg-white dark
      .cell-md-3
        .p-1.bg-lightPink.fg-white light
        .p-1.bg-pink.fg-white pink
        .p-1.bg-darkPink.fg-white dark
      .cell-md-3
        .p-1.bg-lightMagenta.fg-white light
        .p-1.bg-magenta.fg-white magenta
        .p-1.bg-darkMagenta.fg-white dark
      .cell-md-3
        .p-1.bg-lightCrimson.fg-white light
        .p-1.bg-crimson.fg-white crimson
        .p-1.bg-darkCrimson.fg-white dark
    .row.mt-3
      .cell-md-3
        .p-1.bg-lightRed.fg-white light
        .p-1.bg-red.fg-white red
        .p-1.bg-darkRed.fg-white dark
      .cell-md-3
        .p-1.bg-lightOrange.fg-white light
        .p-1.bg-orange.fg-white orange
        .p-1.bg-darkOrange.fg-white dark
      .cell-md-3
        .p-1.bg-lightAmber.fg-white light
        .p-1.bg-amber.fg-white amber
        .p-1.bg-darkAmber.fg-white dark
      .cell-md-3
        .p-1.bg-lightYellow.fg-white light
        .p-1.bg-yellow.fg-white yellow
        .p-1.bg-darkYellow.fg-white dark
    .row.mt-3
      .cell-md-3
        .p-1.bg-lightBrown.fg-white light
        .p-1.bg-brown.fg-white brown
        .p-1.bg-darkBrown.fg-white dark
      .cell-md-3
        .p-1.bg-lightOlive.fg-white light
        .p-1.bg-olive.fg-white olive
        .p-1.bg-darkOlive.fg-white dark
      .cell-md-3
        .p-1.bg-lightSteel.fg-white light
        .p-1.bg-steel.fg-white steel
        .p-1.bg-darkSteel.fg-white dark
      .cell-md-3
        .p-1.bg-lightMauve.fg-white light
        .p-1.bg-mauve.fg-white mauve
        .p-1.bg-darkMauve.fg-white dark
    .row.mt-3
      .cell-md-3
        .p-1.bg-lightTaupe.fg-white light
        .p-1.bg-taupe.fg-white lime
        .p-1.bg-darkTaupe.fg-white dark
      .cell-md-3
        .p-1.bg-lightGray.fg-white light
        .p-1.bg-gray.fg-white gray
        .p-1.bg-darkGray.fg-white dark
      .cell-md-3
        .p-1.bg-lightGrayBlue.fg-white light
        .p-1.bg-grayBlue.fg-white grayBlue
        .p-1.bg-darkGrayBlue.fg-white dark

</template>