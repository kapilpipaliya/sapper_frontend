<script>

</script>

<style>
  
</style>

<!-- 
{ render partial: 'toolbar', locals: {title: l(:label_workflow_plural) } %>
<% html_title l(:label_administration), l(:label_workflow_plural) -%>
<% local_assigns[:additional_breadcrumb] = t(:label_workflow_summary) %>

{#if @workflow_counts.any? }
  <div class="autoscroll">
    <div class="generic-table--container">
      <div class="generic-table--results-container">
        <table class="generic-table">
          <colgroup>
            <col>
            <col highlight-col>
            <col highlight-col>
            <col highlight-col>
            <col highlight-col>
            <col highlight-col>
            <col>
          </colgroup>
          <thead>
            <tr>
              <th><div class="generic-table--empty-header"></div></th>
              {#each @workflow_counts.first.last.each  as role, count}
                <th>
                  <div class="generic-table--sort-header-outer">
                    <div class="generic-table--sort-header">
                        { content_tag(role.builtin? ? 'em' : 'span', h(role.name)) %>
                    </div>
                  </div>
                </th>
              {/each}
            </tr>
          </thead>
          <tbody>
            <% @workflow_counts.each do |type, roles| -%>
              <tr>
                <td>{ h type %></td>
                <% roles.each do |role, count| -%>
                  <td>
                    { link_to((count > 0 ? count : content_tag(:span, '', class: "icon-close icon-context icon-button")), {action: 'edit', role_id: role, type_id: type}, title: l(:button_edit)) %>
                  </td>
                <% end -%>
              </tr>
            <% end -%>
          </tbody>
        </table>

      </div>
    </div>
  </div>
{:else}
  { no_results_box %>
{/each} -->
