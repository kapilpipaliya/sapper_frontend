<script>

</script>

<style>
  
</style>

<!-- 

{ toolbar title: t(:label_forum_new) %>

{ labelled_tabular_form_for [@project, @forum] do |f| %>
  { render partial: 'form', locals: {f: f} %>
  { f.button t(:button_create), class: 'button -highlight -with-icon icon-checkmark' %>
  { link_to t(:button_cancel), project_forums_path(@project), class: 'button -with-icon icon-cancel' %>
{/each}
 -->