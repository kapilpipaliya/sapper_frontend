<script>

</script>

<style>
  
</style>
<!-- 


{ link_to({ action: 'show', project_id: @project, repo_path: nil, rev: @rev },
            { title: I18n.t(:label_repository_root) }) do %>
  { op_icon('icon-home repository-breadcrumbs--home') %>
{/each}
<%
dirs = path.split('/')
link_path = ''
dirs.each_with_index do |dir, index|
    next if dir.blank?
    link_path << '/' unless link_path.empty?
    link_path << "#{dir}"
    %>
    <span class="repository-breadcrumbs--sep"></span>
      {#if index == dirs.size - 1 }
        <strong>{ h(dir) %></strong>
      {:else}
        { link_to h(dir), action: 'show', project_id: @project,
                            path: to_path_param(link_path), rev: @rev %>
      {/each}
{/each}
<%
  # @rev is revsion or git branch or tag.
  rev_text = @changeset.nil? ? @rev : format_revision(@changeset)
%>
<span class="repository-bradcrumbs--identifier">
  { "(#{l('repositories.at_identifier', identifier: rev_text)})" if rev_text.present? %>
</span>

<% html_title(h(with_leading_slash(path))) -%>
 -->