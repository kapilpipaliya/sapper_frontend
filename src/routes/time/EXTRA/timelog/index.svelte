<script>

</script>

<style>
  
</style>

<!-- 

{ toolbar title: l(:label_spent_time) do %>
  {#if User.current.allowed_to?({controller: :timelog, action: :new}, @project) }
      <li class="toolbar-item">
        { link_to polymorphic_new_time_entry_path(@issue || @project), class: 'button' do %>
          { op_icon('button--icon icon-time') %>
          <span class="button--text">{ l(:button_log_time) %></span>
        {/each}
      </li>
  {/each}
{/each}

{ form_tag(polymorphic_path([@issue || @project, :time_entries]), method: :get, id: 'query_form') do %>
  { render partial: 'date_range' %>
{/each}

{ render 'time_entry_tabs' %>

<div class="notification-box -warning">
  <a title="close" class="notification-box--close icon-context icon-close"></a>
  <div class="notification-box--content">
    { t('deprecations.time_entries') %>
  </div>
</div>
<div>
  { other_formats_links do |f| %>
    { f.link_to 'CSV', url: permitted_params.timelog.to_h %>
  {/each}
</div>
<% html_title l(:label_spent_time) %>
 -->