<script>

</script>

<style>
  
</style>


<!-- 
<% html_title t(:label_administration), t(:label_role_new) %>

<% local_assigns[:additional_breadcrumb] = t(:label_role_new) %>
{ breadcrumb_toolbar t(:label_role_new) %>

{ labelled_tabular_form_for @role, :url => { :action => 'create' }, :html => {:id => 'role_form'}, :as => :role do |f| %>
{ render partial: 'form',
           locals: { f: f, role: @role, roles: @roles, permissions: @permissions, global_permissions: @global_permissions } %>
<br/>
{ styled_button_tag t(:button_create), class: '-with-icon icon-checkmark' %>
{/each}
 -->