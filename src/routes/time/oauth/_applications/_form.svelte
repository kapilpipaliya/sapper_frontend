<script>

</script>

<style>
  
</style>
<!-- 


{ error_messages_for_contract @application, @errors %>

<section class="form--section">
  <div class="form--field -required">
    { f.text_field :name, required: true, size: 25, container_class: '-middle' %>
    <span class="form--field-instructions">
      { t('oauth.application.instructions.name') %>
    </span>
  </div>
  <div class="form--field -required">
    { f.text_area :redirect_uri, required: true, container_class: '-middle' %>
    <span class="form--field-instructions">
      { t('oauth.application.instructions.redirect_uri_html') %>
      <br/>
      <code>{ ::Doorkeeper.configuration.native_redirect_uri %></code>
    </span>
  </div>
  <div class="form--field">
    { f.check_box :confidential %>
    <span class="form--field-instructions">
      { t('oauth.application.instructions.confidential') %>
    </span>
  </div>
  <fieldset class="form--fieldset">
    <legend class="form--fieldset-legend">Client credentials</legend>
    <p>
      { t('oauth.client_credentials_impersonation_html',
            client_credentials_flow_link: static_link_to(:client_credentials_code_flow),
            authorization_code_flow_link: static_link_to(:oauth_authorization_code_flow))  %>
    </p>

    <div class="form--field -visible-overflow">
      <label class="form--label"> { t('doorkeeper.application.client_credentials_user_id') %>
      </label>
      <div class="form--field-container">
        <div class="form--text-field-container -middle">
          { f.hidden_field :client_credentials_user_id,  value: @application.client_credentials_user_id %>
          <user-autocompleter data-allow-empty="true"
                              data-update-input="application[client_credentials_user_id]"></user-autocompleter>
        </div>
      </div>
      <p class="form--field-instructions">
        { t('oauth.application.instructions.client_credential_user_id') %>
        <br/>
        <strong>{ t('oauth.client_credentials_impersonation_warning') %></strong>
      </p>
      {#if @application.client_credentials_user_id }
        <p class="form--field-instructions">
          <% user = User.find(@application.client_credentials_user_id) %>
          <span>{ t('oauth.client_credentials_impersonation_set_to') %></span>
          { link_to_user user %>
        </p>
      {/each}
    </div>
  </fieldset>
</section>

 -->