<script>

</script>

<style>
  
</style>
<!-- 


{ toolbar title: t(:label_index_by_date) do %>
    <li class="toolbar-item">
      { watcher_link(@wiki, User.current) %>
    </li>
{/each}

{#if @pages.empty? }
  { no_results_box %>
{/each}
{#each @pages_by_date.keys.sort.reverse.each  as date}
  <h3>{ format_date(date) %></h3>
  <ul>
    {#each @pages_by_date[date].each  as page}
      <li>{ link_to page.title, project_wiki_path(page.project, page) %></li>
    {/each}
  </ul>
{/each}
{#if @pages.any? }
  { other_formats_links do |f| %>
    { f.link_to 'Atom', url: {controller: '/activities', action: 'index', show_wiki_edits: 1, key: User.current.rss_key} %>
    { f.link_to('HTML', url: {action: 'export'}) if User.current.allowed_to?(:export_wiki_pages, @project) %>
  {/each}
{/each}
<% content_for :header_tags do %>
  { auto_discovery_link_tag(:atom, controller: '/activities', action: 'index', id: @project, show_wiki_edits: 1, format: 'atom', key: User.current.rss_key) %>
{/each}
 -->