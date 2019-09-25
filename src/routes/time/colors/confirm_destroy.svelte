<script>

</script>

<style>
  
</style>
<!-- 

{ toolbar title: @color.name %>
{ labelled_tabular_form_for @color,
            url: color_url(@color),
            html: {method: 'delete'},
            as: :color do |f| %>

  <div class='flash warning'>
    { l('timelines.really_delete_color') %>
    <span class="close-handler" role="button" tabindex="0" aria-label="{{ ::I18n.t('js.close_popup_title') }}">
      { op_icon('icon-close') %>
    </span>
  </div>

  <fieldset class="form--fieldset">
    <legend class="form--fieldset-legend">{ l('timelines.properties') %></legend>
    <div class="form--field">
      { f.text_field :hexcode, disabled: 'disabled' %>
      { icon_for_color(@color) %>
    </div>
  </fieldset>

  { submit_tag l(:button_delete), class: 'button -highlight' %>
  { link_to l(:button_cancel), colors_path, class: 'button' %>
{/each}
 -->