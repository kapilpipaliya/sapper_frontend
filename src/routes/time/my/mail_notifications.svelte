<script>

</script>

<style>
  
</style>

<!-- 

<% html_title(l(:label_my_account), I18n.t('activerecord.attributes.user.mail_notification')) -%>

<% breadcrumb_paths(l(:label_my_account), I18n.t('activerecord.attributes.user.mail_notification')) %>
{ toolbar title: I18n.t('activerecord.attributes.user.mail_notification') %>

{ labelled_tabular_form_for @user,
                              as: :user,
                              url: { action: 'update_mail_notifications' },
                              lang: current_language,
                              html: { id: 'my_account_form', class: 'form -wide-labels' } do %>
    <section class="form--section">
      { render partial: 'users/mail_notifications' %>
    </section>
    { styled_button_tag l(:button_save), class: '-highlight -with-icon icon-checkmark' %>
{/each}
 -->