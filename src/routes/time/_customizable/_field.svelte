<script>

</script>

<style>
  
</style>
<!-- 


<%# locals: form %>

{ form.fields_for_custom_fields :custom_field_values, value do |value_form| %>
  <% required = value.custom_field.is_required? %>
  <div class="form--field { required ? '-required' : '' %> { (defined? wide_labels) ? "-wide-label" : '' %>">
    { value_form.custom_field container_class: (defined? input_size) ? "-#{input_size}" : '' %>
  </div>
{/each}
 -->