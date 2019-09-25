<script>

</script>

<style>
  
</style>
<!-- 


<p>
  {#if version.start_date }
    { Version.human_attribute_name(:start_date) %> { h(format_date(version.start_date)) %>
  {/each}
  {#if version.due_date }
      <br>
    { Version.human_attribute_name(:due_date) %> { h(format_date(version.due_date)) %>
  {/each}
</p>

{#if !version.completed? && version.due_date }
  <p><strong>{ due_date_distance_in_words(version.effective_date) %></strong></p>
{/each}

<p>{h version.description %></p>
<ul>
  {#each version.custom_values.each  as custom_value}
    {#if !custom_value.value.blank? }
      <li>{h custom_value.custom_field.name %>: {h show_value(custom_value) %></li>
    {/each}
  {/each}
</ul>

{#if version.fixed_issues.count > 0 }
  { progress_bar([version.closed_percent, version.completed_percent], width: '40%', legend: ('%0.0f' % version.completed_percent)) %>
  <p class="progress-info">
    { link_to_if(version.closed_issues_count > 0,
                   l(:label_x_closed_work_packages_abbr, count: version.closed_issues_count),
                   project_work_packages_closed_version_path(version)) %>
    ({ '%0.0f' % (version.closed_issues_count.to_f / version.fixed_issues.count * 100) %>%)
    &#160;
    { link_to_if(version.open_issues_count > 0,
                   l(:label_x_open_work_packages_abbr, count: version.open_issues_count),
                   project_work_packages_open_version_path(version)) %>
    ({ '%0.0f' % (version.open_issues_count.to_f / version.fixed_issues.count * 100) %>%)
  </p>
{:else}
  { no_results_box %>
{/each}
 -->