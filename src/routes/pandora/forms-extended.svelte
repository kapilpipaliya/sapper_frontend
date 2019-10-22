<template lang="pug">
.row.border-bottom.bd-lightGray.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Forms
      small extended
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') Forms
      li.page-item
        a.page-link(href='\#;') Extended
.m-3
  h4 Input
  .row
    .cell-lg-6
      .bg-white.p-4.m-1
        form
          .form-group
            label Input[text] data-role=&quot;input&quot;
            input(type='text' data-role='input')
            p.text-small Input with clear button
    .cell-lg-6
      .bg-white.p-4.m-1
        form
          .form-group
            label Input[password] data-role=&quot;input&quot;
            input(type='password' data-role='input')
            p.text-small Input with clear and reveal buttons
  .row
    .cell-lg-6
      .bg-white.p-4.m-1
        form
          .form-group
            label Input[text] data-role=&quot;input&quot; with search
            input(type='text' data-role='input' data-search-button='true')
            p.text-small Input with clear and search buttons
    .cell-lg-6
      .bg-white.p-4.m-1
        form
          .form-group
            label Input[password] data-role=&quot;input&quot; with history
            input(type='password' data-role='input' data-history='true')
            p.text-small
              | Enter value and press 
              kbd Enter
              | , repeat, then press 
              kbd Up
              |                             or 
              kbd Down
              |  arrows to access entered values.
  .row
    .cell-lg-6
      .bg-white.p-4.m-1
        form
          .form-group
            label Input[text] data-role=&quot;input&quot; with prepend
            input(type='text' data-role='input' data-prepend='www.')
    .cell-lg-6
      .bg-white.p-4.m-1
        form
          .form-group
            label Input[password] data-role=&quot;input&quot; with append
            input(type='password' data-role='input' data-append='.00')
  .row
    .cell-lg-6
      .bg-white.p-4.m-1
        form
          .form-group
            label Input[text] data-role=&quot;input&quot; with custom buttons
            input(type='text' data-role='input' data-custom-buttons='customButtons')
            p.text-small Custom buttons must be defined before input
    .cell-lg-6
      .bg-white.p-4.m-1
        form
          .form-group
            label Input[text] data-role=&quot;input&quot; with autocomplete
            input(type='text' data-role='input' data-autocomplete='Ukraine, USA, Canada, Marokko, Singapur')
            p.text-small Begin type one of Ukraine, USA, Canada, Marokko, Singapur
  h4.mt-3 Date &amp; time
  .row
    .cell-lg-4
      .bg-white.p-4.m-1
        h5.mt-0 Calendar picker
        input(type='text' data-role='calendarpicker')
    .cell-lg-4
      .bg-white.p-4.m-1
        h5.mt-0 Date piker
        input(type='text' data-role='datepicker')
    .cell-lg-4
      .bg-white.p-4.m-1
        h5.mt-0 Time piker
        input(type='text' data-role='timepicker')
  h4.mt-3 Textarea
  .row
    .cell-lg-12
      .bg-white.p-4.m-1
        textarea(data-role='textarea' data-prepend="<span class='mif-leanpub'></span>")
  h4.mt-3 Select
  .row
    .cell-lg-6
      .bg-white.p-4.m-1
        h5 Single
        select(data-role='select')
          option Value 1
          option Value 2
          option Value 3
          option Value 4
          option Value 5
    .cell-lg-6
      .bg-white.p-4.m-1
        h5 Multiple
        select(data-role='select' multiple='')
          option Value 1
          option Value 2
          option Value 3
          option Value 4
          option Value 5
  h4.mt-3 Keypad and Spinner
  .row
    .cell-lg-6
      .bg-white.p-4.m-1
        h5 Keypad
        input(type='text' data-role='keypad')
    .cell-lg-6
      .bg-white.p-4.m-1
        h5 Spinner
        input(type='text' data-role='spinner')
  h4.mt-3 Tag input
  .row
    .cell-lg-12
      .bg-white.p-4.m-1
        input(type='text' data-role='taginput' data-random-color='true' value='Metro 4,the,best,css3,javascript,html5,framework')
  h4.mt-3 Slider
  .row
    .cell-lg-6
      .bg-white.p-4.m-1.h-100
        h5 Horizontal
        input(type='text' data-role='slider')
        label Accuracy
        input(data-role='slider' data-accuracy='10')
        label With buffer
        input(data-role='slider' data-buffer='60' data-value='20')
        label With hint
        input(data-role='slider' data-hint='true' data-hint-always='true' data-value='50')
    .cell-lg-6
      .bg-white.p-4.m-1.h-100.clear
        h5 Vertical
        input(type='text' data-role='slider' data-vertical='true' data-size='200' data-cls-slider='mx-auto')
  h4.mt-3 Checkbox, Radio and Switch
  .row
    .cell-lg-4
      .bg-white.p-4.m-1
        h5 Checkboxes
        input(type='checkbox' data-role='checkbox')
        input(type='checkbox' data-role='checkbox' checked='')
        input(type='checkbox' data-role='checkbox' disabled='')
        input(type='checkbox' data-role='checkbox' disabled='' checked='')
        input(type='checkbox' data-role='checkbox' data-indeterminate='true')
        hr
        input(type='checkbox' data-role='checkbox' data-style='2')
        input(type='checkbox' data-role='checkbox' checked='' data-style='2')
        input(type='checkbox' data-role='checkbox' disabled='' data-style='2')
        input(type='checkbox' data-role='checkbox' disabled='' checked='' data-style='2')
        input(type='checkbox' data-role='checkbox' data-indeterminate='true' data-style='2')
    .cell-lg-4
      .bg-white.p-4.m-1
        h5 Radio
        input(name='r1' type='radio' data-role='radio')
        input(name='r1' type='radio' data-role='radio' checked='')
        input(name='r1' type='radio' data-role='radio' disabled='')
        input(name='r2' type='radio' data-role='radio' disabled='' checked='')
        hr
        input(name='r3' type='radio' data-role='radio' data-style='2')
        input(name='r3' type='radio' data-role='radio' checked='' data-style='2')
        input(name='r3' type='radio' data-role='radio' disabled='' data-style='2')
        input(name='r4' type='radio' data-role='radio' disabled='' checked='' data-style='2')
    .cell-lg-4
      .bg-white.p-4.m-1
        h5 Switch
        input(type='checkbox' data-role='switch')
        input(type='checkbox' data-role='switch' disabled='')
        input(type='checkbox' data-role='switch' disabled='' checked='')
        hr
        input(type='checkbox' data-role='switch' data-material='true')
        input(type='checkbox' data-role='switch' disabled='' data-material='true')
        input(type='checkbox' data-role='switch' disabled='' checked='' data-material='true')
  h4.mt-3 Rating
  .row
    .cell-lg-6
      .bg-white.p-4.m-1
        h5 Rating
        input.d-block(data-role='rating')
        input(data-role='rating' data-star-color='red' data-stared-color='green' data-value='3')
    .cell-lg-6
      .bg-white.p-4.m-1
        h5 Rating static
        input.d-block(data-role='rating' data-value='3' data-message='(avg 3 from 3856)' data-static='true')
        input.d-block(data-role='rating' data-value='3.5' data-message='(avg 3.5 from 3856)' data-static='true' data-stared-color='cyan')

</template>