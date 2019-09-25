<script>

</script>

<style>
  
</style>
<!-- 

<% unless role.builtin? %>
  <div class="form--field -required">
    { f.text_field :name, required: true %>
  </div>
  <div class="form--field">
    { f.check_box :assignable %>
  </div>
  {#if role.new_record? && roles.any? }
    <div class="form--field">
      { styled_label_tag :copy_workflow_from, l(:label_copy_workflow_from) %>
      <div class="form--field-container">
        { select_tag(:copy_workflow_from, content_tag("option") + options_from_collection_for_select(@roles, :id, :name)) %>
      </div>
    </div>
  {/each}
{/each}

<h3>{ l(:label_permissions) %></h3>
<div id="permissions">
  {#each @permissions.each  as mod, mod_permissions}
      <fieldset><legend>{ mod.blank? ? Project.model_name.human : l_or_humanize(mod, :prefix => 'project_module_') %></legend>
      {#each mod_permissions.each  as permission}
          <label class="floating form--label">
            { styled_check_box_tag 'role[permissions][]', permission.name, (@role.permissions.include? permission.name) %>
            { l_or_humanize(permission.name, :prefix => 'permission_') %>
          </label>
      {/each}
      </fieldset>
  {/each}
  <br />{ check_all_links 'permissions' %>
  { hidden_field_tag 'role[permissions][]', '' %>
</div>
 -->