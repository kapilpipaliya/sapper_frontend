<script>

</script>

<style>
  
</style>
<!-- 

<% html_title t(:label_edit), @page.title %>
<% breadcrumb_paths(*(@page.ancestors.reverse.collect { |parent| link_to h(parent.breadcrumb_title), {id: parent, project_id: parent.project}} + [h(@page.breadcrumb_title)] )) %>
{ labelled_tabular_form_for @content,
                              as: :content,
                              url: {action: 'update', id: @page.slug.presence || @old_title},
                              html: {method: :put, multipart: true, id: 'wiki_form'} do |f| %>
  { f.hidden_field :lock_version %>

  { render partial: 'wiki/page_form', locals: {f: f}  %>

{/each}

<div id="preview"></div>
<% content_for :header_tags do %>
  { robot_exclusion_tag %>
{/each}

 -->