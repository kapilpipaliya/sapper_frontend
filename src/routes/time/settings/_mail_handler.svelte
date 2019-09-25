<script>

</script>

<style>
  
</style>
<!-- 

{ styled_form_tag({action: 'edit', tab: 'mail_handler'}) do %>
  <section class="form--section">
    <div class="form--field">
      { setting_text_area :mail_handler_body_delimiters, rows: 5, container_class: '-wide' %>
      <div class="form--field-instructions">{ t(:text_line_separated) %></div>
    </div>
    <div class="form--field">
      { setting_text_field :mail_handler_body_delimiter_regex, container_class: '-wide' %>
      <div class="form--field-instructions">{ t(:text_regexp_multiline) %></div>
    </div>
    <div class="form--field">
      { setting_text_area :mail_handler_ignore_filenames, rows: 5, container_class: '-wide' %>
      <div class="form--field-instructions">{ t('incoming_mails.ignore_filenames') %></div>
    </div>
  </section>
  { styled_button_tag t(:button_save), class: '-highlight -with-icon icon-checkmark' %>
{/each}
 -->