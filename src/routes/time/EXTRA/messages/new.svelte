<script>

</script>

<style>
  
</style>

<!-- 

<h2>{ link_to h(@forum.name), controller: '/forums', action: 'show', project_id: @project, id: @forum %> &#187; { t(:label_message_new) %></h2>

{ labelled_tabular_form_for @message,
                              url: forum_topics_path(@forum),
                              html: { multipart: true,
                                      id: 'message-form',
                                      class: 'form' } do |f| %>
  { render partial: 'messages/form', locals: { f: f } %>

  <hr class="form--separator" />

  { f.button t(:button_create), class: 'button -highlight -with-icon icon-checkmark' %>
  { link_to t(:button_cancel), project_forum_path(@project, @forum), class: 'button -with-icon icon-cancel' %>
{/each}

<div id="preview"></div>
 -->