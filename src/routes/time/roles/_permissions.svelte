<script>

</script>

<style>
  
</style>
<!-- 

{#each permissions.each  as mod, mod_permissions}
  <% global_prefix = showGlobalRole ? 'fieldset--global--' : 'fieldset--' %>
  <% module_name = mod.blank? ? 'fieldset--global--' + Project.model_name.human.downcase.gsub(' ', '_') : global_prefix + l_or_humanize(mod, prefix: 'project_module_').downcase.gsub(' ', '_') %>
  <fieldset class="form--fieldset -collapsible" id="{ module_name %>">
    <legend class="form--fieldset-legend">
      { mod.blank? ? Project.model_name.human : l_or_humanize(mod, prefix: 'project_module_') %>
    </legend>
    <div class="form--fieldset-control">
      <span class="form--fieldset-control-container">
        ({ check_all_links module_name %>)
      </span>
    </div>
    <div class="-columns-2">
      {#each Array(mod_permissions).each  as permission}
        <div class="form--field">
          <div class="form--field-container">
            <label class="form--label-with-check-box">
              { styled_check_box_tag 'role[permissions][]', permission.name, (role.permissions && role.permissions.include?(permission.name)) %>
              { l_or_humanize(permission.name, prefix: 'permission_') %>
            </label>
          </div>
        </div>
      {/each}
    </div>

  </fieldset>
{/each}
{ hidden_field_tag 'role[permissions][]', '' %>
 -->