<script>

</script>

<style>
  
</style>
<!-- 

{ toolbar title: Forum.name.humanize %>

{ labelled_tabular_form_for [@project, @forum] do |f| %>
  { render partial: 'form', locals: { f: f } %>
  { f.button t(:button_save), class: 'button -highlight -with-icon icon-checkmark' %>
  { link_to t(:button_cancel), project_forum_path(@project, @forum), class: 'button -with-icon icon-cancel' %>
{/each}
 -->