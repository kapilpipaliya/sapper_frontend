<script>

</script>

<style>
  
</style>

<!-- 
<% html_title t("create_new_page") %>

{ labelled_tabular_form_for @content,
                              as: :content,
                              url: create_project_wiki_index_path(project_id: @project),
                              html: { method: :post, multipart: true, id: 'wiki_form' } do |f| %>

  { render partial: 'page_form', locals: {f: f}  %>

{/each}

<div id="preview"></div>

<% content_for :header_tags do %>
  { robot_exclusion_tag %>
{/each}

<% html_title @page.title %>
 -->