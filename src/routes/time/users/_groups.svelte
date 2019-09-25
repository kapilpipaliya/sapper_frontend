<script>

</script>

<style>
  
</style>
<!-- 

{ labelled_tabular_form_for(:user, url: { action: 'update' }, html: {method: :put}) do %>
  <section class="form--section">
    {#each Group.all.sort.each  as group}
      <label class="form--label-with-check-box">
        { styled_check_box_tag 'user[group_ids][]', group.id, @user.groups.include?(group) %>
        { group %>
      </label>
    {/each}
    { hidden_field_tag 'user[group_ids][]', '' %>
  </section>
  { styled_button_tag l(:button_save), class: '-highlight -with-icon icon-checkmark' %>
{/each}
 -->