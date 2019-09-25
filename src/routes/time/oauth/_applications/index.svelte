<script>

</script>

<style>
  
</style>

<!-- 
<% html_title t(:label_administration), t('oauth.application.plural') -%>

{ toolbar title: t('oauth.application.plural'), title_class: 'no-padding-bottom' do %>
  <li class="toolbar-item">
    { link_to new_oauth_application_path,
        { class: 'button -alt-highlight',
          title: t('oauth.application.new')} do %>
      { op_icon('button--icon icon-add') %>
      <span class="button--text">{ t(:button_add) %></span>
    {/each}
  </li>
{/each}

{ cell ::OAuth::Applications::TableCell, @applications, current_user: current_user %>
 -->