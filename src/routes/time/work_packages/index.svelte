<script>

</script>

<style>
  
</style>

<!-- 

<% html_title(l('activerecord.attributes.project.work_packages')) -%>
{ call_hook(:view_work_packages_index_bottom, { project: project, query: query }) %>

<% content_for :sidebar do %>
  { render partial: 'sidebar' %>
{/each}

<% content_for :header_tags do %>
  { auto_discovery_link_tag(:atom, {query_id: query, format: 'atom', page: nil, key: User.current.rss_key}, title: l(:label_work_package_plural)) %>
  { auto_discovery_link_tag(:atom, {controller: '/journals', action: 'index', query_id: query, format: 'atom', page: nil, key: User.current.rss_key}, title: l(:label_changes_details)) %>
{/each}
 -->