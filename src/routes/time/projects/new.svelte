<script>

</script>

<style>
  
</style>

<!-- 
<% html_title l("label_project_new") %>
{ toolbar title: l(:label_project_new) %>
{ labelled_tabular_form_for @project do |f| %>
  { render partial: 'form',
             locals: {
               f: f,
               project: @project,
               errors: @errors,
               render_advanced: true,
               render_types: false,
               render_modules: false,
               render_custom_fields: false
             } %>
  { styled_button_tag l(:button_create), class: '-highlight -with-icon icon-checkmark' %>
{/each}
 -->