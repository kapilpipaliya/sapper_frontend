<script>

</script>

<style>
  
</style>

<!-- 

{ toolbar title: "#{t(:button_rename)} #{@original_title}" %>
<% html_title t(:permission_rename_wiki_pages) %>
<% breadcrumb_paths(*(@page.ancestors.reverse.collect { |parent| link_to h(parent.breadcrumb_title), {id: parent, project_id: parent.project}} + [h(@page.breadcrumb_title)] )) %>
{ error_messages_for 'page' %>

{ labelled_tabular_form_for @page, url: { id: @page, action: 'rename' }, as: :page do |f| %>
  <div class="box">
    <div class='form--field -required'>
      { f.text_field :title, required: true %>
    </div>
    <div class='form--field'>
      { f.check_box :redirect_existing_links %>
    </div>
  </div>
  { submit_tag t(:button_rename), class: 'button -highlight' %>
{/each}
 -->