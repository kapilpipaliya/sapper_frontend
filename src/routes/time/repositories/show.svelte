<script>

</script>

<style>
  
</style>


<!-- 
{ render partial: 'repository_header', locals: { empty: false } %>

<div class="repository-breadcrumbs">
  { render partial: 'breadcrumbs',
             locals: { path: @path, revision: @rev }.merge(kind: 'dir') %>
</div>

{#if !@entries.nil? && authorize_for('repositories', 'browse') }
{ render partial: 'dir_list' %>
{/each}

{ render_properties(@properties) %>

{ toolbar title: l(:label_revision_plural), html: { class: 'repository--revision-toolbar' } do %>
  <%# rev => nil prevents overwriting the rev parameter queried for in the form with the parameter from the request %>
  { form_tag({ action: controller.action_name,
                 project_id: @project,
                 path: to_path_param(@path),
                 rev: nil
               },
               method: :get,
               id: 'revision_selector',
               class: 'form -vertical'
              ) do %>
    <li class="toolbar-item toolbar-input-group">
      <div>
        { label_tag 'rev', I18n.t('repositories.go_to_revision') %>
      </div>
      { text_field_tag :rev, @rev, id: 'revision-identifier-input', placeholder: l(:label_revision) %>
    </li>
    {#if !@repository.branches.nil? && @repository.branches.length > 0 }
    <li class="toolbar-item toolbar-input-group">
      <div>
        { label_tag 'branch', I18n.t(:label_branch) %>
      </div>
      { select_tag :branch, options_for_select([''] + @repository.branches, @rev), id: 'revision-branch-select' %>
    </li>
    {/each}
    {#if !@repository.tags.nil? && @repository.tags.length > 0 }
    <li class="toolbar-item toolbar-input-group">
      <div>
        { label_tag 'tag', I18n.t(:label_tag) %>
      </div>
      { select_tag :tag, options_for_select([''] + @repository.tags, @rev), id: 'revision-tag-select' %>
    </li>
    {/each}
    <li class="toolbar-item -icon-only">
      { link_to({ url: { action: 'revisions', project_id: @project,
                           key: User.current.rss_key } },
                  { class: 'button', title: l('repositories.atom_revision_feed') }) do %>
        { op_icon('button--icon icon-export-atom') %>
      {/each}
    </li>
  {/each}
{/each}

{#if authorize_for('repositories', 'revisions') }
<%   if @changesets && !@changesets.empty? %>
{    render partial: 'revisions',
              locals: {project: @project, path: @path,
                          revisions: @changesets, entry: nil }%>
<%   end %>
<p>
<%
     has_branches = (!@repository.branches.nil? && @repository.branches.length > 0)
     sep = ''
 %>

<%   if @repository.supports_all_revisions? && @path.blank? %>
{ link_to l(:label_view_all_revisions), revisions_project_repository_path(@project) %>
<%   sep = '|' %>
<%   end %>
</p>
{/each}

<% html_title(l(:label_repository)) -%>
 -->