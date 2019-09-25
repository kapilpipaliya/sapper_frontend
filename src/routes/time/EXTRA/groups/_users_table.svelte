<script>

</script>

<style>
  
</style>
<!-- 


<table class="generic-table users">
  <colgroup>
    <col highlight-col>
    <col>
  </colgroup>
  <thead>
  <tr>
    <th>
      <div class="generic-table--sort-header-outer">
        <div class="generic-table--sort-header">
                      <span>
                        { User.model_name.human %>
                      </span>
        </div>
      </div></th>
    <th><div class="generic-table--empty-header"></div></th>
  </tr>
  </thead>
  <tbody>
  {#each @group.users.sort.each  as user}
      <tr id="user-{ user.id %>">
        <td class="user">{ link_to_user user %></td>
        <td class="buttons">
          { link_to '', member_of_group_path(@group, user),
                          method: :delete,
                          class: 'icon icon-remove',
                          title: t(:button_remove) %>
        </td>
      </tr>
  {/each}
  </tbody>
</table>
 -->