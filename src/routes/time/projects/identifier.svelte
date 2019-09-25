<script>

</script>

<style>
  
</style>
<!-- 


{ error_messages_for @project %>

{ form_for @project, url: { action: 'update_identifier' }, html: { class: 'danger-zone form -vertical' } do |f| %>
  <section class="form--section">
    <h3 class="form--section-title">
      { l('project.identifier.title') %>
    </h3>

    <p class="danger-zone--warning">
      <span class="icon icon-error"></span>
      <span>{ l('project.identifier.warning_one').html_safe %></span>
      <br>
      <span class="icon icon-error"></span>
      <span>{ l('project.identifier.warning_two').html_safe %></span>
    </p>

    { styled_label_tag 'identifier', Project.human_attribute_name(:identifier), class: '-required' %>
    <div class="danger-zone--verification">
      { f.text_field :identifier %>
      <span>
        { f.submit l(:button_update), class: 'button -highlight -with-icon icon-checkmark' %>
      </span>
      <span>
        { link_to settings_project_path(@project), class: 'button' do %>
          <span class="button--text">{ l(:button_cancel) %></span>
        {/each}
      </span>
    </div>


    <br>

    <div class="form--field-instructions">
      { l(:text_length_between, min: 1,
                                  max: Project::IDENTIFIER_MAX_LENGTH) %>
      { l(:text_project_identifier_info).html_safe %>
    </div>

  </section>
{/each}
 -->