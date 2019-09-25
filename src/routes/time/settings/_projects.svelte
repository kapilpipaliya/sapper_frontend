<script>

</script>

<style>
  
</style>
<!-- 

{ styled_form_tag({ action: 'edit', tab: 'projects' }) do %>
  <section class="form--section">
    <div class="form--field">{ setting_check_box :default_projects_public %></div>
    <div class="form--field">{ setting_multiselect(:default_projects_modules,
        OpenProject::AccessControl.available_project_modules.collect {|m| [l_or_humanize(m, prefix: "project_module_"), m.to_s]}) %></div>
    <div class="form--field">{ setting_check_box :sequential_project_identifiers %></div>
    <div class="form--field">{ setting_select :new_project_user_role_id,
                      Role.givable.collect {|r| [r.name, r.id.to_s]},
                      blank: "--- #{t(:actionview_instancetag_blank_option)} ---",
                      container_class: '-middle' %></div>
  </section>
  { styled_button_tag t(:button_save), class: '-highlight -with-icon icon-checkmark' %>
{/each}
 -->