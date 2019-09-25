<script>
      // let header_tags = auto_discovery_link_tag(:atom, controller: '/activities', action: 'index', user_id: @user, format: :atom, key: User.current.rss_key)
</script>

<style>
  
</style>


<!-- 
<% content_for :header_tags do %>
  { call_hook :users_show_head %>
{/each}
<% html_title l(:label_administration), l(:label_user_plural) -%>
{ toolbar title: "#{avatar @user} #{h(@user.name)}".html_safe do %>
  {#if User.current.admin? }
    <li class="toolbar-item">
      { link_to edit_user_path(@user), class: 'button', accesskey: accesskey(:edit) do %>
        { op_icon('button--icon icon-edit') %>
        <span class="button--text">{ l(:button_edit) %></span>
      {/each}
    </li>
  {/each}
{/each}

<div class="grid-block medium-up-2">
  <div class="grid-content">
    { call_hook :view_account_left_top, user: @user %>
    <ul>
      <% unless @user.pref.hide_mail %>
        <li>{ User.human_attribute_name(:mail) %>: { mail_to(h(escape_javascript(@user.mail)), nil, encode: 'javascript') %></li>
      {/each}
      {#each @user.visible_custom_field_values.each  as custom_value}
        {#if !custom_value.value.blank? }
          <li>{h custom_value.custom_field.name%>: {h show_value(custom_value) %></li>
        {/each}
      {/each}
    </ul>

    { call_hook :view_account_left_middle, user: @user %>

    <% unless @memberships.empty? %>
      <h3>{l(:label_project_plural)%></h3>
      <ul>
        <% for membership in @memberships %>
          <li>
            { link_to_project(membership.project) %>
            ({h membership.roles.sort.collect(&:to_s).join(', ') %>, { format_date(membership.created_on) %>)
          </li>
        {/each}
      </ul>
    {/each}
    { call_hook :view_account_left_bottom, user: @user %>
  </div>

  <div class="grid-content">
    <% unless @events_by_day.empty? %>
      <h3>
        { link_to l(:label_activity), controller: '/activities', action: 'index', id: nil, user_id: @user, from: @events_by_day.keys.first %>
      </h3>
      <p>
        {l(:label_reported_work_packages)%>: { @user.reported_work_package_count %>
      </p>
      <div id="activity">
        {#each @events_by_day.keys.sort.reverse.each  as day}
          <h4>{ format_activity_day(day) %></h4>
          <ul class="generic-list">
            <% @events_by_day[day].sort {|x,y| y.event_datetime <=> x.event_datetime }.each do |e| -%>
              <li class="{ e.event_type %>">
                <div class="title">
                  <% event_type = e.event_type == 'meeting' ? 'meetings' : e.event_type %>
                  <% event_type = e.event_type == 'cost_object' ? 'budget' : event_type %>
                  { icon_wrapper("icon-context icon-#{event_type}", e.event_name) %>
                  <span class="time">{ format_time(e.event_datetime, false) %></span>
                  { content_tag('span', h(e.project), class: 'project') %>
                  { link_to format_activity_title(e.event_title), e.event_url %>
                </div>
                <div class="description">
                  { format_activity_description(e.event_description) %>
                </div>
              </li>
            <% end -%>
          </ul>
        <% end -%>
      </div>

      { other_formats_links do |f| %>
        { f.link_to 'Atom', url: {controller: '/activities', action: 'index', id: nil, user_id: @user, key: User.current.rss_key} %>
      {/each}


    {/each}
    { call_hook :view_account_right_bottom, user: @user %>
  </div>
</div>

<% html_title h(@user.name) %>
 -->