<script>

</script>

<style>
  
</style>

<!-- 

<% html_title l(:label_administration), t('custom_actions.new') %>

<% local_assigns[:additional_breadcrumb] = t('custom_actions.new') %>
{ breadcrumb_toolbar t('custom_actions.new') %>

{ error_messages_for_contract @custom_action, @errors %>

{ labelled_tabular_form_for @custom_action do |f| %>
  { render partial: 'form', locals: { f: f } %>
  { styled_button_tag l(:button_create), class: '-highlight -with-icon icon-checkmark' %>
{/each}
 -->