<script>

</script>

<style>
  
</style>

<!-- 

<% content_for :header_tags do %>
  { call_hook :search_index_head %>
  { include_gon(nonce: content_security_policy_script_nonce) %>
{/each}

<global-search-title></global-search-title>

<global-search-tabs></global-search-tabs>

{#if params[:work_packages].present? }
  <global-search-work-packages-entry></global-search-work-packages-entry>
{:else}

  <h3>{ l(:label_result_plural) %> ({ @results_count&.values&.sum || 0 %>)</h3>

  {#if @results.present? }

    { render partial: 'pagination', locals: {pagination_previous_date: @pagination_previous_date, pagination_next_date: @pagination_next_date } %>

    <dl id="search-results">
      {#each @results.each  as e}
        <dt class="{ e.event_type %>">

          <% event_type = e.event_type == 'meeting' ? 'meetings' : e.event_type %>
          <% event_type = e.event_type == 'cost_object' ? 'budget' : event_type %>
          <% event_type = e.event_type == 'reply' ? 'forums' : event_type %>
          { icon_wrapper("icon-context icon-#{event_type}", e.event_name) %>

          {#if e.project != @project }
            <span class="project">{ e.project %></span>
            <span> - </span>
          {/each}

          { link_to highlight_tokens(truncate(e.event_title, escape: false, length: 255), @tokens), with_notes_anchor(e, @tokens) %>
        </dt>
        <dd>
          <span class="description">{ highlight_first([last_journal(e).try(:notes),
                                                         attachment_fulltexts(e),
                                                         attachment_filenames(e),
                                                         e.event_description], @tokens) %></span>
          <span class="author">{ format_time(e.event_datetime) %></span>
        </dd>
      {/each}
    </dl>

  {/each}
{/each}

{ render partial: 'pagination', locals: {pagination_previous_date: @pagination_previous_date, pagination_next_date: @pagination_next_date } unless params[:work_packages].present? %>
<% html_title(l(:label_search)) -%>
 -->