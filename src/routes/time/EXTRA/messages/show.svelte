<script>

</script>

<style>
  
</style>


<!-- 
<% breadcrumb_paths(
  link_to(t(:label_forum_plural), project_forums_path(@project)),
  link_to(h(@forum.name), project_forum_path(@project, @forum)))
%>
<% title avatar(@topic.author) + h(@topic.subject) %>
{ toolbar title: title do %>
    <li class="toolbar-item">
      { watcher_link(@topic, User.current) %>
    </li>
    <li class="toolbar-item">
      {#if !@topic.locked? && authorize_for('messages', 'reply') }
          { link_to({ action: 'quote', id: @topic }, class: 'boards--quote-button button') do %>
              { op_icon('button--icon icon-quote') %>
              <span class="button--text">{ t(:button_quote) %></span>
          {/each}
      {/each}
    </li>
    <li class="toolbar-item">
      {#if @message.editable_by?(User.current) }
          { link_to(edit_topic_path(@topic), accesskey: accesskey(:edit), class: 'button') do %>
              { op_icon('button--icon icon-edit') %>
              <span class="button--text">{ t(:button_edit) %></span>
          {/each}
      {/each}
    </li>
    <li class="toolbar-item">
      {#if @message.destroyable_by?(User.current) }
          { link_to(topic_path(@topic), method: :delete, data: { confirm: t(:text_are_you_sure) }, class: 'button') do %>
              { op_icon('button--icon icon-delete') %>
              <span class="button--text">{ t(:button_delete) %></span>
          {/each}
      {/each}
    </li>
{/each}

<div class="forum-message">
  <p class="author additional-information">{ authoring @topic.created_on, @topic.author %></p>
  <div class="wiki">
    { format_text(@topic.content, object: @topic, attachments: @topic.attachments) %>
  </div>

  <% resource = message_attachment_representer(@topic) %>
  { list_attachments(resource) %>

</div>
<br />

<div class="forum-message--comments comments">
  <% unless @replies.empty? %>
    <h3 class="icon-context icon-quote">{ t(:label_reply_plural) %> ({ @replies.count %>)</h3>
    {#each @replies.each  as message}
      <div class="comment" id="{ "message-#{message.id}" %>">
        <div class="contextual">
          { link_to(icon_wrapper('icon-context icon-quote', t(:button_quote)),
                    { action: 'quote', id: message },
                    title: t(:button_quote),
                    class: 'boards--quote-button no-decoration-on-hover',
                    alt: t(:button_quote)) if !@topic.locked? && authorize_for('messages', 'reply') %>
          { link_to(icon_wrapper('icon-context icon-edit', t(:button_edit)),
                    { action: 'edit', id: message },
                    title: t(:button_edit),
                    class: 'no-decoration-on-hover',
                    alt: t(:button_edit)) if message.editable_by?(User.current) %>
          { link_to(icon_wrapper('icon-context icon-delete', t(:button_delete)),
                    { action: 'destroy', id: message},
                    method: :delete,
                    data: { confirm: t(:text_are_you_sure) },
                    title: t(:button_delete),
                    class: 'no-decoration-on-hover',
                    alt: t(:button_delete)) if message.destroyable_by?(User.current) %>
        </div>
        <h4 class="author additional-information">
          { avatar(message.author) %>
          { link_to h(message.subject), topic_path(@topic,
                                                   r: message,
                                                   anchor: "message-#{message.id}") %>
          -
          { authoring message.created_on, message.author %>
        </h4>
        <div class="wiki">
          { format_text message, :content, attachments: message.attachments %>
        </div>
        <% resource = message_attachment_representer(message) %>
        { list_attachments(resource) %>
      </div>
    {/each}
    { pagination_links_full @replies, per_page_links: false %>
  {/each}

  {#if !@topic.locked? && authorize_for('messages', 'reply') }
    <div class="form--space">
      { toggle_link t(:button_reply), "reply", {focus: 'reply_content'}, {class: 'button -highlight'} %>
    </div>

    <div id="reply" style="display:none;">

      <hr class="form--separator" />

      { labelled_tabular_form_for @reply,
                                    as: :reply,
                                    url: reply_to_topic_path(@topic),
                                    html: { multipart: true,
                                            id: 'message-form',
                                            class: 'form' } do |f| %>
        { render partial: 'form', locals: {f: f, replying: true} %>

        <hr class="form--separator" />

        { f.button t(:button_submit), class: 'button -highlight -highlight -with-icon icon-checkmark' %>
        { toggle_link t(:button_cancel), "reply", {}, { class: 'button' } %>
      {/each}
      <div id="preview"></div>
    </div>
  {/each}
</div>

<% html_title h(@topic.subject) %>
 -->