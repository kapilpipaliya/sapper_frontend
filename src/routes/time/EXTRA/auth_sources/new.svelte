<script>

</script>

<style>
  
</style>

<!-- 

<% html_title l(:label_administration), l(:label_auth_source_new) %>
<% local_assigns[:additional_breadcrumb] = l(:label_auth_source_new) %>
{ toolbar title: "#{l(:label_auth_source_new)} (#{@auth_source.auth_method_name})" %>

{ labelled_tabular_form_for @auth_source, as: :auth_source do |f| %>
  { render partial: 'form', locals: { f: f } %>
  { styled_button_tag l(:button_create), class: '-highlight -with-icon icon-checkmark' %>
{/each}
 -->