<script>

</script>

<style>
  
</style>

<!-- 
{ breadcrumb_toolbar l(:label_permissions_report) %>
<% local_assigns[:additional_breadcrumb] = l(:label_permissions_report) %>
<% html_title l(:label_administration), l(:label_permissions_report) %>

{#each (@calls || []).select(&:failure?).each  as call}
  { error_messages_for_contract(call.result, call.errors) %>
{/each}

{ form_tag(roles_path, method: :put, id: 'permissions_form') do %>
  { hidden_field_tag 'permissions[0]', '', id: nil %>

  <% perms_by_module = @permissions.group_by {|p| p.project_module.to_s} %>
  {#each perms_by_module.keys.sort.each  as mod}
    <% module_name = mod.blank? ? "form--" + I18n.t('attributes.project') : "form--" + l_or_humanize(mod, prefix: 'project_module_').gsub(' ','_') %>
    <fieldset class="form--fieldset -collapsible" id= "{ module_name %>">
      <legend class="form--fieldset-legend" >
        { mod.blank? ? I18n.t('attributes.project') : l_or_humanize(mod, prefix: 'project_module_') %>
      </legend>
      <div class="form--fieldset-control">
        <span class="form--fieldset-control-container">
          ({ check_all_links module_name %>)
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
            </colgroup>
            <thead>
              <tr>
                <th>
                  <div class="generic-table--sort-header-outer">
                    <div class="generic-table--sort-header">
                      <span>
                        {l(:label_permissions)%>
                      </span>
                    </div>
                  </div>
                </th>
                {#each @roles.each  as role}
                  <th>
                    <div class="generic-table--sort-header-outer">
                      <div class="generic-table--sort-header">
                        <span>
                          { content_tag(role.builtin? ? 'em' : 'span', h(role.name)) %>
                          { link_to_function(icon_wrapper('icon-context icon-checkmark',"#{l(:button_check_all)}/#{l(:button_uncheck_all)}"), "toggleCheckboxesBySelector('input.role-#{role.id}')",
                                                                        class: 'no-decoration-on-hover',
                                                                        title: "#{l(:button_check_all)}/#{l(:button_uncheck_all)}") %>
                        </span>
                      </div>
                    </div>
                  </th>
                {/each}
              </tr>
            </thead>
            <tbody>
              {#each perms_by_module[mod].each  as permission}
                <tr class="permission-{ permission.name %>">
                  <td>
                    { link_to_function(icon_wrapper('icon-context icon-checkmark',"#{l(:button_check_all)}/#{l(:button_uncheck_all)}"), "toggleCheckboxesBySelector('.permission-#{permission.name} input')",
                                                                    class: 'no-decoration-on-hover',
                                                                    title: "#{l(:button_check_all)}/#{l(:button_uncheck_all)}") %>
                    { l_or_humanize(permission.name, prefix: 'permission_') %>
                  </td>
                  {#each @roles.each  as role}
                    <td>
                      {#if setable_permissions(role).include? permission }
                        { check_box_tag "permissions[#{role.id}][]", permission.name, (role.permissions.include? permission.name), id: nil, class: "role-#{role.id}" %>
                      {/each}
                    </td>
                  {/each}
                </tr>
              {/each}
            </tbody>
          </table>

        </div>
      </div>
    </fieldset>
  {/each}

  <p>{ styled_button_tag l(:button_save), class: '-highlight -with-icon icon-checkmark' %></p>
{/each}
 -->