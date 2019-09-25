<script>

</script>

<style>
  
</style>
<!-- 


<% html_title t(:label_administration), "#{t(:label_edit)} #{t(:label_work_package_types)} #{h @type.name}" %>


<% local_assigns[:additional_breadcrumb] = @type.name %>

<div class="grid-content">
  { breadcrumb_toolbar @type.name %>
</div>

<div class="tabs">
  <ul>
    <li>
      { link_to t("types.edit.settings"),
                  edit_type_tab_path(id: @type.id, tab: :settings),
                  class: "#{'selected' if @tab == "settings" }"  %>
    </li>
    <li>
      { link_to t("types.edit.form_configuration"),
                  edit_type_tab_path(id: @type.id, tab: :form_configuration),
                  class: "#{'selected' if @tab == 'form_configuration' }"  %>
    </li>
    <li>
      { link_to t("types.edit.projects"),
                  edit_type_tab_path(id: @type.id, tab: :projects),
                  class: "#{'selected' if @tab == 'projects' }"  %>
    </li>
  </ul>
</div>

{ error_messages_for 'type' %>

{ form_for @type,
            url: update_type_tab_path(id: @type.id, tab: @tab),
            builder: TabularFormBuilder,
            lang: current_language do |f| %>
  { render partial: "types/form/#{@tab}", locals: { f: f } %>
{/each}
 -->