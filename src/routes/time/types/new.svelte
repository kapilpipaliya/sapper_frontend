<script>

</script>

<style>
  
</style>

<!-- 

<% html_title l(:label_administration), l(:label_type_new) %>


<% local_assigns[:additional_breadcrumb] = t(:label_type_new) %>
{ breadcrumb_toolbar t(:label_type_new) %>

{ error_messages_for 'type' %>

{ form_for controller.type, builder: TabularFormBuilder, lang: current_language  do |f| %>
  { render partial: 'types/form/settings', locals: { f: f } %>
{/each}
 -->