<script>

</script>

<style>
  
</style>
<!-- 

<% html_title t(:label_administration), "#{t(:label_edit)} #{Role.model_name.human} #{@role.name}" %>

<% local_assigns[:additional_breadcrumb] = @role.name %>
{ breadcrumb_toolbar @role.name %>

{ labelled_tabular_form_for @role, :url => { :action => 'update' }, :html => {:id => 'role_form'}, :as => :role do |f| %>
  { hidden_field_tag :id, @role.id %>
  { render partial: 'form', locals: { f: f , role: @role } %>
  <br/>
  { styled_button_tag l(:button_save), class: '-with-icon icon-checkmark' %>
{/each}
 -->