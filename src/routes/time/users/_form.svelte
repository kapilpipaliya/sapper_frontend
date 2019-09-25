<script>

</script>

<style>
  
</style>
<!-- 


{ error_messages_for 'user' %>

{ javascript_include_tag 'admin_users' %>

<!--[form:user]-->
<section class="form--section">
  <div class="form--field -required">{ f.text_field :login, required: true, size: 25, container_class: '-middle' %></div>
  <div class="form--field -required">{ f.text_field :firstname, required: true, container_class: '-middle' %></div>
  <div class="form--field -required">{ f.text_field :lastname, required: true, container_class: '-middle' %></div>
  <div class="form--field -required">{ f.text_field :mail, required: true, container_class: '-middle' %></div>
  <div class="form--field">{ f.select :language, lang_options_for_select, prompt: "--- #{t(:actionview_instancetag_blank_option)} ---", container_class: '-slim' %></div>
  <div class="form--field">{ f.check_box :admin, disabled: (@user == User.current) %></div>

  <h3 class="form--section-title">{ t(:label_custom_field_plural) %></h3>
  { render partial:     'customizable/field',
             collection:  @user.custom_field_values,
             as:          :value,
             locals:      { form: f } %>

  { call_hook(:view_users_form, user: @user, form: f) %>
</section>

{#if Setting.consent_required? }
  { render partial: "users/consent" %>
{/each}

<section class="form--section">
  <h3 class="form--section-title">{t(:label_authentication)%></h3>
  {#if @user.uses_external_authentication? }
    <div class="form--field">
      { styled_label_tag nil, I18n.t('user.authentication_provider') %>
      <div class="form--field-container">
        { @user.authentication_provider %>
      </div>
    </div>
    <div class="form--field-instructions">
      { I18n.t('user.authentication_settings_disabled_due_to_external_authentication') %>
    </div>
  {:else}
    <% unless @auth_sources.empty? || OpenProject::Configuration.disable_password_login? %>
      <div class="form--field">
        { f.select :auth_source_id,
                     ([[l(:label_internal), ""]] + @auth_sources.collect { |a| [a.name, a.id] }),
                     label: :'activerecord.attributes.user.auth_source',
                     container_class: '-middle' %>
      </div>
    {/each}
    {#if !OpenProject::Configuration.disable_password_login? }
      <%
        pw_style =
          if @user.change_password_allowed?
            ''
          else
            ' style="display: none;"'
          end
      %>
      <div id="password_fields"{ pw_style.html_safe %>>
        <% assign_random_password_enabled = params[:user] &&
                                            params[:user][:assign_random_password] %>
        <div class="form--field">
          { styled_label_tag 'user_assign_random_password',
                               I18n.t(:assign_random_password, scope: :user) %>
          <div class="form--field-container">
            { styled_check_box_tag("user[assign_random_password]",
                                     "1",
                                     assign_random_password_enabled) %>
          </div>
        </div>

        <% unless OpenProject::Configuration.disable_password_choice? %>
          <div class="form--field">
            { f.password_field :password,
                                 required: @user.new_record?,
                                 disabled: assign_random_password_enabled,
                                 container_class: '-middle' %>
            <div class="form--field-instructions">
              { password_complexity_requirements %>
            </div>
          </div>
          <div class="form--field">
            { f.password_field :password_confirmation,
                                 required: @user.new_record?,
                                 disabled: assign_random_password_enabled,
                                 container_class: '-middle' %>
          </div>
        {/each}

        <% if @user.active? -%>
          <div class="form--field send-information -hidden">
            { styled_label_tag 'send_information', t(:label_send_information) %>
            <div class="form--field-container">
              { styled_check_box_tag("send_information",
                                       "1",
                                       true) %>
            </div>
          </div>
        <% end -%>

        <div class="form--field">
          { f.check_box :force_password_change,
                          disabled: assign_random_password_enabled %>
        </div>
      </div>
    {:else}
      <div id="no_password_info">
        <div class="form--field">
          { styled_label_tag nil, I18n.t(:warning) %>
          <div class="form--field-container">
            { I18n.t 'user.no_login' %>
          </div>
        </div>
      </div>
    {/each}
  {/each}
</section>

<section class="form--section">
  <h3 class="form--section-title">{ User.human_attribute_name(:mail_notification) %></h3>
  { render partial: 'users/mail_notifications' %>
</section>

<section class="form--section">
  <h3 class="form--section-title">{t(:label_preferences)%></h3>
  { render partial: 'users/preferences', locals: {input_size: :middle } %>
</section>
<!--[eoform:user]-->
 -->