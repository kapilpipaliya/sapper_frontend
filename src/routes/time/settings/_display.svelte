<script>
  let additional_js_dom_ready = "Administration.init_language_selection_handling();"
</script>

<style>
  
</style>
<!-- 


{ styled_form_tag({action: 'edit', tab: 'display'}) do %>

  <section class="form--section">
    <div class="form--field" id="setting_available_languages">{ setting_multiselect :available_languages, all_lang_options_for_select(false) %></div>

    <div class="form--field">{ setting_select :start_of_week, [[day_name(1),'1'], [day_name(6),'6'], [day_name(7),'7']], blank: :label_language_based, container_class: '-slim' %></div>

    <div class="form--field">{ setting_select :date_format, Setting::DATE_FORMATS.collect {|f| [Date.today.strftime(f), f]}, blank: :label_language_based, container_class: '-slim' %></div>

    <div class="form--field">{ setting_select :time_format, Setting::TIME_FORMATS.collect {|f| [Time.now.strftime(f), f]}, blank: :label_language_based, container_class: '-slim' %></div>

    <div class="form--field">{ setting_select :user_format, @options[:user_format], container_class: '-slim' %></div>

    <div class="form--field">{ setting_text_field :journal_aggregation_time_minutes, unit: t(:label_minute_plural), container_class: '-xslim' %>
      <span class="form--field-instructions">
        { t(:text_journal_aggregation_time_explanation) %><br/>
        { t(:text_hint_disable_with_0) %>
      </span>
    </div>
  </section>

  { styled_button_tag t(:button_save), class: '-highlight -with-icon icon-checkmark' %>
{/each}

<div style="float:right">
  { link_to t(:label_force_user_language_to_default),
              { controller: '/admin', action: 'force_user_language' },
              method: :post %>
</div>

{

%>
 -->