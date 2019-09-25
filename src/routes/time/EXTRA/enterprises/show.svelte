<script>

</script>

<style>
  
</style>
<!-- 
<% html_title t(:label_administration), t(:label_enterprise_edition) %>

{ toolbar title: t(:label_enterprise_edition) do %>
  {#if EnterpriseToken.show_banners? }
    <li class="toolbar-item">
      { link_to( "#{OpenProject::Static::Links.links[:upsale][:href]}/?utm_source=unknown&utm_medium=community-edition&utm_campaign=enterprise-admin",
            { class: 'button -alt-highlight',
              target: '_blank',
              title: t('admin.enterprise.order')}) do %>
        { op_icon('button--icon icon-add') %>
        <span class="button--text">{ t('admin.enterprise.order') %></span>
      {/each}
    </li>
  {/each}
{/each}

{ error_messages_for 'token' %>

{#if @current_token.present? }
  { render partial: "current" %>
{:else}
  { render partial: "info" %>
{/each}

{ render partial: "form" %>
 -->