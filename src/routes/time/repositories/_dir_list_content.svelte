<script>

</script>

<style>
  
</style>
<!-- 

{#if @entries.truncated? }
  <tr class="{ h params[:parent_id] %> entry file truncation-warning">
    <td colspan="7" style="padding-left: { 18 * params[:depth].to_i %>px;">
      <div class="notification-box -warning">
        <div class="notification-box--content">
          { I18n.t "repositories.truncated", limit: @limit, truncated: @entries.truncated %>
        </div>
      </div>
    </td>
  </tr>
{/each}

{#each @entries.each  as entry}
  <% tr_id = Digest::MD5.hexdigest(entry.path)
   depth = params[:depth].to_i %>
  <%  ent_path = replace_invalid_utf8(entry.path)   %>
  <%  ent_name = replace_invalid_utf8(entry.name)   %>
  <tr id="{ tr_id %>" class="{ h params[:parent_id] %> { h(entry.kind) %>">
    <td class="filename" style="padding-left: {18 * depth%>px;">
      {#if entry.dir? }
        <a class="icon-context dir-expander"
           title="{ I18n.t('js.label_expand') %>"
           href="#"
           data-element="{ "##{tr_id}" %>"
           aria-label="{ I18n.t('js.label_expand') %>"
           data-url="{ url_for(action: 'show',
                                  project_id: @project,
                                  repo_path: to_path_param(ent_path),
                                  rev: @rev,
                                  depth: (depth + 1),
                                  parent_id: tr_id) %>">
          { op_icon('icon-context') %>
          &nbsp
        </a>
      {/each}
      { link_to({ action: (entry.dir? ? 'show' : 'changes'), project_id: @project, repo_path: to_path_param(ent_path), rev: @rev },
                  class: 'icon-context',
                  aria: { label: (entry.dir? ? t('label_folder') : t('activerecord.attributes.attachment.file')) + " #{h(ent_name)}" }) do %>
        { op_icon(entry.dir? ? 'icon-folder' : "icon-ticket #{Redmine::MimeType.css_class_of(ent_name)}") %>
        { h(ent_name) %>
      {/each}
    </td>
    <td class="hidden-for-sighted"> { depth %></td>
    <td class="size">{ (entry.size ? number_to_human_size(entry.size, precision: 3) : "?") unless entry.dir? %></td>
    <% changeset = @project.repository.find_changeset_by_name(entry.lastrev.identifier) if entry.lastrev && entry.lastrev.identifier %>
    <td class="revision">{ link_to_revision(changeset, @project) if changeset %></td>
    <td class="age">{ distance_of_time_in_words(entry.lastrev.time, Time.now) if entry.lastrev && entry.lastrev.time %></td>
    <td class="author">{ changeset.nil? ? h(replace_invalid_utf8(entry.lastrev.author.to_s.split('<').first)) : h(changeset.author) if entry.lastrev %></td>
    <td class="comments">{h truncate(Changeset.to_utf8(changeset.comments, changeset.repository.repo_log_encoding), length: 50) unless changeset.nil? %></td>
  </tr>
{/each}
 -->