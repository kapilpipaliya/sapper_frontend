<script>

</script>

<style>
  
</style>
<!-- 


<% html_title l(:label_administration), "#{l(:label_edit)} #{Group.model_name.human} #{h @group.name}" %>

<% local_assigns[:additional_breadcrumb] = @group.name %>

{ breadcrumb_toolbar @group.name do %>
  {#if current_user.admin? }
    <li class="toolbar-item">
      { link_to @group,
                  data: { confirm: t(:text_are_you_sure) },
                  class: 'button -danger',
                  method: :delete do %>
        { op_icon('button--icon icon-delete') %>
        <span class="button--text">{ t(:button_delete) %></span>
      {/each}
    </li>
  {/if}
{/each}
{ render_tabs group_settings_tabs %>
 -->