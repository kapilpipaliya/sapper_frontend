<script>

</script>

<style>
  
</style>

<!-- 

<% html_title l(:label_administration), l("label_group_new") %>
<% local_assigns[:additional_breadcrumb] = l(:label_group_new) %>
{ breadcrumb_toolbar l(:label_group_new) %>

{ labelled_tabular_form_for(@group) do |f| %>
  { render partial: 'form', locals: { f: f } %>
  <div>{ f.button l(:button_create), class: 'button -highlight -with-icon icon-checkmark' %></div>
{/each}
 -->