<script>

</script>

<style>
  
</style>
<!-- 


<%#
  needs locals:
  f: labelled form builder
%>

{ error_messages_for :auth_source %>

<section class="form--section">
  <div class="form--field -required">{ f.text_field 'name', required: true, container_class: '-middle' %></div>
  <div class="form--field -required">{ f.text_field 'host', required: true, container_class: '-middle' %></div>
  <div class="form--field -required">{ f.text_field 'port', required: true, size: 6, container_class: '-xslim' %></div>

  <fieldset class="form--fieldset">
    <legend class="form--fieldset-legend">{ t('ldap_auth_sources.connection_encryption') %></legend>
    <p>
      { t 'ldap_auth_sources.tls_mode.section_more_info_link_html',
            link: OpenProject::Static::Links[:ldap_encryption_documentation][:href]  %>
    </p>
    <div class="form--field">
        { f.radio_button :tls_mode,
                          'plain_ldap',
                          label: t('ldap_auth_sources.tls_mode.plain'),
                          container_class: '-wide' %>
      <p class="form--field-instructions">
        { t('ldap_auth_sources.tls_mode.plain_description') %>
      </p>
    </div>
    <div class="form--field">
        { f.radio_button :tls_mode,
                          'simple_tls',
                          label: t('ldap_auth_sources.tls_mode.simple_tls'),
                          container_class: '-wide' %>
      <p class="form--field-instructions">
        { t('ldap_auth_sources.tls_mode.simple_tls_description') %>
      </p>
    </div>
    <div class="form--field">
        { f.radio_button :tls_mode,
                          'start_tls',
                          label: t('ldap_auth_sources.tls_mode.start_tls'),
                          container_class: '-wide' %>
      <p class="form--field-instructions">
        { t('ldap_auth_sources.tls_mode.start_tls_description') %>
      </p>
    </div>
  </fieldset>
  <fieldset class="form--fieldset">
    <legend class="form--fieldset-legend">{ t(:label_details) %></legend>
    <div class="form--field">{ f.text_field 'account', container_class: '-middle'  %></div>
    <div class="form--field">{ f.password_field 'account_password',
              label: AuthSource.human_attribute_name(:password),
              placeholder: ((@auth_source.new_record? || @auth_source.account_password.blank?) ? '' : ('●'*15)),
              container_class: '-middle' %></div>
    <div class="form--field">{ f.text_field 'base_dn', size: 60, container_class: '-wide' %></div>
    <div class="form--field">{ f.check_box 'onthefly_register', label: AuthSource.human_attribute_name(:onthefly) %></div>
  </fieldset>
</section>

<fieldset class="form--fieldset">
  <legend class="form--fieldset-legend">{t(:label_attribute_plural)%></legend>
  <div class="form--field -required">{ f.text_field 'attr_login', label: AuthSource.human_attribute_name(:login), required: true, size: 20, container_class: '-middle'  %></div>
  <div class="form--field">{ f.text_field 'attr_firstname', label: AuthSource.human_attribute_name(:firstname), size: 20, container_class: '-middle'  %></div>
  <div class="form--field">{ f.text_field 'attr_lastname', label: AuthSource.human_attribute_name(:lastname), size: 20, container_class: '-middle'  %></div>
  <div class="form--field">{ f.text_field 'attr_mail', label: AuthSource.human_attribute_name(:mail), size: 20, container_class: '-middle'  %></div>
  <div class="form--field">{ f.text_field 'attr_admin', label: AuthSource.human_attribute_name(:admin), size: 20, container_class: '-middle'  %></div>
</fieldset>
 -->