<script>

</script>

<style>
  
</style>

<!-- 
{#if @user.auth_source }
  { t(:mail_body_account_information_external, value: @user.auth_source.name) %>
{:else}
  { t(:mail_body_account_information) %>:
* { User.human_attribute_name(:login) %>: { @user.login %>
  * { User.human_attribute_name(:password) %>: { @password %>
{/each}
{ l(:label_login) %>: { signin_url %>
 -->