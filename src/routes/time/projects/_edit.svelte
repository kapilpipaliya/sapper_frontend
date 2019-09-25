<script>

</script>

<style>
  
</style>
<!-- 

{ labelled_tabular_form_for @altered_project, url: project_path(@project) do |f| %>
  { render partial: '/projects/form',
             locals: {
               f: f,
               project: @altered_project,
               errors: @errors,
               render_advanced: false,
               render_types: false,
               render_modules: false,
               render_custom_fields: false
             } %>

  { f.button l(:button_save), class: 'button -highlight -with-icon icon-checkmark' %>
{/each}
 -->