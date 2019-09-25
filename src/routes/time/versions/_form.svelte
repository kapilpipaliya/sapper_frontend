<script>

</script>

<style>
  
</style>
<!-- 


<%
  # locals: f, project
  version = f.object
  contract = version_contract(version)
%>

{ error_messages_for 'version' %>
{ back_url_hidden_field_tag %>

<div class="form--field -required">
  { f.text_field :name, required: true, container_class: '-wide' %>
</div>

<div class="form--field">
  { f.text_field :description, container_class: '-wide'%>
</div>

<div class="form--field">
  { f.select :status,
               contract.assignable_statuses.map { |s| [t("version_status_#{s}"), s] },
               container_class: '-slim' %>
</div>

<div class="form--field">
  { f.text_field :wiki_page_title,
                   label: :label_wiki_page,
                   disabled: project.wiki.nil?,
                   container_class: '-wide' %>
</div>

<div class="form--field">
  { f.text_field :start_date, container_class: '-xslim', class: '-augmented-datepicker' %>
</div>

<div class="form--field">
  { f.text_field :effective_date, container_class: '-xslim', class: '-augmented-datepicker' %>
</div>

<div class="form--field">
  { f.select :sharing,
               contract.assignable_sharings.map { |v| [format_version_sharing(v), v] },
               container_class: '-slim' %>
</div>

{#if @project.enabled_modules.map(&:name).include?("backlogs") }

  { version_settings_fields(version, @project) %>

{/each}

{ render partial: "customizable/form",
           locals: { form: f, all_fields: true, only_required: false } %>
 -->