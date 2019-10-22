<template lang="pug">
.row.border-bottom.bd-lightGray.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Forms 
      small validating
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') Forms
      li.page-item
        a.page-link(href='\#;') Validating
.m-3
  .bg-white.p-4
    form(data-role='validator' action='javascript:')
      .row.mb-2
        .cell-md-6
          label First name
          input(type='text' data-validate='required minlength=6' placeholder='Enter first name')
          span.invalid_feedback
            | Input correct name with min length 6 symbols
        .cell-md-6
          label Email
          input(type='email' data-validate='required email' placeholder='Enter email' data-role='input')
          span.invalid_feedback
            | Input correct email address
      .mt-2.mb-2
        label Select option
        select(data-role='select' data-validate='required not=-1')
          option.d-none(value='-1')
          option(value='1') Value 1
          option(value='2') Value 2
          option(value='3') Value 3
        span.invalid_feedback
          | You must select a option!
      .row.mb-2
        .cell-md-6
          input(type='checkbox' data-role='checkbox' data-caption='I accept the terms' data-validate='required')
          span.invalid_feedback
            | You must accept this!
        .cell-md-6
          input(type='radio' name='__r1' data-role='radio' value='1' data-validate='required' data-caption='Type 1')
          input(type='radio' name='__r1' data-role='radio' value='2' data-validate='required' data-caption='Type 2')
          input(type='radio' name='__r1' data-role='radio' value='3' data-validate='required' data-caption='Type 3')
          span.invalid_feedback
            | You must select a option!
      button.button.primary Submit
  br
  h4 Validations Functions
  .row
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Required
        form(action='javascript:' data-role='validator')
          input(type='text' data-validate='required')
          span.invalid_feedback Enter a required value
          button.button.mt-2 Submit
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Length
        form(action='javascript:' data-role='validator')
          input(type='text' data-validate='length=4')
          span.invalid_feedback Value length must be a 4 symbols
          button.button.mt-2 Submit
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Min length
        form(action='javascript:' data-role='validator')
          input(type='text' data-validate='minlength=4')
          span.invalid_feedback Min length must be a 4 symbols
          button.button.mt-2 Submit
  .row
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Max length
        form(action='javascript:' data-role='validator')
          input(type='text' data-validate='maxlength=4' value='12345')
          span.invalid_feedback Max length must be a 4 symbols
          button.button.mt-2 Submit
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Min
        form(action='javascript:' data-role='validator')
          input(type='number' data-validate='min=4' value='3')
          span.invalid_feedback Value must be great or equal then 4
          button.button.mt-2 Submit
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Max
        form(action='javascript:' data-role='validator')
          input(type='number' data-validate='max=4' value='5')
          span.invalid_feedback Value must be less or equal then 4
          button.button.mt-2 Submit
  .row
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Email
        form(action='javascript:' data-role='validator')
          input(type='text' data-validate='email' value='12345')
          span.invalid_feedback Value must be a valid email address
          button.button.mt-2 Submit
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Domain
        form(action='javascript:' data-role='validator')
          input(type='text' data-validate='domain' value='text')
          span.invalid_feedback Value must be a valid domain name
          button.button.mt-2 Submit
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Url
        form(action='javascript:' data-role='validator')
          input(type='text' data-validate='url' value='text')
          span.invalid_feedback Value must be a valid url
          button.button.mt-2 Submit
  .row
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Number
        form(action='javascript:' data-role='validator')
          input(type='text' data-validate='number')
          span.invalid_feedback Value must be a valid number value
          button.button.mt-2 Submit
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Integer
        form(action='javascript:' data-role='validator')
          input(type='text' data-validate='integer' value='text')
          span.invalid_feedback Value must be a valid integer value
          button.button.mt-2 Submit
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Float
        form(action='javascript:' data-role='validator')
          input(type='text' data-validate='float' value='text')
          span.invalid_feedback Value must be a valid float value
          button.button.mt-2 Submit
  .row
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Date ECMAScript
        form(action='javascript:' data-role='validator')
          input(type='text' data-validate='date' value='12-21-1972')
          span.invalid_feedback Value must be a valid date
          button.button.mt-2 Submit
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Any date
        form(action='javascript:' data-role='validator')
          input(type='text' data-validate='date' data-value-format='%d-%m-%y' value='21-12-1972')
          span.invalid_feedback Value must be a valid value
          button.button.mt-2 Submit
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Digits
        form(action='javascript:' data-role='validator')
          input(type='text' data-validate='digits' value='text')
          span.invalid_feedback Value must contains only digits
          button.button.mt-2 Submit
  .row
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label HEX color
        form(action='javascript:' data-role='validator')
          input(type='text' data-validate='hexcolor' value='#ffffff')
          span.invalid_feedback Value must be a valid hex color value
          button.button.mt-2 Submit
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Color
        form(action='javascript:' data-role='validator')
          input(type='text' data-validate='color' value='white')
          span.invalid_feedback Value must be a valid color name from standard names
          button.button.mt-2 Submit
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Pattern
        form(action='javascript:' data-role='validator')
          input(type='text')
          span.invalid_feedback Value be equal pattern
          button.button.mt-2 Submit
  .row
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Compare
        form(action='javascript:' data-role='validator')
          label Password:
          input(type='password' data-validate='required' name='pass1')
          label Password confirm:
          input(type='password' data-validate='required compare=pass1' name='pass2')
          span.invalid_feedback value must be equal to compared input
          button.button.mt-2 Submit
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Not
        form(action='javascript:' data-role='validator')
          select(data-role='select' data-validate='not=-1')
            option.d-none(value='-1')
            option(value='1') Value 1
            option(value='2') Value 2
            option(value='3') Value 3
          span.invalid_feedback value must not be equal to compared value
          button.button.mt-2 Submit
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Not equals
        form(action='javascript:' data-role='validator')
          input(type='text' data-validate='required' name='ip_1')
          input(type='text' data-validate='required notequals=ip_1' name='ip_2')
          span.invalid_feedback Values can&apos;t be equal
          button.button.mt-2 Submit
  .row
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Equals
        form(action='javascript:' data-role='validator')
          input(type='text' data-validate='required' name='ip_1')
          input(type='text' data-validate='required equals=ip_1' name='ip_2')
          span.invalid_feedback Values can be equal
          button.button.mt-2 Submit
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Custom rule
        form(action='javascript:' data-role='validator')
          input(type='text' data-validate='custom=myValidateFuncName')
          span.invalid_feedback Value must be &gt; 3 and &lt; 9
          button.button.mt-2 Submit
    .cell-lg-4.cell-md-6.mt-2
      .bg-white.p-4
        label Interactive check
        form(action='javascript:' data-role='validator' data-interactive-check='true')
          input(type='text' data-validate='domain')
          span.invalid_feedback Values must be a valid domain name
          button.button.mt-2 Submit
.p-6.m-3.bg-white.text-center
  | More about form validation, you can read on 
  a(href='https://metroui.org.ua/validator.html') Documentation
  |  to Metro 4

</template>