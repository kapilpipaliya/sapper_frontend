<script>

</script>

<style>
  
</style>
<!-- 


<% content_for :header_tags do %>
  { javascript_include_tag 'repository_navigation' %>
{/each}

<persistent-toggle data-identifier="repository.checkout_instructions"></persistent-toggle>
{ toolbar title: l('repositories.named_repository',
                     vendor_name: @repository.class.vendor_name) do %>
  {#if @instructions && @instructions.available? }
  <li class="toolbar-item toolbar-input-group">
    <div class="toolbar-input-group--affix -prepend">
      <span>{ @instructions.checkout_command %></span>
    </div>
    <input id="repository-checkout-url"
           type="text" class="-clickable" size="40"
           value="{ @instructions.checkout_url(true) %>"
           readonly>
    <% csp_onclick('this.focus(); this.select();', '#repository-checkout-url') %>
    <copy-to-clipboard click-target=".repository-checkout-copy-button"
                       clipboard-target="#repository-checkout-url">
    </copy-to-clipboard>
    <button class="repository-checkout-copy-button toolbar-input--affix toolbar-input-group--affix -append"
            title="{ l(:label_copy_to_clipboard) %>">
      { op_icon('icon-copy') %>
      <span class="hidden-for-sighted">{ l(:label_copy_to_clipboard) %></span>
    </button>
  </li>
  <li class="toolbar-item -icon-only">
    <a id="repository--checkout-instructions-toggle"
       class="persistent-toggle--click-handler button"
       title="{ l('repositories.checkout.show_instructions') %>">
      { op_icon('button--icon icon-info1') %>
    </a>
  </li>
  {/each}
  {#if !empty && User.current.allowed_to?(:browse_repository, @project) }
  <li class="toolbar-item -icon-only">
    { link_to stats_project_repository_path(@project),
        class: 'button', title: l(:label_statistics) do %>
      { op_icon('button--icon icon-chart1') %>
    {/each}
  </li>
  {/each}
  { call_hook(:repositories_navigation_toolbar,
                { repository: @repository, project: @project, repository_empty: empty }) %>
  {#if User.current.allowed_to?(:manage_repository, @project) }
    <li class="toolbar-item -icon-only">
      { link_to settings_project_path(@project, tab: 'repository'),
          class: 'button', title: l(:label_settings) do %>
        { op_icon('button--icon icon-settings') %>
      {/each}
    </li>
  {/each}
{/each}


{#if @instructions }
  { render partial: 'checkout_instructions',
             locals: { repository: @repository, instructions: @instructions } %>
{/each}


 -->