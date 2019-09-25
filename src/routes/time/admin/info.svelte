<script>

</script>

<style>
  
</style>

<!-- 

<% html_title(l(:label_administration), l(:label_information_plural)) -%>

{ toolbar title: I18n.t('label_information_plural') %>

<div class="attributes-group">
  <div class="attributes-key-value">
    { call_hook(:view_admin_info_top) %>
    {#if (product_version = OpenProject::VERSION.product_version).present? }
      <div class="attributes-key-value--key">{ l(:label_product_version) %></div>
      <div class="attributes-key-value--value-container">
        <div class="attributes-key-value--value -text">
          <span><strong>{ product_version %></strong></span>
        </div>
      </div>
    {/each}
    <div class="attributes-key-value--key">{ l(:label_core_version) %></div>
    <div class="attributes-key-value--value-container">
      <div class="attributes-key-value--value -text">
        <span><strong>{ OpenProject::Info.versioned_name %></strong> ({ @db_adapter_name %>)</span>
      </div>
    </div>
    {#if display_security_badge_graphic? }
      <div class="attributes-key-value--key"></div>
      <div class="attributes-key-value--value-container">
        <div class="attributes-key-value--value -text">
          <div class="security-badge--container">
            { content_tag :object, nil, data: security_badge_url, type: "image/svg+xml" %>
            { link_to '',
                        ::OpenProject::Static::Links[:security_badge_documentation][:href],
                        title: t(:label_what_is_this),
                        class: 'security-badge--help-icon icon-context icon-help1',
                        target: '_blank' %>
          </div>
        </div>
      </div>
    {/each}
    {#if (updated_on = OpenProject::VERSION.updated_on).present? }
      <div class="attributes-key-value--key">{ l(:label_last_change_on) %></div>
      <div class="attributes-key-value--value-container">
        <div class="attributes-key-value--value -text">
          <span>{ format_date(updated_on) %></span>
        </div>
      </div>
    {/each}
  </div>
</div>

{ content_tag :h3, I18n.t('label_system') %>

<div class="attributes-group">
  <div class="attributes-key-value">
    {#each @checklist.each  as label, result}
      <div class="attributes-key-value--key">{ l(label) %></div>
      <div class="attributes-key-value--value-container">
        <div class="attributes-key-value--value -text">
          <span>{ icon_wrapper((result ? 'icon-context icon-checkmark' : 'icon-context icon-bug'), (result ? l(:general_text_Yes) : l(:general_text_No))) %></span>
        </div>
      </div>
    {/each}
  </div>
</div>

<% @storage_information.each_with_index do  |(_,entries), i| %>
{ content_tag :h3, l(:label_storage_group, identifier: i + 1) %>
<div class="attributes-group">
  <div class="attributes-key-value">
    <div class="attributes-key-value--key">{ l(:label_storage_for) %></div>
    <div class="attributes-key-value--value-container">
      <div class="attributes-key-value--value -text">
        <span>
          {#each entries[:labels].each  as l}
            { l %>
            <br/>
          {/each}
        </span>
      </div>
    </div>
    <div class="attributes-key-value--key">{ l(:label_storage_free_space) %></div>
    <div class="attributes-key-value--value-container">
      <div class="attributes-key-value--value -text">
        <span>{ number_to_human_size(entries[:data][:free], precision: 2) %></span>
      </div>
    </div>
    <div class="attributes-key-value--key">{ l(:label_storage_used_space) %></div>
    <div class="attributes-key-value--value-container">
      <div class="attributes-key-value--value -text">
        <span>
          { number_to_human_size(entries[:data][:used], precision: 2) %>
          ({ entries[:data][:percent_used].round(2) %> %)
        </span>
      </div>
    </div>
  </div>
</div>
{/each}

{ call_hook(:view_admin_info_bottom) %>
 -->