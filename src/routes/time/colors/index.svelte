<script>

</script>

<style>
  
</style>
<!-- 


<% html_title l(:label_administration), l("timelines.admin_menu.colors") %>

{ toolbar title: l('timelines.admin_menu.colors') do %>
  <li class="toolbar-item">
    { link_to new_color_path,
          { class: 'button -alt-highlight',
            aria: {label: l('timelines.new_color')},
            title: l('timelines.new_color')} do %>
      { op_icon('button--icon icon-add') %>
      <span class="button--text">{ t('activerecord.attributes.type.color') %></span>
    {/each}
  </li>
{/each}

{#if @colors.any? }
  <div class="color--preview-patch-field">
    {#each @colors.each  as color}
      { content_tag :div,
          class: 'color--preview-patch',
          style: "background-color: #{color.hexcode}" do %>
        { link_to color.name,
                    edit_color_path(color),
                    class: color.bright? ? '-bright' : '-dark' %>
      {/each}
    {/each}
  </div>
{:else}
  { no_results_box(action_url: new_color_path, display_action: true) unless @colors.any? %>
{/each}
 -->