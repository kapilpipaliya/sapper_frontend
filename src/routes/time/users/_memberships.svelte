<script>

</script>

<style>
  
</style>
<!-- 

<% roles = Role.givable %>
<% projects = Project.active.order(Arel.sql('lft')) %>

<div class="grid-block">
  <div class="grid-content">
  {#if @user.memberships.any? }
    <div class="generic-table--container">
      <div class="generic-table--results-container">
        <table class="generic-table memberships">
          <colgroup>
            <col highlight-col>
            <col highlight-col>
            { call_hook(:view_users_memberships_table_colgroup, user: @user )%>
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
              { call_hook(:view_users_memberships_table_header, user: @user )%>
              <th><div class="generic-table--empty-header"></div></th>
            </tr>
          </thead>
          <tbody>
            {#each @user.memberships.each  as membership}
              <% next if membership.new_record? %>
                <tr id="member-{ membership.id %>" class="member">
                  <td class="project">
                    { link_to_project membership.project %>
                  </td>
                  <td class="roles">
                    <span id="member-{ membership.id %>-roles"
                          class="member-{ membership.id %>--edit-toggle-item">
                      {h membership.roles.sort.collect(&:to_s).join(', ') %>
                    </span>
                    { labelled_tabular_form_for(:membership,
                                                  url: user_membership_path(user_id: @user, id: membership),
                                                  html: { id: "member-#{membership.id}-roles-form",
                                                          class: "member-#{membership.id}--edit-toggle-item",
                                                          style: 'display:none;'},
                                                  method: :patch) do |f| %>
                      <div>
                        {#each roles.each  as role}
                            <label class="form--label-with-check-box">
                            { f.collection_check_box :role_ids,
                                                       role.id,
                                                       membership.roles.include?(role),
                                                       role.name,
                                                       disabled: membership.member_roles.detect {|mr| mr.role_id == role.id && !mr.inherited_from.nil?},
                                                       no_label: true,
                                                       id: nil
                            %>
                            { role %>
                            </label>
                        {/each}
                      </div>
                      <p>{ submit_tag l(:button_change), class: 'user-memberships--edit-submit-button button -highlight -small' %>
                        { link_to_function l(:button_cancel),
                                             "jQuery('.member-#{membership.id}--edit-toggle-item').toggle();",
                  class: 'button -small' %></p>
                    {/each}
                  </td>
                  { call_hook(:view_users_memberships_table_row, user: @user, membership: membership, roles: roles, projects: projects )%>
                  <td class="buttons">
                    { link_to_function icon_wrapper('icon icon-edit', t(:button_edit)),
                                         "jQuery('.member-#{membership.id}--edit-toggle-item').toggle();",
                                         class: "member-#{membership.id}--edit-toggle-item user-memberships--edit-button",
                                         title: t(:button_edit) %>
                    { link_to(icon_wrapper('icon icon-remove', t(:button_remove)),
                                user_membership_path(user_id: @user, id: membership),
                                method: :delete,
                                title: t(:button_remove)) if membership.deletable? %>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>

        </div>
      </div>
    {:else}
      { no_results_box %>
    {/each}
  </div>
  <div class="grid-content">
    {#if projects.any? }
      { labelled_tabular_form_for(:membership,
                                    url: user_memberships_path(user_id: @user),
                                    html: {id: "new_project_membership"}) do %>
        <fieldset class="form--fieldset">
          <legend class="form--fieldset-legend">{l(:label_project_new)%></legend>
          { styled_select_tag 'membership[project_id]', options_for_membership_project_select(@user, projects) %>
          <div class="form--field -vertical">
            { styled_label_tag nil, "#{l(:label_role_plural)}:" %>
            <div class="form--field-container -vertical">
              { labeled_check_box_tags 'membership[role_ids][]', roles %>
            </div>
          </div>
          <div>{ styled_button_tag l(:button_add), class: '-highlight -with-icon icon-checkmark' %></div>
        </fieldset>
      {/each}
    {/each}
  </div>
</div>
 -->