<script>
// let header_tags = auto_discovery_link_tag(:atom, params.merge({format: 'atom', page: nil, key: User.current.rss_key})) 
</script>

<style>
  
</style>

<!-- 
{ toolbar title: l(:label_revision_plural) do %>
  { form_tag({ action: 'revision', id: @project }, { method: :get }) do %>
    <li class="toolbar-item">
      { label_tag :rev, l(:label_revision), class: 'hidden-for-sighted' %>
      { text_field_tag :rev, @rev, size: 8, placeholder: l(:label_revision) %>
    </li>
    <li class="toolbar-item">
      { submit_tag 'OK', class: 'button -highlight' %>
    </li>
  {/each}
{/each}
{ render partial: 'revisions', locals: {project: @project, path: '', revisions: @changesets, entry: nil }%>
{ pagination_links_full @changesets %>

{ other_formats_links do |f| %>
  { f.link_to 'Atom', url: {key: User.current.rss_key} %>
{/each}

<% html_title(l(:label_revision_plural)) -%>
 -->