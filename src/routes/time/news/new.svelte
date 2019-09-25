<script>

</script>

<style>
  
</style>

<!-- 

<% html_title l(:label_news_new) %>

{ toolbar title: l(:label_news_new) %>

{ labelled_tabular_form_for [@project, @news], html: { id: 'news-form' } do |f| %>
  { render partial: 'news/form', locals: { f: f } %>
  <hr class="form--separator" />
  { styled_button_tag l(:button_create), class: '-highlight -with-icon icon-checkmark' %>
  { link_to t(:button_cancel), project_news_index_path(@project), class: 'button -with-icon icon-cancel' %>
{/each}
<div id="preview"></div>
 -->