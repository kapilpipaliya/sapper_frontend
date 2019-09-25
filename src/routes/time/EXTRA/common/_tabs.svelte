<script>

</script>

<style>
  
</style>
<!-- 

<div class="tabs">
  <ul>
    {#each tabs.each  as tab}
      <li>{
    position_span = you_are_here_info(tab[:name], tab != selected_tab)
    caption = case tab[:label]
    when Proc
      tab[:label].call
    else
      t(tab[:label])
    end
    link_to(position_span + caption, { tab: tab[:name] },
                                       id: "tab-#{tab[:name]}",
                                       class: "tab-show #{(tab == selected_tab ? 'selected' : '')}",
                                       data: { name: tab[:name] }) %></li>
    {/each}
  </ul>
  <div class="tabs-buttons" style="display:none;">
    <button class="tab-left icon-context icon-arrow-left4"></button>
    <button class="tab-right icon-context icon-arrow-right5"></button>
  </div>
</div>

{ content_tag 'div',
                render(partial: selected_tab[:partial], locals: { tab: selected_tab } ),
                id: "tab-content-#{selected_tab[:name]}",
                class: 'tab-content' %>
 -->