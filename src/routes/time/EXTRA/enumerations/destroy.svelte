<script>

</script>

<style>
  
</style>
<!-- 

{ breadcrumb_toolbar link_to(l(@enumeration.option_name), enumerations_path), @enumeration %>
{ styled_form_tag({}, method: :delete) do %>
  <section class="form--section">
    <p><strong>{ l(:text_enumeration_destroy_question, @enumeration.objects_count) %></strong></p>
    <div class="form--field">
      { styled_label_tag 'reassign_to_id', l(:text_enumeration_category_reassign_to) %>
      <div class="form--field-container">
        { styled_select_tag 'reassign_to_id', options_from_collection_for_select(@enumerations, 'id', 'name') %>
      </div>
    </div>
  </section>
  { styled_submit_tag l(:button_apply), class: '-highlight' %>
  { link_to l(:button_cancel), { controller: '/enumerations', action: 'index' },
      class: 'button' %>
{/each}
 -->