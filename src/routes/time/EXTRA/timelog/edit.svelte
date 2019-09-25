<script>

</script>

<style>
  
</style>
<!-- 


{ toolbar title: t(:label_spent_time) %>
{ labelled_tabular_form_for [@time_entry.project, @time_entry], as: :time_entry do |f| %>
  { error_messages_for_contract @time_entry, @errors %>
  { back_url_hidden_field_tag %>

  <div class="form--field">
    { f.text_field :work_package_id, size: 6, container_class: '-xslim' %>
    <div class="form--field-instructions">
      { h("#{(@time_entry.work_package.type.nil?) ? '' : @time_entry.work_package.type.name} ##{@time_entry.work_package.id}: #{@time_entry.work_package.subject}") if @time_entry.work_package%>
    </div>
  </div>

  <div class="form--field -required">
    { f.text_field :spent_on, size: 10, required: true, container_class: '-xslim', class: '-augmented-datepicker' %>
  </div>

  <div class="form--field -required">
    { f.text_field :hours, size: 6, required: true, container_class: '-xslim', class: '-number' %>
  </div>

  <div class="form--field">
    { f.text_field :comments, size: 100, container_class: '-wide' %>
  </div>

  <div class="form--field -required">
    { f.select :activity_id,
                 activity_collection_for_select_options(@time_entry),
                 prompt: "--- #{t(:actionview_instancetag_blank_option)} ---",
                 required: true,
                 container_class: '-slim' %>
  </div>

  { render partial: "customizable/form",
             locals: { form: f, all_fields: true, only_required: false } %>

  { call_hook(:view_timelog_edit_form_bottom, { time_entry: @time_entry, form: f }) %>
  { f.button t(:button_save), class: 'button -highlight -with-icon icon-checkmark' %>
{/each}
 -->