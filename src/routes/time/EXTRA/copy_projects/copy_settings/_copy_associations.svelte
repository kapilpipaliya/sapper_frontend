<script>

</script>

<style>
  
</style>
<!-- 


<fieldset class="form--fieldset">
  <legend class="form--fieldset-legend">{ l(:button_copy) %></legend>

  { render partial: "copy_projects/copy_settings/block_checkbox",
             locals: { name: "queries", checked: true, label: l(:label_query_plural),
                          count: project.queries.count } %>
  { render partial: "copy_projects/copy_settings/block_checkbox",
             locals: { name: "boards", checked: false, label: l(:label_forum_plural),
                          count: project.forums.count } %>
  { render partial: "copy_projects/copy_settings/block_checkbox",
             locals: { name: "members", checked: true, label: l(:label_member_plural),
                          count: project.members.count } %>
  { render partial: "copy_projects/copy_settings/block_checkbox",
             locals: { name: "versions", checked: true, label: l(:label_version_plural),
                          count: project.versions.count } %>
  {#if project.wiki.present? }
    { render partial: "copy_projects/copy_settings/block_checkbox",
               locals: { name: "wiki", checked: true, label: l(:label_wiki_page_plural),
                            count: project.wiki.nil? ? 0 : project.wiki.pages.count } %>
    { render partial: "copy_projects/copy_settings/block_checkbox",
               locals: { name: "wiki_page_attachments", checked: false, label: l(:label_wiki_page_attachments),
                         count: project.wiki.pages.joins(:attachments).count('attachments.id') } %>
  {/each}
  { render partial: "copy_projects/copy_settings/block_checkbox",
             locals: { name: "work_packages", checked: true, label: l(:label_work_package_plural),
                          count: project.work_packages.count } %>
  { render partial: "copy_projects/copy_settings/block_checkbox",
             locals: { name: "work_package_attachments", checked: true, label: l(:label_work_package_attachments),
                     count: project.work_packages.joins(:attachments).count('attachments.id') } %>
  { render partial: "copy_projects/copy_settings/block_checkbox",
             locals: { name: "categories", checked: true,
                          label: l(:label_work_package_category_plural),
                          count: project.categories.count } %>
  { hidden_field_tag 'only[]', '' %>

  <br />
  <label class="block">
    { check_box_tag 'notifications', 1, params[:notifications] %>
    { l(:label_project_copy_notifications) %>
  </label>
</fieldset>
 -->