<script>

</script>

<style>
  
</style>
<!-- 

{#if @repository.managed? }
  { styled_form_tag(project_repository_path(@project), method: :delete, class: 'danger-zone') do %>
    <section class="form--section">
      <h3 class="form--section-title">
        { l('repositories.destroy.title', repository_type: "<em>#{h(@repository.repository_type)} - #{l(:project_module_repository)}</em>").html_safe %>
      </h3>
      <p>
        { l('repositories.destroy.subtitle', repository_type: "#{h(@repository.repository_type)} - #{l(:project_module_repository)}", project_name: h(@project.identifier)).html_safe %> <br />
        { l('repositories.destroy.confirmation') %>
        <br/>
        { l('repositories.destroy.managed_path_note', path: @repository.root_url) %>
      </p>
      <p class="danger-zone--warning">
        <span class="icon icon-error"></span>
        <span>{ l('repositories.destroy.info') %></span>
      </p>
      <p>
        { l('repositories.destroy.repository_verification', identifier: "<em class=\"danger-zone--expected-value\">#{h(@project.identifier)}</em>").html_safe %>
      </p>
      <div class="danger-zone--verification">
        <input type="text"></input>
        { styled_button_tag project_repository_path(@project),
          method: :delete,
          title: l(:button_delete),
          disabled: true,
          class: '-highlight' do %>
            { op_icon('button--icon icon-delete') %>
            <span class="button--text">{ l(:button_delete) %></span>
        {/each}
        { link_to settings_repository_tab_path,
          title: l(:button_cancel),
          class: 'button -with-icon icon-cancel' do %>
            { l(:button_cancel) %>
        {/each}
      </div>
    </section>
  {/each}
{:else}
  <div class="notification-box -warning">
    <div class="notification-box--content">
      <p><strong>{ l('repositories.destroy.title_not_managed', repository_type: "<em>#{h(@repository.repository_type)} - #{l(:project_module_repository)}</em>").html_safe %></strong><br /></p>
      <p>
        { l('repositories.destroy.subtitle_not_managed',
            repository_type: "#{h(@repository.repository_type)} - #{l(:project_module_repository)}",
            project_name: h(@project.identifier),
            url: h(@repository.url)).html_safe %> <br />
      </p>
      <p>
        <span>{ l('repositories.destroy.info_not_managed') %></span>
      </p>
      <p>
        { link_to project_repository_path(@project),
          title: l(:button_delete),
          method: :delete,
          class: 'button' do %>
          { op_icon('button--icon icon-remove') %>
          <span class="button--text">{ l(:button_remove) %></span>
        {/each}
        { link_to settings_repository_tab_path,
          title: l(:button_cancel),
          class: 'button -with-icon icon-cancel' do %>
            { l(:button_cancel) %>
        {/each}
      </p>
    </div>
  </div>
{/each}

 -->