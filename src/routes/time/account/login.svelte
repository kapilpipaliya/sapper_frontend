<script>

</script>

<style>
  
</style>

<!-- 

<% breadcrumb_paths(l(:label_login)) %>
<% html_title l(:label_login) %>
{ call_hook :view_account_login_top %>
<div id="login-form" class="form -bordered">
  <h1>{ I18n.t(:label_login) %></h1>

  <hr class="form--separator" />
  <% unless OpenProject::Configuration.disable_password_login? %>
    { render partial: 'password_login_form' %>
  {/each}
  { render partial: 'auth_providers' %>
</div>
{ call_hook :view_account_login_bottom %>
 -->