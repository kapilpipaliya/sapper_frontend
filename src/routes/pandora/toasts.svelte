
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
</script>

<template lang="pug">
.row.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Toasts
      small ui elements
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') UI Elements
      li.page-item
        a.page-link(href='\#;') Toasts
.m-3.p-6.bg-white
  p.text-leader.text-center
    | Toasts are used for system messaging. They also display at the bottom of the screen, but may not be swiped off-screen. Metro 4 provides simple methods to create toasts.
.p-1.m-3
  .bg-white.p-4.text-center
    h5.mt-0 General
    button.button.primary.mt-1(on:click='{runToast()}') Default toast
    button.button.secondary.mt-1(on:click="{runToast('callback')}") Toast with a callback
    button.button.info.mt-1(on:click="{runToast('timeout')}") Toast timeout
    button.button.success.mt-1(on:click="{runToast('class')}") Toast custom class
    button.button.alert.mt-1(on:click="{runToast('options')}") Toast options
  br
  .bg-white.p-4.text-center
    h5.mt-0 Accent classes
    button.button.primary.mt-1(on:click="{toastClasses('primary')}") Primary
    button.button.secondary.mt-1(on:click="{toastClasses('secondary')}") Secondary
    button.button.success.mt-1(on:click="{toastClasses('success')}") Success
    button.button.alert.mt-1(on:click="{toastClasses('alert')}") Alert
    button.button.warning.mt-1(on:click="{toastClasses('warning')}") Warning
    button.button.yellow.mt-1(on:click="{toastClasses('yellow')}") Yellow
    button.button.info.mt-1(on:click="{toastClasses('info')}") Info
    button.button.light.mt-1(on:click="{toastClasses('light')}") Light

</template>