<script>

</script>

<style>
  
</style>

<!-- 

<% html_title t(:label_administration), t("label_type_plural") %>
{ toolbar title: t(:label_work_package_types) do %>
  <li class="toolbar-item">
    { link_to new_type_path,
        { class: 'button -alt-highlight',
          aria: { label: t(:label_type_new) },
          title: t(:label_type_new)} do %>
      { op_icon('button--icon icon-add') %>
      <span class="button--text">
        { t('activerecord.attributes.work_package.type') %>
      </button>
    {/each}
  </li>
{/each}

{#if @types.any? }
  <div class="generic-table--container">
    <div class="generic-table--results-container">
      <table class="generic-table">
        <colgroup>
          <col highlight-col>
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
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  <span>
                    { Type.human_attribute_name(:name) %>
                  </span>
                </div>
              </div>
            </th>
            <th><div class="generic-table--empty-header"></div></th>
             
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  <span>
                    { Type.human_attribute_name(:color) %>
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  <span>
                    { t(:label_active_in_new_projects) %>
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  <span>
                    { Type.human_attribute_name(:is_milestone) %>
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  <span>
                    {t(:button_sort)%>
                  </span>
                </div>
              </div>
            </th>
            <th><div class="generic-table--empty-header"></div></th>
          </tr>
        </thead>
        <tbody>
          <% for type in @types %>
            <tr>
              <td class="timelines-pet-name">
                { link_to type.name, edit_type_tab_path(type, tab: "settings") %>
              </td>
              <td>
                {#if type.workflows.empty? }
                <span class="icon-context icon-warning">
                  { t(:text_type_no_workflow) %>
                  ({ link_to t(:button_edit), { controller: '/workflows',
                                                  action: 'edit',
                                                  type_id: type} %>)
                </span>
                {/each}
              </td>
              <td class="timelines-pet-color">
                { icon_for_type type %>
              </td>
              <td class="timelines-pet-is_default">
                { checked_image(type.is_default) %>
              </td>
              <td class="timelines-pet-is_milestone">
                { checked_image(type.is_milestone) %>
              </td>
              <td class="timelines-pet-reorder">
                { reorder_links('type', {action: 'move', id: type}) %>
              </td>
              <td class="buttons">
                {#if !type.is_standard? }
                  { link_to '', type,
                                  method: :delete,
                                  data: { confirm: t(:text_are_you_sure) },
                                  class: 'icon icon-delete',
                                  title: t(:button_delete) %>
                {/each}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>

    </div>
  </div>
  { pagination_links_full @types %>
{:else}
  { no_results_box(action_url: new_type_path, display_action: true)%>
{/each}
 -->