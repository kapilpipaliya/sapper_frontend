<script>

</script>

<style>
  
</style>

<!-- 
<% html_title t(:label_member_plural) -%>

<% any_members = @members.any? %>

{ toolbar title: t(:label_member_plural) do %>
  {#if authorize_for(:members, :new) }
    <li class="toolbar-item">
      <button id="add-member-button"
              aria-label="{ I18n.t(:button_add_member) %>"
              title="{ I18n.t(:button_add_member) %>"
              class="button -alt-highlight"
              { params[:show_add_members] ? 'data-trigger-initially="true"' : '' %> >
        { op_icon('button--icon icon-add') %>
        <span class="button--text">{ t('activerecord.models.member') %></span>
      </button>
    </li>
  {/each}
  {#if any_members }
    <li class="toolbar-item">
      <button id="filter-member-button"
              focus
              title="{ I18n.t(:description_filter) %>"
              class="toggle-member-filter-link button">
        { op_icon('button--icon icon-filter') %>
      </button>
    </li>
  {/each}
{/each}

{ javascript_include_tag "members_form.js" %>

{ error_messages_for 'member' %>

<div>
  {#if @roles.any? }
    { render partial: "members/member_form",
               locals: { project: @project, roles: @roles } %>
  {:else}
    <p>
      { I18n.t('text_no_roles_defined') %>
    </p>
    { link_to I18n.t('button_back'), :back, class: 'button' %>
  {/each}
</div>

<div>
  { cell Members::UserFilterCell, params, @members_filter_options %>
  {#if any_members }
    { cell Members::TableCell, @members, @members_table_options %>
  {:else if @is_filtered }
    { no_results_box custom_title: t(:notice_no_principals_found) %>
  {:else}
    { no_results_box %>
  {/each}
</div>


 -->