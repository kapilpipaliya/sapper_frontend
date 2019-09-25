<script>

</script>

<style>
  
</style>
<!-- 


<% html_title l(:label_administration), "#{l(:label_edit)} #{l("timelines.admin_menu.color")} #{h @color.name}" %>
<% local_assigns[:additional_breadcrumb] = @color.name %>

{ labelled_tabular_form_for @color,
            url: color_url(@color),
            html: {method: 'put'}, as: :color do |f| %>
  { render partial: 'form',
             locals: {f: f, color: @color} %>
{/each}
 -->