<script>

</script>

<style>
  
</style>

<!-- 

{ javascript_include_tag 'new_user' %>

<% html_title l(:label_administration), l("label_user_new") %>
<% local_assigns[:additional_breadcrumb] = l(:label_user_new) %>
{ render partial: 'toolbar', locals: { new_user: true } %>
{ labelled_tabular_form_for @user,
                              url: { action: "create" },
                              html: { class: nil, autocomplete: 'off' },
                              as: :user do |f| %>
  { render partial: 'simple_form', locals: { f: f, auth_sources: @auth_sources, user: @user } %>

  <p>
    { styled_button_tag l(:button_create), class: '-highlight -with-icon icon-checkmark' %>
    { styled_button_tag l(:button_create_and_continue), name: 'continue', class: '-highlight -with-icon icon-checkmark' %>
  </p>
{/each}
 -->