<script>

</script>

<style>
  
</style>
<!-- 

<section class="form--section" id="custom_field_form">
  <div class="form--field -required" id="custom_field_name_attributes">
    { f.text_field :name, required: true, container_class: '-middle' %>
  </div>
  <div class="form--field">
    { f.select :field_format,
                 custom_field_formats_for_select(@custom_field),
                 { container_class: '-slim' },
                 disabled: !@custom_field.new_record? %>
  </div>
  <div class="form--grouping" id="custom_field_length">
    <div class="form--grouping-label">
      { t(:label_min_max_length) %> <br>
      <small>({ t(:text_min_max_length_info ) %>)</small>
    </div>
    <div class="form--grouping-row">
      <div class="form--field -wide-label">
        { f.number_field :min_length, container_class: '-xslim' %>
      </div>
      <div class="form--field -wide-label">
        { f.number_field :max_length, container_class: '-xslim' %>
      </div>
    </div>
  </div>

  <div class="form--field">
    { f.text_field :regexp,
                     size: 50,
                     container_class: '-wide' %>
    <span class="form--field-instructions">
      { t(:text_regexp_info) %>
    </span>
  </div>

  {#if @custom_field.class.name == 'WorkPackageCustomField' }
    <div class="form--field" id="custom_field_multi_select">
      {#if EnterpriseToken.allows_to?(:multiselect_custom_fields) }
        { f.check_box :multi_value %>
      {:else}
        <label class="form--label" for="custom_field_multi_value_disabled">{ CustomField.human_attribute_name('multi_value') %></label>
        <span class="form--field-container">
          <span class="form--check-box-container">
            <input disabled="disabled" class="-cf-ignore-disabled form--check-box" type="checkbox" name="custom_field_multi_value_disabled">
            { render partial: 'enterprise/locked_note' %>
          </span>
        </span>
      {/each}
    </div>
  {/each}

  {#if @custom_field.new_record? || @custom_field.field_format == 'list' }
    <fieldset class="form--fieldset" id="custom_field_possible_values_attributes">
      <legend class="form--fieldset-legend">{ I18n.t("activerecord.attributes.custom_field.possible_values") %></legend>
      <div class="form--field">
        { render partial: "custom_fields/custom_options", locals: { custom_field: @custom_field, f: f } %>
        <a id="add-custom-option" href="#" class="icon icon-add">{ t(:button_add) %></a>
      </div>
    </fieldset>
  {/each}
  <div id="custom_field_default_value_attributes">
    <div class="form--field" id="default_value_text">
      {#if @custom_field.new_record? || @custom_field.field_format != 'bool' }
        { f.text_field(:default_value, container_class: '-wide') %>
      {/each}
    </div>
    <div class="form--field" style="display:none" id="default_value_bool">
      {#if @custom_field.new_record? || @custom_field.field_format == 'bool' }
        { f.check_box(:default_value) %>
      {/each}
    </div>
  </div>
  { call_hook(:view_custom_fields_form_upper_box, custom_field: @custom_field, form: f) %>
</section>

<section class="form--section">
  <% case @custom_field.class.name
     when "WorkPackageCustomField" %>
    <div class="form--field">{ f.check_box :is_required %></div>
    <div class="form--field">{ f.check_box :is_for_all %></div>
    <div class="form--field">{ f.check_box :is_filter %></div>
    <div class="form--field" id="searchable_container">{ f.check_box :searchable %></div>
  <% when "UserCustomField" %>
    <div class="form--field">{ f.check_box :is_required %></div>
    <div class="form--field">{ f.check_box :visible %></div>
    <div class="form--field">{ f.check_box :editable %></div>
  <% when "ProjectCustomField" %>
    <div class="form--field">{ f.check_box :is_required %></div>
    <div class="form--field">{ f.check_box :visible %></div>
    <div class="form--field" id="searchable_container">{ f.check_box :searchable %></div>
  <% when "TimeEntryCustomField" %>
    <div class="form--field">{ f.check_box :is_required %></div>
  {:else}
    <div class="form--field">{ f.check_box :is_required %></div>
  {/each}
  { call_hook(:"view_custom_fields_form_#{@custom_field.type.to_s.underscore}", custom_field: @custom_field, form: f) %>
</section>
 -->