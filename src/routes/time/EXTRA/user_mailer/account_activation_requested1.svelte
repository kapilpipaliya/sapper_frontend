<script>

</script>

<style>
  
</style>


<!-- 
{ t(:mail_body_account_activation_request, value: @user.login) %>
{ @activation_url %>


{ t('mail.actions') %>

* { t(:label_activate_user) %>: { change_status_info_user_url(@user, change_action: :activate) %>
* { t(:label_lock_user) %>: { change_status_info_user_url(@user, change_action: :lock) %>
{#if Setting.users_deletable_by_admins? }
    * { t(:label_delete_user) %>: { deletion_info_user_url(@user) %>
{/each}
* { t(:label_show_all_registered_users) %>: { users_url(status: 'registered')  %>
 -->