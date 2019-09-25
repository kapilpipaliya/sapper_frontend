<script>

</script>

<style>
  
</style>
<!-- 


{#if storage['total'] > 0 }
<fieldset class="form--fieldset">
  <legend class="form--fieldset-legend">{l(:label_required_disk_storage)%></legend>

  {#each storage['modules'].each  as label, value}
    { render partial: 'projects/form/attributes/storage_field',
               locals: { label: l(label), value: value } %>
  {/each}
  <%# Hide total when there's only one module %>
  {#if storage['modules'].length > 1 }
    { render partial: 'projects/form/attributes/storage_field',
               locals: { label: l(:label_total), value: storage['total'] } %>
  {/each}
</fieldset>
{/each}
 -->