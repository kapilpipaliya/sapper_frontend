<script>

</script>

<style>
  
</style>
<!-- 


<section class="form--section">
  <div class="grid-block wrap">
    <div class="grid-content small-12 large-6">
      {#if @projects.any? }
      <fieldset class="form--fieldset" id="type_project_ids">
        <legend class="form--fieldset-legend" >
          { t('types.edit.enabled_projects') %>
        </legend>
        <div>
          <div class="form--fieldset-control">
            <span class="form--fieldset-control-container">
              ({ check_all_links 'type_project_ids' %>)
            </span>
          </div>
          { project_nested_ul(@projects) do |p|
            content_tag('label',
              check_box_tag('type[project_ids][]', p.id, @type.projects.include?(p), id: nil) +
                ' ' + h(p), class: 'form--label-with-check-box')
          end %>
          { hidden_field_tag('type[project_ids][]', '', id: nil) %>
        </div>
      {/each}
    </div>
  </div>
</section>

<div class="grid-block">
  <div class="generic-table--action-buttons">
  { styled_button_tag t(@type.new_record? ? :button_create : :button_save),
      class: '-highlight -with-icon icon-checkmark' %>
  </div>
</div>
 -->