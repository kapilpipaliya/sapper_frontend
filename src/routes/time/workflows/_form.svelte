<script>

</script>

<style>
  
</style>
<!-- 
<!-- 
<div id="workflow_form_{ name %>" class="generic-table--container">
  <div class="generic-table--results-container">
    <table class="generic-table workflow-table transitions-{ name %>">
      <thead>
        <tr>
          <th></th>
          <th colspan="{ @statuses.length%>">
            <div class="generic-table--sort-header-outer -no-border">
              <div class="generic-table--sort-header workflow-table--header">
                <span>
                  {l(:label_new_statuses_allowed)%>
                </span>
                <span class="workflow-table--check-all">
                  ({ check_all_links 'workflow_form_' + name %>)
                </span>
              </div>
            </div>
          </th>
        </tr>
        <tr>
          <th class="-table-border-bottom  -table-border-right"></th>
          <% for new_status in @statuses %>
              <th class="workflow-table--current-status -table-border-top -table-border-bottom">
                { link_to_function(icon_wrapper('icon-context icon-checkmark',"#{l(:label_check_uncheck_all_in_column)}"), "toggleCheckboxesBySelector('table.transitions-#{name} input.new-status-#{new_status.id}')",
                                     class: 'no-decoration-on-hover',
                                     title: "#{l(:label_check_uncheck_all_in_column)}",
                                     alt: "#{l(:label_check_uncheck_all_in_column)}") %>
                {h new_status.name %>
              </th>
          {/each}
        </tr>
      </thead>
      <tbody>
        <% for old_status in @statuses %>
          <tr class="-table-border-left">
            <td class="workflow-table--current-status -table-border-right">
              { link_to_function(icon_wrapper('icon-context icon-checkmark',"#{l(:label_check_uncheck_all_in_row)}"), "toggleCheckboxesBySelector('table.transitions-#{name} input.old-status-#{old_status.id}')",
                                         class: 'no-decoration-on-hover',
                                         title: "#{l(:label_check_uncheck_all_in_row)}",
                                         alt: "#{l(:label_check_uncheck_all_in_row)}") %>
              {h old_status.name %>
            </td>
            <% for new_status in @statuses -%>
              <td>
                { check_box_tag "status[#{ old_status.id }][#{new_status.id}][]", name, workflows.detect {|w| w.old_status_id == old_status.id && w.new_status_id == new_status.id},
                class: "old-status-#{old_status.id} new-status-#{new_status.id}" %>
              </td>
            <% end -%>
          </tr>
        {/each}
        <tr class="-no-highlighting">
          <td colspan="{ @statuses.length + 2 %>">
                        <span class="workflow-table--turned-header">
              {l(:label_current_status)%>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="generic-table--header-background -no-border"></div>
  </div>
</div>
 -->
 -->