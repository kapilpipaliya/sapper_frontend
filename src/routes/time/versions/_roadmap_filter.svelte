<script>

</script>

<style>
  
</style>
<!-- 
{ form_tag({}, method: :get) do %>
  <fieldset class="form--fieldset">
    <legend class="form--fieldset-legend">{ l(:description_filter) %></legend>
    {#each @types.each  as type}
      <div class="form--field -trailing-label -no-margin">
        { styled_label_tag "type-#{type.id}", type.name %>
        <div class="form--field-container">
          { styled_check_box_tag "type_ids[]", type.id, (@selected_type_ids.include? type.id.to_s), id: "type-#{type.id}" %>
        </div>
      </div>
    {/each}

    <div class="form--space"></div>

    <div class="form--field -trailing-label -no-margin">
      { styled_label_tag "completed", t(:label_show_completed_versions) %>
      <div class="form--field-container">
        { styled_check_box_tag "completed", 1, params[:completed] %>
      </div>
    </div>

    {#if @project.descendants.active.any? }
      <div class="form--space"></div>
      { hidden_field_tag 'with_subprojects', 0 %>
      <div class="form--field -trailing-label -no-margin">
        { styled_label_tag "with-subprojects", t(:label_subproject_plural) %>

        <div class="form--field-container">
          { styled_check_box_tag 'with_subprojects', 1, @with_subprojects, id: 'with-subprojects' %>
        </div>
      </div>
    {/each}

    <div class="form--space"></div>

    <div>{ submit_tag l(:button_apply), class: 'button -small -alt-highlight', name: nil %></div>

  </fieldset>
{/each}
 -->