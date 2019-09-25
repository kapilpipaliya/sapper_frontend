<script>

</script>

<style>
  
</style>
<!-- 

{ error_messages_for 'attribute_help_text' %>

<section class="form--section" id="custom_field_form">
  <div class="form--field -required">
    {#if local_assigns[:editing] }
      { f.select :attribute_name,
                   [[@attribute_help_text.attribute_caption, @attribute_help_text.attribute_name]],
                   {},
                   disabled: true
      %>
    {:else}
      { f.select :attribute_name, selectable_attributes(@attribute_help_text), container_class: '-middle' %>
    {/each}
  </div>
  <div class="form--field -required -visible-overflow">
    { f.text_area :help_text, cols: 100, rows: 20, class: 'wiki-edit', with_text_formatting: true %>
  </div>
</section>
 -->