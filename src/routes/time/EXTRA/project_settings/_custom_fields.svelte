<script>

</script>

<style>
  
</style>
<!-- 

{#if current_user.admin? }
<fieldset class="form--fieldset">
  <legend class="form--fieldset-legend">{ t(:label_custom_field_new) %></legend>
  <p>{ t('custom_fields.text_add_new_custom_field') %></p>
  { link_to new_custom_field_path(type: 'WorkPackageCustomField'),
        { class: 'button -alt-highlight',
          aria: {label: t(:label_custom_field_new)},
          title: t(:label_custom_field_new)} do %>
    { op_icon('button--icon icon-add') %>
    <span class="button--text">{ CustomField.model_name.human %></span>
  {/each}
</fieldset>
{/each}

{#if  @wp_custom_fields.any? }
  { labelled_tabular_form_for @project,
                                url: { controller: '/projects', action: 'custom_fields', id: @project },
                                method: :put,
                                html: { id: 'modules-form' } do |form| %>

    { render  partial: "projects/form/custom_fields",
                locals: {
                  project: @project,
                  form: form,
                  work_package_custom_fields: @wp_custom_fields
                } %>

    <p>{ form.button l(:button_save), class: 'button -highlight -with-icon icon-checkmark' %></p>
  {/each}
{:else}
  { no_results_box custom_title: t('projects.settings.custom_fields.no_results_title_text') %>
{/each}
 -->