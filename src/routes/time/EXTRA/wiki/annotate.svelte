<script>

</script>

<style>
  
</style>
<!-- 


<% html_title t(:project_module_wiki), t(:label_history), t(:text_comment_wiki_page, page: @page.title)  %>
<% breadcrumb_paths(*(@page.ancestors.reverse.collect { |parent| link_to h(parent.breadcrumb_title), {id: parent, project_id: parent.project}} + [h(@page.breadcrumb_title)] )) %>

{ toolbar title: h(@page.title) do %>
  <li class="toolbar-item">
    { link_to({action: 'edit', id: @page}, class: 'button', accesskey: accesskey(:edit)) do %>
      { op_icon('button--icon icon-edit') %>
      <span class="button--text">{ t(:button_edit) %></span>
    {/each}
  </li>
  <li class="toolbar-item">
    { link_to({action: 'history', id: @page}, class: 'button') do %>
      { op_icon('button--icon icon-wiki') %>
      <span class="button--text">{ t(:label_history) %></span>
    {/each}
  </li>
{/each}

<p>
  { Version.model_name.human %> { link_to h(@annotate.content.version), action: 'show', id: @page, version: @annotate.content.version %>
  <em>({ h(@annotate.content.journable.author ? @annotate.content.journable.author.name : t(:label_user_anonymous)) %>, { format_time(@annotate.content.journable.updated_on) %>)</em>
</p>
<% colors = Hash.new {|k,v| k[v] = (k.size % 12) } %>
<table class="filecontent annotate">
  <tbody>
    <% line_num = 1 %>
    <% @annotate.lines.each do |line| -%>
      <tr class="bloc-{ colors[line[0]] %>">
        <th class="line-num">{ line_num %></th>
        <td class="revision">{ link_to line[0], controller: '/wiki', action: 'show', project_id: @project, id: @page, version: line[0] %></td>
        <td class="author">{ h(line[1]) %></td>
        <td class="line-code">
          <pre>{h line[2] %></pre>
        </td>
      </tr>
      <% line_num += 1 %>
    <% end -%>
  </tbody>
</table>
 -->