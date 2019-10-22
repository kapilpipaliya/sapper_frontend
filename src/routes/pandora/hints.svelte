<script>
    const runToast = (mode) => () => {
        var toast = Metro.toast.create;
        switch (mode) {
            case 'callback': toast("This is a toast with callback", function(){alert('Toast callback executed!');}); break;
            case 'timeout': toast("This is a toast with timeout 5s", null, 5000); break;
            case 'class': toast("This is a toast with custom class", null, 5000, "bg-green fg-white"); break;
            case 'options': toastOptions(); break;
            default: toast("This is default toast");
        }
    }

    const toastClasses = (cls) => () => {
        var toast = Metro.toast.create;
        toast("This is a toast with a predefined class ." + cls, null, 5000, cls);
    }

    function toastOptions(){
        var options = {
            showTop: true,
            timeout: 3000,
            distance: 64,
            clsToast: 'alert'
        };
        Metro.toast.create("Toast message", null, null, null, options);
    }

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
      | Hints
      small ui elements
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') UI Elements
      li.page-item
        a.page-link(href='\#;') Hints
.m-3.p-6.bg-white
  p.text-leader.text-center
    | Hints, toasts and notifies are used for system messaging.
.p-1.m-3
  h4 Toasts
  .bg-white.p-4
    h5.mt-0 General
    button.button.mt-1(on:click='{runToast()}') Default toast
    button.button.mt-1(on:click="{runToast('callback')}") Toast with a callback
    button.button.mt-1(on:click="{runToast('timeout')}") Toast timeout
    button.button.mt-1(on:click="{runToast('class')}") Toast custom class
    button.button.mt-1(on:click="{runToast('options')}") Toast options
  br
  .bg-white.p-4
    h5.mt-0 Accent classes
    button.button.primary.mt-1(on:click="{toastClasses('primary')}") Primary
    button.button.secondary.mt-1(on:click="{toastClasses('secondary')}") Secondary
    button.button.success.mt-1(on:click="{toastClasses('success')}") Success
    button.button.alert.mt-1(on:click="{toastClasses('alert')}") Alert
    button.button.warning.mt-1(on:click="{toastClasses('warning')}") Warning
    button.button.yellow.mt-1(on:click="{toastClasses('yellow')}") Yellow
    button.button.info.mt-1(on:click="{toastClasses('info')}") Info
    button.button.light.mt-1(on:click="{toastClasses('light')}") Light
.p-1.m-3
  h4 Notifies
  .bg-white.p-4
    h5.mt-0 General
    button.button.mt-1(on:click="{simpleNotify}") Create notify
    button.button.mt-1(on:click="{setupNotify}") Setup notify
    button.button.mt-1(on:click="{keepNotify}") Keep open
    button.button.mt-1(on:click="{callbackNotify}") Callback
    button.button.mt-1(on:click="{classNotify}") Additional classe
.p-1.m-3
  h4 Hints
  .bg-white.p-4.d-flex.flex-justify-between
    button.button.primary(data-role='hint' data-hint-position='right' data-hint-text='This is a hinted button') Hint on Right
    button.button.secondary(data-role='hint' data-hint-position='top' data-hint-text='This is a hinted button') Hint on Top
    button.button.info(data-role='hint' data-hint-position='bottom' data-hint-text='This is a hinted button') Hint on Bottom
    button.button.success(data-role='hint' data-hint-position='left' data-hint-text='This is a hinted button') Hint on Left

</template>