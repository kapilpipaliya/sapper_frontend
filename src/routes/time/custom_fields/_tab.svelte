<script>

</script>

<style>
  
</style>
<!-- 


{#if (@custom_fields_by_type[tab[:name]] || []).any? }
  <div class="generic-table--container">
    <div class="generic-table--results-container">
      {#if tab[:name] == 'WorkPackageCustomField' }
        <div class="notification-box -info">
          <div class="notification-box--content">
            <p>{ t('text_custom_field_hint_activate_per_project_and_type') %></p>
          </div>
        </div>
      {/each}
      <table class="generic-table">
        <colgroup>
          <col highlight-col>
          <col highlight-col>
          {#if tab[:name] == 'WorkPackageCustomField' }
            <col highlight-col>
            <col highlight-col>
          {/each}
          <col highlight-col>
          <col highlight-col>
          <col>
        </colgroup>
        <thead>
          <tr>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  <span>
                    { CustomField.human_attribute_name(:name) %>
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  <span>
                    { CustomField.human_attribute_name(:field_format) %>
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  <span>
                    { CustomField.human_attribute_name(:is_required) %>
                  </span>
                </div>
              </div>
            </th>
            {#if tab[:name] == 'WorkPackageCustomField' }
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      { CustomField.human_attribute_name(:is_for_all) %>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      { t(:label_used_in_projects) %>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      { t('custom_fields.contained_in_type') %>
                    </span>
                  </div>
                </div>
              </th>
            {/each}
            <% unless tab[:name] == 'WorkPackageCustomField' %>
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      {l(:button_sort)%>
                    </span>
                  </div>
                </div>
              </th>
            {/each}
            <th><div class="generic-table--empty-header"></div></th>
          </tr>
        </thead>
        <tbody>
          <% (@custom_fields_by_type[tab[:name]] || []).sort.each do |custom_field| -%>
            <tr>
              <td>{ link_to h(custom_field.name), edit_custom_field_path(custom_field), lang: custom_field.name_locale %></td>
              <td>{ label_for_custom_field_format(custom_field.field_format) %></td>
              <td>{ checked_image custom_field.is_required? %></td>
              {#if tab[:name] == 'WorkPackageCustomField' }
                <td>{ checked_image custom_field.is_for_all? %></td>
                <td>
                  {#if custom_field.projects.count == 0 && !custom_field.is_for_all? }
                    <span class="icon-context icon-warning">
                      { t(:label_x_projects, count: custom_field.projects.count) %>
                    </span>
                  {:else if !custom_field.is_for_all? }
                    { t(:label_x_projects, count: custom_field.projects.count) %></td>
                  {/each}
                <td>
                  <% type_links = custom_field.types.map { |t| link_to(t.name, edit_type_tab_path(id: t.id, tab: 'form_configuration')) } %>
                  {#if type_links.empty? }
                    <span class="icon-context icon-warning">
                      { link_to t(:label_custom_field_add_no_type), types_path %>
                    </span>
                  {/each}
                  { safe_join type_links, ', '.html_safe %>
                </td>
              {/each}
              <% unless tab[:name] == 'WorkPackageCustomField' %>
                <td>{ reorder_links('custom_field', { action: 'update', id: custom_field, back_url: custom_fields_path(tab: tab[:name]) }, method: :put) %></td>
              {/each}
              <td class="buttons">
                { link_to(
                      op_icon('icon icon-delete'),
                      (custom_field_path(custom_field)),
                      method: :delete,
                      data: { confirm: I18n.t(:text_are_you_sure) },
                      title: t(:button_delete)) %>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
  <div class="generic-table--action-buttons">
    { link_to new_custom_field_path(type: tab[:name]),
          { class: 'button -alt-highlight',
            aria: {label: t(:label_custom_field_new)},
            title: t(:label_custom_field_new)} do %>
      { op_icon('button--icon icon-add') %>
      <span class="button--text">{ t('activerecord.models.custom_field') %></span>
    {/each}
  </div>
{:else}
  { no_results_box(action_url: new_custom_field_path(type: tab[:name]), display_action: true) %>
{/each}
 -->