<script>

</script>

<style>
  
</style>

<!-- 
<% html_title t(:label_administration), t('oauth.application.singular'), h(@application.name) -%>

{ toolbar title: "#{t('oauth.application.singular')} - #{h(@application.name)}",
            title_class: 'no-padding-bottom' do %>
  <li class="toolbar-item">
    { link_to edit_oauth_application_path(@application),
                class: 'button' do %>
      { op_icon('button--icon icon-edit') %>
      <span class="button--text">{ t(:button_edit) %></span>
    {/each}
  </li>
  <li class="toolbar-item">
    { link_to oauth_application_path(@application),
                method: :delete,
                data: { confirm: I18n.t(:text_are_you_sure) },
                class: 'button -danger' do %>
      { op_icon('button--icon icon-delete') %>
      <span class="button--text">{ t(:button_delete) %></span>
    {/each}
  </li>
{/each}

<div class="attributes-group">
  <div class="attributes-group--header">
    <div class="attributes-group--header-container">
      <h3 class="attributes-group--header-text">{ t(:label_details) %></h3>
    </div>
  </div>

  <div class="attributes-key-value">
    <div class="attributes-key-value--key">{ @application.class.human_attribute_name :uid %></div>
    <div class="attributes-key-value--value-container">
      <div class="attributes-key-value--value -text">
        <span>{ @application.uid %></span>
      </div>
    </div>
    {#if flash[:_application_secret] }
    <div class="attributes-key-value--key">{ @application.class.human_attribute_name :secret %></div>
    <div class="attributes-key-value--value-container">
      <div class="attributes-key-value--value -text">
          <p>
            <code>{ flash[:_application_secret] %></code>
            <br/>
            <strong>{ t 'oauth.client_secret_notice' %></strong>
          </p>
      </div>
    </div>
    {/each}
    {#if user_id = @application.client_credentials_user_id }
      <div class="attributes-key-value--key">{ t 'oauth.client_credentials_impersonation_set_to' %></div>
      <div class="attributes-key-value--value-container">
        <div class="attributes-key-value--value -text">
          <p>
            { link_to_user User.find_by(id: user_id) %>
            <br/>
            <strong>{ t('oauth.client_credentials_impersonation_warning') %></strong>
          </p>
        </div>
      </div>
    {/each}
    <div class="attributes-key-value--key">{ @application.class.human_attribute_name :scopes %></div>
    <div class="attributes-key-value--value-container">
      <div class="attributes-key-value--value -text">
        <span>{ oauth_scope_translations(@application) %></span>
      </div>
    </div>
    <div class="attributes-key-value--key">{ @application.class.human_attribute_name :confidential %></div>
    <div class="attributes-key-value--value-container">
      <div class="attributes-key-value--value -text">
        <span>
          { @application.confidential? ? t(:general_text_Yes) : t(:general_text_No) %>
        </span>
      </div>
    </div>
    <div class="attributes-key-value--key">{ @application.class.human_attribute_name :redirect_uri %></div>
    <div class="attributes-key-value--value-container">
      <div class="attributes-key-value--value -text">
        <span>
          { safe_join @application.redirect_uri.split("\n"), '<br/>'.html_safe %>
        </span>
      </div>
    </div>
  </div>
</div>

 -->