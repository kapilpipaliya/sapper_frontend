<script>

</script>

<style>
  
</style>
<!-- 

{ styled_form_tag(project_path(@project_to_destroy),
                    class: 'danger-zone',
                    method: :delete) do %>
  <section class="form--section">
    <h3 class="form--section-title">
      { l('project.destroy.title', name: "<em>#{h(@project_to_destroy)}</em>").html_safe %>
    </h3>
    <p>
      { l('project.destroy.confirmation', identifier: @project_to_destroy.identifier)%>
      {#if @project_to_destroy.descendants.any? }
        <br />
        <% descendants = h(@project_to_destroy.descendants.collect{|p| p.to_s}.join(', ')) %>
        { l('project.destroy.subprojects_confirmation', value: "<strong>#{h(descendants)}</strong>").html_safe %>
      {/each}
    </p>
    <p class="danger-zone--warning">
      <span class="icon icon-error"></span>
      <span>{ l('project.destroy.info')%></span>
    </p>
    <p>
      { l('project.destroy.project_verification', name: "<em class=\"danger-zone--expected-value\">#{h(@project_to_destroy)}</em>").html_safe %>
    </p>
    <div class="danger-zone--verification">
      <input type="text"></input>
      { styled_button_tag title: l(:button_delete), class: '-highlight', disabled: true do
           concat content_tag :i, '', class: 'button--icon icon-delete'
           concat content_tag :span, l(:button_delete), class: 'button--text'
           end %>
      { link_to projects_path,
          title: l(:button_cancel),
          class: 'button -with-icon icon-cancel' do %>
            { l(:button_cancel) %>
          {/each}
    </div>
  </section>
{/each}
 -->