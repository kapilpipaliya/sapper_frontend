<script>

</script>

<style>
  
</style>
<!-- 

{#if @user.auth_source }
  <p>{ t(:mail_body_account_information_external, value: @user.auth_source.name) %></p>
{:else}
  <p>{ t(:mail_body_account_information) %>:</p>
  <ul>
    <li>{ User.human_attribute_name(:login) %>: { @user.login %></li>
    <li>{ User.human_attribute_name(:password) %>: { @password %></li>
  </ul>
{/each}
<p>{ t(:label_login) %>: { link_to signin_url, signin_url %></p>
 -->