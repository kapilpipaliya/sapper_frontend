<script>

</script>

<style>
  
</style>

<!-- 
<% html_title l(:label_password_lost) %>
{ toolbar title: l(:label_password_lost) %>
{ error_messages_for 'user' %>
{ styled_form_tag({token: @token.value}, autocomplete: 'off') do %>
  <section class="form--section">
    <div class="form--field -required">
      { styled_label_tag 'new_password', User.human_attribute_name(:new_password) %>
      <div class="form--field-container">
        { styled_password_field_tag 'new_password', nil, size: 25, container_class: '-middle' %>
      </div>
      <div class="form--field-instructions">
        { password_complexity_requirements %>
      </div>
    </div>
    <div class="form--field -required">
      { styled_label_tag 'new_password_confirmation',
            User.human_attribute_name(:password_confirmation) %>
      <div class="form--field-container">
        { styled_password_field_tag 'new_password_confirmation', nil, size: 25, container_class: '-middle' %>
      </div>
    </div>
  </section>
  <p>{ styled_button_tag l(:button_save), class: '-highlight -with-icon icon-checkmark' %></p>
{/each}
 -->