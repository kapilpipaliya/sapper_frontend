<script>

</script>

<style>
  
</style>
<!-- 

{ error_messages_for work_packages.first %>

{ styled_form_tag work_packages_bulk_path, method: :delete, class: 'form danger-zone' do %>
  {#each work_packages.each  as work_package}
    { hidden_field_tag 'ids[]', work_package.id %>
  {/each}

  <section class="form--section">
    <h3 class="form--section-title">
      { l('work_package.destroy.title') %>
    </h3>

    { work_package_associations_to_address(associated) %>

    <p>
      <strong>{ l(:text_destroy_what_to_do) %></strong>
    </p>

    { fields_for :to_do do |f| %>
      <div class="form--field -trailing-label">
        { styled_label_tag :to_do_action_destroy, l(:text_destroy) %>
        <div class="form--field-container">
          { styled_radio_button_tag 'to_do[action]', 'destroy' %>
        </div>
      </div>
      <div class="form--field -trailing-label">
        {styled_label_tag 'to_do_action_nullify', l(:text_assign_to_project) %>
        <div class="form--field-container">
          { styled_radio_button_tag 'to_do[action]' , 'nullify' %>
        </div>
      </div>
      <div class="grid-block">
        <div class="grid-block small-3">
          <div class="form--field -trailing-label">
            { styled_label_tag 'to_do_action_reassign', l(:text_reassign) %>
            <div class="form--field-container">
              { styled_radio_button_tag 'to_do[action]', 'reassign' %>
              <% csp_onclick('if(jQuery("#to_do_action_reassign").prop("checked")) { jQuery("#to_do_reassign_to_id").focus(); }',
                             '#reassign') %>
            </div>
          </div>
        </div>
        <div class="grid-block">
          <div class="form--field">
            <div class="form--text-field-container -xslim">
              { styled_label_tag 'to_do_reassign_to_id', l(:text_reassign), class: 'form--label hidden-for-sighted' %>
              { f.text_field 'reassign_to_id', placeholder: WorkPackage.human_attribute_name(:id), value: params[:reassign_to_id], size: 6, onfocus: 'jQuery("#to_do_action_reassign").prop("checked", true);' %>
            </div>
          </div>
        </div>
      </div>
    {/each}
    <div class="danger-zone--verification">
      { styled_button_tag title: l(:button_delete), class: '-highlight' do
            concat content_tag :i, '', class: 'button--icon icon-delete'
            concat content_tag :span, l(:button_delete), class: 'button--text'
            end %>
      { link_to_function l(:button_cancel),
                           "history.back()",
                           title: l(:button_cancel),
                           class: 'button -with-icon icon-cancel'%>
  </section>

{/each}
 -->