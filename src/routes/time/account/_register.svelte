<script>

</script>

<style>
  
</style>
<!-- 


<div class="modal-wrapper--content">
  { labelled_tabular_form_for(@user, url: account_register_path, html: { class: 'form -wide-labels' }) do |f| %>

    { back_url_hidden_field_tag %>
    { error_messages_for :user %>

    <div class="op-modal--modal-header">
      <h2>
        { op_icon 'icon-context icon-user' %>
        { I18n.t('onboarding.welcome') %>
      </h2>
      <a class="op-modal--modal-close-button dynamic-content-modal--close-button"
         title="{ t('js.close_popup_title') %>"
         aria-label="{ t('js.close_popup_title') %>">
        { op_icon('icon-close') %>
      </a>
    </div>

    <div class="op-modal--modal-body">
      <h2>{ t(:label_register) %></h2>
      <section class="form--section">
        {#if @user.auth_source_id.nil? }
          <div class="form--field -required -wide-label">
            {#if Setting.email_login? }
              { email_field(f) %>
            {:else}
              { login_field(f) %>
            {/each}
          </div>
        {/each}
        <div class="form--field -required -wide-label">
          { f.text_field :firstname, required: true %>
        </div>

        <div class="form--field -required -wide-label">
          { f.text_field :lastname,  required: true %>
        </div>

        {#if registration_show_email? }
          <div class="form--field -required -wide-label">
            { email_field(f) %>
          </div>
        {/each}

        { call_hook :view_account_register_after_basic_information, f: f %>

        { render partial:     'customizable/field',
                   collection:  @user.custom_field_values.select { |v|
                                  v.editable? || v.required?
                                },
                   as:          :value,
                   locals:      { form: f, wide_labels: true } %>

        <br/><br/>
        {#if @user.change_password_allowed? }
          <div class="form--field -required -wide-label -reduced-margin">
            { f.password_field :password,
                                 required: true,
                                 size: 25,
                                 autocomplete: 'off' %>
            <div class="form--field-instructions">
              { password_complexity_requirements %>
            </div>
          </div>
          <div class="form--field -required -wide-label">
            { f.password_field :password_confirmation,
                                 required: true,
                                 size: 25,
                                 autocomplete: 'off'  %>
          </div>
        {/each}
      </section>

      {#if user_consent_required? }
        <hr/>
        { render partial: 'account/user_consent_check', locals: { consenting_user: @user } %>
      {/each}

      { styled_button_tag l(:button_create), class: '-highlight -with-icon icon-checkmark' %>

      { render partial: 'account/auth_providers', locals: { omniauth_title: I18n.t('account.signup_with_auth_provider'), wide: true } %>
    </div>
    <div class="op-modal--modal-footer">
      { render partial: 'account/footer' %>
    </div>
  {/each}
</div>
 -->