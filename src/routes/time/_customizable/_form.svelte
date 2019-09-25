<script>

</script>

<style>
  
</style>
<!-- 


<%# locals: form, all_fields, only_required #%>

{#each form.object.custom_field_values.each  as value}
  { form.fields_for_custom_fields :custom_field_values, value do |value_form| %>
    <% required = value.custom_field.is_required? %>
    <div class="form--field custom_field_{ value.custom_field.id %> { required ? '-required' : '' %>">
      <%# display all fields OR only display required fields OR only display optional fields #%>
      {#if all_fields || (only_required && required) || (!only_required && !required) }
        { value_form.custom_field(container_class: '-wide', required: required) %>
      {/each}
    </div>
  {/each}
{/each}
 -->