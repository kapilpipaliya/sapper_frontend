<script>

</script>

<style>
  
</style>

<!-- 

<% html_title t(:label_summary) %>
{ toolbar title: t(:label_summary) %>
<div class="form--fieldset">
  <div class="form--fieldset-legend">{ @report.report_type %></div>

  { render partial: 'report', locals: { statuses: @statuses,
                                          rows: @rows,
                                          data: @data,
                                          field_name: @field,
                                          report: @report } %>
  <br />
</div>

{ link_to t(:button_back), report_project_work_packages_path(@project), class:'button' %>
 -->