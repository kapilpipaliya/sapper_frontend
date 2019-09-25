<script>

</script>

<style>
  
</style>


<!-- 
{ t(:text_work_package_updated, id: "##{@issue.id}", author: @journal.user) %>

{#each @journal.details.each  as detail}
  { @journal.render_detail(detail, no_html: true, only_path: false) %>
{/each}

{ @journal.notes if @journal.notes? %>
----------------------------------------
{ render partial: 'issue_details', locals: { issue: @issue } %>
 -->