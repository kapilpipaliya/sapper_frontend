<script>

</script>

<style>
  
</style>
<!-- 


<% error_message = l("activerecord.errors.template.header.#{(error_messages.count == 1) ? 'one' : 'other'}",
                     count: error_messages.count,
                     model: object_name)
%>

<% single_content_for :error_details do %>
  <p>{ t("errors.header_invalid_fields") %></p>
  <ul>
    {#each error_messages.each  as message}
      <li>{ message %></li>
    {/each}
  </ul>
{/each}

{ render partial: "common/error_base", locals: { error_message: error_message, classes: classes } %>
 -->