<script>

</script>

<style>
  
</style>


<!-- 
{ issue.to_s %>
{ work_package_url(issue) %>

{ WorkPackage.human_attribute_name(:author)        %>: { issue.author        %>
{ WorkPackage.human_attribute_name(:status)        %>: { issue.status        %>
{ WorkPackage.human_attribute_name(:priority)      %>: { issue.priority      %>
{ WorkPackage.human_attribute_name(:assigned_to)   %>: { issue.assigned_to   %>
{ WorkPackage.human_attribute_name(:responsible)   %>: { issue.responsible   %>
{ WorkPackage.human_attribute_name(:category)      %>: { issue.category      %>
{ WorkPackage.human_attribute_name(:fixed_version) %>: { issue.fixed_version %>
{ WorkPackage.human_attribute_name(:start_date)    %>: { issue.start_date    %>
{ WorkPackage.human_attribute_name(:due_date)      %>: { issue.due_date      %>
{ WorkPackage.human_attribute_name(:estimated_hours)%>: { issue.estimated_hours %>
{#if Setting.work_package_done_ratio != 'disabled' }
{  WorkPackage.human_attribute_name(:done_ratio) %>: { issue.done_ratio %>
{/each}
{#each issue.custom_field_values.each  as value}
{  value.custom_field.name %>: { show_value(value) %>
{/each}

{ issue.description %>
 -->