<script>

</script>

<style>
  
</style>
<!-- 

{ toolbar title: l(:label_repository) %>
{ simple_format(l(:text_repository_usernames_mapping)) %>
{#if @committers.empty? }
  <% no_results_box %>
{:else}
  { form_tag({}) do %>
    <div class="generic-table--container">
      <div class="generic-table--results-container">
        <table class="generic-table">
          <colgroup>
            <col highlight-col>
            <col highlight-col>
          </colgroup>
          <thead>
            <tr>
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      { User.human_attribute_name(:login) %>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      { User.model_name.human %>
                    </span>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <% i = 0 -%>
            <% @committers.each do |committer, user_id| -%>
              <tr>
                <td>{h committer %></td>
                <td>
                  { hidden_field_tag "committers[#{i}][]", committer %>
                  { select_tag "committers[#{i}][]", content_tag('option', "-- #{l :actionview_instancetag_blank_option} --", value: '') + options_from_collection_for_select(@users, 'id', 'name', user_id.to_i) %>
                </td>
              </tr>
              <% i += 1 -%>
            <% end -%>
          </tbody>
        </table>
        
      </div>
    </div>
    <hr class="form--separator" />
    <p>
      { submit_tag l(:button_update), class: 'button -highlight' %>
      { link_to settings_project_path(id: @project.id, tab: 'repository'), class: 'button' do %>
        <span class="button--text">{ l(:button_cancel) %></span>
      {/each}
    </p>
  {/each}
{/each}
 -->