<script>

</script>

<style>
  
</style>
<!-- 


<% html_title l(:label_bulk_edit_selected_work_packages) %>

{#if @bulk_errors.present? }
  <div class="notification-box -error">
    <a title="close" class="notification-box--close icon-context icon-close"></a>
    <div class="notification-box--content">
      <p><strong>{ t('work_packages.bulk.could_not_be_saved') %></strong></p>

      <ul>
      {#each @bulk_errors.each  as wpid, messages}
        <li>
          { link_to "##{wpid}", work_package_path(wpid) %>:
          { safe_join messages, ', ' %>
        </li>
      {/each}
      </ul>
    </div>
  </div>
{/each}

<h2>{ l(:label_bulk_edit_selected_work_packages) %></h2>
<ul>
  {#each @work_packages.each  as wp}
    <li>
      { link_to(h("#{wp.type} ##{wp.id}"), work_package_path(wp)) %>:
      { wp.subject %>
    </li>
  {/each}
</ul>

{ styled_form_tag(url_for(controller: '/work_packages/bulk', action: :update),
             method: :put, class: '-wide-labels') do %>
  {#each @work_packages.each  as wp}
    { hidden_field_tag 'ids[]', wp.id %>
  {/each}
  { back_url_hidden_field_tag %>
  <section class="form--section">
    <fieldset class="form--fieldset">
      <legend class="form--fieldset-legend">{ l(:label_change_properties) %></legend>
      <div class="grid-block">
        <div class="grid-content medium-6">
          <div class="form--field">
            <label class="form--label" for="work_package_type_id">{ WorkPackage.human_attribute_name(:type) %></label>
            <div class="form--field-container">
              { styled_select_tag('work_package[type_id]', "<option value=\"\">#{l(:label_no_change_option)}</option>".html_safe + options_from_collection_for_select(@types, :id, :name)) %>
            </div>
          </div>
          {#if @available_statuses.any? }
            <div class="form--field">
              <label class="form--label" for='status_id'>{ WorkPackage.human_attribute_name(:status) %></label>
              <div class="form--field-container">
                { styled_select_tag('work_package[status_id]', "<option value=\"\">#{l(:label_no_change_option)}</option>".html_safe + options_from_collection_for_select(@available_statuses, :id, :name)) %>
              </div>
            </div>
          {:else}
            <div class="form--field">
              <label class="form--label" for='status_id'>{ WorkPackage.human_attribute_name(:status) %></label>
              <div class="form--field-container">
                { t('work_packages.move.no_common_statuses_exists') %>
              </div>
            </div>
          {/each}
          <div class="form--field">
            <label class="form--label" for='work_package_priority_id'>{ WorkPackage.human_attribute_name(:priority) %></label>
            <div class="form--field-container">
              { styled_select_tag('work_package[priority_id]', "<option value=\"\">#{l(:label_no_change_option)}</option>".html_safe + options_from_collection_for_select(IssuePriority.active, :id, :name)) %>
            </div>
          </div>
          <div class="form--field">
            <label class="form--label" for='work_package_assigned_to_id'>{ WorkPackage.human_attribute_name(:assigned_to) %></label>
            <div class="form--field-container">
              { styled_select_tag('work_package[assigned_to_id]', content_tag('option', l(:label_no_change_option), value: '') +
                                     content_tag('option', l(:label_nobody), value: 'none') +
                                     options_from_collection_for_select(@assignables, :id, :name)) %>
            </div>
          </div>
          <div class="form--field">
            <label class="form--label" for='work_package_responsible_id'>{ WorkPackage.human_attribute_name(:responsible) %></label>
            <div class="form--field-container">
              { styled_select_tag('work_package[responsible_id]', content_tag('option', l(:label_no_change_option), value: '') +
                                     content_tag('option', l(:label_nobody), value: 'none') +
                                     options_from_collection_for_select(@responsibles, :id, :name)) %>
            </div>
          </div>
          {#if @project }
            <div class="form--field">
              <label class="form--label" for='category_id'>{ WorkPackage.human_attribute_name(:category) %></label>
              <div class="form--field-container">
                { styled_select_tag('work_package[category_id]', content_tag('option', l(:label_no_change_option), value: '') +
                                    content_tag('option', l(:label_none), value: 'none') +
                                    options_from_collection_for_select(@project.categories, :id, :name)) %>
              </div>
            </div>
          {/each}
          <% #TODO: allow editing versions when multiple projects %>
          {#if @project }
            <div class="form--field">
              <label class="form--label" for='work_package_fixed_version_id'>{ WorkPackage.human_attribute_name(:fixed_version) %></label>
              <div class="form--field-container">
                { styled_select_tag('work_package[fixed_version_id]', content_tag('option', l(:label_no_change_option), value: '') +
                                       content_tag('option', l(:label_none), value: 'none') +
                                       version_options_for_select(@project.shared_versions.with_status_open.sort)) %>
              </div>
            </div>
          {/each}
          {#each @custom_fields.each  as custom_field}
            <div class="form--field">
              { blank_custom_field_label_tag('work_package', custom_field) %>
              <div class="form--field-container">
                { custom_field_tag_for_bulk_edit('work_package', custom_field, @project) %>
              </div>
            </div>
          {/each}
          { call_hook(:view_work_packages_bulk_edit_details_bottom, { work_packages: @work_packages }) %>
        </div>
        <div class="grid-content medium-6">
          {#if @project && User.current.allowed_to?(:manage_subtasks, @project) }
            <div class="form--field">
              <label class="form--label" for='work_package_parent_id'>{ WorkPackage.human_attribute_name(:parent) %></label>
              <div class="form--field-container">
                { styled_text_field_tag 'work_package[parent_id]', '', size: 10 %>
              </div>
            </div>
            <div id="parent_work_package_candidates" class="autocomplete"></div>
          {/each}
          <div class="form--field">
            <label class="form--label" for='work_package_start_date'>{ WorkPackage.human_attribute_name(:start_date) %></label>
            <div class="form--field-container">
              { styled_text_field_tag 'work_package[start_date]', '', size: 10, class: '-augmented-datepicker' %>
            </div>
          </div>
          <div class="form--field">
            <label class="form--label" for='work_package_due_date'>{ WorkPackage.human_attribute_name(:due_date) %></label>
            <div class="form--field-container">
              { styled_text_field_tag 'work_package[due_date]', '', size: 10, class: '-augmented-datepicker' %>
            </div>
          </div>
          {#if WorkPackage.use_field_for_done_ratio? }
            <div class="form--field">
              <label class="form--label" for='work_package_done_ratio'>{ WorkPackage.human_attribute_name(:done_ratio) %></label>
              <div class="form--field-container">
                { styled_select_tag 'work_package[done_ratio]', options_for_select([[l(:label_no_change_option), '']] + (0..10).to_a.collect {|r| ["#{r*10} %", r*10] }) %>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </fieldset>
    <fieldset class="form--fieldset">
      <legend class="form--fieldset-legend">{ Journal.human_attribute_name(:notes) %></legend>
      { label_tag 'notes', Journal.human_attribute_name(:notes), class: 'hidden-for-sighted' %>
      { styled_text_area_tag 'notes', @notes, class: 'wiki-edit', with_text_formatting: true %>
      <p>{ send_notification_option %></p>
    </fieldset>
  </section>
  <p>{ styled_button_tag l(:button_submit), class: '-highlight -with-icon icon-checkmark' %></p>
{/each}
 -->