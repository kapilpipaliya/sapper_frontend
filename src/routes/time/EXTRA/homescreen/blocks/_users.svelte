<script>

</script>

<style>
  
</style>
<!-- 
{ render 'homescreen/blocks/header', icon: 'group', title: t(:label_user_plural) %>

<p class="widget-box--additional-info">{ l('homescreen.additional.users') %></p>

<% unless @newest_users.empty? %>
<ul class="widget-box--arrow-links">
  {#each @newest_users.each  as user}
    <li>
      { link_to user, user_path(user), title: user.name %>
      <small>({ format_date(user.created_on) %>)</small>
    </li>
  {/each}
</ul>
{/each}

<div class="widget-box--buttons">
  {#if User.current.admin? }
    { link_to new_user_path, class: 'button -alt-highlight' do %>
      { op_icon('button--icon icon-add') %>
      <span class="button--text">{ l(:label_invite_user) %></span>
    {/each}
  {/each}
</div>
 -->