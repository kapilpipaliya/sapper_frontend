<script>

</script>

<style>
  
</style>
<!-- 

{ toolbar title: "#{Category.model_name.human} #{@category.name}" %>
{ form_tag({}, {method: :delete}) do %>
  <div class="box">
    <p><strong>{ l(:text_work_package_category_destroy_question, @issue_count) %></strong></p>
    <p><label>{ radio_button_tag 'todo', 'nullify', true %> { l(:text_work_package_category_destroy_assignments) %></label>
      {#if @categories.size > 0 }
        <label>{ radio_button_tag 'todo', 'reassign', false %> { l(:text_work_package_category_reassign_to) %></label>
        { label_tag "reassign_to_id", l(:description_work_package_category_reassign), class: "hidden-for-sighted" %>
        { select_tag 'reassign_to_id', options_from_collection_for_select(@categories, 'id', 'name') %></p>
    {/each}
  </div>
  { submit_tag l(:button_apply), class: 'button -highlight' %>
  { link_to l(:button_cancel), { controller: '/project_settings', action: 'show', id: @project, tab: 'categories' },
      class: 'button' %>
{/each}
 -->