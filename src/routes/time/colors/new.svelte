<script>

</script>

<style>
  
</style>

<!-- 

<% html_title l(:label_administration), "#{l(:label_new)} #{l("timelines.admin_menu.color")}" %>
<% local_assigns[:additional_breadcrumb] = l(:label_new) + ' ' + l("timelines.admin_menu.color") %>

{ labelled_tabular_form_for @color,
            url: colors_url,
            html: {method: 'post'},
            as: :color do |f| %>
  { render partial: 'form',
             locals: {f: f, color: @color} %>
{/each}
 -->