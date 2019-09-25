<script>
// header_tags = { auto_discovery_link_tag(:atom, params.merge(format: 'atom', from: nil, key: User.current.rss_key)) 
/*
sidebar =
  { form_tag({}, method: :get) do %>
    <fieldset class="form--fieldset">
      <legend class="form--fieldset-legend">{ l(:description_filter) %></legend>
    <p>
      {#each @activity.event_types.each  as t}
        { check_box_tag "show_#{t}", 1, @activity.scope.include?(t) %>
        <label for="show_{t%>">{l("label_#{t.singularize}_plural")%></label>
        <br />
      {/each}
    </p>
    {#if @project && @project.descendants.active.any? }
      { hidden_field_tag 'with_subprojects', 0 %>
      <p><label>{ check_box_tag 'with_subprojects', 1, @with_subprojects %> {l(:label_subproject_plural)%></label></p>
    {/each}
    { hidden_field_tag('user_id', params[:user_id]) unless params[:user_id].blank? %>
    { hidden_field_tag('apply', true) %>
    <p>{ submit_tag l(:button_apply), class: 'button -small -highlight', name: nil %></p>
    </fieldset>
  {/each}
{/each}
*/

</script>

<style>
  
</style>
<!-- 


{ call_hook :activity_index_head %>

{ toolbar title: (@author.nil? ? l(:label_activity) : l(:label_user_activity, link_to_user(@author))).html_safe,
            subtitle: l(:label_date_from_to, start: format_date(@date_to - @days), end: format_date(@date_to-1))
%>

<div id="activity">
  {#each @events_by_day.keys.sort.reverse.each  as day}
    <h3>{ format_activity_day(day) %></h3>
    <ul class="generic-list">
      <% @events_by_day[day].sort {|x,y| y.event_datetime <=> x.event_datetime }.each do |e| -%>
        <li class="{ e.event_type %> { User.current.logged? && e.respond_to?(:event_author) && User.current == e.event_author ? 'me' : nil %>">
          <div class="title">
            <% event_type = e.event_type.start_with?('meeting') ? 'meetings' : e.event_type %>
            <% event_type = e.event_type == 'cost_object' ? 'budget' : event_type %>
            { icon_wrapper("icon-context icon-#{event_type}", e.event_name) %>
            <span class="time">{ format_time(e.event_datetime.to_time, false) %></span>
            {#if (@project.nil? || @project != e.project) && e.project }
              { content_tag('span', link_to(e.project.name, e.project), class: 'project') %>
              <span> - </span>
            {/each}
            { link_to format_activity_title(e.event_title), e.event_path%>
          </div>
          <div class="description">{ format_activity_description(e.event_description) %></div>
          <div class="author">
            { avatar(e.event_author, {class: 'avatar-mini'}) if e.respond_to?(:event_author) %>
            { link_to_user(e.event_author) if e.respond_to?(:event_author) %>
          </div>
        </li>
      <% end -%>
    </ul>
  <% end -%>
</div>

{#if @events_by_day.empty? }
  { no_results_box %>
  <br>
{/each}

<div style="float:left;">
  { link_to_content_update(l(:label_previous),
                             { from: (@date_to - @days - 1) },
                             {title: l(:label_date_from_to, start: format_date(@date_to - 2*@days), end: format_date(@date_to - @days - 1)),
                             class: 'navigate-left'}) %>
</div>
<div style="float:right;">
  { link_to_content_update(l(:label_next),
                             { from: (@date_to + @days - 1) },
                             {title: l(:label_date_from_to, start: format_date(@date_to), end: format_date(@date_to + @days - 1)),
                             class: 'navigate-right'}) unless @date_to >= Date.today %>
</div>
&nbsp;
{ other_formats_links do |f| %>
  { f.link_to 'Atom', url: { from: nil }, key: User.current.rss_key %>
{/each}

<% html_title(l(:label_activity), @author) -%>
 -->