<script>

</script>

<style>
  
</style>


<!-- 
{ toolbar title: @version.name do %>
    {#if authorize_for(:versions, :edit) }
        <li class="toolbar-item">
          { link_to(edit_version_path(@version), class: 'button') do %>
              { op_icon('button--icon icon-edit') %>
              <span class="button--text">{ l(:button_edit) %></span>
          {/each}
        </li>
    {/each}
    {#if authorize_for(:wiki, :edit) && !(@version.wiki_page_title.blank? || @version.project.wiki.nil?) }
        <li class="toolbar-item">
          { link_to({controller: '/wiki', action: 'edit',
                       project_id: @version.project,
                       id: @version.wiki_page_title},
                      class: 'button') do %>
              { op_icon('button--icon icon-edit') %>
              <span class="button--text">{ l(:button_edit_associated_wikipage, page_title: truncate(@version.wiki_page_title, length: 50, separator: ' ')) %></span>
          {/each}
        </li>
    {/each}
    { call_hook(:view_versions_show_contextual, { version: @version, project: @project }) %>
{/each}

<div class="widget-boxes -grid">
  <div class="widget-box -thin">
    { render partial: 'versions/overview', locals: { version: @version } %>
  </div>

  {#if @version.estimated_hours > 0 || User.current.allowed_to?(:view_time_entries, @project) }
      <div class="widget-box -thin">
        <fieldset class="form--fieldset">
          <legend class="form--fieldset-legend">{ l(:label_time_tracking) %></legend>
          <table>
            <tr>
              <td width="130px" align="right">{ Version.human_attribute_name(:estimated_hours) %></td>
              <td width="240px" class="total-hours" align="right">{ html_hours(l_hours(@version.estimated_hours)) %></td>
            </tr>
            {#if User.current.allowed_to?(:view_time_entries, @project) }
                <tr>
                  <td width="130px" align="right">{ l(:label_spent_time) %></td>
                  <td width="240px" class="total-hours" align="right">{ html_hours(l_hours(@version.spent_hours)) %></td>
                </tr>
            {/each}
          </table>
        </fieldset>
      </div>
  {/each}

  {#if @version.wiki_page }
      <div class="widget-box -thin -wider">
        { render(partial: "wiki/content", locals: {content: @version.wiki_page.content}) if @version.wiki_page %>
      </div>
  {/each}

  {#if @issues.present? }
      <div class="widget-box -thin -wider">
        {#if @issues.present? }
            <fieldset class="form--fieldset related_issues"><legend class="form--fieldset-legend">{ l(:label_related_work_packages) %></legend>
              <ul>
                <% @issues.each do |issue| -%>
                    <li>{ link_to_work_package(issue, project: issue.project != @version.project) %></li>
                <% end -%>
              </ul>
            </fieldset>
        {/each}
      </div>
  {/each}

  {#if @version.fixed_issues.count > 0 }
      <div class="widget-box -thin -wider">
        <wp-overview-graph
          additional-filter='{ "version": { "operator": "=", "values": [{ @version.id %>] }}'>
        </wp-overview-graph>
      </div>
  {/each}
</div>
{ call_hook :view_versions_show_bottom, version: @version %>

<% html_title h(@version.name) %>
 -->