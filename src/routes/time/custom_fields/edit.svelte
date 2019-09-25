<script>

</script>

<style>
  
</style>
<!-- 


<% html_title l(:label_administration), "#{l(:label_edit)} #{CustomField.model_name.human} #{h @custom_field.name}" %>

<% local_assigns[:additional_breadcrumb] =  link_to(l(@custom_field.type_name), custom_fields_path(tab: @custom_field.type)),
                       @custom_field.name %>
{ breadcrumb_toolbar @custom_field.name %>

{ error_messages_for 'custom_field' %>

{ labelled_tabular_form_for @custom_field, as: :custom_field,
                              url: custom_field_path(@custom_field),
                              html: {method: :put, id: 'custom_field_form'} do |f| %>
  { render partial: 'form', locals: { f: f } %>
  { styled_button_tag l(:button_save), class: '-highlight -with-icon icon-checkmark' %>
{/each}
 -->