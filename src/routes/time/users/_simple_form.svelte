<script>

</script>

<style>
  
</style>
<!-- 


{ error_messages_for 'user' %>

{ javascript_include_tag 'admin_users' %>

<!--[form:user]-->
<section class="form--section">
  <div class="form--field -required">{ f.text_field :mail, required: true, autofocus: true, container_class: '-middle' %></div>
  <div class="form--field -required">{ f.text_field :firstname, required: true, container_class: '-middle' %></div>
  <div class="form--field -required">{ f.text_field :lastname, required: true, container_class: '-middle' %></div>

  { render partial:     'customizable/field',
             collection:  @user.custom_field_values,
             as:          :value,
             locals:      { form: f, input_size: "middle" } %>

  <% unless @auth_sources.empty? || OpenProject::Configuration.disable_password_login? %>
      <div class="form--field">
        <% sources = ([[t(:label_internal), ""]] + @auth_sources.collect { |a| [a.name, a.id] }) %>
        { f.select :auth_source_id, sources, label: :'activerecord.attributes.user.auth_source'  %>
      </div>

      <div class="form--field" id="new_user_login" style="display: none;">
        { f.text_field :login, required: true, size: 25, disabled: true %>
      </div>
  {/each}

  <div class="form--field">{ f.check_box :admin, disabled: (@user == User.current) %></div>
  { call_hook(:view_users_form, user: @user, form: f) %>
</section>

<!--[eoform:user]-->
 -->