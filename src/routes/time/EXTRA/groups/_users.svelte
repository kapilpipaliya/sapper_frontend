<script>

</script>

<style>
  
</style>
<!-- 


<div class="grid-block -visible-overflow">

  <div class="grid-content medium-6">
    {#if @group.users.any? }
      <div class="generic-table--container">
        <div id="group_users_table" class="generic-table--results-container">
          { render partial: 'groups/users_table' %>
        </div>
      </div>
    {:else}
      { no_results_box %>
    {/each}
  </div>

  <div class="grid-content medium-6 -visible-overflow">
    <% users = User
      .not_builtin
      .active
      .not_in_group(@group)
      .limit(1) %>
    {#if users.any? }
      { styled_form_tag(members_of_group_path(@group), method: :post) do %>

        <fieldset class="form--fieldset">
          <legend class="form--fieldset-legend">{l(:label_user_new)%></legend>
          <div class="form--field -vertical">
            { hidden_field_tag :user_ids, nil  %>
            <user-autocompleter data-update-input="user_ids"
                                data-additional-filter="{ @autocompleter_filters&.to_json %>"
                                class="new-group-members--autocomplete">
            </user-autocompleter>
          </div>
          <div>
            { styled_button_tag l(:button_add),
                                  class: '-highlight -with-icon icon-checkmark' %>
          </div>
        </fieldset>
      {/each}
    {/each}
  </div>
</div>
 -->