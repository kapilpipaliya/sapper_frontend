<script>

</script>

<style>
  
</style>
<!-- 


<h2>{ link_to h(@forum.name), controller: '/forums', action: 'show', project_id: @project, id: @forum %> &#187; {h @message.subject %></h2>

{ labelled_tabular_form_for @message,
                              url: topic_path(@message),
                              method: :put,
                              html: { multipart: true,
                                      id: 'message-form',
                                      class: 'form' } do |f| %>
  { render partial: 'form', locals: { f: f, replying: !@message.parent.nil? } %>

  <hr class="form--separator" />

  { f.button t(:button_save), class: 'button -highlight -with-icon icon-checkmark' %>
  { link_to t(:button_cancel), topic_path(@message), class: 'button -with-icon icon-cancel' %>
{/each}
<div id="preview"></div>
 -->