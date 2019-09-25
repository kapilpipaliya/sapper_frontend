<script>

</script>

<style>
  
</style>

<!-- <% breadcrumb_paths(nil) %>
<h2 class="headline--application">
  <span>{ organization_icon %></span>
  { organization_name %>
</h2>

{ render partial: 'announcements/show' %>

{#if @homescreen[:blocks].any? }
  <section class="widget-boxes -flex">
  {#each @homescreen[:blocks].each  as block}
    {#if block[:if].nil? || instance_eval(&block[:if]) }
      <div class="widget-box { block[:partial] %>">
      { render partial: "homescreen/blocks/#{block[:partial]}", locals: (block[:locals] || {}) %>
      </div>
    {/each}
  {/each}
  </section>
{/each}

{#if show_homescreen_links? && @homescreen[:links].any? }
  <section class="homescreen--links">
  {#each @homescreen[:links].each  as link}
    <% title = I18n.t(link[:label], scope: 'homescreen.links', default: I18n.t(link[:label])) %>
    <a class="homescreen--links--item" href="{ link[:url] %>" target="_blank" title="{ title %>">
      { op_icon(link[:icon]) %>
      { title %>
    </a>
  {/each}
  </section>
{/each}

{ call_hook :homescreen_after_links %>
 -->