<script>

</script>

<style>
  
</style>

<!-- 
<% content_for :header_tags do %>
  { javascript_include_tag "project/description_handling.js" %>
  { javascript_include_tag "project/filters.js" %>
{/each}

<% html_title(t(:label_project_plural)) -%>

{ toolbar title: t(:label_project_plural) do %>
  {#if User.current.allowed_to?(:add_project, nil, global: true) }
    <li class="toolbar-item">
      { link_to new_project_path,
                  { class: 'button -alt-highlight',
                    aria: {label: t(:label_project_new)},
                    title: t(:label_project_new) } do %>
        { op_icon('button--icon icon-add') %>
        <span class="button--text">{ Project.model_name.human %></span>
      {/each}
    </li>
  {/each}
  <li class="toolbar-item">
    <button id="projects-filter-toggle-button" title="{ t(:label_filters_toggle) %>" class="button toolbar-icon { filter_set? ? '-active' : '' %>">
      { op_icon("icon-filter button--icon") %>
    </button>
  </li>
  <li class="toolbar-item">
    { link_to t(:label_overall_activity), activities_path, class: 'button' %>
  </li>
{/each}

{ render partial: 'projects/filters/form', locals: { query: @query } %>

{#if @projects.any? }
  <div class="generic-table--container">
    <div class="generic-table--results-container">
      <table class="generic-table" id="project-table">
        <thead>
          <tr>
            { render partial: 'hierarchy_header' %>
            { projects_sort_header_tag('name', caption: Project.human_attribute_name(:name), param: :json) %>
            { projects_sort_header_tag('is_public', caption: Project.human_attribute_name(:is_public), param: :json) %>
            {#if EnterpriseToken.allows_to?(:custom_fields_in_projects_list) }
              {#each @custom_fields.each  as custom_field}
                { sort_header_tag("cf_#{custom_field.id}", caption: custom_field.name, param: :json) %>
              {/each}
            {/each}
            {#if User.current.admin? }
              { projects_sort_header_tag('required_disk_space', caption: I18n.t(:label_required_disk_storage), param: :json) %>
              { projects_sort_header_tag('created_on', caption: Project.human_attribute_name(:created_on), param: :json) %>
              { projects_sort_header_tag('latest_activity_at', caption: Project.human_attribute_name(:latest_activity_at), param: :json) %>
            {/each}
            <th class="-right">
              <div class="generic-table--header-outer">
                <div class="generic-table--header">
                  {#if params[:expand] == 'all' }
                    { link_to t(:button_collapse_all), { params: safe_query_params(%w{filters page per_page sortBy}).except(:expand) } %>
                  {:else}
                    { link_to t(:button_expand_all), { params: safe_query_params(%w{filters page per_page sortBy}).merge(expand: 'all') } %>
                  {/each}
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {#each projects_with_levels_order_sensitive(@projects)  as project, level}
            <tr class="basics context-menu--reveal { project_css_classes(project) %> { level > 0 ? "idnt idnt-#{level}" : nil %> { params[:expand] == 'all' && short_project_description(project).present? ? '-no-highlighting -expanded' : '' %>">
              <td></td>
              <td class="name project--hierarchy { project.archived? ? 'archived' : '' %>">
                <i class="projects-table--hierarchy-icon"></i>
                {#if project.archived? }
                  <span class="archived-label">{ t('project.archive.archived') %></span>
                {/each}
                { link_to_project(project, {}, {}, false) %>
              </td>
              <td>{ checked_image project.is_public? %></td>
              {#if EnterpriseToken.allows_to?(:custom_fields_in_projects_list) }
                {#each @custom_fields.each  as custom_field}
                  <td class="format-{ custom_field.field_format %>">
                    <% custom_value = project.custom_value_for(custom_field).formatted_value %>

                    {#if custom_field.field_format == 'text' }
                      { shorten_text(custom_value, 20) %>
                    {:else}
                      { custom_value %>
                    {/each}
                  </td>
                {/each}
              {/each}
              {#if User.current.admin? }
                <td>{ number_to_human_size(project.required_disk_space, precision: 2) if project.required_disk_space.to_i > 0 %></td>
                <td>{ format_date(project.created_on) %></td>
                <td>{ format_date(project.latest_activity_at) %></td>
              {/each}
              <td class="buttons">
                <% items = project_more_menu_items(project) %>
                {#if items.any?  }
                  <ul class="project-actions">
                    <li aria-haspopup="true" title="{ t(:label_open_menu) %>" class="drop-down">
                      <a class="icon icon-show-more-horizontal context-menu--icon" title="{ t(:label_open_menu) %>" href></a>
                      <ul style="display:none;" class="menu-drop-down-container">
                        {#each items.each  as item}
                          <li>
                            { link_to(*item) %>
                          </li>
                        {/each}
                      </ul>
                    </li>
                  </ul>
                {/each}
                <% unless project.description.blank? %>
                  <a class="icon collapse icon-arrow-up1 projects-table--description-toggle" href title="{ t('label_project_hide_details') %>"></a>
                  <a class="icon expand icon-arrow-down1 projects-table--description-toggle" href title="{ t('label_project_show_details') %>"></a>
                {/each}
              </td>
            </tr>
            <% unless project.description.blank? %>
              <tr class="project-description { project_css_classes(project) %> { level > 0 ? "idnt idnt-#{level}" : nil %> { params[:expand] == 'all' ? '-expanded' : '' %>">
                <td></td>
                <td colspan="{ @custom_fields.size + (User.current.admin? ? 6 : 3) %>" class="project--hierarchy">
                  <div class="description-container">
                    <span class="wiki">{ format_text(short_project_description(project), project: project) %></span>
                  </div>
                </td>
              </tr>
            {/each}
          {/each}
        </tbody>
      </table>
    </div>
  </div>
  { pagination_links_full @projects %>
{:else}
  { no_results_box(no_projects_result_box_params) %>
{/each}


{#if User.current.admin? }
  <p class="information-section">
    { op_icon('icon-info1') %>
    { t(:label_projects_storage_information,
          count: Project.count,
          storage: number_to_human_size(Project.total_projects_size, precision: 2)) %>
  </p>
{/each}
 -->