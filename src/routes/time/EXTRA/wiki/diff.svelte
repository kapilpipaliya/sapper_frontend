<script>

</script>

<style>
  
</style>
<!-- 

<% breadcrumb_paths(*(@page.ancestors.reverse.collect { |parent| link_to h(parent.breadcrumb_title), {id: parent, project_id: parent.project}} + [h(@page.breadcrumb_title)] )) %>
{ toolbar title: h(@page.title) do %>
  <li class="toolbar-item">
    { link_to({action: 'history', id: @page}, class: 'button') do %>
      { op_icon('button--icon icon-wiki') %>
      <span class="button--text">{ t(:label_history) %></span>
    {/each}
  </li>
{/each}

<p>
  { Version.model_name.human %> { link_to @diff.content_from.version, action: 'show', id: @page, project_id: @page.project, version: @diff.content_from.version %>/{ @page.content.version %>
  <em>({ @diff.content_from.user ? link_to_user(@diff.content_from.user) : l(:label_user_anonymous) %>, { format_time(@diff.content_from.created_at) %>)</em>
  &#8594;
  { Version.model_name.human %> { link_to @diff.content_to.version, action: 'show', id: @page, project_id: @page.project, version: @diff.content_to.version %>/{ @page.content.version %>
  <em>({ @diff.content_to.user ? link_to_user(@diff.content_to.user) : l(:label_user_anonymous) %>, { format_time(@diff.content_to.created_at) %>)</em>
</p>
<div class="text-diff">
  { nl2br @html_diff %>
</div>
 -->