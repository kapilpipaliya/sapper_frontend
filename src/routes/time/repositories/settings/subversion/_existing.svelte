<script>

</script>

<style>
  
</style>
<!-- 

<div class="form--field -required">
  { form.text_field(:url,
                      label: t('repositories.url'),
                      required: true,
                      size: 60,
                      disabled: !repository.new_record?
      ) %>
  <div class="form--field-instructions">
    { raw simple_format t('repositories.subversion.instructions.url', local_proto: "<code>file://</code>") %>
    <code>file://</code>
    <code>http://</code>
    <code>https://</code>
    <code>svn://</code>
    <code>svn+[tunnelscheme]://</code>
    <br/>
  </div>
</div>
<hr/>
<div class="form--field">
  { form.text_field(:login,
                      size: 30,
                      label: t('repositories.subversion.username'),
                      container_class: '-middle') %>
  <div class="form--field-instructions">
  </div>
</div>
<div class="form--field">
  { form.password_field(:password,
                          size: 30,
                          label: t('repositories.subversion.password'),
                          name: 'ignore',
                          id: 'repository-password-placeholder',
                          value: ((repository.new_record? || repository.password.blank?) ? '' : ('x' * 15)),
                          container_class: '-middle')
  %>
  {
    content_for(:additional_js_dom_ready) do
      "jQuery('#repository-password-placeholder')
        .change(function() { this.name = 'repository[password]'; })
        .focus(function() { this.value = ''; this.name = 'repository[password]'; });
        ".html_safe
    end
  %>
</div>
 -->