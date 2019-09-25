<script>

</script>

<style>
  
</style>
<!-- 

{ breadcrumb_toolbar(@user.new_record? ? l(:label_user_new) : @user.name) do %>
  <% unless @user.new_record? %>
    {#if current_user.admin? || current_user.id == @user.id }
      <li class="toolbar-item">
        { form_for(@user, html: { class: 'toolbar-item'},
                            url: { action: :resend_invitation },
                            method: :post) do |_form| %>
          <button class="button" title="{ t(:tooltip_resend_invitation) %>">
            { op_icon('button--icon icon-mail1') %>
            <span class="button--text">{ t(:label_send_invitation) %></span>
          </button>
        {/each}
      </li>
    {/each}
    <li class="toolbar-item">
      { link_to user_path(@user), class: 'button' do %>
        { op_icon('button--icon icon-user') %>
        <span class="button--text">{ l(:label_profile) %></span>
      {/each}
    </li>
    <% unless current_user.id == @user.id %>
      { form_for @user, html: { class: 'toolbar-item' }, :url => {:action => :change_status},
                :method => :post do %>
        <li>
          { change_user_status_buttons(@user) %>
        </li>
      {/each}
    {/each}
    {#if Setting.users_deletable_by_admins? }
      <li class="toolbar-item">
        { link_to deletion_info_user_path(@user), class: 'button' do %>
          { op_icon('button--icon icon-delete') %>
          <span class="button--text">{ l(:button_delete) %></span>
        {/each}
      </li>
    {/each}
  {/each}
{/each}
 -->