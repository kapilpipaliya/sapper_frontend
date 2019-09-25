<script>

</script>

<style>
  
</style>

<!-- 

<% html_title l(:label_administration), l(:label_custom_field_new) %>
<% local_assigns[:additional_breadcrumb] = link_to(l(@custom_field.type_name), custom_fields_path(tab: @custom_field.type)),
                       l(:label_custom_field_new) %>
{ breadcrumb_toolbar l(:label_custom_field_new) %>
{ error_messages_for 'custom_field' %>

{ labelled_tabular_form_for @custom_field, as: :custom_field,
                                             url: custom_fields_path,
                                             html: {id: 'custom_field_form', class: "-wide-labels"} do |f| %>
  { render partial: 'form', locals: { f: f } %>
  { hidden_field_tag 'type', @custom_field.type %>
  { styled_button_tag l(:button_save), class: '-highlight -with-icon icon-checkmark' %>
{/each}
 -->