<script>

</script>

<style>
  
</style>
<!-- 


<% # LOCALS
  fail ArgumentError, 'missing instructions' unless defined? instructions
%>

<% html_title l(:label_login) %>
<% breadcrumb_paths(l(:label_login)) %>
{ call_hook :view_account_login_top %>

<%
  signin_link = link_to I18n.t('label_here'), signin_path
  instruction_text = I18n.t "instructions_#{instructions}", signin: signin_link
%>

<div id="login-form" class="form -bordered">
  <h1>{ I18n.t(:label_login) %></h1>
  <hr class="form--separator" />
  <p>{ instruction_text.html_safe %></p>
</div>
{ call_hook :view_account_login_bottom %>
 -->