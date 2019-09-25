<script>

</script>

<style>
  
</style>

<!-- 

<% html_title t(:label_administration), t(:'attribute_help_texts.add_new') %>
<% local_assigns[:additional_breadcrumb] = link_to(@attribute_help_text.type_caption,
                                                   attribute_help_texts_path(tab: @attribute_help_text.attribute_scope)),
                                           t(:'attribute_help_texts.add_new') %>
{ breadcrumb_toolbar t(:'attribute_help_texts.add_new')
%>

{ labelled_tabular_form_for @attribute_help_text,
                              as: 'attribute_help_text',
                              url: { action: :create },
                              html: {id: 'attribute_help_text_form'} do |f| %>
  { render partial: 'form', locals: { f: f } %>
  { f.hidden_field :type, value: @attribute_help_text.type %>
  { styled_button_tag l(:button_save), class: '-highlight -with-icon icon-checkmark' %>
{/each}
 -->