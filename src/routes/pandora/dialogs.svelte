<template lang="pug">
.row.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Dialog
      small information
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') Information
      li.page-item
        a.page-link(href='\#;') Dialog
#demoDialog1.dialog(data-role='dialog')
  .dialog-title Use Windows location service?
  .dialog-content
    | Bassus abactors ducunt ad triticum.
    | A fraternal form of manifestation is the bliss.
  .dialog-actions
    button.button.js-dialog-close Disagree
    button.button.primary.js-dialog-close Agree
.p-1.m-3
  .bg-white.p-4.text-center
    button.button(onclick="Metro.dialog.open('#demoDialog1')") Open pre-defined dialog
  br
  .row
    .cell-md-6.cell-lg-4.mt-2
      .dialog.pos-relative.win-shadow
        .dialog-title Use Windows location service?
        .dialog-content
          | Bassus abactors ducunt ad triticum.
          | A fraternal form of manifestation is the bliss.
        .dialog-actions
          button.button Disagree
          button.button.primary Agree
    .cell-md-6.cell-lg-4.mt-2
      .dialog.primary.pos-relative.win-shadow
        .dialog-title Use Windows location service?
        .dialog-content
          | Bassus abactors ducunt ad triticum.
          | A fraternal form of manifestation is the bliss.
        .dialog-actions
          button.button Disagree
          button.button.primary Agree
    .cell-md-6.cell-lg-4.mt-2
      .dialog.secondary.pos-relative.win-shadow
        .dialog-title Use Windows location service?
        .dialog-content
          | Bassus abactors ducunt ad triticum.
          | A fraternal form of manifestation is the bliss.
        .dialog-actions
          button.button Disagree
          button.button.primary Agree
    .cell-md-6.cell-lg-4.mt-2
      .dialog.light.pos-relative.win-shadow
        .dialog-title Use Windows location service?
        .dialog-content
          | Bassus abactors ducunt ad triticum.
          | A fraternal form of manifestation is the bliss.
        .dialog-actions
          button.button Disagree
          button.button.primary Agree
    .cell-md-6.cell-lg-4.mt-2
      .dialog.dark.pos-relative.win-shadow
        .dialog-title Use Windows location service?
        .dialog-content
          | Bassus abactors ducunt ad triticum.
          | A fraternal form of manifestation is the bliss.
        .dialog-actions
          button.button Disagree
          button.button.primary Agree
    .cell-md-6.cell-lg-4.mt-2
      .dialog.alert.pos-relative.win-shadow
        .dialog-title Use Windows location service?
        .dialog-content
          | Bassus abactors ducunt ad triticum.
          | A fraternal form of manifestation is the bliss.
        .dialog-actions
          button.button Disagree
          button.button.primary Agree
    .cell-md-6.cell-lg-4.mt-2
      .dialog.warning.pos-relative.win-shadow
        .dialog-title Use Windows location service?
        .dialog-content
          | Bassus abactors ducunt ad triticum.
          | A fraternal form of manifestation is the bliss.
        .dialog-actions
          button.button Disagree
          button.button.primary Agree
    .cell-md-6.cell-lg-4.mt-2
      .dialog.success.pos-relative.win-shadow
        .dialog-title Use Windows location service?
        .dialog-content
          | Bassus abactors ducunt ad triticum.
          | A fraternal form of manifestation is the bliss.
        .dialog-actions
          button.button Disagree
          button.button.primary Agree
    .cell-md-6.cell-lg-4.mt-2
      .dialog.info.pos-relative.win-shadow
        .dialog-title Use Windows location service?
        .dialog-content
          | Bassus abactors ducunt ad triticum.
          | A fraternal form of manifestation is the bliss.
        .dialog-actions
          button.button Disagree
          button.button.primary Agree
  br
  .p-6.text-center
    | Read more about dialogs in the 
    a(href='https://metroui.org.ua/dialog.html') official docs
    | .

</template>