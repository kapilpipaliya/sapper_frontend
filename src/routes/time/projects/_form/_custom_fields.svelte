<script>

</script>

<style>
  
</style>
<!-- 


<fieldset class="form--fieldset -with-control" id="project_issue_custom_fields">
  <legend class="form--fieldset-legend">{t(:label_enabled_project_custom_fields)%></legend>
  <div class="form--fieldset-control">
    <span class="form--fieldset-control-container">
      ({ check_all_links 'project_issue_custom_fields' %>)
    </span>
  </div>


  <div class="generic-table--container">
    <div class="generic-table--results-container">
      <table class="generic-table">
        <colgroup>
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
                      { CustomField.model_name.human %>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      { t('custom_fields.enabled_in_project') %>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      { t('custom_fields.contained_in_type') %>
                    </span>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <% all_custom_fields = @project.all_work_package_custom_fields.pluck(:id) %>
            {#each work_package_custom_fields.includes(:types).each  as custom_field}
            <%
              options = {
                lang: custom_field.name_locale,
                label_options: { class: 'hidden-for-sighted' }
              }
            %>
              <tr class="custom-field-{ custom_field.id %>">
                <td>
                  {#if current_user.admin? }
                  { link_to custom_field.name, edit_custom_field_path(custom_field.id) %>
                  {:else}
                  { custom_field.name %>
                  {/each}
                </td>
                <td>
                  {#if custom_field.is_for_all? }
                    { t('custom_fields.is_enabled_globally') %>
                  {:else}
                  { form.collection_check_box :work_package_custom_field_ids,
                                                custom_field.id,
                                                all_custom_fields.include?(custom_field.id),
                                                custom_field.name,
                                                options %>
                  {/each}
                </td>
                <td>
                  {#if current_user.admin? }
                    <% type_links = custom_field.types.map { |t| link_to(t.name, edit_type_tab_path(id: t.id, tab: 'form_configuration')) } %>
                    { safe_join type_links, ', '.html_safe %>
                  {:else}
                    { custom_field.types.map(&:name).join(', ') %>
                  {/each}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
    </div>
  </div>
</fieldset>
 -->