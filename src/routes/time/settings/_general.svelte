<script>

</script>

<style>
  
</style>
<!-- 

{ styled_form_tag({action: 'edit'}) do %>
  <section class="form--section">
    <div class="form--field">{ setting_text_field :app_title, size: 30, container_class: '-middle' %></div>
    <div class="form--field">
      { setting_text_field :attachment_max_size, size: 6, unit: t(:"number.human.storage_units.units.kb"), container_class: '-slim' %>
    </div>
    <div class="form--field">
      { setting_text_field :per_page_options, size: 20, container_class: '-slim' %>
      <span class="form--field-instructions">
        { t(:text_comma_separated) %><br/>
        { t(:text_notice_too_many_values_are_inperformant) %>
      </span>
    </div>
    <div class="form--field">
      { setting_text_field :activity_days_default, size: 6, unit: t(:label_day_plural), container_class: '-xslim' %>
    </div>
    <div class="form--field">
      { setting_text_field :host_name, size: 60, container_class: '-middle' %>
      <span class="form--field-instructions">
        { t(:label_example) %>: { @guessed_host %>
      </span>
    </div>
    <div class="form--field">{ setting_select :protocol, [['HTTP', 'http'], ['HTTPS', 'https']], container_class: '-xslim' %></div>
    <div class="form--field">{ setting_check_box :cache_formatted_text %></div>
    <div class="form--field">{ setting_select :wiki_compression, [['Gzip', 'gzip']], blank: :label_none, container_class: '-xslim' %></div>
    <div class="form--field">{ setting_check_box :feeds_enabled, size: 6 %></div>
    <div class="form--field">{ setting_text_field :feeds_limit, size: 6, container_class: '-xslim' %></div>
    <div class="form--field">
      { setting_text_field :file_max_size_displayed, size: 6, unit: t(:"number.human.storage_units.units.kb"), container_class: '-xslim' %>
    </div>
    <div class="form--field">{ setting_text_field :diff_max_lines_displayed, size: 6, container_class: '-xslim' %></div>

    {#if OpenProject::Configuration.security_badge_displayed? }
    <div class="form--field">
      { setting_check_box :security_badge_displayed %>
      <span class="form--field-instructions">
        { t(:text_notice_security_badge_displayed_html,
              information_panel_label: t(:label_information),
              more_info_url: ::OpenProject::Static::Links[:security_badge_documentation][:href],
              information_panel_path: info_admin_index_path) %>
      </span>
    </div>
    {/each}
    { call_hook(:view_settings_general_form) %>
    <fieldset class="form--fieldset">
      <legend class="form--fieldset-legend">{ t(:setting_welcome_text) %></legend>
      <div class="form--field">{ setting_text_field :welcome_title, size: 30, container_class: '-wide' %></div>
      <div class="form--field -visible-overflow">
        { setting_text_area :welcome_text,
                              cols: 60,
                              rows: 5,
                              class: 'wiki-edit',
                              id: 'settings_welcome_text',
                              with_text_formatting: true,
                              container_class: '-xxwide' %>
      </div>
      <div class="form--field">{ setting_check_box :welcome_on_homescreen %></div>
    </fieldset>
  </section>
  { styled_button_tag t(:button_save), class: '-highlight -with-icon icon-checkmark' %>
{/each}
 -->