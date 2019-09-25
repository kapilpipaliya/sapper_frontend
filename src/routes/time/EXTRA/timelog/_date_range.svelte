<script>

</script>

<style>
  
</style>
<!-- 

<fieldset id="date-range" class="simple-filters--container">
  <legend>{ l(:label_date_range) %></legend>
  <ul class="simple-filters--filters">
    <li class="simple-filters--filter -with-radio-buttons">
      { styled_label_tag "period_type_list", l(:description_date_range_list), class: "hidden-for-sighted simple-filters--filter-name" %>
      { styled_radio_button_tag 'period_type', '1',
                                  !@free_period,
                                  id: "period_type_list"%>
      <div class="simple-filters--filter-value">
        { styled_select_tag 'period',
                              options_for_period_select(params[:period]),
                              class: "-narrow" %>
      </div>
    </li>
    <li class="simple-filters--filter -with-radio-buttons">
      { styled_label_tag "period_type_interval", l(:description_date_range_interval), class: "hidden-for-sighted simple-filters--filter-name" %>
      { styled_radio_button_tag 'period_type', '2', @free_period, id: "period_type_interval" %>
      { styled_label_tag("from", l(:label_date_from), class: 'simple-filters--filter-name') %>
      <div class="simple-filters--filter-value">
        { styled_text_field_tag('from', @from, class: '-augmented-datepicker', size: 10) %>
      </div>
      { styled_label_tag("to", l(:label_date_to), class: 'simple-filters--filter-name') %>
      <div class="simple-filters--filter-value">
        { styled_text_field_tag('to', @to, class: '-augmented-datepicker', size: 10) %>
      </div>
    </li>
    <li class="simple-filters--controls">
      { styled_button_tag l(:button_apply), class: 'button -highlight -small' %>
      { link_to l(:button_clear), polymorphic_time_entries_path(@issue || @project), class: 'button -small' %>
    </li>
  </ul>
</fieldset>
 -->