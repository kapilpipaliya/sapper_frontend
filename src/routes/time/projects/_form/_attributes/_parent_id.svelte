<script>

</script>

<style>
  
</style>
<!-- 


<%
  project = form.object
  allowed_parents = allowed_parent_projects(project).to_a
%>

<% unless allowed_parents.empty? %>
  <div class="form--field">
    { form.select :parent_id,
                    project_tree_options_for_select(allowed_parents,
                                                    selected: project.parent),
                    include_blank: true,
                    container_class: '-wide' %>
  </div>
{/each}
 -->