<script>

</script>

<style>
  
</style>
<!-- 


<div class="modal-wrapper--content">
  <div class="onboarding--top-menu op-modal--modal-header">
    <a class="op-modal--modal-close-button dynamic-content-modal--close-button"
       title="{ t('js.close_popup_title') %>"
       aria-label="{ t('js.close_popup_title') %>">
      { op_icon('icon-close') %>
    </a>
  </div>

  <h3>{ I18n.t('js.label_export') %></h3>

  <div class="op-modal--modal-body">
    <ul class="export-options">
      <li>
        { link_to url_for(controller: '/activities',
                            action: 'index',
                            show_wiki_edits: 1,
                            apply: true,
                            key: User.current.rss_key, format: 'atom') do %>
            { op_icon('icon-big icon-export-atom') %>
            <span class="export-label">{ t('export.format.atom') %></span>
        {/each}
      </li>
      <li>
        { link_to url_for(version: @content.version, id: @page, format: 'markdown') do %>
            { op_icon('icon-big icon-ticket') %>
            <span class="export-label">{ t('text_formatting.markdown') %></span>
        {/each}
      </li>
    </ul>
  </div>
</div>

<% content_for :header_tags do %>
    { auto_discovery_link_tag(:atom, controller: '/activities', action: 'index', id: @project, show_wiki_edits: 1, format: 'atom', key: User.current.rss_key) %>
{/each}
 -->