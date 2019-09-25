<script>

</script>

<style>
  
</style>
<!-- 

User-agent: *
<% cache @projects.cache_key(:updated_on) do %>
  <% @projects.each do |p| -%>
Disallow: { project_repository_path(p) %>
Disallow: { project_work_packages_path(p) %>
Disallow: { project_activity_index_path(p) %>
  <% end -%>
{/each}
Disallow: /work_packages/calendar
Disallow: /activity
 -->