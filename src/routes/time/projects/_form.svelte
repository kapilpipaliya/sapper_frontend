<script>

</script>

<style>
  
</style>
<!-- 


{ error_messages_for_contract(project, errors) unless local_assigns[:no_error_messages] %>

<!--[form:project]-->

<section class="form--section">
  { render partial: "projects/form/project_attributes",
             locals: { project: project, form: f, render_advanced: render_advanced } %>

  { call_hook(:view_projects_form, project: project, form: f) %>
</section>

<% unless project.new_record? %>
  <section class="form--section">
    { render partial: "projects/form/required_storage",
               locals: { project: project, storage: project.count_required_storage } %>
  </section>
{/each}

{#if render_modules }
  <section class="form--section">
    { render partial: "projects/form/modules", locals: { form: f } %>
  </section>

  { nonced_javascript_tag 'observeProjectModules();' %>
{/each}

{#if ((project.module_enabled?('work_package_tracking')) && render_types) }
  <section class="form--section">
    { render partial: 'projects/form/types',
               locals: { f: f, project: project, withControlls: false} %>
  </section>
{/each}

{#if render_custom_fields }
  <section class="form--section">
    { render partial: 'projects/form/custom_fields',
               locals: {
                 form: f,
                 project: project,
                 work_package_custom_fields: @wp_custom_fields
                } %>
  </section>
{/each}

<!--[eoform:project]-->
 -->