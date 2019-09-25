<script>

</script>

<style>
  
</style>
<!-- 

{#if @project.shared_versions.any? }
  <fieldset class="form--fieldset">
    <legend class="form--fieldset-legend">
      { l(:label_available_project_versions) %>
    </legend>
    <div class="form--fieldset-control">
      <span class="form--fieldset-control-container">
        { link_to_if_authorized({ controller: '/versions', action: 'new', project_id: @project },
                                  { aria: { label: t(:label_version_new) },
                                    title: t(:label_version_new) }) do %>
          { op_icon('icon-add icon-small') %>
            <span>{ l(:label_version) %></span>
        {/each}
      </span>
    </div>
    <div class="generic-table--container">
      <div class="generic-table--results-container">
        <table class="generic-table">
          <colgroup>
            <col highlight-col>
            <col highlight-col>
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
                      { Version.model_name.human %>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      { Version.human_attribute_name(:start_date) %>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      { Version.human_attribute_name(:effective_date) %>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      { Version.human_attribute_name(:description) %>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      { Version.human_attribute_name(:status) %>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      { Version.human_attribute_name(:sharing) %>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      { WikiPage.model_name.human %>
                    </span>
                  </div>
                </div>
              </th>
              <th><div class="generic-table--empty-header"></div></th>
            </tr>
          </thead>
          <tbody>
            <% for version in @project.shared_versions.sort %>
              <tr class="version { 'shared' if version.project != @project %>">
                <td class="name {h version.status %>{ ' icon-context icon-link' if version.project != @project %>">
                  { link_to_version version %>
                </td>
                <td class="date">{ format_date(version.start_date) %></td>
                <td class="date">{ format_date(version.effective_date) %></td>
                <td class="description">{h version.description %></td>
                <td class="status">{ l("version_status_#{version.status}") %></td>
                <td class="sharing">{h format_version_sharing(version.sharing) %></td>
                <td>
                  { link_to_if_authorized( h(version.wiki_page_title),
                                             { controller: '/wiki',
                                               action: 'show',
                                               project_id: version.project,
                                               id: version.wiki_page_title }) ||
                      h(version.wiki_page_title) unless version.wiki_page_title.blank? || version.project.wiki.nil? %>
                </td>
                <td class="buttons">
                  {#if version.project == @project }
                    { link_to_if_authorized '',
                                              { controller: '/versions', action: 'edit', id: version },
                                              class: 'icon icon-edit',
                                              title: t(:button_edit) %>
                    { link_to_if_authorized '',
                                              { controller: '/versions', action: 'destroy', id: version },
                                              data: { confirm: l(:text_are_you_sure) },
                                              method: :delete,
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
    <div class="generic-table--action-buttons">
      { link_to_if_authorized({ controller: '/versions', action: 'new', project_id: @project },
                                { class: 'button -alt-highlight',
                                  aria: {label: t(:label_version_new)},
                                  title: t(:label_version_new)}) do %>
        { op_icon('button--icon icon-add') %>
        <span class="button--text">{ t('activerecord.models.version') %></span>
      {/each}
    </div>
  {:else}
    { no_results_box action_url: new_project_version_path(@project),
                       display_action: authorize_for('versions', 'new'),
                       custom_title: t('projects.settings.versions.no_results_title_text'),
                       custom_action_text: t('projects.settings.versions.no_results_content_text')
    %>
  {/each}
</fieldset>

{#if @project.versions.any? }
  <div class="contextual">
      { link_to l(:label_close_versions),
                  close_completed_project_versions_path(@project),
                  method: :put %>
  </div>
{/each}
 -->