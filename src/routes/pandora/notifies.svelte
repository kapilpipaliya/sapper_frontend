
<script>
    function simpleNotify(){
        return Metro.notify.create('This is a notify', 'Title', {});
    }

    function setupNotify(){
        var notify = Metro.notify;
        notify.setup({
            width: 300,
            duration: 1000,
            animation: 'easeOutBounce'
        });
        notify.create("This is a notify", "", {});
        notify.reset();
    }

    function classNotify(){
        var notify = Metro.notify;
        notify.create("This is a notify with additional class.", null, {
            cls: "alert"
        });
    }

    function keepNotify(){
        var notify = Metro.notify;
        notify.create("This is a notify. Click me to close.", null, {
            keepOpen: true
        });
    }

    function callbackNotify(){
        var notify = Metro.notify;
        notify.create("This is a notify.", null, {
            onClose: function(){
                alert('Hi from notification callback');
            }
        });
    }

</script>
<template lang="pug">
.row.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Notifies
      small ui elements
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') UI Elements
      li.page-item
        a.page-link(href='\#;') Notifies
.m-3.p-6.bg-white
  p.text-leader.text-center
    | The system of notifications is intended for informing users about the processes occurring on the site or in the application.
.bg-white.p-4.text-center
  h5.mt-0 General
  button.button.primary.mt-1(on:click='{simpleNotify}') Create notify
  button.button.secondary.mt-1(on:click='{setupNotify}') Setup notify
  button.button.info.mt-1(on:click='{keepNotify}') Keep open
  button.button.success.mt-1(on:click='{callbackNotify}') Callback
  button.button.alert.mt-1(on:click='{classNotify}') Additional classe

</template>