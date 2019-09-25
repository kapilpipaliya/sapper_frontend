<script>

</script>

<style>
  
</style>
<!-- 


{ content_for :header_tags do %>
  { nonced_javascript_tag do %>
    { include_gon(need_tag: false) -%>
  {/each}
  -- plug-in specific tags --
  { call_hook :view_work_package_overview_attributes %>
<% end -%>

{ content_for :content_body do %>
  <openproject-base></openproject-base>
<% end -%>

{ render template: 'layouts/base', locals: local_assigns.merge({ no_action_menu: true }) %>
 -->