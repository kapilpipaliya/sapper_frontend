<script>

</script>

<style>
  
</style>
<!-- 


{#each issue_custom_fields.each  as custom_field}
  {#if @project.all_work_package_custom_fields.include?(custom_field) }
    { render partial: "projects/form/attributes/hidden_field",
               locals: { form: form, name: :'work_package_custom_field_ids',
                            options: {multiple: true},
                            value: custom_field.id } %>
  {/each}
{/each}
 -->