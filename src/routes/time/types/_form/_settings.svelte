<script>

</script>

<style>
  
</style>
<!-- 


<div class="grid-block">
  <div class="grid-content">
    <!--[form:type]-->
    <div class="form--field -required -wide-label">{ f.text_field :name, required: true, disabled: @type.is_standard?, container_class: '-middle' %></div>
    <div class="form--field -wide-label">{ f.check_box :is_in_roadmap %></div>
    { render partial: '/colors/color_autocomplete_field',
               locals: {
                   form: f,
                   object: @type,
                   type: 'type',
                   allow_bright_colors: false,
                   highlight_text_inline: true,
                   label: t('types.edit.type_color_text'),
                   form_field_class: '-wide-label',
                   container_class: '-slim'
               } %>
    <div class="form--field -wide-label">{ f.check_box :is_default %></div>
    <div class="form--field -wide-label">{ f.check_box :is_milestone %></div>

    {#if @type.new_record? && @types.any? }
      <div class="form--field -wide-label">
        { styled_label_tag 'copy_workflow_from', t(:label_copy_workflow_from) %>
        { styled_select_tag(:copy_workflow_from,
                              options_from_collection_for_select(@types, :id, :name, params[:copy_workflow_from]),
                              include_blank: true,
                              container_class: '-slim') %>
      </div>
    {/each}

    <div class="form--field">
      { f.text_area :description,
                      class: 'wiki-edit wiki-toolbar',
                      container_class: '-xxwide',
                      with_text_formatting: true %>
    </div>

    <!--[eoform:type]-->

  </div>
</div>

<div class="grid-block">
  <div class="generic-table--action-buttons">
  { styled_button_tag t(@type.new_record? ? :button_create : :button_save),
      class: '-highlight -with-icon icon-checkmark' %>
  </div>
</div>
 -->