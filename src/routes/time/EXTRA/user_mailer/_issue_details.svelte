<script>

</script>

<style>
  
</style>
<!-- 


<h1>{ link_to issue.to_s, work_package_url(issue) %></h1>

<ul>
  <li>{ WorkPackage.human_attribute_name(:author)        %>: { issue.author        %></li>
  <li>{ WorkPackage.human_attribute_name(:status)        %>: { issue.status        %></li>
  <li>{ WorkPackage.human_attribute_name(:priority)      %>: { issue.priority      %></li>
  <li>{ WorkPackage.human_attribute_name(:assigned_to)   %>: { issue.assigned_to   %></li>
  <li>{ WorkPackage.human_attribute_name(:responsible)   %>: { issue.responsible   %></li>
  <li>{ WorkPackage.human_attribute_name(:category)      %>: { issue.category      %></li>
  <li>{ WorkPackage.human_attribute_name(:fixed_version) %>: { issue.fixed_version %></li>
  <li>{ WorkPackage.human_attribute_name(:start_date)    %>: { issue.start_date    %></li>
  <li>{ WorkPackage.human_attribute_name(:due_date)      %>: { issue.due_date      %></li>
  <li>{ WorkPackage.human_attribute_name(:estimated_hours)%>: { issue.estimated_hours %></li>

  {#if Setting.work_package_done_ratio != 'disabled' }
    <li>{ WorkPackage.human_attribute_name(:done_ratio)    %>: { issue.done_ratio    %></li>
  {/each}

  {#each issue.custom_field_values.each  as value}
    <li>{ value.custom_field.name %>: { show_value(value) %></li>
  {/each}
</ul>

{ format_text(issue.description, attribute: :description, only_path: false, object: issue, project: issue.project) %>
 -->