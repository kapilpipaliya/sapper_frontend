<script>

</script>

<style>
  
</style>

<!-- 
<% html_title t(:label_administration), t(:label_user_plural) -%>
<%
  user_limit = begin
    token = OpenProject::Enterprise.token
    limit = token && Hash(token.restrictions)[:active_user_count]

    limit if limit && limit > 0
  end
%>
<% users_info = user_limit && content_tag(:div) do %>
  { t(:label_enterprise_active_users, current: User.active.count, limit: user_limit) %>
  &nbsp;
  <a href="{ OpenProject::Enterprise.upgrade_path %>" class="display-inline button -tiny -highlight" title="{ t(:title_enterprise_upgrade) %>">{ t(:button_upgrade) %></a>
{/each}
{ toolbar title: t(:label_user_plural), title_class: 'no-padding-bottom', subtitle: users_info do %>
  <li class="toolbar-item">
    { link_to new_user_path,
        { class: 'button -alt-highlight',
          aria: {label: t(:label_user_new)},
          title: t(:label_user_new)} do %>
      { op_icon('button--icon icon-add') %>
      <span class="button--text">{ t('activerecord.models.user') %></span>
    {/each}
  </li>
  { call_hook(:user_admin_action_menu) %>
{/each}

{ cell Users::UserFilterCell, params, groups: @groups, status: @status %>
&nbsp;
{ cell Users::TableCell, @users, project: @project, current_user: current_user %>
 -->