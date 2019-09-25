<script>

</script>

<style>
  
</style>
<!-- 

{#if repository.new_record? }
  <% scm_types = repository.class.available_types %>

  <div class="attributes-group -toggleable" data-switch="scm_type">
   <% scm_types.each do |type|%>
     <div class="form--field">
      { styled_label_tag type, l("repositories.#{@repository.vendor}.#{type}_title") %>
      <div class="form--field-container">
        { styled_radio_button_tag 'scm_type', type, scm_types.length == 1 ? true : false, id: type, autofocus: true %>
      </div>
    </div>
    {/each}

      <% scm_types.each do |type|%>
          { render partial: "/repositories/settings/vendor_attribute_groups",
                     locals: { existing: false, alone: scm_types.length == 1,
                               vendor: @repository.vendor, type: type,
                               form: form, repository: repository } %>
      {/each}
  </div>
{:else}
  { render partial: "/repositories/settings/vendor_attribute_groups",
             locals: { existing: true, alone: true, vendor: @repository.vendor,
                       type: repository.scm_type,
                       form: form, repository: repository } %>
{/each}
 -->