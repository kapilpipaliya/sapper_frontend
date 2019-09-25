<script>

</script>

<style>
  
</style>
<!-- 


<%
  project = form.object
  id = project.identifier
  id_max_length = Project::IDENTIFIER_MAX_LENGTH
  identifier_editable = project.new_record?
%>

<div class="form--field { identifier_editable ? '-required' : '' %>">
  {#if identifier_editable }
    { form.text_field :identifier, container_class: '-middle'%>

    { nonced_javascript_tag do %>
      projectIdentifierMaxLength = { id_max_length %>;
      projectIdentifierDefault = '{ id %>';
      projectIdentifierLocked = false;
      observeProjectIdentifier();
      observeProjectName();
    {/each}

    <div class="form--field-instructions">
      { l(:text_length_between, min: 1,
                                  max: Project::IDENTIFIER_MAX_LENGTH) %>
      { l(:text_project_identifier_info).html_safe %>
    </div>
  {:else}
    <label class="form--label" title="{ Project.human_attribute_name(:identifier) %>">
      { Project.human_attribute_name(:identifier) %>
    </label>
    <span class="form--field-container">
      <span id="identifier">
        { project.identifier %>
      </span>
      { link_to identifier_project_path, title: l(:button_edit), class: "icon" do %>
        { op_icon('icon icon-edit') %>
        <span class="hidden-for-sighted">
          { l(:button_edit) %>
        </span>
      {/each}
    </span>
  {/each}
</div>
 -->