<script>

</script>

<style>
  
</style>
<!-- 


{ error_messages_for 'copy_project' %>
{ toolbar title: l(:label_project_new) %>

{ labelled_tabular_form_for @copy_project, url: { action: 'copy', coming_from: 'settings' } do |f| %>
  { hidden_field_tag :coming_from, 'settings' %>

  { render partial: 'projects/form', locals: { f: f,
                                                 project: @copy_project,
                                                 errors: @errors,
                                                 render_advanced: true,
                                                 render_types: false,
                                                 render_modules: false,
                                                 render_custom_fields: false,
                                                 no_error_messages: true
                                               } %>

  { render partial: "copy_projects/copy_settings/copy_associations", locals: { project: @project } %>

  { submit_tag l(:button_copy), class: 'button -highlight' %>
{/each}
 -->