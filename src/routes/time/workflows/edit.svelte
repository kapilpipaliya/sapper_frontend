<script>

</script>

<style>
  
</style>
<!-- 
<!-- 
<% html_title l(:label_administration), l(:label_workflow_plural) -%>
{ render partial: 'toolbar', locals: {title: Workflow.model_name.human } %>

{ styled_form_tag({}, method: 'get') do %>
  <fieldset class="simple-filters--container">
    <legend>{l(:text_workflow_edit)%></legend>
    <ul class="simple-filters--filters">
      <li class="simple-filters--filter">
        { styled_label_tag :role_id, Role.model_name.human, class: 'simple-filters--filter-name' %>
        <div class="simple-filters--filter-value">
          { styled_select_tag 'role_id', options_from_collection_for_select(@roles, "id", "name", @role && @role.id) %>
        </div>
      </li>
      <li class="simple-filters--filter">
        { styled_label_tag :type_id, Type.model_name.human, class: 'simple-filters--filter-name' %>
        <div class="simple-filters--filter-value">
          { styled_select_tag 'type_id', options_from_collection_for_select(@types, "id", "name", @type && @type.id) %>
        </div>
      </li>
      <ul class="simple-filter--trailing-labels">
        <li class="form--field -trailing-label">
          { hidden_field_tag 'used_statuses_only', '0', id: 'used_statuses_only_hidden' %>

          { styled_label_tag :used_statuses_only, l(:label_display_used_statuses_only) %>
          <span class="form--field-container">
            { styled_check_box_tag :used_statuses_only, '1', @used_statuses_only %>
          </span>
        </li>
      </ul>
      <li class="simple-filters--controls">
        { submit_tag l(:button_edit), name: nil, accesskey: accesskey(:edit), class: 'button -small -highlight' %>
      </li>
    </ul>
  </fieldset>
{/each}
{#if @type && @role && @statuses.any? }
  { form_tag({action: :update}, id: 'workflow_form', method: :patch) do %>
    { hidden_field_tag 'type_id', @type.id %>
    { hidden_field_tag 'role_id', @role.id %>

    { render partial: 'form',
               locals: { name: 'always', workflows: @workflows['always'] } %>

    { augmented_collapsible_section initiallyExpanded: @workflows['author'].present?,
                                      title: t(:label_additional_workflow_transitions_for_author) do %>
      { render partial: 'form', locals: { name: 'author', workflows: @workflows['author'] } %>
    {/each}

    { augmented_collapsible_section initiallyExpanded: @workflows['assignee'].present?,
                                      title: t(:label_additional_workflow_transitions_for_assignee) do %>
      { render partial: 'form', locals: { name: 'assignee', workflows: @workflows['assignee'] } %>
    {/each}

    { styled_button_tag l(:button_save), class: '-highlight -with-icon icon-checkmark' %>
  {/each}
{/each}

<% html_title(Workflow.model_name.human) -%> -->
 -->