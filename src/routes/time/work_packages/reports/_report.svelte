<script>

</script>

<style>
  
</style>
<!-- 


{#if report.statuses.try(:empty?) and report.rows.try(:empty?) }
  <div class="generic-table--container">
    <% title = t("work_packages.summary.reports.#{report.report_type.downcase}.no_results_title_text") %>
    { no_results_box(custom_title: title) %>
  </div>
{:else}
  <% column_names = report.statuses.map(&:name) + [t(:label_open_work_packages), t(:label_closed_work_packages), t(:label_total)] %>
  <div class="generic-table--container">
    <div class="generic-table--results-container">
      <table class="generic-table">
        <colgroup>
         {#each column_names.each  as name}
            <col highlight-col>
          {/each}
        </colgroup>
      <thead>
        <tr>
          <th><div class="generic-table--empty-header"></div></th>
          {#each column_names.each  as name}
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  <span>
                    { name %>
                  </span>
                </div>
              </div>
            </th>
          {/each}
        </tr>
      </thead>
      <tbody>
        <% for row in report.rows %>
          <tr>
            <td>
              { link_to h(row.name),
                  project_report_property_path((row.is_a?(Project) ? row : @project),
                                               "#{report.field}",
                                               row.id) %>
            </td>
            <% for status in report.statuses %>
              <td>
                { aggregate_link report.data,
                         { report.field => row.id, "status_id" => status.id },
                         project_report_property_status_path((row.is_a?(Project) ? row : @project),
                                                             status.id,
                                                             "#{report.field}",
                                                             row.id) %>
              </td>
            {/each}
            <td>
              { aggregate_link report.data,
                         { report.field => row.id, "closed" => 0 },
                           project_report_property_open_path((row.is_a?(Project) ? row : @project),
                                                             "#{report.field}",
                                                             row.id) %>
            </td>
            <td>
              { aggregate_link report.data,
                         { report.field => row.id, "closed" => 1 },
                           project_report_property_closed_path((row.is_a?(Project) ? row : @project),
                                                               "#{report.field}",
                                                               row.id) %>
            </td>
            <td align="center">
              { aggregate_link report.data,
                         { report.field => row.id },
                         project_report_property_path((row.is_a?(Project) ? row : @project),
                                                                 "#{report.field}",
                                                                 row.id) %>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>

  </div>
 </div>
<% end
  reset_cycle %>
 -->