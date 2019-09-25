<script>

</script>

<style>
  
</style>
<!-- 


{ javascript_include_tag 'types_checkboxes' %>

{ render_flash_message :notice,
                         l(:notice_automatic_set_of_standard_type),
                         style: "display:none;",
                         id: "types_flash_notice",
                         class: "ignored-by-flash-activation" %>

<fieldset class="form--fieldset" id="project_types">
  <legend class="form--fieldset-legend">
    { t(:label_available_project_work_package_types) %>
  </legend>
  <div class="form--fieldset-control">
    <span class="form--fieldset-control-container">
      ({ check_all_links 'types-form' %>)
    </span>
  </div>
  <div class="generic-table--container">
    <div class="generic-table--results-container">
      <table class="generic-table types" id="types-form">
        <colgroup>
          <col highlight-col>
          <col highlight-col>
          <col highlight-col>
          <col highlight-col>
          <col highlight-col>
        </colgroup>
        <thead>
          <tr>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  <span>
                    { Type.human_attribute_name(:active) %>
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  <span>
                    { Type.human_attribute_name(:name) %>
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  <span>
                    { Type.human_attribute_name(:is_in_roadmap) %>
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
          </tr>
        </thead>
        <tbody>
          <% projects_types_id = project.types.pluck(:id) %>
          {#each Type.includes(:color).each  as type}
            <tr>
              <td class='center'>
                <% type_id = "project_planning_element_type_ids_#{type.id}" %>
                { label_tag type_id, l('timelines.enable_type_in_project', type: type.name), class: 'hidden-for-sighted' %>
                { check_box_tag "project[type_ids][]",
                                  type.id,
                                  projects_types_id.include?(type.id),
                                  id: type_id,
                                  :'data-standard' => type.is_standard %>
                { hidden_field_tag 'project[type_ids][]', '', :'data-for' => type_id %>
              </td>
              <td>
                { icon_for_type(type) %>
                {h type.name %>
              </td>
              <td class='center'>
                { checked_image(type.is_in_roadmap) %>
              </td>
              <td class='center'>
                { checked_image(type.is_milestone) %>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
      
    </div>
  </div>
  {#if withControlls == true }
    <div class="generic-table--action-buttons">
      { styled_button_tag l(:button_save), class: '-highlight -with-icon icon-checkmark' %>
    </div>
  {/each}
</fieldset>
 -->