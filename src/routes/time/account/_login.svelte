<script>

</script>

<style>
  
</style>
<!-- 


<div id="nav-login-content">
  { styled_form_tag({controller: '/account', action: "login"},
                      autocomplete: 'off', class: '-vertical') do %>
    { back_url_to_current_page_hidden_field_tag %>

    <div class="grid-block">
      <div class="form--field -required">
        { styled_label_tag 'username-pulldown', User.human_attribute_name(:login) %>
        <div class="form--field-container">
          { styled_text_field_tag 'username', nil, id: 'username-pulldown', tabindex: 1, autocapitalize: 'none' %>
        </div>
        <div class="form--field-extra-actions">
          {#if Setting.autologin? }
            <label class="form--label-with-check-box" for="autologin">{ styled_check_box_tag 'autologin', 1, false %> { l(:label_stay_logged_in) %></label>
          {:else if Setting.self_registration? }
            <%# show here if autologin is disabled, otherwise below lost_password link %>
              { link_to t(:label_register),
                account_register_path,
                title: t(:label_register) %>
          {/each}
        </div>
      </div>

      <div class="form--field -required">
        { styled_label_tag 'password-pulldown', User.human_attribute_name(:password) %>
        <div class="form--field-container">
          { styled_password_field_tag 'password', nil, id: 'password-pulldown', tabindex: 1 %>
        </div>
        <div class="form--field-extra-actions">
          {#if Setting.lost_password? }
            { link_to t(:label_password_lost), {controller: '/account', action: 'lost_password'} %>
          {/each}
          {#if Setting.autologin? && Setting.self_registration? }
            <%# show here if autologin is enabled, otherwise below login field %>
            { '<br>'.html_safe if Setting.lost_password? %>
            { link_to t(:label_register),
                  account_register_path,
                  title: t(:label_register) %>
          {/each}
        </div>
      </div>

      <div class="form--field">
        <label class="form--label">
          &nbsp;
        </label>
        <input type="submit" name="login" id="login-pulldown"
          value="{l(:button_login)%>" class="button -highlight" tabindex="1" />
      </div>
    </div>

    { render partial: 'account/auth_providers' %>
  {/each}
</div>
 -->