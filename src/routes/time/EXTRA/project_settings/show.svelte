<script>

</script>

<style>
  
</style>

<!-- 
<% html_title(l(:label_project_settings)) -%>
<% breadcrumb_paths(l(:label_project_settings)) %>
{ toolbar title: l(:label_project_settings) do %>
  {#if User.current.allowed_to?(:add_subprojects, @project) }
    <li class="toolbar-item">
      { link_to new_project_path(parent_id: @project),
          { class: 'button -alt-highlight',
            aria: {label: t(:label_subproject_new)},
            title: t(:label_subproject_new)} do %>
        { op_icon('button--icon icon-add') %>
        <span class="button--text">{ t(:label_subproject) %></span>
      {/each}
    </li>
  {/each}
  {#if @project.copy_allowed? }
    <li class="toolbar-item">
      { link_to copy_from_project_path(@project, coming_from: :settings), class: 'button copy', accesskey: accesskey(:copy) do %>
        { op_icon('button--icon icon-copy') %>
        <span class="button--text">{ t(:label_copy_project) %></span>
      {/each}
    </li>
  {/each}
  {#if User.current.admin? }
    <li class="toolbar-item">
      { link_to(archive_project_path(@project, status: '', name: @project.name),
                    data: { confirm: t('project.archive.are_you_sure', name: @project.name) },
                    method: :put,
                    title: t(:label_archive_project),
                    class: 'button') do %>
        { op_icon('button--icon icon-locked') %>
        <span class="button--text">{ t(:label_archive_project) %></span>
      {/each}
    </li>
    <li class="toolbar-item">
      { link_to confirm_destroy_project_path(@project),
                  class: 'button delete',
                  title: t(:label_delete_project) do %>
        { op_icon('button--icon icon-delete') %>
        <span class="button--text">{ t(:label_delete_project) %></span>
      {/each}
    </li>
  {/each}
{/each}

{ render_tabs project_settings_tabs %>
 -->