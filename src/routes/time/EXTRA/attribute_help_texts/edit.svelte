<script>

</script>

<style>
  
</style>
<!-- 


<% html_title t(:label_administration), l(:'attribute_help_texts.edit', attribute_caption: @attribute_help_text.attribute_caption) %>
<% local_assigns[:additional_breadcrumb] = link_to(@attribute_help_text.type_caption,
                                                   attribute_help_texts_path(tab: @attribute_help_text.attribute_scope)),
                                            t(:'attribute_help_texts.edit', attribute_caption: @attribute_help_text.attribute_caption) %>
{ breadcrumb_toolbar t(:'attribute_help_texts.edit', attribute_caption: @attribute_help_text.attribute_caption)
%>

{ labelled_tabular_form_for @attribute_help_text,
                              as: 'attribute_help_text',
                              url: { action: :update },
                              html: {id: 'attribute_help_text_form'} do |f| %>
  { render partial: 'form', locals: { f: f, editing: true } %>
  { hidden_field_tag 'attribute_scope', @attribute_help_text.attribute_scope %>
  { styled_button_tag l(:button_save), class: '-highlight -with-icon icon-checkmark' %>
{/each}
 -->