<script>

</script>

<style>
  
</style>


<!-- 
<% html_title @copy ? l(:button_copy) : l(:button_move), l('activerecord.models.work_package') %>

<h2>{ @copy ? l(:button_copy) : l(:button_move) %></h2>
<ul>
  <% @work_packages.each do |work_package| -%>
    <li>
      { link_to_work_package work_package %>
      <% descendant_count = work_package.descendants.size %>
      {#if descendant_count > 0 }
        <span class="contextual-info -small">(+ { t('work_packages.x_descendants', count: descendant_count) %>)</span>
      {/each}
    </li>
  <% end -%>
</ul>

{ styled_form_tag({action: 'create'},
                    id: 'move_form',
                    data: { 'refresh-url': url_for(action: 'new'), 'input-selector': '#new_project_id' },
                    class: '-wide-labels augment--refresh-on-form-changes') do %>
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
                <label class="form--label" for="new_project_id">{ WorkPackage.human_attribute_name(:project) %>:</label>
                  <div class="form--field-container">
                    { styled_select_tag "new_project_id",
                                          project_tree_options_for_select(@allowed_projects, selected: @target_project),
                                          class: 'remote-field--input' %>
                  </div>
              </div>
            <div class="form--field">
              <label class="form--label" for="new_type_id">{ WorkPackage.human_attribute_name(:type) %>:</label>
              <div class="form--field-container">
                { styled_select_tag("new_type_id",
                       content_tag('option', l(:label_no_change_option), value: '') +
                       options_from_collection_for_select(@types, "id", "name")) %>
              </div>
            </div>
            <div class="form--field">
              <label class="form--label" for='status_id'>{ WorkPackage.human_attribute_name(:status) %></label>
              <div class="form--field-container">
                { styled_select_tag('status_id',
                       content_tag('option', l(:label_no_change_option), value: '') +
                       options_from_collection_for_select(@available_statuses, :id, :name)) %>
              </div>
            </div>
            <div class="form--field">
              <label class="form--label" for='priority_id'>{ WorkPackage.human_attribute_name(:priority) %></label>
              <div class="form--field-container">
                { styled_select_tag('priority_id',
                       content_tag('option', l(:label_no_change_option), value: '') +
                       options_from_collection_for_select(IssuePriority.active, :id, :name)) %>
              </div>
            </div>
            <div class="form--field">
              <label class="form--label" for='assigned_to_id'>{ WorkPackage.human_attribute_name(:assigned_to) %></label>
              <div class="form--field-container">
                { styled_select_tag('assigned_to_id',
                       content_tag('option', l(:label_no_change_option), value: '') +
                       content_tag('option', l(:label_nobody), value: 'none') +
                       options_from_collection_for_select(@target_project.possible_assignees, :id, :name)) %>
              </div>
            </div>
            <div class="form--field">
              <label class="form--label" for='responsible_id'>{ WorkPackage.human_attribute_name(:responsible) %></label>
              <div class="form--field-container">
                { styled_select_tag('responsible_id',
                       content_tag('option', l(:label_no_change_option), value: '') +
                       content_tag('option', l(:label_nobody), value: 'none') +
                       options_from_collection_for_select(@target_project.possible_responsibles, :id, :name)) %>
              </div>
            </div>
          </div>
          <div class="grid-content medium-6">
            <div class="form--field">
              <label class="form--label" for='start_date'>{ WorkPackage.human_attribute_name(:start_date) %></label>
              <div class="form--field-container">
                { styled_text_field_tag 'start_date', '', size: 10, class: '-augmented-datepicker' %>
              </div>
            </div>
            <div class="form--field">
              <label class="form--label" for='due_date'>{ WorkPackage.human_attribute_name(:due_date) %></label>
              <div class="form--field-container">
                { styled_text_field_tag 'due_date', '', size: 10, class: '-augmented-datepicker' %>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset class="form--fieldset">
        <legend class="form--fieldset-legend">{ Journal.human_attribute_name(:notes) %></legend>
        { label_tag 'notes', Journal.human_attribute_name(:notes), class: 'hidden-for-sighted' %>
        { styled_text_area_tag 'notes', @notes, cols: 60, rows: 10, class: 'wiki-edit', with_text_formatting: true %>
      </fieldset>
      { call_hook(:view_work_packages_move_bottom, work_packages: @work_packages, target_project: @target_project, copy: !!@copy) %>
    </section>
  {#if @copy }
    { hidden_field_tag("copy") %>
    { styled_submit_tag l(:button_copy), class: '-highlight' %>
    { styled_submit_tag l(:button_copy_and_follow), name: 'follow', class: '-highlight' %>
  {:else}
    { styled_submit_tag l(:button_move), class: '-highlight' %>
    { styled_submit_tag l(:button_move_and_follow), name: 'follow', class: '-highlight' %>
  {/each}
{/each}
<% content_for :header_tags do %>
  { robot_exclusion_tag %>
{/each}
 -->