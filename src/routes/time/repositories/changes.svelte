<script>

</script>

<style>
  
</style>
<!-- 


{ call_hook(:view_repositories_show_contextual, { repository: @repository, project: @project }) %>
{ render partial: 'repository_header', locals: { empty: false } %>

<div class="repository-breadcrumbs">
  { render partial: 'breadcrumbs',
             locals: { path: @path, revision: @rev }.merge(kind: (@entry ? @entry.kind : nil)) %>
</div>


<p>{ render partial: 'link_to_functions' %></p>

{ render_properties(@properties) %>

{ render(partial: 'revisions',
           locals: {project: @project, path: @path, revisions: @changesets, entry: @entry }) unless @changesets.empty? %>

<% html_title(l(:label_change_plural)) -%>
 -->