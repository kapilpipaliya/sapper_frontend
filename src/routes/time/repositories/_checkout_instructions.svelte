<script>

</script>

<style>
  
</style>
<!-- 

{#if @instructions.available? }
<div id="repository--checkout-instructions"
     class="notification-box -info persistent-toggle--notification"
     hidden>
  <a title="{{ ::I18n.t('js.close_popup_title') }}"
     class="notification-box--close icon-context icon-close">
  </a>
  <div class="notification-box--content">
    <p>
    { simple_format instructions.instructions %>
    {#if instructions.manages_permissions? }
      <br/>
      <span>{ l('repositories.checkout.access_permission') %>:</span>
      <strong>{ l("repositories.checkout.access.#{instructions.permission}") %></strong>
    {/each}
    </p>
  </div>
</div>
{:else if @instructions.supported_but_not_enabled? }
<div class="notification-box -warning">
  <a title="{{ ::I18n.t('js.close_popup_title') }}"
     class="notification-box--close icon-context icon-close">
  </a>
  <div class="notification-box--content">
    <p>{ l('repositories.checkout.not_available') %></p>
  </div>
</div>
{/each}
 -->