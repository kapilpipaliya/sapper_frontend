<script>

</script>

<style>
  
</style>
<!-- 

<div class="form--field">
  { f.check_box :assignable %>
</div>
{#if role.new_record? && roles.any? }
  <div class="form--field">
    { styled_label_tag :copy_workflow_from, l(:label_copy_workflow_from) %>
    <div class="form--field-container">
      { styled_select_tag(:copy_workflow_from, content_tag("option") + options_from_collection_for_select(@roles.select{|r| !r.is_a?(GlobalRole)}, :id, :name), container_class: '-slim') %>
    </div>
  </div>
{/each}
 -->