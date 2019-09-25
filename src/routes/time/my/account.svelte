<script>

</script>

<style>
  
</style>
<!-- 


<% html_title(l(:label_my_account), l(:label_profile)) -%>

<% breadcrumb_paths(l(:label_my_account), l(:label_profile)) %>
{ toolbar title: l(:label_profile) %>
{ error_messages_for 'user' %>

{ password_confirmation_form_for @user,
                                   as: :user,
                                   url: { action: 'update_account' },
                                   builder: ::TabularFormBuilder,
                                   lang: current_language,
                                   html: { id: 'my_account_form', class: '-wide-labels' } do |f| %>
  <section class="form--section">
    <div class="form--field">
      <label class="form--label" for="username">
        { User.human_attribute_name(:login) %>
      </label>
      <div class="form--field-container">
        { @user.login %>
      </div>
    </div>
    <div class="form--field -required">{ f.text_field :firstname, required: true, container_class: '-middle' %></div>
    <div class="form--field -required">{ f.text_field :lastname, required: true, container_class: '-middle' %></div>
    <div class="form--field -required">{ f.text_field :mail, required: true, container_class: '-middle' %></div>

    { fields_for :pref, @user.pref, builder: TabularFormBuilder, lang: current_language do |pref_fields| %>
      <div class="form--field">{ pref_fields.check_box :hide_mail %></div>
    {/each}

    { call_hook(:view_my_account, user: @user, form: f) %>

    { render partial: 'customizable/field',
               collection: @user.custom_field_values.select(&:editable?),
               as: :value,
               locals: { form: f, input_size: :middle } %>
  </section>

  { styled_button_tag l(:button_save), class: '-highlight -with-icon icon-checkmark' %>
{/each}
 -->