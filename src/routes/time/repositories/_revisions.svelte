<script>

</script>

<style>
  
</style>
<!-- 


{ form_tag({controller: '/repositories', action: 'diff', project_id: @project, repo_path: to_path_param(path)}, method: :get) do %>
  <div class="generic-table--container">
    <div class="generic-table--results-container">
      <table class="generic-table changesets">
        <colgroup>
          <col highlight-col>
          <col>
          <col>
          <col highlight-col>
          <col highlight-col>
          <col highlight-col>
        </colgroup>
        <caption class="hidden-for-sighted">
          <span>
            { t(:text_table_difference_description, entries: t(:label_changeset) + ' ' + t(:label_version_plural)) %>
          </span>
        </caption>
        <thead>
          <tr>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  <span aria-describedby="revision-id--description">
                    #
                  </span>
                  <label id="revision-id--description" class="hidden-for-sighted">
                    { t(:label_changeset_id) %>
                  </label>
                </div>
              </div>
            </th>
            <th>
              <div class="generic-table--empty-header">
                <div class="generic-table--header">
                  <span>
                    { t(:description_compare_from) + ' ' + t(:label_changeset) %>
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div class="generic-table--empty-header">
                <div class="generic-table--header">
                  <span>
                    { t(:description_compare_to) + ' ' + t(:label_changeset) %>
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  <span>
                    { t(:label_date) %>
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  <span>
                    { Changeset.human_attribute_name(:author) %>
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  <span>
                    { Changeset.human_attribute_name(:comments) %>
                  </span>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <% show_diff = revisions.size > 1 %>
          <% line_num = 1 %>
          {#each revisions.each  as changeset}
            <tr class="changeset">
              <td class="id">
                { link_to_revision(changeset, project) %>
              </td>
              <td class="checkbox">
                { label_tag "cb-#{line_num}", t(:description_compare_from) + ' ' + t(:label_changeset), class: 'hidden-for-sighted' %>
                {#if show_diff && (line_num < revisions.size) }
                { radio_button_tag 'rev',
                                     changeset.identifier,
                                     (line_num==1),
                                     id: "cb-#{line_num}" %>
                <% csp_onclick("jQuery('#cbto-#{line_num+1}').attr('checked', true);",
                               "cb-#{line_num}") %>
                {/each}
              </td>
              <td class="checkbox">
                { label_tag "cbto-#{line_num}", t(:description_compare_to) + ' ' + t(:label_changeset), class: 'hidden-for-sighted' %>
                {#if show_diff && (line_num > 1) }
                { radio_button_tag 'rev_to',
                                     changeset.identifier,
                                     (line_num==2),
                                     id: "cbto-#{line_num}" %>
                  <% csp_onclick("if (jQuery('#cb-#{line_num}').attr('checked')) {jQuery('#cb-#{line_num-1}').attr('checked', true)}",
                                 "cbto-#{line_num}") %>
                {/each}
              </td>
              <td class="committed_on">
                { format_time(changeset.committed_on) %>
              </td>
              <td class="author">
                {h changeset.author %>
              </td>
              <td class="comments">
                { format_revision_text(truncate_at_line_break(Changeset.to_utf8(changeset.comments, changeset.repository.repo_log_encoding))) %>
              </td>
            </tr>
            <% line_num += 1 %>
          {/each}
        </tbody>
      </table>

    </div>
  </div>
  {#if show_diff }
    <div class="generic-table--action-buttons">
      <button type="submit" class="button">
        { op_icon('button--icon icon-compare2') %>
        <span class="button--text">{ t(:label_view_diff) %></span>
      </button>
    </div>
  {/each}
{/each}
 -->