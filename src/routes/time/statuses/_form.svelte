<script>

</script>

<style>
  
</style>
<!-- 


{ error_messages_for :status %>

<section class="form--section">
  <div class="form--field -required">{ f.text_field 'name', required: true, container_class: '-middle' %></div>
  {#if WorkPackage.use_status_for_done_ratio? }
    <div class="form--field">{ f.select :default_done_ratio,
                    ((0..10).to_a.collect {|r| ["#{r*10} %", r*10] }),
                    include_blank: true,
                    label: WorkPackage.human_attribute_name(:done_ratio) %></div>
  {/each}
  <div class="form--field">{ f.check_box 'is_closed' %></div>
  <% unless @status.is_default? %>
    <div class="form--field">{ f.check_box 'is_default' %></div>
  {/each}

  <div class="form--field">
    <% disabled = !EnterpriseToken.allows_to?(:readonly_work_packages)  %>
    { f.check_box :is_readonly, disabled: disabled %>
    <div class="form--field-instructions">
      <p>{ t('statuses.edit.status_readonly_html') %></p>
      {#if disabled }
        <p>{ render(partial: 'enterprise/locked_note') %></p>
      {/if}
    </div>
  </div>

  { render partial: '/colors/color_autocomplete_field',
             locals: {
               form: f,
               object: @status,
               type: 'status',
               allow_bright_colors: true,
               label: t('statuses.edit.status_color_text')
            } %>

  { call_hook(:view_statuses_form, status: @status) %>
</section>
 -->