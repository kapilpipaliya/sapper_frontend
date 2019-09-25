<script>

</script>

<style>
  
</style>

<!-- 

<% html_title l(:label_administration), l(:label_work_package_status_plural) -%>
{ toolbar title: l(:label_work_package_status_plural) do %>
  <li class="toolbar-item">
    { link_to new_status_path,
          { class: 'button -alt-highlight',
            aria: {label: t(:label_work_package_status_new)},
            title: t(:label_work_package_status_new)} do %>
      { op_icon('button--icon icon-add') %>
      <span class="button--text">{ t(:label_status) %></span>
    {/each}
  </li>
  {#if WorkPackage.use_status_for_done_ratio? }
    <li class="toolbar-item">
      { link_to update_work_package_done_ratio_statuses_path, class: 'button', method: :post, data: { confirm: l(:text_are_you_sure) } do %>
        { op_icon('button--icon icon-reload') %>
        <span class="button--text">{ l(:label_update_work_package_done_ratios) %></span>
      {/each}
    </li>
  {/each}
{/each}

{ cell ::Statuses::TableCell, @statuses %>
 -->