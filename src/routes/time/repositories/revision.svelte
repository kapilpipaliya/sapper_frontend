<script>

</script>

<style>
  
</style>
<!-- 


{ toolbar title: "#{l(:label_revision)} #{format_revision(@changeset)}" do %>
  <li class="toolbar-item">
    {#if @changeset.previous.nil? }
      <button class="button" disabled="disabled">{ l(:label_previous) %></button>
    {:else}
      { link_to_revision(@changeset.previous, @project, text: l(:label_previous), class: 'button') %>
    {/each}
  </li>
  <li class="toolbar-item">
    {#if @changeset.next.nil? }
      <button class="button" disabled="disabled">{ l(:label_next) %></button>
    {:else}
      { link_to_revision(@changeset.next, @project, text: l(:label_next), class: 'button') %>
    {/each}
  </li>
  <li class="toolbar-item">
    { form_tag({controller: '/repositories', action: 'revision', project_id: @project}, method: :get) do %>
      { text_field_tag :rev, @rev, placeholder: l(:label_revision) %>
    {/each}
  </li>
{/each}
<p>{#if @changeset.scmid %>ID: { h(@changeset.scmid) }<br />
  {/each}
  <span class="author">{ authoring(@changeset.committed_on, @changeset.author) %></span></p>
{ format_revision_text @changeset.comments %>
{#if @changeset.work_packages.visible.any? }
  <h3>{ l(:label_related_work_packages) %></h3>
  <ul>
    {#each @changeset.work_packages.visible.each  as work_package}
      <li>{ link_to_work_package work_package %></li>
    {/each}
  </ul>
{/each}
{#if User.current.allowed_to?(:browse_repository, @project) }
  <h3>{ l(:label_attachment_plural) %></h3>
  <ul id="changes-legend">
    <li class="change change-A icon icon-add" title={ l(:label_added) %>>{ l(:label_added) %></li>
    <li class="change change-M icon icon-arrow-left-right" title={ l(:label_modified) %>>{ l(:label_modified) %></li>
    <li class="change change-C icon icon-copy" title={ l(:label_copied) %>>{ l(:label_copied) %></li>
    <li class="change change-R icon icon-rename" title={ l(:label_renamed) %>>{ l(:label_renamed) %></li>
    <li class="change change-D icon icon-delete" title={ l(:label_deleted) %>>{ l(:label_deleted) %></li>
  </ul>
  <p>{ link_to(l(:label_view_diff), action: 'diff', project_id: @project, repo_path: nil, rev: @changeset.identifier) if @changeset.file_changes.any? %></p>
  <div class="changeset-changes">
    { render_changeset_changes %>
  </div>
{/each}
<% html_title("#{l(:label_revision)} #{format_revision(@changeset)}") -%>
 -->