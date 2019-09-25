<script>

</script>

<style>
  
</style>
<!-- 


<div class="grid-block">
  <div class="grid-block medium-4" id="principal_results">
    <fieldset class="form--fieldset principals medium-11">
      <legend class="form--fieldset-legend">{"#{l(:label_user_plural)}/#{l(:label_group_plural)}" %></legend>
      {#if principals.empty? }
        { l('notice_no_principals_found') %>
      {:else}
        {#if principals.size > 20 }
          { l('notice_to_many_principals_to_display') %>
        {:else}
          { principals_check_box_tags 'member[user_ids][]', principals %>
        {/each}
      {/each}
    </fieldset>
    <div class="hidden-for-sighted" aria-live="polite">
      {#if principals.empty? }
        <label aria-role="alert">{ l('notice_no_principals_found') %></label>
      {:else}
        {#if principals.size > 20 }
          <label>{ l('notice_to_many_principals_to_display') %></label>
        {:else if principals.size == 1 }
          <label>{ l('notice_principals_found_single') %></label>
        {:else}
          <label>{ l('notice_principals_found_multiple', number: principals.size) %></label>
        {/each}
      {/each}
    </div>
  </div>
  <div class="grid-block medium-4 roles">
    <fieldset class="form--fieldset medium-11">
      <legend class="form--fieldset-legend">{ l(:label_role_plural) %></legend>
      { labeled_check_box_tags 'member[role_ids][]', roles %>
    </fieldset>
  </div>
</div>
{ styled_button_tag l(:button_add),
             id: 'member-add-submit',
             class: 'button -highlight -with-icon icon-checkmark',
             style: roles.any? && (principals.any? && principals.size <= 20) ? "": "display:none" %>
{ link_to I18n.t('button_cancel'), '', class: 'button hide-member-form-button', role: 'button' %>
 -->