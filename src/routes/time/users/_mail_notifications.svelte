<script>

</script>

<style>
  
</style>
<!-- 


<% active_sections = if @user.mail_notification == 'selected'
                      [{key: 'notified_projects'}]
                     else
                      []
                     end %>

{ initialize_hide_sections_with [{key: 'notified_projects'}],  active_sections %>


<div class="form--field">
  { styled_label_tag "user_mail_notification", t(:'user.settings.mail_notifications') %>
  <div class="form--field-container">
    <div class="form--select-container">
      { styled_select_tag 'user[mail_notification]',
                            options_for_select(user_mail_notification_options(@user), @user.mail_notification),
                            container_class: '-wide' %>
      <show-section-dropdown data-opt-value="selected"
                             data-hide-sec-with-name="notified_projects">
      </show-section-dropdown>
    </div>
  </div>
</div>

<section class="hide-section" data-section-name="notified_projects" { @user.mail_notification == 'selected' ? '' : 'hidden' %>>
  <div id="notified-projects" class="form--field -no-label">
      <div class="form--field-container -vertical">
        {#each @user.projects.each  as project}
          <label class="form--label-with-check-box">
            { styled_check_box_tag 'notified_project_ids[]',
                                     project.id,
                                     @user.notified_projects_ids.include?(project.id),
                                     id: "notified_project_ids_#{project.id}" %>
            { project.name %>
          </label>
        {/each}
      </div>
      <div class="form--field-instructions">
        { t(:'user.settings.mail_project_explanaition') %>
      </div>
  </div>
</section>

<div class="form--field">
  { styled_label_tag 'self_notified', t(:'user.settings.mail_self_notified') %>
  <div class="form--field-container">
    <div class="form--check-box-container">
      { styled_check_box_tag 'self_notified', 1, @user.pref.self_notified? %>
    </div>
  </div>
</div>
 -->