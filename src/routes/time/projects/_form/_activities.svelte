<script>

</script>

<style>
  
</style>
<!-- 


<fieldset class="form--fieldset" id="project_types">
  <legend class="form--fieldset-legend">{l(:label_enabled_project_activities)%></legend>

  <div class="generic-table--container">
    <div class="generic-table--results-container">
      <table class="generic-table">
        <colgroup>
          <col highlight-col>
          <col highlight-col>
          <col highlight-col>
          {#each TimeEntryActivity.new.available_custom_fields.each  as value}
              <col highlight-col>
          {/each}
          </colgroup>
          <thead>
            <tr>
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      { Enumeration.human_attribute_name(:active) %>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      { Enumeration.human_attribute_name(:name) %>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      { l(:enumeration_system_activity) %>
                    </span>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          {#each @project.activities(true).each  as enumeration}
           { fields_for "enumerations[#{enumeration.id}]", enumeration do |ff| %>
              <tr>
                <td>
                  { label_tag "enumerations_#{enumeration.id}_active", "#{h(enumeration.name)} #{l(:description_active)}", class: "hidden-for-sighted" %>
                  { ff.check_box :active %>
                </td>
                <td>
                  { ff.hidden_field :parent_id, value: enumeration.id unless enumeration.project %>
                  { h(enumeration) %>
                </td>
                <td>{ checked_image !enumeration.project %></td>
              </tr>
            {/each}
          {/each}
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