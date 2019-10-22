<template lang="pug">
.row.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | ListView
      small ui elements
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') UI Elements
      li.page-item
        a.page-link(href='\#;') ListView
.p-1.m-3
  .bg-white.p-4
    h5.mt-0 Any types of view
    .example
      .p-4.bg-light.d-flex.flex-justify-between
        input(type='radio' name='r1' value='list' data-role='radio' data-caption='List' title='')
        input(type='radio' name='r1' value='table' data-role='radio' data-caption='Table' checked='checked' title='')
        input(type='radio' name='r1' value='content' data-role='radio' data-caption='Content' title='')
        input(type='radio' name='r1' value='tiles' data-role='radio' data-caption='Tiles' title='')
        input(type='radio' name='r1' value='icons' data-role='radio' data-caption='Icons' title='')
        input(type='radio' name='r1' value='icons-medium' data-role='radio' data-caption='Medium icons' title='')
        input(type='radio' name='r1' value='icons-large' data-role='radio' data-caption='Large icons' title='')
      .border.bd-light.p-4
        ul#listview-1.w-100(data-role='listview' data-view='table' data-select-node='true')
          li(data-icon="<span class='mif-folder fg-orange'>" data-caption='Video' data-content="<div class='mt-1' data-role='progress' data-value='35' data-small='true'>" data-date='12/21/2017' data-name='Video library')
          li(data-icon="<span class='mif-folder fg-cyan'>" data-caption='Images' data-content="<div class='mt-1' data-role='progress' data-value='78' data-small='true'>" data-date='12/21/2017' data-name='My images')
          li(data-icon="<span class='mif-folder fg-green'>" data-caption='Documents' data-content="<div class='mt-1' data-role='progress' data-value='24' data-small='true'>" data-date='12/21/2017' data-name='My documents')
          li(data-icon="<span class='mif-folder-download fg-blue'>" data-caption='Downloads' data-content="<div class='mt-1' data-role='progress' data-value='85' data-small='true'>" data-date='12/21/2017' data-name='System folder')
          li(data-icon="<span class='mif-folder'>" data-caption='Desktop' data-content="<div class='mt-1' data-role='progress' data-value='10' data-small='true'>" data-date='12/21/2017' data-name='System folder')
          li(data-icon='images/pandora/images/disk-os.png' data-caption='System (C:)' data-format='NTFS' data-name='Local drive')
          li(data-icon='images/pandora/images/disk.png' data-caption='DS1 (D:)' data-format='NTFS' data-name='Local drive')
          li(data-icon='images/pandora/images/disk.png' data-caption='DS2 (E:)' data-format='NTFS' data-name='Local drive')
          li(data-icon='images/pandora/images/disk.png' data-caption='FreeAgent (G:)' data-format='FAT32' data-name='External drive')
          li(data-icon='images/pandora/images/disk-network.png' data-caption='Network' data-format='' data-name='Network')
  .row.mt-3
    .cell-lg-6
      .bg-white.p-4
        h5.mt-0 Grouping
        .example
          .p-4.bg-light.d-flex.flex-justify-between
            input(type='radio' name='r2' value='list' data-role='radio' data-caption='List' title='')
            input(type='radio' name='r2' value='content' data-role='radio' data-caption='Content' title='')
            input(type='radio' name='r2' value='tiles' data-role='radio' data-caption='Tiles' title='')
            input(type='radio' name='r2' value='icons' data-role='radio' data-caption='Icons' checked='' title='')
          .border.bd-light.p-4
            ul#listview-2(data-role='listview' data-view='icons' data-select-node='true')
              li(data-caption='Folders')
                ul
                  li(data-icon="<span class='mif-folder fg-orange'>" data-caption='Video')
                  li(data-icon="<span class='mif-folder fg-cyan'>" data-caption='Images')
                  li(data-icon="<span class='mif-folder fg-green'>" data-caption='Documents')
                  li(data-icon="<span class='mif-folder-download fg-blue'>" data-caption='Downloads')
                  li(data-icon="<span class='mif-folder'>" data-caption='Desktop')
              li(data-caption='Devices and disks')
                ul
                  li(data-icon='images/pandora/images/disk-os.png' data-caption='System (C:)')
                  li(data-icon='images/pandora/images/disk.png' data-caption='DS1 (D:)')
                  li(data-icon='images/pandora/images/disk.png' data-caption='DS2 (E:)')
                  li(data-icon='images/pandora/images/disk.png' data-caption='FreeAgent (G:)')
                  li(data-icon='images/pandora/images/disk-network.png' data-caption='Network')
    .cell-lg-6
      .bg-white.p-4
        h5.mt-0 Selectable
        .example
          .p-4.bg-light.d-flex.flex-justify-between
            input(data-role='switch' data-caption='Select' title='' onclick="var lv = $('#listview-3'); $(this).is(':checked') ? lv.attr('data-selectable', true) : lv.attr('data-selectable', false)")
            input(type='radio' name='r3' value='list' data-role='radio' data-caption='List' title='')
            input(type='radio' name='r3' value='content' data-role='radio' data-caption='Content' title='')
            input(type='radio' name='r3' value='tiles' data-role='radio' data-caption='Tiles' title='')
            input(type='radio' name='r3' value='icons' data-role='radio' data-caption='Icons' checked='' title='')
          .border.bd-light.p-4
            ul#listview-3(data-role='listview' data-view='icons' data-select-node='true' data-selectable='false' data-select-current='false')
              li(data-caption='Folders')
                ul
                  li(data-icon="<span class='mif-folder fg-orange'>" data-caption='Video')
                  li(data-icon="<span class='mif-folder fg-cyan'>" data-caption='Images')
                  li(data-icon="<span class='mif-folder fg-green'>" data-caption='Documents')
                  li(data-icon="<span class='mif-folder-download fg-blue'>" data-caption='Downloads')
                  li(data-icon="<span class='mif-folder'>" data-caption='Desktop')
              li(data-caption='Devices and disks')
                ul
                  li(data-icon='images/pandora/images/disk-os.png' data-caption='System (C:)')
                  li(data-icon='images/pandora/images/disk.png' data-caption='DS1 (D:)')
                  li(data-icon='images/pandora/images/disk.png' data-caption='DS2 (E:)')
                  li(data-icon='images/pandora/images/disk.png' data-caption='FreeAgent (G:)')
                  li(data-icon='images/pandora/images/disk-network.png' data-caption='Network')

</template>