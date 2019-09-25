<script>

</script>

<style>
  
</style>

<!-- 
{ breadcrumb_toolbar @group.name do %>
  {#if current_user.admin? }
    <li class="toolbar-item">
      { link_to edit_group_path(@group),
                  class: 'button' do %>
        { op_icon('button--icon icon-edit') %>
        <span class="button--text">{ t(:button_edit) %></span>
      {/each}
    </li>
    <li class="toolbar-item">
      { link_to @group,
                  data: { confirm: t(:text_are_you_sure) },
                  class: 'button -danger',
                  method: :delete do %>
          { op_icon('button--icon icon-delete') %>
          <span class="button--text">{ t(:button_delete) %></span>
      {/each}
    </li>
  {/each}
{/each}
<ul>
  {#each @group.users.each  as user}
    <li>{h user %></li>
  {/each}
</ul>
 -->