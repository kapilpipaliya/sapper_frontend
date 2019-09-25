<script>

</script>

<style>
  
</style>

<!-- 

<% html_title l(:label_administration), l(:label_enumeration_new) %>
<% local_assigns[:additional_breadcrumb] =  l(:label_enumeration_new) %>
{ breadcrumb_toolbar l(:label_enumeration_new) %>
{ labelled_tabular_form_for @enumeration do |f| %>
  { render partial: 'form', locals: { f: f } %>
  { styled_button_tag l(:button_create), class: '-highlight -with-icon icon-checkmark' %>
{/each}
 -->