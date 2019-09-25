<script>

</script>

<style>
  
</style>

<!-- 
{ t(:text_work_package_updated, id: "##{@issue.id}", author: @journal.user) %>
<ul>
  {#each @journal.details.each  as detail}
    <li>{ @journal.render_detail(detail, only_path: false) %></li>
  {/each}
</ul>
{ format_text(@journal.notes, only_path: false, object: @issue, project: @issue.project) %>
<hr />
{ render partial: 'issue_details', locals: { issue: @issue } %>
 -->