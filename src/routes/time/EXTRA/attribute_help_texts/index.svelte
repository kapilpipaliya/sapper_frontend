<script>

</script>

<style>
  
</style>
<!-- 

{ toolbar title: t(:'attribute_help_texts.label_plural') %>

<div class="notification-box -info">
  <div class="notification-box--content">
    <p>{ t('attribute_help_texts.text_overview') %></p>
  </div>
</div>

<% html_title(t(:label_administration), t(:'attribute_help_texts.label_plural')) -%>
<% name = 'WorkPackage' %>

<% entries = @texts_by_type[name] || [] %>
{#if entries.any? }
  <div class="generic-table--container">
    <div class="generic-table--results-container">
      <table class="generic-table">
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
                    { AttributeHelpText.human_attribute_name(:attribute_name) %>
                  </span>
              </div>
            </div>
          </th>
          <th>
            <div class="generic-table--sort-header-outer">
              <div class="generic-table--sort-header">
                  <span>
                    { AttributeHelpText.human_attribute_name(:help_text) %>
                  </span>
              </div>
            </div>
          </th>
          <th>
            <div class="generic-table--empty-header"></div>
          </th>
        </tr>
        </thead>
        <tbody>
        <% entries.each do |attribute_help_text| -%>
          <tr class="attribute-help-text--entry">
            <td>
              { link_to h(attribute_help_text.attribute_caption),
                          edit_attribute_help_text_path(attribute_help_text) %>
            </td>
            <td>
              <attribute-help-text
                data-help-text-id="{ attribute_help_text.id %>"
                data-attribute="{ attribute_help_text.attribute_name %>"
                data-attribute-scope="'{ attribute_help_text.attribute_scope %>'"
                data-additional-label="{ t(:'attribute_help_texts.show_preview') %>">
              </attribute-help-text>
            </td>
            <td class="buttons">
              { link_to(
                    op_icon('icon icon-delete'),
                    (attribute_help_text_path(attribute_help_text)),
                    method: :delete,
                    data: { confirm: I18n.t(:text_are_you_sure) },
                    title: t(:button_delete)) %>
            </td>
          </tr>
        {/each}
        </tbody>
      </table>
    </div>
  </div>
{:else}
  { no_results_box %>
{/each}

<div class="generic-table--action-buttons">
  { link_to new_attribute_help_text_path(name: name),
              { class: 'attribute-help-texts--create-button button -alt-highlight',
                aria: {label: t(:'attribute_help_texts.add_new')},
                title: t(:'attribute_help_texts.add_new')} do %>
    { op_icon('button--icon icon-add') %>
    <span class="button--text">{ t('activerecord.models.attribute_help_text') %></span>
  {/each}
</div>
 -->