<script>

</script>

<style>
  
</style>
<!-- 

{#if show_user_name }
    <div class="form--field">
      <label class="form--label" for="username">
        { User.human_attribute_name(:login) %>
      </label>
      <div class="form--field-container">
        { @username %>
      </div>
    </div>
{/each}

<div class="form--field -required">
  { styled_label_tag 'password', User.human_attribute_name(:current_password) %>
  <div class="form--field-container">
    { styled_password_field_tag 'password',
                                  nil,
                                  size: 25,
                                  required: true,
                                  container_class: (defined? input_size) ? "-#{input_size}" : '' %>
  </div>
</div>

<div class="form--field -required" style="padding-top: 1em">
  { styled_label_tag 'new_password', User.human_attribute_name(:new_password) %>
  <div class="form--field-container">
    { styled_password_field_tag 'new_password',
                                  nil,
                                  size: 25,
                                  'aria-describedby' => 'new_password_tooltip',
                                  required: true,
                                  class: 'advanced-tooltip-trigger',
                                  container_class: (defined? input_size) ? "-#{input_size}" : '' %>
  </div>
  <div class="advanced-tooltip-content" id="new_password_tooltip">
    { render_password_complexity_tooltip %>
  </div>
</div>



<div class="form--field -required">
  { styled_label_tag 'new_password_confirmation',
        User.human_attribute_name(:password_confirmation) %>
  <div class="form--field-container">
    { styled_password_field_tag 'new_password_confirmation',
                                  nil,
                                  required: true,
                                  'aria-describedby' => 'confirm_password_tooltip',
                                  size: 25,
                                  class: 'advanced-tooltip-trigger',
                                  container_class: (defined? input_size) ? "-#{input_size}" : '' %>
  </div>
  <div class="advanced-tooltip-content" id="confirm_password_tooltip">
    { I18n.t(:confirm,
         scope: [:activerecord, :errors, :models, :user, :attributes, :password, :match])%>
         <br>
     { I18n.t(:description,
         scope: [:activerecord, :errors, :models, :user, :attributes, :password, :match])%>
  </div>
</div>

 -->