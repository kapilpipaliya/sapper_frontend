<script>

</script>

<style>
  
</style>
<!-- <!-- 

<% html_title l(:label_administration), l(:label_workflow_plural) -%>
{ render partial: 'toolbar', locals: { title: Workflow.model_name.human } %>
<% local_assigns[:additional_breadcrumb] = t(:button_copy) %>

{ styled_form_tag({}, id: 'workflow_copy_form') do %>
  <section class="form--section">
    <div class="form--field -required">
      <label class="form--label" for="source_type_id">{ l(:label_copy_source) %></label>
      <div class="form--field-container">
        <div class="form--select-container -middle">
          <label class="form--label" for="source_type_id">{ Type.model_name.human %></label>
          { select_tag('source_type_id',
                         "<option value=\"\">--- #{l(:actionview_instancetag_blank_option)} ---</option>".html_safe +
                             "<option value=\"any\">--- #{ l(:label_copy_same_as_target) } ---</option>".html_safe +
                             options_from_collection_for_select(@types, 'id', 'name', @source_type && @source_type.id), class: 'form--select') %>
        </div>
        <div class="form--select-container -middle">
          <label class="form--label" for='source_role_id'>{ Role.model_name.human %></label>
          { select_tag('source_role_id',
                         "<option value=\"\">--- #{l(:actionview_instancetag_blank_option)} ---</option>".html_safe +
                             "<option value=\"any\">--- #{ l(:label_copy_same_as_target) } ---</option>".html_safe +
                             options_from_collection_for_select(@roles, 'id', 'name', @source_role && @source_role.id), class: 'form--select') %>
        </div>
      </div>
    </div>
    <br/>
    <div class="form--field -required">
      <label class="form--label" for="target_type_ids">{ l(:label_copy_target) %></label>
      <div class="form--field-container">
        <div class="form--select-container -middle">
          <label class="form--label" for="target_type_ids">{ Type.model_name.human %></label>
          { select_tag 'target_type_ids',
                         "<option value=\"\" disabled=\"disabled\">--- #{l(:actionview_instancetag_blank_option)} ---</option>".html_safe +
                             options_from_collection_for_select(@types, 'id', 'name', @target_types && @target_types.map(&:id)),
                         multiple: true,
                         size: 20, class: 'form--select' %>
        </div>
        <div class="form--select-container -middle">
          <label class="form--label" for='target_role_ids'>{ Role.model_name.human %></label>
          { select_tag 'target_role_ids',
                         "<option value=\"\" disabled=\"disabled\">--- #{l(:actionview_instancetag_blank_option)} ---</option>".html_safe +
                             options_from_collection_for_select(@roles, 'id', 'name', @target_roles && @target_roles.map(&:id)),
                         multiple: true,
                         size: 20,
                         class: 'form--select' %>
        </div>
      </div>
    </div>
  </section>
  { styled_submit_tag l(:button_copy), class: '-highlight' %>
{/each} -->
 -->