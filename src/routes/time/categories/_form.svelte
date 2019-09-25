<script>

</script>

<style>
  
</style>
<!-- 

{ error_messages_for 'category' %>

<div class="form--field -required">
  { f.text_field :name, required: true, container_class: '-middle' %>
</div>

<div class="form--field">
  { f.select :assigned_to_id,
               @project.possible_assignees.sort.collect{|u| [u.name, u.id]},
               include_blank: true,
               container_class: '-slim' %>
</div>

<hr class="form--separator" />
 -->