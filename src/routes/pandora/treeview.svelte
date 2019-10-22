<template lang="pug">
.row.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | TreeView
      small ui elements
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') UI Elements
      li.page-item
        a.page-link(href='\#;') TreeView
.p-1.m-3
  .row
    .cell-lg-4
      .bg-white.p-4
        h5.mt-0 Simple
        ul(data-role='treeview')
          li(data-icon="<span class='mif-star-full'></span>" data-caption='Favorites')
            ul
              li(data-icon="<span class='mif-library'></span>" data-caption='Projects')
              li(data-icon="<span class='mif-download'></span>" data-caption='Downloads')
              li(data-icon="<span class='mif-dashboard'></span>" data-caption='Desktop')
          li(data-icon="<span class='mif-onedrive'></span>" data-caption='OneDrive')
            ul
              li(data-caption='Documents')
              li(data-caption='Projects' data-collapsed='true')
                ul
                  li(data-caption='Web')
                  li(data-caption='Android')
                  li(data-caption='Windows')
                  li(data-caption='iOS')
    .cell-lg-4
      .bg-white.p-4
        h5.mt-0 Inputs
        ul(data-role='treeview')
          li.expanded(data-caption='Checkboxes')
            ul
              li
                input(type='checkbox' data-role='checkbox' data-caption='Play animation')
              li
                input(type='checkbox' data-role='checkbox' data-caption='Play sound' checked='')
              li
                input(type='checkbox' data-role='checkbox' data-caption='Disabled' disabled='')
              li
                input(type='checkbox' data-role='checkbox' data-caption='Disabled checked' checked='' disabled='')
          li.expanded(data-caption='Radios')
            ul
              li
                input(type='radio' name='r1' data-role='radio' data-caption='Play animation')
              li
                input(type='radio' name='r1' data-role='radio' data-caption='Play sound' checked='')
              li
                input(type='radio' data-role='radio' data-caption='Disabled' disabled='')
              li
                input(type='radio' data-role='radio' data-caption='Disabled checked' checked='' disabled='')
          li.expanded(data-caption='Switches')
            ul
              li
                input(type='checkbox' data-role='switch' data-caption='Play animation')
              li
                input(type='checkbox' data-role='switch' data-caption='Play sound' checked='')
              li
                input(type='checkbox' data-role='switch' data-caption='Disabled' disabled='')
              li
                input(type='checkbox' data-role='switch' data-caption='Disabled checked' checked='' disabled='')
          li.expanded(data-caption='Inputs')
            ul
              li(style='width: 220px')
                input(type='text' data-role='input')
              li(style='width: 220px')
                select(data-role='select')
                  option(value='1') Value 1
                  option(value='2') Value 2
                  option(value='3') Value 3
              li(style='width: 220px')
                textarea(data-role='textarea')
    .cell-lg-4
      .bg-white.p-4
        h5.mt-0 Options tree
        ul(data-role='treeview')
          li
            input(type='checkbox' data-role='checkbox' data-caption='Play video' title='')
            ul
              li
                input(type='checkbox' data-role='checkbox' data-caption='AVI' title='')
              li
                input(type='checkbox' data-role='checkbox' data-caption='MPEG' title='')
              li
                input(checked='' type='checkbox' data-role='checkbox' data-caption='VIDX' title='')
              li
                input(type='checkbox' data-role='checkbox' data-caption='MP4' title='')
              li
                input(checked='' type='checkbox' data-role='checkbox' data-caption='XVID' title='')
          li
            input(type='checkbox' data-role='checkbox' data-caption='Play audio' title='')
          li
            input(type='checkbox' data-role='checkbox' data-caption='Subtitles' title='')
            ul
              li
                input(type='checkbox' data-role='checkbox' data-caption='English' title='')
              li
                input(checked='' type='checkbox' data-role='checkbox' data-caption='Ukrainian' title='')
              li
                input(type='checkbox' data-role='checkbox' data-caption='Dutch' title='')

</template>