<script>

</script>

<style>
  
</style>
<!-- 


<% edit_label = "#{l(:label_edit)} #{@application.class.model_name.human} #{h(@application.name)}" %>
<% html_title(l(:label_administration), edit_label) -%>
{ breadcrumb_toolbar(edit_label) %>

{ labelled_tabular_form_for @application,
                              url: { action: "update" },
                              html: { class: nil, autocomplete: 'off' },
                              as: :application do |f| %>
  { render partial: 'form', locals: { f: f } %>

  <p>
    { styled_button_tag t(:button_save), class: '-highlight -with-icon icon-checkmark' %>
  </p>
{/each}
 -->