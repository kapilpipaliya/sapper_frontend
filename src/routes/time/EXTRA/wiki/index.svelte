<script>

</script>

<style>
  
</style>

<!-- 

{#if @related_page }
  <% breadcrumb_for_page(@related_page, t(:label_table_of_contents)) %>
{:else}
  <% breadcrumb_paths(t(:label_table_of_contents)) %>
{/each}

{ toolbar title: t(:label_wiki_toc) do %>
  { content_tag(:li, watcher_link(@wiki, User.current), class: 'toolbar-item') %>
{/each}

<% html_title t(:label_wiki_toc) %>

<div class="wiki-content">
{ render_page_hierarchy(@pages_by_parent_id, nil, timestamp: true) %>
</div>

<% unless @pages.empty? %>
  { other_formats_links do |f| %>
    { f.link_to 'Atom', url: {controller: '/activities', action: 'index', show_wiki_edits: 1, key: User.current.rss_key} %>
    { f.link_to('HTML', url: {action: 'export'}) if User.current.allowed_to?(:export_wiki_pages, @project) %>
  {/each}
{:else}
  { no_results_box(action_url:     new_project_wiki_path(@project),
                     display_action: authorize_for('wiki', 'new')) %>
{/each}

<% content_for :header_tags do %>
  { auto_discovery_link_tag(:atom, controller: '/activities', action: 'index', id: @project, show_wiki_edits: 1, format: 'atom', key: User.current.rss_key) %>
{/each}
 -->