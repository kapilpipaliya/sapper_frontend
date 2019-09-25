<script>

</script>

<style>
  
</style>

<!-- 

{ toolbar title: t(:label_roadmap) do %>
  <li class="toolbar-item">
    { link_to_if_authorized({ controller: '/versions', action: 'new', project_id: @project },
                { class: 'button -alt-highlight',
                  aria: { label: t(:label_version_new) },
                  title: t(:label_version_new) }) do %>
        { op_icon('button--icon icon-add') %>
        <span class="button--text">{ t('activerecord.models.version') %></span>
    {/each}
  </li>
{/each}

{#if @versions.empty? }
  { no_results_box %>
{:else}
  <div id="roadmap">
    {#each @versions.each  as version}
      <h3 class="version icon-context icon-modules">
        { link_to_version version, name: h(version.name) %>
      </h3>
      { render partial: 'versions/overview', locals: {version: version} %>
      { render(partial: "wiki/content", locals: {content: version.wiki_page.content}) if version.wiki_page %>
      {#if (issues = @issues_by_version[version]) && issues.size > 0 }
      <form>
        <fieldset class="form--fieldset -collapsible">
          <legend class="form--fieldset-legend" >{ l(:label_related_work_packages) %></legend>
          <div>
            <ul>
              <%- issues.each do |issue| -%>
                <li>{ link_to_work_package(issue, project: (@project != issue.project)) %></li>
              <%- end -%>
            </ul>
          </div>
        </fieldset>
      </form>
      {/each}
      { call_hook :view_projects_roadmap_version_bottom, version: version %>
    {/each}
  </div>
{/each}

<% content_for :sidebar do %>
  { render partial: 'roadmap_filter' %>
  { render partial: 'roadmap_version_links' %>
{/each}

<% html_title(l(:label_roadmap)) %>
 -->