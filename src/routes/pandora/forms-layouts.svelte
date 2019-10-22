<template lang="pug">
.row.border-bottom.bd-lightGray.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Forms 
      small layouts
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') Forms
      li.page-item
        a.page-link(href='\#;') Layouts
.m-3
  .row
    .cell-lg-6
      .bg-white.p-4
        h4 Vertical form and form group
        form
          .form-group
            label Group 1
            input(type='text')
          .form-group
            label Group 2
            input(type='password')
          .form-group
            input(type='submit' value='Submit')
            input(type='reset' value='Reset')
            input(type='button' value='Button')
    .cell-lg-6
      .bg-white.p-4.h-100
        h4 Grid layout
        form
          .row
            .cell-md-6
              input(type='text' placeholder='First name')
            .cell-md-6
              input(type='text' placeholder='Last name')
  .row.mt-4
    .cell-12
      .bg-white.p-4
        h4 Inline form
        form.inline-form
          input(type='text' placeholder='Your Name')
          input(type='text' placeholder='Username')
          input(type='checkbox' data-role='checkbox' data-caption='Remember me')
          button.button.success Submit
  .row.mt-4
    .cell-12
      .bg-white.p-4
        h4 Horizontal form
        form
          .row.mb-2
            label.cell-sm-2 Email
            .cell-sm-10
              input(type='email')
          .row.mb-2
            label.cell-sm-2 Password
            .cell-sm-10
              input(type='password')
          .row.mb-2
            label.cell-sm-2 Radios
            .cell-sm-10
              input(name='horizontal_form_r1' type='radio' data-role='radio' data-caption='Option one' checked='')
              input(name='horizontal_form_r1' type='radio' data-role='radio' data-caption='Option two')
              input(name='horizontal_form_r1' type='radio' data-role='radio' data-caption='Option three is disabled' disabled='')
          .row.mb-2
            label.cell-sm-2 Checkbox
            .cell-sm-10
              input(name='horizontal_form_c1' type='checkbox' data-role='checkbox' data-caption='Check me out' checked='')
          .row
            .cell
              button.button.primary(type='submit') Sign in

</template>