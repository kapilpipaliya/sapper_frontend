<script>

</script>

<style>
  
</style>
<!-- 


<% html_title(l(:label_my_account), I18n.t('my_account.access_tokens.access_token')) -%>

<% breadcrumb_paths(l(:label_my_account), I18n.t('my_account.access_tokens.access_token')) %>
{ toolbar title: I18n.t('my_account.access_tokens.access_token') %>

<p>{ l(:text_access_token_hint) %></p>

{#if has_tokens? }
    <div class="generic-table--container">
      <div class="generic-table--results-container" style="max-height: 340px;">
        <table id="access-token-table" class="generic-table">
          <colgroup>
            <col highlight-col>
            <col highlight-col>
            <col highlight-col>
            <col highlight-col>
          </colgroup>
          <thead>
          <tr>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  { l('attributes.name') %>
                </div>
              </div>
            </th>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  { User.human_attribute_name(:created_on) %>
                </div>
              </div>
            </th>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  { I18n.t('my_account.access_tokens.headers.expiration') %>
                </div>
              </div>
            </th>
            <th>
              <div class="generic-table--sort-header-outer">
                <div class="generic-table--sort-header">
                  { I18n.t('my_account.access_tokens.headers.action') %>
                </div>
              </div>
            </th>
          </tr>
          </thead>
          <tbody>
          {#if Setting.feeds_enabled? }
            {#if @user.rss_token }
              <tr>
                <td>{ l(:label_feeds_access_key_type) %></td>
                <td>
                  <span title="{ format_time(@user.rss_token.created_on) %>">
                    { format_time(@user.rss_token.created_on.to_s) %>
                  </span>
                </td>
                <td>{ I18n.t('my_account.access_tokens.indefinite_expiration') %></td>
                <td>
                  { link_to l(:button_reset),
                              { action: 'generate_rss_key' },
                              method: :post,
                              class: 'icon icon-delete' %>
                </td>
              </tr>
            {:else}
              <tr>
                <td>{ l(:label_feeds_access_key_type) %></td>
                <td>{ l(:label_missing_feeds_access_key) %></td>
                <td></td>
                <td>
                  { link_to l(:button_generate),
                              { action: 'generate_rss_key' },
                              method: :post,
                              class: 'icon icon-key' %>
                  </a>
                </td>
              </tr>
            {/each}
          {/each}
          {#if Setting.rest_api_enabled? }
            {#if @user.api_token }
              <tr>
                <td>{ l(:label_api_access_key_type) %></td>
                <td>
                  <span title="{ format_time(@user.api_token.created_on) %>">
                    { format_time(@user.api_token.created_on.to_s) %>
                  </span>
                </td>
                <td>{ I18n.t('my_account.access_tokens.indefinite_expiration') %></td>
                <td>
                  { link_to l(:button_reset),
                              { action: 'generate_api_key' },
                              method: :post,
                              class: 'icon icon-delete' %>
                </td>
              </tr>
            {:else}
              <tr>
                <td>{ l(:label_api_access_key_type) %></td>
                <td>{ l(:label_missing_api_access_key) %></td>
                <td></td>
                <td>
                  { link_to l(:button_generate),
                              { action: 'generate_api_key' },
                              method: :post,
                              class: 'icon icon-key' %>
                  </a>
                </td>
              </tr>
            {/each}
          {/each}
          {#each granted_applications.each  as application, tokens}
            <% latest = tokens.sort_by(&:created_at).last %>
            <tr id="oauth-application-grant-{ application.id %>">
              <td>
                { t('oauth.application.named', name: application.name) %>
                &nbsp;
                ({ t('oauth.x_active_tokens', count: tokens.count) %>)
              </td>
              <td>
                <span>{ format_time(latest.created_at) %></span>
              </td>
              <td>
                <span>{ format_time(latest.created_at + latest.expires_in.seconds) %></span>
              </td>
              <td>
                { link_to t(:button_revoke),
                            revoke_my_oauth_application_path(application_id: application.id),
                            data: { confirm: I18n.t('oauth.revoke_my_application_confirmation',
                                                    token_count: t('oauth.x_active_tokens', count: tokens.count)) },
                            method: :post,
                            class: 'icon icon-delete' %>
              </td>
            </tr>
          {/each}
          { call_hook(:view_access_tokens_table, user: @user) %>
          </tbody>
        </table>
        
      </div>
    </div>
{:else}
  { no_results_box %>
{/each}
 -->