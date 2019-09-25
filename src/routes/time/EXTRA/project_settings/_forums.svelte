<script>

</script>

<style>
  
</style>
<!-- 


{#if @project.forums.any? }
  <fieldset class="form--fieldset">
    <legend class="form--fieldset-legend">
      { l(:label_available_project_forums) %>
    </legend>
    <div class="form--fieldset-control">
      <span class="form--fieldset-control-container">
        { link_to_if_authorized({ controller: '/forums', action: 'new', project_id: @project },
                                  { aria: { label: t(:label_forum_new) },
                                    title: t(:label_forum_new) }) do %>
          { op_icon('icon-add icon-small') %>
            <span>{ t('activerecord.models.forum') %></span>
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
            <col>
            </colgroup>
          <thead>
            <tr>
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      { Forum.model_name.human %>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      { Forum.human_attribute_name(:description) %>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      {l(:button_sort)%>
                    </span>
                  </div>
                </div>
              </th>
              <th><div class="generic-table--empty-header"></div></th>
            </tr>
          </thead>
          <tbody>
            <% @project.forums.each do |forum|
              next if forum.new_record? %>
              <tr>
                <td>{h forum.name %></td>
                <td>{ format_text(forum.description) %></td>
                <td class="small-icons">
                  {#if authorize_for 'forums', 'edit' }
                    { reorder_links 'forum', controller: '/forums',
                                               action: 'move',
                                               project_id: @project,
                                               id: forum %>
                  {/each}
                </td>
                <td class="buttons">
                  { link_to_if_authorized '',
                                            { controller: '/forums', action: 'edit', project_id: @project, id: forum },
                                            class: 'icon icon-edit',
                                            title: t(:button_edit) %>
                  { link_to_if_authorized '',
                                            { controller: '/forums', action: 'destroy', project_id: @project, id: forum },
                                            data: { confirm: l(:text_are_you_sure) },
                                            method: :delete,
                                            class: 'icon icon-delete',
                                            title: t(:button_delete) %>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>

      </div>
    </div>
    {#if @project.forums.any? }
      <div class="generic-table--action-buttons">
        { link_to_if_authorized({ controller: '/forums', action: 'new', project_id: @project },
                                  { class: 'button -alt-highlight',
                                    aria: {label: t(:label_forum_new)},
                                    title: t(:label_forum_new)}) do %>
          { op_icon('button--icon icon-add') %>
          <span class="button--text">{ t('activerecord.models.forum') %></span>
        {/each}
      </div>
    {/each}
  {:else}
    { no_results_box action_url: new_project_forum_path(@project),
                       display_action: authorize_for('forums', 'new'),
                       custom_title: t('projects.settings.forums.no_results_title_text'),
                       custom_action_text: t('projects.settings.forums.no_results_content_text') %>
  {/each}
</fieldset>
 -->