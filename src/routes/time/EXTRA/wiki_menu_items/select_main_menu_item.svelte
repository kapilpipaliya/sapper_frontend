<script>

</script>

<style>
  
</style>

<!-- 
{ toolbar title: t(:label_select_main_menu_item) %>

<p>{ t :wiki_menu_item_new_main_item_explanation %></p>

{ labelled_tabular_form_for :wiki_page, url: { action: 'replace_main_menu_item' } do |f| %>
  <fieldset class="form--fieldset" id="wiki_menu_item_setting">
    <legend class="form--fieldset-legend">{ l(:label_wiki_page) %></legend>
    <p>
      { f.select :id,
                   wiki_page_options_for_select(@possible_wiki_pages),
                   { label: WikiPage.human_attribute_name(:title) },
                   { size: @possible_wiki_pages.size,
                     id: 'main-menu-item-select' } %>
    </p>
  </fieldset>
  { submit_tag t(:button_save), class: 'button -highlight' %>
{/each}
 -->