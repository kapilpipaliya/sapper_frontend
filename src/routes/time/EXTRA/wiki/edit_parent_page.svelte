<script>

</script>

<style>
  
</style>
<!-- 


{ toolbar title: "#{t(:button_change_parent_page)}: #{@page.title}" %>

<% html_title l('activerecord.models.wiki'), t(:button_change_parent_page) %>
<% breadcrumb_paths(*(@page.ancestors.reverse.collect { |parent| link_to h(parent.breadcrumb_title), {id: parent, project_id: parent.project}} + [h(@page.breadcrumb_title)] )) %>
{ error_messages_for 'page' %>

{ labelled_tabular_form_for @page, url: { id: @page, action: 'update_parent_page' } do |f| %>
  <div class="box">
    <p>
      { f.select :parent_id,
            wiki_page_options_for_select(@parent_pages),
            { label: WikiPage.human_attribute_name(:parent_title), include_blank: false },
            { class: "parent-select" } %>
    </p>

    { nonced_javascript_tag  do -%>
      jQuery(function() {
          var parent_select = jQuery('#wiki_page_parent_id');
          parent_select.attr('size', parent_select.children().length);
        }
      ));
    <% end -%>
  </div>
  { submit_tag t(:button_save), class: 'button -highlight' %>
{/each}
 -->