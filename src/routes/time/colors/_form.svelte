<script>

</script>

<style>
  
</style>
<!-- 


{ error_messages_for 'color' %>

{ toolbar title: (color.new_record? ? t('timelines.new_color') : t('timelines.edit_color')) %>

<fieldset class="form--fieldset">
  <legend class="form--fieldset-legend">{ t('timelines.properties') %></legend>

  <div class="form--field -required">
    { f.text_field :name, required: true, container_class: '-slim' %>
  </div>
  <div class="form--field -required">
    <label class="form--label">{ t('activerecord.attributes.color.hexcode') %></label>
    <span class="form--field-container">
      <span class="form--text-field-container -xslim">
        { text_field_tag "color_hexcode",
                           color.hexcode,
                           required: true,
                           name: "color[hexcode]",
                           maxlength: 7 %>
      </span>
      { icon_for_color(color, class: 'color--preview', data: { target: '#color_hexcode' }) %>
    </span>
  </div>
</fieldset>

{ styled_button_tag t(:button_save), class: '-highlight -with-icon icon-checkmark' %>
{ link_to t(:button_cancel), colors_path, class: 'button' %>
 -->