<script>

</script>

<style>
  
</style>
<!-- 

<% html_title l(:label_my_account), l(:button_change_password) %>
<% breadcrumb_paths(l(:label_my_account), l(:button_change_password)) %>
{ toolbar title: l(:button_change_password) %>

{ error_messages_for 'user' %>
{ styled_form_tag({ action: :change_password },
                    { autocomplete: 'off', class: 'form -wide-labels' }) do %>
  { back_url_hidden_field_tag %>
  <section class="form--section">
    { render partial: 'my/password_form_fields',
               locals: { show_user_name: !!(defined? show_user_name) ? show_user_name : nil,
                         input_size: :middle } %>
  </section>
  { styled_button_tag l(:button_save), class: '-highlight -with-icon icon-checkmark' %>
{/each}
 -->