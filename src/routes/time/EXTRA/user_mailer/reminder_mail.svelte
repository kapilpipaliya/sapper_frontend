<script>

</script>

<style>
  
</style>

<!-- 
<p>{ @group.nil? ? t(:mail_body_reminder, count: @issues.size, days: @days) : t(:mail_body_group_reminder, count: @issues.size, days: @days, group: @group.groupname) %></p>
<ul>
  <% @issues.each do |issue| -%>
    <li>{ issue.project %> - { link_to "#{issue.type} ##{issue.id}", work_package_url(issue) %>: { issue.subject %></li>
  <% end -%>
</ul>
<p>{ link_to t(:label_work_package_view_all), @assigned_issues_url %></p>
 -->