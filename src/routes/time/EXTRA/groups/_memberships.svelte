<script>

</script>

<style>
  
</style>
<!-- 

<% roles = Role.givable %>
<% projects = Project.active.order(Arel.sql('lft')) %>

<div class="grid-block">
  <div class="grid-content">
    {#if @group.memberships.any? }
      <div class="generic-table--container">
        <div class="generic-table--results-container">
          <table class="generic-table memberships">
            <colgroup>
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
                        { Project.model_name.human %>
                      </span>
                    </div>
                  </div>
                </th>
                <th>
                  <div class="generic-table--sort-header-outer">
                    <div class="generic-table--sort-header">
                      <span>
                        { l(:label_role_plural) %>
                      </span>
                    </div>
                  </div>
                </th>
                <th><div class="generic-table--empty-header"></div></th>
              </tr>
            </thead>
            <tbody>
              {#each @group.memberships.each  as membership}
                <% next if membership.new_record? %>
                  <tr id="member-{ membership.id %>" class="class">
                    <td class="project">{h membership.project %></td>
                    <td class="roles">
                      <span id="member-{ membership.id %>-roles">{h membership.roles.sort.collect(&:to_s).join(', ') %></span>
                      { labelled_tabular_form_for(:membership,
                                                    url: membership_of_group_path(@group, membership),
                                                    method: :put,
                                                    html: {
                                                      id: "member-#{membership.id}-roles-form",
                                                      style: 'display:none;'
                                                    }) do |f| %>
                        {#each roles.each  as role}
                            <label class="form--label-with-check-box">
                              { f.collection_check_box :role_ids,
                                                         role.id,
                                                         membership.roles.include?(role),
                                                         role.name,
                                                         no_label: true
                              %>
                              { role %>
                            </label>
                        {/each}
                        <p class="generic-table--cell-controls">
                          { submit_tag l(:button_change), class: 'button -highlight -small' %>
                          { link_to_function l(:button_cancel), "jQuery('#member-#{membership.id}-roles').show(); jQuery('#member-#{membership.id}-roles-form').hide();",
                                                                  class: 'button -small' %>
                        </p>
                      {/each}
                    </td>
                    <td class="buttons">
                      { link_to_function icon_wrapper('icon icon-edit', t(:button_edit)),
                                           "jQuery('#member-#{membership.id}-roles').hide(); jQuery('#member-#{membership.id}-roles-form').show();" do %>
                      {/each}
                      { link_to l(:button_remove), membership_of_group_path(@group, membership),
                                           method: :delete,
                                           class: 'icon icon-remove' %>
                    </td>
                  </tr>
            </tbody>
            {/each}
          </table>

        </div>
      </div>
    {:else}
      { no_results_box %>
    {/each}
  </div>
  <div class="grid-content">
    {#if projects.any? }
      { styled_form_tag(memberships_of_group_path(@group), method: :post) do %>
         <fieldset class="form--fieldset add-membership-form-fieldset">
            <legend class="form--fieldset-legend">{l(:label_project_new)%></legend>
            { label_tag "new_membership_project_id", l(:description_choose_project), class: "hidden-for-sighted" %>
            { styled_select_tag 'new_membership[project_id]', options_for_membership_project_select(@group, projects) %>
            <div class="form--field -vertical">
              { styled_label_tag nil, "#{l(:label_role_plural)}:" %>
              <div class="form--field-container -vertical">
                { labeled_check_box_tags 'new_membership[role_ids][]', roles %>
              </div>
            </div>
            <div>{ styled_button_tag l(:button_add), class: '-highlight -with-icon icon-checkmark' %></div>
          </fieldset>
        {/each}
      {/each}
    </div>
</div>
 -->