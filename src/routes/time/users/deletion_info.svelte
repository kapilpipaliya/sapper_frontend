<script>

</script>

<style>
  
</style>
<!-- 

<% html_title(l(:label_administration), "#{ l('account.deletion_info.heading', name: @user.name)}") -%>

{ labelled_tabular_form_for(
        :user,
        url: user_path(@user),
        html: {
            method: :delete, class: 'confirm_required request-for-confirmation form danger-zone',
            data: password_confirmation_data_attribute
        }) do %>
  <div class='wiki'>
    <section class="form--section">
      <h3 class="form--section-title">
        { l('account.deletion_info.heading', name: "<em>#{h(@user.name)}</em>").html_safe %>
      </h3>

      <p>
        { l("account.deletion_info.login_consequences.#{User.current == @user ? 'self' : 'other'}") %>
      </p>

      <p>
        { l("account.deletion_info.data_consequences.#{User.current == @user ? 'self' : 'other'}") %>
      </p>
      <p class="danger-zone--warning">
        <span class="icon icon-error"></span>
        <span>{ l("account.deletion_info.info.#{User.current == @user ? 'self' : 'other'}") %></span>
      </p>
      <p>
        { l("account.deletion_info.login_verification.#{User.current == @user ? 'self' : 'other'}",
              name: "<em class=\"danger-zone--expected-value\">#{h(@user.login)}</em>").html_safe %>
      </p>
      <div class="danger-zone--verification">
        <input type="text" name="login_verification"/>
        { styled_button_tag '', class: '-highlight', disabled: true do
          concat content_tag :i, '', class: 'button--icon icon-delete'
          concat content_tag :span, l(:button_delete), class: 'button--text'
        end %>
      </div>
    </section>
  </div>
{/each}
 -->