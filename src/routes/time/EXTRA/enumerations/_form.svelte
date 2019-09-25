<script>

</script>

<style>
  
</style>
<!-- 


<%#
  needs locals:
  f: labelled form builder
%>

{ error_messages_for :enumeration %>
<section class="form--section">
  { f.hidden_field 'type' %>
  <div class="form--field -required">{ f.text_field 'name', required: true, container_class: '-middle' %></div>
  <div class="form--field">{ f.check_box 'active' %></div>
  <div class="form--field">{ f.check_box 'is_default' %></div>

  {#if @enumeration.class.colored? }
    { render partial: '/colors/color_autocomplete_field',
               locals: {
                   form: f,
                   object: @enumeration,
                   type: 'enumeration',
                   allow_bright_colors: true,
                   label: @enumeration.color_label
               }  %>
  {/each}

  {#each @enumeration.custom_field_values.each  as value}
    <div class="form--field">{ custom_field_tag_with_label :enumeration, value %></div>
  {/each}
</section>
 -->