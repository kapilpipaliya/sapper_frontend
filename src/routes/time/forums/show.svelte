<script>
// let header_tags =   { auto_discovery_link_tag(:atom, {format: 'atom', key: User.current.rss_key}, title: "#{@project}: #{@forum}")

</script>

<style>
  
</style>


<!-- 
<div id="add-message" style="display:none;">
  {#if authorize_for('messages', 'new') }
    <h2>{ link_to h(@forum.name), project_forum_path(@project, @forum) %> &#187; { t(:label_message_new) %></h2>
    { labelled_tabular_form_for Message.new(project: @project),
                                  url: forum_topics_path(@forum),
                                  html: {multipart: true,
                                         id: 'message-form',
                                         class: 'form'} do |f| %>
      { render partial: 'messages/form', locals: {f: f} %>

      <hr class="form--separator"/>
      { styled_button_tag t(:button_create), class: '-highlight -with-icon icon-checkmark' %>
      { link_to t(:button_cancel), '', class: 'cancel-add-message-button button' %>
      <% csp_onclick('jQuery("#add-message").hide();', '.cancel-add-message-button') %>
    {/each}
    <div id="preview"></div>
  {/each}
</div>

{ toolbar title: @forum.name, subtitle: format_text(@forum.description) do %>
  {#if authorize_for(:messages, :new) }
    <li class="toolbar-item">
      { link_to({controller: '/messages', action: 'new', forum_id: @forum},
                  {class: 'add-message-button button -alt-highlight',
                   aria: {label: t(:label_message_new)},
                   title: t(:label_message_new)}) do %>
        { op_icon('button--icon icon-add') %>
        <span class="button--text">{ t(:label_message) %></span>
      {/each}
      <% csp_onclick('jQuery("#add-message").show(); jQuery("#message_subject").focus();', '.add-message-button') %>
    </li>
  {/each}
  <% unless User.current.anonymous? %>
    <li class="toolbar-item">
      { watcher_link(@forum, User.current) %>
    </li>
  {/each}
{/each}

{#if @topics.any? }
  <div class="generic-table--container">
    <div class="generic-table--results-container">
      <table class="generic-table">
        <colgroup>
          <col highlight-col>
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
                    { Message.human_attribute_name(:subject) %>
                  </span>
              </div>
            </div>
          </th>
          <th>
            <div class="generic-table--sort-header-outer">
              <div class="generic-table--sort-header">
                  <span>
                    { Message.human_attribute_name(:author) %>
                  </span>
              </div>
            </div>
          </th>
          { sort_header_tag("created_on", caption: Message.human_attribute_name(:created_on)) %>
          { sort_header_tag("replies", caption: t(:label_reply_plural)) %>
          { sort_header_tag("updated_on", caption: t(:label_message_last)) %>
        </tr>
        </thead>
        <tbody>
        {#each @topics.each  as message}
          <tr>
            <td class="subject">
              {#if message.sticky? }
                { op_icon('icon-wiki', title: I18n.t('js.label_board_sticky')) %>
              {/each}
              {#if message.locked? }
                { op_icon('icon-locked', title: I18n.t('js.label_board_locked')) %>
              {/each}
              { link_to message.subject, topic_path(message) %>
            </td>
            <td class="author">
              {#if message.author }
                { link_to message.author.name, user_path(message.author) %>
              {/each}
            </td>
            <td class="created_on">
              { format_time message.created_on %>
            </td>
            <td class="replies">{ message.replies_count %></td>
            <td class="last_message">
              {#if message.last_reply }
                { authoring message.last_reply.created_on, message.last_reply.author %><br/>
                <br/>
                { link_to_message message.last_reply, no_root: true %>
              {/each}
            </td>
          </tr>
        {/each}
        </tbody>
      </table>
    </div>
  </div>
  { pagination_links_full @topics %>
{:else}
  { no_results_box %>
{/each}

{ other_formats_links do |f| %>
  { f.link_to 'Atom', url: {key: User.current.rss_key} %>
{/each}
<% html_title h(@forum.name) %>
 -->