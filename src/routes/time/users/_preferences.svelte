<script>

</script>

<style>
  
</style>
<!-- 

{ fields_for :pref, @user.pref, builder: TabularFormBuilder, lang: current_language do |pref_fields| %>
  {
    cell(
      Settings::TimeZoneSettingCell,
      "time_zone",
      form: pref_fields,
      container_class: (defined? input_size) ? "-#{input_size}" : "-wide"
    )
  %>
  <div class="form--field">
    { pref_fields.select :comments_sorting,
                           [[t(:label_chronological_order), 'asc'],
                            [t(:label_reverse_chronological_order), 'desc']],
                           container_class: (defined? input_size) ? "-#{input_size}" : '' %>
  </div>
  <div class="form--field">{ pref_fields.check_box :warn_on_leaving_unsaved %></div>
  <div class="form--field">{ pref_fields.check_box :auto_hide_popups %></div>
{/each}
 -->