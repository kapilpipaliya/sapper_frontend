<script>

</script>

<style>
  
</style>
<!-- 

{#if @entry && @entry.kind == 'file' }
  <p>
    { link_to_if action_name != 'changes', l(:label_history), {action: 'changes', project_id: @project, repo_path: to_path_param(@path), rev: @rev } %> |
    {#if @repository.supports_cat? }
      { link_to_if action_name != 'entry', l(:button_view), entry_revision_project_repository_path(project_id: @project, repo_path: to_path_param(@path), rev: @rev) %> |
    {/each}
    {#if @repository.supports_annotate? }
      { link_to_if action_name != 'annotate', l(:button_annotate), {action: 'annotate', project_id: @project, repo_path: to_path_param(@path), rev: @rev } %> |
    {/each}
    { link_to(l(:button_download), {action: 'entry', project_id: @project, repo_path: to_path_param(@path), rev: @rev, format: 'raw' }) if @repository.supports_cat? %>
    { "(#{number_to_human_size(@entry.size)})" if @entry.size %>
  </p>
{/each}
 -->