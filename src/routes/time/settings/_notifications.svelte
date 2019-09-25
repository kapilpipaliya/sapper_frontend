<script>

</script>

<style>
  
</style>
<!-- 

{#if @deliveries }
  { styled_form_tag({action: 'edit', tab: 'notifications'}) do %>
    <section class="form--section">
      <div class="form--field">{ setting_text_field :mail_from, size: 60, container_class: '-middle' %></div>
      <div class="form--field">{ setting_check_box :bcc_recipients %></div>
      <div class="form--field">{ setting_check_box :plain_text_mail %></div>
      <div class="form--field">{ setting_select(:default_notification_option, User.valid_notification_options.collect {|o| [t(o.last), o.first.to_s]}, container_class: '-middle') %></div>
    </section>
    <fieldset id="notified_events" class="form--fieldset">
      <legend class="form--fieldset-legend">
        { t(:text_select_mail_notifications) %>
      </legend>
      <div class="form--fieldset-control">
        <span class="form--fieldset-control-container">
          ({ check_all_links 'notified_events' %>)
        </span>
      </div>
      { hidden_field_tag 'settings[notified_events][]', '' %>
      <div class="form--field">
        <div class="form--field-container -vertical">
          {#each @notifiables.each  as notifiable}
            { notification_field notifiable %>
          {/each}
        </div>
      </div>
    </fieldset>
    <fieldset id="emails_decorators" class="form--fieldset"><legend class="form--fieldset-legend">{ t(:setting_emails_header) %> & { t(:setting_emails_footer) %></legend>
      { rails_cell Settings::TextSettingCell, I18n.locale, name: "emails_header" %>
      { rails_cell Settings::TextSettingCell, I18n.locale, name: "emails_footer" %>
    </fieldset>
    { content_tag :fieldset, id: "mail_configuration", class: "form--fieldset" do %>
      <legend class="form--fieldset-legend">{t(:text_setup_mail_configuration)%></legend>
      <div class="form--field">{ setting_select(:email_delivery_method, [:smtp, :sendmail], id: "email_delivery_method_switch", container_class: '-xslim') %></div>
      <div id="email_delivery_method_smtp" class="email_delivery_method_settings">
        <div class="form--field">{ setting_text_field :smtp_address, container_class: '-middle' %></div>
        <div class="form--field">{ setting_text_field :smtp_port, size: 6, container_class: '-xslim' %></div>
        <div class="form--field">{ setting_text_field :smtp_domain, container_class: '-middle' %></div>
        <div class="form--field">{ setting_select(:smtp_authentication, [:none, :plain, :login, :cram_md5], container_class: '-slim') %></div>
        <div class="form--field">{ setting_text_field :smtp_user_name, container_class: '-middle' %></div>
        <div class="form--field">{ setting_password :smtp_password, container_class: '-middle' %></div>
        <div class="form--field">{ setting_check_box :smtp_enable_starttls_auto %></div>
        <div class="form--field">{ setting_check_box :smtp_ssl %></div>
      </div>
      <div id="email_delivery_method_sendmail" class="email_delivery_method_settings">
        <div class="form--field">{ setting_text_field :sendmail_location %></div>
      </div>
    <% end unless OpenProject::Configuration['email_delivery_configuration'] == 'legacy' %>

    { styled_button_tag t(:button_save), class: '-highlight -with-icon icon-checkmark' %>
    <div style="float:none;display:inline-block;font-weight:bold;">
      { link_to t(:label_send_test_email),
                  { controller: '/admin', action: 'test_email' },
                  method: :post %>
    </div>
  {/each}
{:else}
  <div class="nodata">
    { simple_format(t(:text_email_delivery_not_configured)) %>
  </div>
{/each}
 -->