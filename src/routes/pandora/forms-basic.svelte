<template lang="pug">
.row.border-bottom.bd-lightGray.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Forms 
      small basic elements
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='#;')
          span.mif-meter
      li.page-item
        a.page-link(href='#;') Forms
      li.page-item
        a.page-link(href='#;') Basic elements
.m-3
  .row
    .cell-lg-6
      .bg-white.p-4.m-2
        h4 Default input styling
        form
          .form-group
            label Input[text]
            input(type='text')
          .form-group
            label Input[password]
            input(type='password')
          .form-group
            label Select
            select
              option Value 1
              option Value 2
              option Value 3
          .form-group
            label Text area
            textarea
          .form-group
            input(type='submit' value='Submit')
            input(type='reset' value='Reset')
            input(type='button' value='Button')
      .bg-white.p-4.m-2
        h4 Disabled inputs
        form
          .form-group
            label Input[text]
            input(type='text' disabled='')
          .form-group
            label Input[password]
            input(type='password' disabled='')
          .form-group
            label Select
            select(disabled='')
              option Value 1
              option Value 2
              option Value 3
          .form-group
            label Text area
            textarea(disabled='')
          .form-group
            input(type='submit' value='Submit' disabled='')
            input(type='reset' value='Reset' disabled='')
            input(type='button' value='Button' disabled='')
      .bg-white.p-4.m-2
        h4 RTL support
        form
          .form-group
            label Input[text]
            input(type='text' dir='rtl' value='Damn yer cannibal, feed the bung hole.')
          .form-group
            label Input[password]
            input(type='password' dir='rtl' value='1234567890')
          .form-group
            label Select
            select(dir='rtl')
              option Value 1
              option Value 2
              option Value 3
          .form-group
            label Text area
            textarea(dir='rtl') Totality is not small in paradise, the kingdom, or shangri-la, but everywhere.
    .cell-lg-6
      .bg-white.p-4.m-2
        h4 Accent colors
        form
          .form-group
            label Primary
            input.primary(type='text')
          .form-group
            label Secondary
            input.secondary(type='text')
          .form-group
            label Success
            input.success(type='text')
          .form-group
            label Alert
            input.alert(type='text')
          .form-group
            label Warning
            input.warning(type='text')
          .form-group
            label Yellow
            input.yellow(type='text')
          .form-group
            label Info
            input.info(type='text')
          .form-group
            label Dark
            input.dark(type='text')
          .form-group
            label Required
            input.required(type='text')
      .bg-white.p-4.m-2
        h4 Default validating
        form.custom-validation.need-validation(novalidate='')
          .row.mb-3
            .cell-md-6
              label First name
              input(type='text' required='' value='Billy' title='')
            .cell-md-6
              label Last name
              input(type='text' required='' value='Gates' title='')
          .row.mb-2
            .cell-md-6
              label City
              input(type='text' required='' placeholder='City' title='')
              .invalid_feedback Please provide a valid city.
            .cell-md-3
              label State
              input(type='text' required='' placeholder='State' title='')
              .invalid_feedback Please provide a valid state.
            .cell-md-3
              label Zip
              input(type='text' required='' placeholder='Zip' title='')
              .invalid_feedback Please provide a valid zip.
          button.button.primary Submit form

</template>