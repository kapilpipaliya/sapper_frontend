<script>

</script>

<style>
  
</style>
<!-- 

{ render :partial => 'shared/global_roles_header' %>

<% roles ||= nil %>

{ error_messages_for_contract(role, @call.errors) if @call %>

<div class="form--field -required">
  { f.text_field :name, required: true, container_class: '-slim' %>
</div>
<div class="form--field">
  {#if role.new_record? }
    { styled_label_tag :global_role, t(:label_global_role) %>
    <div class="form--field-container">
      { styled_check_box_tag("global_role", "1", role.is_a?(GlobalRole))%>
    </div>
  {:else}
    { styled_label_tag :unchangeable, "#{t(:label_role_type)} #{t(:label_not_changeable)}" %>
    <div class="form--field-container">
      { (role.is_a?(GlobalRole) ? t(:label_global_role) : t(:label_member_role))%>
    </div>
  {/each}
</div>

{#if role.new_record? || role.is_a?(GlobalRole) }
  <div id="global_attributes" style="display:none">
    { render partial: "global_attributes", locals: { f: f, role: role, roles: roles&.select {|r| r.is_a?(GlobalRole)} }%>
  </div>
{/each}

{#if role.new_record? || !role.is_a?(GlobalRole) }
  <div id="member_attributes">
    { render partial: "member_attributes", locals: { f: f, role: role, roles: roles&.select {|r| !r.is_a?(GlobalRole)} }%>
  </div>
{/each}

{#if role.new_record? || role.is_a?(GlobalRole) }
  <div id="global_permissions" style={ role.new_record? && !role.is_a?(GlobalRole) ? "display:none" : ""%> >
    { render partial: "permissions", locals: {permissions: grouped_setable_permissions(GlobalRole.new), role: role, showGlobalRole: true }%>
  </div>
{/each}
{#if role.new_record? || !role.is_a?(GlobalRole) }
  <div id="member_permissions" style={ role.new_record? && role.is_a?(GlobalRole) ? "display:none" : ""%>>
    { render partial: "permissions", locals: {permissions: grouped_setable_permissions(role), role: role, showGlobalRole: false }%>
  </div>
{/each}

 -->