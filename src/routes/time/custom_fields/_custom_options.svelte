<script>

</script>

<style>
  
</style>
<!-- 


<% custom_field = f.object %>
<% custom_field.custom_options.build if custom_field.custom_options.empty? %>

<div class="generic-table--container">
  <div class="generic-table--results-container">
    <table class="generic-table" id="custom-options-table">
      <colgroup>
        <col highlight-col>
        <col highlight-col>
        <col highlight-col>
        <col>
      </colgroup>
      <thead>
        <tr>
          <th>
            <div class="generic-table--sort-header-outer">
              <div class="generic-table--sort-header">
                <span>
                  { t('activerecord.attributes.custom_value.value') %>
                </span>
              </div>
            </div>
          </th>
          <th>
            <div class="generic-table--sort-header-outer">
              <div class="generic-table--sort-header">
                <span>
                  { t(:label_default) %>
                </span>
              </div>
            </div>
          </th>
          <th>
            <div class="generic-table--sort-header-outer">
              <div class="generic-table--sort-header">
                <span>
                  { t(:button_sort) %>
                </span>
              </div>
            </div>
          </th>
          <th style="max-width:200px;">
            <div class="generic-table--empty-header">
            </div>
          </th>
        </tr>
      </thead>

      <tbody id="custom-field-dragula-container">
        {#each custom_field.custom_options.each_with_index  as custom_option, i}
          { f.fields_for :custom_options, custom_option do |co_f| %>
            <tr class="dragula-element custom-option-row">
              <td>
                <span class="dragula-handle icon icon-table icon-drag-handle"></span>
                { co_f.hidden_field :id, class: 'custom-option-id' %>
                { co_f.text_field :value,
                                    container_class: 'custom-option-value',
                                    no_label: true %>
              </td>
              <td>
                { co_f.check_box :default_value,
                                  container_class: 'custom-option-default-value',
                                  no_label: true %>
              </td>
              <td>
                <span class="reorder-icons">
                  <a title="{ t(:label_sort_highest) %>" rel="nofollow" href="#" class="sort-up-custom-option">
                    { op_icon('icon-context icon-sort-up icon-small') %>
                  </a>
                  <a title="{ t(:label_sort_higher) %>" rel="nofollow" href="#" class="move-up-custom-option">
                    { op_icon('icon-context icon-arrow-up2 icon-small') %>
                  </a>
                  <a title="{ t(:label_sort_lower) %>" rel="nofollow" href="#" class="move-down-custom-option">
                    { op_icon('icon-context icon-arrow-down2 icon-small') %>
                  </a>
                  <a title="{ t(:label_sort_lowest) %>" rel="nofollow" href="#" class="sort-down-custom-option">
                    { op_icon('icon-context icon-sort-down icon-small') %>
                  </a>
                </span>
              </td>
              <td>
                { link_to '',
                    delete_option_of_custom_field_path(id: custom_field.id || 0, option_id: custom_option.id || 0),
                    method: :delete,
                    data: { confirm: t(:'custom_fields.confirm_destroy_option') },
                    class: 'icon icon-delete delete-custom-option',
                    title: t(:button_delete) %>
              </td>
            </tr>
          {/each}
        {/each}
      </tbody>
    </table>

  </div>
</div>
 -->