<script>

</script>

<style>
  
</style>
<!-- 

{ error_messages_for 'message' %>
<% replying ||= false %>
<% representer_object = if replying
                          f.object.parent
                        else
                          f.object
                        end %>
<% resource = message_attachment_representer(representer_object) %>

<div class="form--field -required">
  { f.text_field :subject, required: true, container_class: '-wide', autofocus: true %>
</div>
<% unless replying %>
  <div class="form--field">
    { f.check_box :sticky, label: t(:label_board_sticky) %>
  </div>
  <div class="form--field">
    { f.check_box :locked, label: t(:label_board_locked) %>
  </div>
{/each}
{#if !replying && !@message.new_record? && User.current.allowed_to?(:edit_messages, @project) }
  <div class="form--field">
    { f.select :forum_id, @project.forums.collect {|b| [b.name, b.id]}, label: Forum.name.humanize, container_class: '-wide' %>
  </div>
{/each}

<div class="form--field -required -visible-overflow">
  { f.text_area :content,
                  label: t(:description_message_content),
                  class: 'wiki-edit',
                  container_class: '-xxwide',
                  with_text_formatting: true,
                  resource: resource,
                  preview_context: preview_context(representer_object) %>
</div>
 -->