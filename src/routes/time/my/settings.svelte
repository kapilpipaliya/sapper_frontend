<script>

</script>

<style>
  
</style>

<!-- 
<% html_title(l(:label_my_account), l(:label_settings)) %>

<% breadcrumb_paths(l(:label_my_account), l(:label_settings)) %>
{ toolbar title: l(:label_settings) %>

{ error_messages_for 'user' %>
{ labelled_tabular_form_for @user, as: :user, url: { action: 'update_settings' },
                              lang: current_language,
                              html: { id: 'my_account_form', class: 'form -wide-labels' } do |f| %>
  <fieldset class="form--fieldset">
      <div class="form--field">{ f.select :language, lang_options_for_select,  container_class: '-middle' %></div>
      { render partial: 'users/preferences', locals: { input_size: :middle } %>
  </fieldset>
  { call_hook(:view_my_settings, user: @user, form: f) %>
  { styled_button_tag l(:button_save), class: '-highlight -with-icon icon-checkmark' %>
{/each}
 -->