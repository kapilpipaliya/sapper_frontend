<script>

</script>

<style>
  
</style>

<!-- 
<% html_title l(:label_administration), l("label_role_plural") %>
{ toolbar title: Role.model_name.human(count: 2) do %>
  <li class="toolbar-item">
    { link_to({ action: 'new'},
          { class: 'button -alt-highlight',
            aria: {label: t(:label_role_new)},
            title: t(:label_role_new)}) do %>
      { op_icon('button--icon icon-add') %>
      <span class="button--text">{ Role.model_name.human %></span>
    {/each}
  </li>
{/each}

<div class="generic-table--container">
  <div class="generic-table--results-container">
    <table class="generic-table">
      <colgroup>
        <col highlight-col>
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
                  { Role.model_name.human %>
                </span>
              </div>
            </div>
          </th>
          <th>
            <div class="generic-table--sort-header-outer">
              <div class="generic-table--sort-header">
                <span>
                  {l(:label_global)%>
                </span>
              </div>
            </div>
          </th>
          <th>
            <div class="generic-table--sort-header-outer">
              <div class="generic-table--sort-header">
                <span>
                  {l(:button_sort)%>
                </span>
              </div>
            </div>
          </th>
          <th><div class="generic-table--empty-header"></div></th>
        </tr>
      </thead>
      <tbody>
        <% for role in @roles %>
          <tr>
            <td>
              { content_tag(role.builtin? ? 'em' : 'span', link_to(role.name, :action => 'edit', :id => role)) %>
            </td>
            <td>
              { icon_wrapper('icon-context icon-checkmark', I18n.t(:general_text_Yes)) if role.is_a?(GlobalRole) %>
            </td>
            <td>
              <% unless role.builtin? %>
                { reorder_links('role', {:action => 'update', :id => role}, :method => :put) %>
              {/each}
            </td>
            <td class="buttons">
              { link_to('', role_path(role),
                                       method: :delete,
                                       data: { confirm: l(:text_are_you_sure) },
                                       class: 'icon icon-delete',
                                       title: t(:button_delete)) unless role.builtin? %>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>

  </div>
</div>

{ pagination_links_full @roles %>

<p>{ link_to l(:label_permissions_report), :action => 'report' %></p>
 -->