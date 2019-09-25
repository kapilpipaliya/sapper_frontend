<script>

</script>

<style>
  
</style>


<!-- 
{ toolbar title: l(:label_statistics) %>

<p class="autoscroll">
  { tag("embed", width: 800,
                   height: 300,
                   type: "image/svg+xml",
                   src: url_for(controller: '/repositories',
                                   action: 'graph',
                                   project_id: @project.id,
                                   graph: "commits_per_month")) %>
</p>
{#if @show_commits_per_author }
  <p class="autoscroll">
    { tag("embed", width: 800,
                     height: 400,
                     type: "image/svg+xml",
                     src: url_for(controller: '/repositories',
                                     action: 'graph',
                                     project_id: @project.id,
                                     graph: "commits_per_author")) %>
  </p>
{/each}

<p>{ link_to l(:button_back), action: 'show', project_id: @project.id %></p>

<% html_title(l(:label_repository), l(:label_statistics)) -%>
 -->