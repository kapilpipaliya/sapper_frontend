<script>

</script>

<style>
  
</style>


<!-- 
{ toolbar title: t(:label_spent_time) do %>
  {#if User.current.allowed_to?({controller: 'timelog', action: :new}, @project) }
      <li class="toolbar-item">
        { link_to polymorphic_new_time_entry_path(@issue || @project), class: 'button' do %>
          { op_icon('button--icon icon-time') %>
          <span class="button--text">{ t(:button_log_time) %></span>
        {/each}
      </li>
  {/each}
{/each}

{ styled_form_tag(polymorphic_time_entries_report_path(@issue || @project), method: :get, id: 'query_form', class: '-vertical') do %>
  {#each @criterias.each  as criteria}
    { hidden_field_tag 'criterias[]', criteria, id: nil %>
  {/each}
  { render partial: 'timelog/date_range' %>
  { render 'timelog/time_entry_tabs' %>

  <div class="timelog-report-selection small-6">
    <div class="grid-block">

      <div class="form--field">
        { styled_label_tag :columns, "#{t(:label_details)}:" %>
        { styled_select_tag 'columns', options_for_select([[l(:label_year), 'year'],
                                                            [l(:label_month), 'month'],
                                                            [l(:label_week), 'week'],
                                                            [l(:label_day_plural).titleize, 'day']], @columns),
                                             container_class: '-slim' %>
      </div>

      <div class="form--field">
        { styled_label_tag :criterias, "#{t(:button_add)}:" %>
        <% available_criterias = [[]] + (@available_criterias.keys - @criterias).collect{ |k|
          [l_or_humanize(@available_criterias[k][:label]), k]
          }
        %>
        { styled_select_tag('criterias[]', options_for_select(available_criterias),
                                             id: "criterias",
                                             disabled: (@criterias.length >= 3),
                                             container_class: '-slim') %>
      </div>
    </div>
    <div class="grid-block">
      { submit_tag t(:button_apply), class: 'button -highlight' %>
      { link_to t(:button_clear), {project_id: @project, issue_id: @issue, period_type: params[:period_type], period: params[:period], from: @from, to: @to, columns: @columns}, class: 'button' %>
    </div>
  </div>
{/each}
<% unless @criterias.empty? %>
  <div class="total-hours">
    <p>{ t(:label_total) %>: { html_hours(l_hours(@total_hours)) %></p>
  </div>

  <% unless @hours.empty? %>
    <div class="generic-table--container">
      <div class="generic-table--results-container">
        <table class="generic-table" id="time-report">
          <colgroup>
            {#each @criterias.each  as criteria}
              <col highlight-col>
            {/each}
            {#each @periods.each  as period}
              <col highlight-col>
            {/each}
            <col highlight-col>
          </colgroup>
          <thead>
            <tr>
              {#each @criterias.each  as criteria}
                <th>
                  <div class="generic-table--sort-header-outer">
                    <div class="generic-table--sort-header">
                      <span>
                        { l_or_humanize(@available_criterias[criteria][:label]) %>
                      </span>
                    </div>
                  </div>
                </th>
              {/each}
              {#each @periods.each  as period}
                <th class="period">
                  <div class="generic-table--sort-header-outer">
                    <div class="generic-table--sort-header">
                      <span>
                        { period %>
                      </span>
                    </div>
                  </div>
                </th>
              {/each}
              <th class="total">
                <div class="generic-table--sort-header-outer">
                  <div class="generic-table--sort-header">
                    <span>
                      { t(:label_total) %>
                    </span>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            { render partial: 'report_criteria', locals: {criterias: @criterias, hours: @hours, level: 0} %>
            <tr class="total">
              <td>{ t(:label_total) %></td>
              { ('<td></td>' * (@criterias.size - 1)).html_safe %>
              <% total = 0 -%>
              <% @periods.each do |period| -%>
                <% sum = sum_hours(select_hours(@hours, @columns, period.to_s)); total += sum -%>
                <td class="hours">{ html_hours("%.2f" % sum) if sum > 0 %></td>
              <% end -%>
              <td class="hours">{ html_hours("%.2f" % total) if total > 0 %></td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>

    { other_formats_links do |f| %>
      { f.link_to 'CSV', url: permitted_params.timelog.to_h %>
    {/each}
  {/each}
{/each}

<% html_title t(:label_spent_time), t(:label_report) %>
 -->