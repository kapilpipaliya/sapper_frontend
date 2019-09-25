<script>

</script>

<style>
  
</style>
<!-- 


<% html_title(l(:label_administration), l(:label_overview)) -%>

{ toolbar title: t(:label_overview) %>

<div class="menu-blocks--container">
  <% @menu_nodes.each do |menu_node| -%>
    { link_to menu_node.url, { class: 'menu-block' } do %>
      { op_icon('menu-block--icon ' + menu_node.icon) %>
      <span class="menu-block--title"> { menu_node.caption %> </span>
    {/each}
  {/each}
</div>
 -->