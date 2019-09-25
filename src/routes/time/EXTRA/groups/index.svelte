<script>

</script>

<style>
  
</style>

<!-- 

<% html_title l(:label_administration), l("label_group_plural") %>
{ toolbar title: l(:label_group_plural) do %>
  <li class="toolbar-item">
    { link_to new_group_path,
          { class: 'button -alt-highlight',
            aria: {label: t(:label_group_new)},
            title: t(:label_group_new)} do %>
      { op_icon('button--icon icon-add') %>
      <span class="button--text">{ t('activerecord.models.group') %></span>
    {/each}
  </li>
{/each}
{#if @groups.any? }
  <div class="generic-table--container">
    <div class="generic-table--results-container">
      <table class="generic-table">
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
                    { Group.model_name.human %>
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  <span>
                    {l(:label_user_plural)%>
                  </span>
                </div>
              </div>
            </th>
            <th><div class="generic-table--empty-header"></div></th>
          </tr>
        </thead>
        <tbody>
          {#each @groups.each  as group}
            <tr>
              <td>{ link_to h(group), action: 'edit', id: group %></td>
              <td>{ group.users.size %></td>
              <td class="buttons">
                { link_to '', group,
                                data: { confirm: l(:text_are_you_sure) },
                                method: :delete,
                                class: 'icon icon-delete',
                                title: t(:button_delete) %>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>

    </div>
  </div>
{:else}
  { no_results_box(action_url:     new_group_path,
                     display_action: true) %>
{/each}
 -->