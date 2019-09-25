<script>

</script>

<style>
  
</style>
<!-- 


<% html_title l(:label_administration), "#{l(:label_edit)} #{Enumeration.model_name.human} #{h @enumeration.name}" %>

<% local_assigns[:additional_breadcrumb] =  @enumeration %>
{ breadcrumb_toolbar @enumeration %>

{ labelled_tabular_form_for @enumeration do |f| %>
  { render partial: 'form', locals: { f: f } %>
  { styled_button_tag l(:button_save), class: '-highlight -with-icon icon-checkmark' %>
{/each}

{ styled_form_tag(enumeration_path(@enumeration), method: :delete) do %>
  { styled_submit_tag l(:button_delete) %>
{/each}
 -->