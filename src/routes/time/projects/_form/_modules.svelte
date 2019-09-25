<script>

</script>

<style>
  
</style>
<!-- 


<%
  project = form.object
%>

<fieldset class="form--fieldset -with-control" id="modules-form">
  <legend class="form--fieldset-legend">{ l(:label_enabled_project_modules) %></legend>

  <div class="form--fieldset-control">
    <span class="form--fieldset-control-container">
      ({ check_all_links 'modules-form' %>)
    </span>
  </div>

  <% sorted_modules = OpenProject::AccessControl.available_project_modules.sort_by { |name| l_or_humanize(name, prefix: "project_module_") } %>
  {#each sorted_modules.each  as name}
    <div class="form--field">
      { form.collection_check_box :enabled_module_names,
                                    name,
                                    @project.module_enabled?(name),
                                    l_or_humanize(name, prefix: "project_module_") %>

    </div>
  {/each}

</fieldset>
 -->