<script>

</script>

<style>
  
</style>
<!-- 
{ form_tag({}, method: :get, class: "project-filters #{filter_set? ? '-expanded' : ''}") do %>
  <% operators_without_values = ['*', '!*', 't', 'w'] %>
  <fieldset class="advanced-filters--container">
    <a id="projects-filter-close-button" title="{ t('js.close_form_title') %>" class="advanced-filters--close icon-context icon-close"></a>
    <legend>{ t(:label_filter_plural) %></legend>
    <ul class="advanced-filters--filters">
      {#each allowed_filters(query).each  as filter}
        <% filter_active = query.find_active_filter(filter.name).present? %>

        <li class="advanced-filters--filter { filter_active ? '' : 'hidden' %>" filter-name="{ filter.name %>" filter-type="{ filter.type %>">
          <label class='advanced-filters--filter-name' for="{ filter.name %>">
            { filter.human_name %>
          </label>
          <div class="advanced-filters--filter-operator">
            <% selected_operator = filter.operator || filter.default_operator.symbol %>
            { select_tag :operator,
                           options_from_collection_for_select(
                             filter.available_operators,
                             :symbol,
                             :human_name,
                             selected_operator),
                           class: 'advanced-filters--select' %>
          </div>
          <% value_visibility = operators_without_values.include?(selected_operator) ? 'hidden' : '' %>
          {#if %i(list list_optional list_all).include? filter.type }
            { render partial: 'projects/filters/list/input_options',
                       locals: { value_visibility: value_visibility,
                                 filter: filter } %>
          {:else if [:datetime_past, :date].include? filter.type }
            { render partial: 'projects/filters/date/input_options',
                       locals: { value_visibility: value_visibility,
                                 filter: filter,
                                 selected_operator: selected_operator } %>
          {:else}
            <%# All other simple types %>
            { render partial: 'projects/filters/text',
                       locals: { value_visibility: value_visibility,
                                 filter: filter } %>
          {/each}

          <div class="advanced-filters--remove-filter">
            <a href="#" class="filter_rem">
              { op_icon("icon-close advanced-filters--remove-filter-icon", title: I18n.t('js.button_delete')) %>
            </a>
          </div>
        </li>
      {/each}


      <li class="advanced-filters--spacer { query.filters.blank? ? 'hidden' : '' %>"></li>

      <li class="advanced-filters--add-filter">
        <!-- Add filters -->
        <label for="add_filter_select" aria-hidden="true" class="advanced-filters--add-filter-label ng-binding">
          { op_icon("icon-add icon4") %>
          { t(:label_filter_add) %>:
        </label>
        <label for="add_filter_select" class="hidden-for-sighted ng-binding">
          { t(:label_filter_add) %>
          { t('js.filter.description.text_open_filter') %>
          { t('js.filter.description.text_close_filter') %>
        </label>

        <div class="advanced-filters--add-filter-value">
          { select_tag 'add_filter_select',
                         options_from_collection_for_select(
                             allowed_filters(query),
                             :name,
                             :human_name,
                             disabled: query.filters.map(&:name)
                         ),
                         prompt: t(:actionview_instancetag_blank_option),
                         class: 'advanced-filters--select',
                         focus: "false",
                         'aria-invalid': "false" %>
        </div>
        <% unless EnterpriseToken.allows_to?(:custom_fields_in_projects_list)%>
          <div class="advanced-filters--add-filter-info">
            <div class="notification-box">
              <div class="notification-box--content">
                { t('ee.upsale.project_filters.description_html',
                      link: link_to(t(:label_enterprise_edition),
                                    "#{OpenProject::Static::Links.links[:upsale][:href]}/?utm_source=unknown&utm_medium=community-edition&utm_campaign=project-list-filter",
                                    target: '_blank')) %>
              </div>
            </div>
          </div>
        {/each}
      </li>
      <li class="advanced-filters--controls">
        { submit_tag t('button_apply'), class: 'button -small -highlight', name: nil %>
      </li>
    </ul>
  </fieldset>
{/each}
 -->