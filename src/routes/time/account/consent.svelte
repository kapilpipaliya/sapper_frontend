<script>

</script>

<style>
  
</style>
<!-- 


<% breadcrumb_paths(t('consent.title')) %>
<% html_title t('consent.title') %>
{ call_hook :view_account_consent_top %>
<div id="login-form" class="account-consent form -bordered">


  { form_tag(account_confirm_consent_path, method: :post, class: "form -wide-labels") do %>
    { render partial: 'user_consent_check', locals: { consenting_user: consenting_user } %>
    <section class="form--section">
      <button type="submit" class="button -highlight">
      <span class="button--text">{ t(:button_continue) %></span>
      </button>
      { link_to t(:button_decline), account_decline_consent_path, class: 'button' %>
    </section>
  {/each}
</div>
{ call_hook :view_account_consent_bottom %>
 -->