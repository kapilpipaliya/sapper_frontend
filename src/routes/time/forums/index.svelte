<script>
// let header_tags = { auto_discovery_link_tag(:atom, { controller: '/activities', action: 'index', id: @project, format: 'atom', show_messages: 1, key: User.current.rss_key })
</script>

<style>
  
</style>

<!-- 
<% html_title t(:label_forum_plural) %>
{ toolbar title: t(:label_forum_plural) %>
<div class="generic-table--container">
  <div class="generic-table--results-container">
    <table class="generic-table boards">
      <colgroup>
        <col highlight-col>
        <col highlight-col>
        <col highlight-col>
        <col highlight-col>
      </colgroup>
      <thead>
        <tr>
          <th>
            <div class="generic-table--sort-header-outer">
              <div class="generic-table--sort-header">
                <span>
                  { Forum.name.humanize %>
                </span>
              </div>
            </div>
          </th>
          <th>
            <div class="generic-table--sort-header-outer">
              <div class="generic-table--sort-header">
                <span>
                  { t(:label_topic_plural) %>
                </span>
              </div>
            </div>
          </th>
          <th>
            <div class="generic-table--sort-header-outer">
              <div class="generic-table--sort-header">
                <span>
                  { t(:label_message_plural) %>
                </span>
              </div>
            </div>
          </th>
          <th>
            <div class="generic-table--sort-header-outer">
              <div class="generic-table--sort-header">
                <span>
                  { t(:label_message_last) %>
                </span>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <% for forum in @forums %>
          <tr>
            <td class="-no-ellipsis">
              { link_to h(forum.name), { action: 'show', id: forum }, class: "forum"  %><br />
              { format_text(forum.description) %>
            </td>
            <td>{ forum.topics_count %></td>
            <td>{ forum.messages_count %></td>
            <td>
              {#if forum.last_message }
                <% forum.last_message %>
                { authoring forum.last_message.created_on, forum.last_message.author %><br />
                { link_to_message forum.last_message, no_root: true %>
              {/each}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>

  </div>
</div>
{ other_formats_links do |f| %>
  { f.link_to 'Atom', url: { controller: '/activities', action: 'index', id: @project, show_messages: 1, key: User.current.rss_key } %>
{/each}
 -->