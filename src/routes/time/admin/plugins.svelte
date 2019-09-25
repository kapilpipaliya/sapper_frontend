<script>

</script>

<style>
  
</style>

<!-- 
<% html_title l(:label_administration), l(:label_plugins) %>
{ toolbar title: l(:label_modules_and_plugins) %>
{#if @plugins.any? }
  <div class="generic-table--container">
    <div class="generic-table--results-container">
      <table class="generic-table plugins">
        <colgroup>
          <col>
          <col>
          <col>
        </colgroup>
        <tbody>
          {#each @plugins.each  as plugin}
            <tr>
              <td><span class="name">{h plugin.name %></span>
                { content_tag('span', h(plugin.description), class: 'description') unless plugin.description.blank? %>
                { content_tag('span', link_to(h(plugin.url), plugin.url), class: 'url') unless plugin.url.blank? %>
              </td>
              <td class="author">{ plugin.author_url.blank? ? h(plugin.author) : link_to(h(plugin.author), plugin.author_url) %></td>
              <td class="version">
                {#if plugin.bundled }
                  { t(:label_bundled) %>
                {:else}
                  { h plugin.version %>
                {/each}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
      
    </div>
  </div>
{:else}
  { no_results_box %>
{/each}
 -->