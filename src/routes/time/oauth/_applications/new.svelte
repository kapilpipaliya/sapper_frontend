<script>

</script>

<style>
  
</style>

<!-- 

<% html_title l(:label_administration), t('oauth.application.new') %>
{ breadcrumb_toolbar(t('oauth.application.new')) %>

{ labelled_tabular_form_for @application,
                              url: { action: "create" },
                              html: { class: nil, autocomplete: 'off' },
                              as: :application do |f| %>

  <p>
    { t('oauth.application.instructions.register_intro') %>
  </p>

  { render partial: 'form', locals: { f: f } %>
  <p>
    { styled_button_tag t(:button_create), class: '-highlight -with-icon icon-checkmark' %>
  </p>
{/each}
 -->