<script>

</script>

<style>
  
</style>
<!-- 


{ error_messages_for "wiki_menu_item", object: @wiki_menu_item %>

<% breadcrumb_paths(*@page.ancestors.reverse.collect {|parent| link_to h(parent.title), {id: parent.title, project_id: parent.project}}.push(@page_title)) %>
{ toolbar title: l(:wiki_menu_item_for, title: @page_title) %>
{ form_for @wiki_menu_item, html: {id: 'wiki_menu_item_form', class: 'menu-item-form', method: :put}, url: wiki_menu_item_path(@project, @page) do |form| %>
<p class="item-name">
  { form.label :title, l(:label_menu_item_name), {id: 'item-name'} %>
  {#if @wiki_menu_item.title.nil? }
  { form.text_field :title, size: 20, value: @page_title %>
  {:else}
  { form.text_field :title, size: 20 %>
  {/each}
</p>
<br>
<div style="clear: both;"></div>
<fieldset class="form--fieldset" id="wiki_menu_item_setting">
  <legend class="form--fieldset-legend">{l(:menu_item_setting)%></legend>
  <p>
    { form.radio_button 'setting', :no_item %>
    { form.label 'setting_no_item', l(:label_wiki_dont_show_menu_item) %>
  </p>
  <p class="main_item">
    { form.radio_button 'setting', :main_item %>
    { form.label 'setting_main_item', l(:label_wiki_show_menu_item) %>
  </p>
  <p>
    <% disabled = @parent_menu_item_options.empty? %>
    { form.radio_button 'setting', :sub_item, disabled: disabled %>
    { form.label 'setting_sub_item', l(:label_wiki_show_submenu_item), {id: 'with-select'} %>
    { select_tag "parent_wiki_menu_item", options_for_select(@parent_menu_item_options, @selected_parent_menu_item_id), disabled: disabled %>
  </p>
</fieldset>
<p>
  { styled_button_tag l(:button_save), method: :post,
  class: '-highlight -with-icon icon-checkmark' %>
  { link_to l(:button_cancel),
  {controller: '/wiki', action: 'show', project_id: @project, id: @page_title},
  class: 'button'%>
</p>
{/each}
 -->