<script>

</script>

<style>
  
</style>
<!-- 

{#if @project.categories.any? }
  <fieldset class="form--fieldset">
    <legend class="form--fieldset-legend">
      { l(:label_available_project_work_package_categories) %>
    </legend>
    <div class="form--fieldset-control">
      <span class="form--fieldset-control-container">
        { link_to_if_authorized({ controller: '/categories', action: 'new', project_id: @project },
                                  { aria: { label: t(:label_work_package_category_new) },
                                    title: t(:label_work_package_category_new) }) do %>
          { op_icon('icon-add icon-small') %>
            <span>{ t('activerecord.models.category') %></span>
        {/each}
      </span>
    </div>
    <div class="generic-table--container">
      <div class="generic-table--results-container">
        <table class="generic-table">
          <colgroup>
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
                      { Category.model_name.human %>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      { Category.human_attribute_name(:assigned_to) %>
                    </span>
                  </div>
                </div>
              </th>
              <th><div class="generic-table--empty-header"></div></th>
            </tr>
          </thead>
          <tbody>
            <% for category in @project.categories %>
              <% unless category.new_record? %>
                <tr>
                  <td>{h(category.name) %></td>
                  <td>{h(category.assigned_to.name) if category.assigned_to %></td>
                  <td class="buttons">
                    { link_to_if_authorized '',
                                              { controller: '/categories', action: 'edit', id: category },
                                              class: 'icon icon-edit',
                                              title: t(:button_edit) %>
                    { link_to_if_authorized '',
                                              { controller: '/categories', action: 'destroy', id: category },
                                              data: { confirm: l(:text_are_you_sure) },
                                              method: :delete,
                                              class: 'icon icon-delete',
                                              title: t(:button_delete) %>
                  </td>
                </tr>
              {/each}
            {/each}
          </tbody>
        </table>

      </div>
    </div>
    {#if @project.categories.any? }
      <div class="generic-table--action-buttons">
        { link_to_if_authorized({ controller: '/categories', action: 'new', project_id: @project },
                                  { class: 'button -alt-highlight',
                                    aria: {label: t(:label_work_package_category_new)},
                                    title: t(:label_work_package_category_new)}) do %>
          { op_icon('button--icon icon-add') %>
          <span class="button--text">{ t('activerecord.models.category') %></span>
        {/each}
      </div>
    {/each}
  {:else}
    { no_results_box action_url: new_project_category_path(@project),
                       display_action: authorize_for('categories', 'new'),
                       custom_title: t('projects.settings.categories.no_results_title_text'),
                       custom_action_text: t('projects.settings.categories.no_results_content_text') %>
  {/each}
</fieldset>
 -->