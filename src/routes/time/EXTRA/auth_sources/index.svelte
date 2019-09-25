<script>

</script>

<style>
  
</style>
<!-- 


<% html_title l(:label_administration), l(:label_auth_source_plural) %>
{ toolbar title: l(:label_auth_source_plural) do %>
  <li class="toolbar-item">
    { link_to({ action: 'new' },
          { class: 'button -alt-highlight',
            aria: {label: t(:label_auth_source_new)},
            title: t(:label_auth_source_new)}) do %>
      { op_icon('button--icon icon-add') %>
      <span class="button--text">{ l(:label_auth_source) %></span>
    {/each}
  </li>
{/each}

{#if @auth_sources.any? }
  <div class="generic-table--container">
    <div class="generic-table--results-container">
      <table class="generic-table">
        <colgroup>
          <col highlight-col>
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
                    { AuthSource.human_attribute_name(:name) %>
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  <span>
                    { AuthSource.human_attribute_name(:type) %>
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  <span>
                    { AuthSource.human_attribute_name(:host) %>
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  <span>
                    { l(:label_user_plural)%>
                  </span>
                </div>
              </div>
            </th>
            <th><div class="generic-table--empty-header"></div></th>
          </tr>
        </thead>
        <tbody>
          <% for source in @auth_sources %>
            <tr>
              <td>{ link_to source.name, action: 'edit', id: source %></td>
              <td>{ source.auth_method_name %></td>
              <td>{ source.host %></td>
              <td>{ source.users.count %></td>
              <td class="buttons">
                { link_to l(:button_test), { action: 'test_connection', id: source } %>
                { link_to '', { action: 'destroy', id: source },
                                           method: :delete,
                                           data: { confirm: l(:text_are_you_sure) },
                                           class: 'icon icon-delete',
                                           disabled: source.users.any?,
                                           title: t(:button_delete) %>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>

    </div>
  </div>
  { pagination_links_full @auth_sources %>
{:else}
  { no_results_box(action_url: { action: 'new' }, display_action: true) %>
{/each}
 -->