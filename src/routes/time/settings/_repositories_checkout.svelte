<script>

</script>

<style>
  
</style>
<!-- 
<fieldset class="form--fieldset">
  <legend class="form--fieldset-legend">{ l('repositories.checkout.instructions') %></legend>
  {#each OpenProject::Scm::Manager.registered.each  as vendor, klass}
      <% vendor = vendor.to_s %>
      <% setting_base = "settings[repository_checkout_data][#{vendor}]" %>
      <% enabled = Setting.repository_checkout_data[vendor]['enabled'].to_i > 0 %>
      <fieldset class="form--fieldset -collapsible collapsed">
        <legend class="form--fieldset-legend" title="{ klass.vendor_name %>" >
          <a href="#">{ klass.vendor_name %>
          </a>
        </legend>
        <div class="form--field">
          <% key = "#{setting_base}[enabled]" %>
          <input type="hidden" name="{ key %>" value="0" id="<% "#{key}_hidden" %>" />
          { setting_label key, label: :setting_repository_checkout_display %>
          <div class="form--field-container">
            { styled_check_box_tag key, 1, enabled, class: 'settings-repositories--checkout-toggle' %>
          </div>
          <div class="form--field-instructions">{ l('repositories.checkout.enable_instructions_text') %></div>
        </div>
        <div class="form--field">
          <% key = "#{setting_base}[base_url]" %>
          { setting_label key, label: :setting_repository_checkout_base_url %>
          <div class="form--field-container">
            { styled_text_field_tag key, Setting.repository_checkout_data[vendor]['base_url'],
                                      type: 'url', required: enabled %>
          </div>
          <div class="form--field-instructions">{ simple_format l('repositories.checkout.base_url_text') %></div>
        </div>
        <div class="form--field">
          <% key = "#{setting_base}[text]" %>
          { setting_label key, label: :setting_repository_checkout_text %>
          <div class="form--field-container">
            { styled_text_area_tag key, Setting.repository_checkout_data[vendor]['text'],
                                      placeholder: l("repositories.checkout.default_instructions.#{vendor}") %>
          </div>
          <div class="form--field-instructions">{ l('repositories.checkout.text_instructions') %></div>
        </div>
      </fieldset>
  {/each}
</fieldset>
 -->