<script>

</script>

<style>
  
</style>
<!-- 


{ call_hook(:view_repositories_show_contextual, { repository: @repository, project: @project }) %>

{ render partial: 'repository_header', locals: { empty: false } %>

<div class="repository-breadcrumbs">
  { render partial: 'breadcrumbs',
             locals: { path: @path, revision: @rev }.merge(kind: 'dir') %>
</div>

<p>{ render partial: 'link_to_functions' %></p>

{ render partial: 'common/file', locals: {filename: @path, content: @content} %>
 -->