<script>

</script>

<style>
  
</style>
<!-- 


{ content_for :header_tags do %>
  { javascript_include_tag('repository_settings') %>
{/each}

<% is_creation_form = @repository.nil? || @repository.new_record? %>
{ form_for :repository,
             url: { controller: '/repositories',
                    action: is_creation_form ? 'create' : 'update',
                    project_id: @project },
             method: is_creation_form ? 'POST' : 'PUT',
             builder: TabularFormBuilder,
             html: { class: 'form' } do |f| %>

<fieldset class="form--fieldset -with-control">
  <legend class="form--fieldset-legend">
    { l(:label_available_project_repositories) %>
  </legend>

  { error_messages_for 'repository' %>
  <div class="form--field -required">
    { label_tag('scm_vendor', l('repositories.scm_vendor'), class: "form--label") %>
    <div class="form--field-container">
      <div class="form--select-container -middle">
        { scm_vendor_tag(@repository) %>
      </div>
    </div>
  </div>

  <%# Show (selected) type options %>
  <% unless @repository.nil? %>
      { render partial: "/repositories/settings/vendor_form",
                 locals: { form: f, repository: @repository } %>
  {/each}

  <%# Allow plugins to add additional information %>
  { call_hook :repository_settings_fields, repository: @repository, form: f %>

  <%# Hide the save button for existing managed repositories %>
  {#if show_settings_save_button?(@repository) }
    { render partial: "/repositories/settings/submit",
               locals: { form: f, is_creation_form: is_creation_form, project: @project } %>
  {/each}
</fieldset>
{/each}
 -->