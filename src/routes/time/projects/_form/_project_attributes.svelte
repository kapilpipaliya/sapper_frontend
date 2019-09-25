<script>

</script>

<style>
  
</style>
<!-- 

<% all_fields = (render_advanced) ? false :  true %>

{ render partial: "projects/form/attributes/name",
           locals: { form: form } %>
{ render partial: "customizable/form",
           locals: { form: form, all_fields: all_fields, only_required: render_advanced } %>
{#if render_advanced }
<fieldset id="advanced-settings" class="form--fieldset -collapsible collapsed">
  <legend class="form--fieldset-legend" title="{t(:label_show_hide)%>" >
    <a href="#">{ t(:label_advanced_settings) %></a>
  </legend>

  <div style="display:none;" class="advanced-settings-inner">
{/each}
    { render partial: "projects/form/attributes/parent_id",
               locals: { form: form } %>
    { render partial: "projects/form/attributes/description",
               locals: { form: form } %>
    { render partial: "projects/form/attributes/identifier",
               locals: { form: form } %>
    { render partial: "projects/form/attributes/is_public",
               locals: { form: form } %>
    <% unless all_fields %>
      { render partial: "customizable/form",
                 locals: { form: form, all_fields: false, only_required: false } %>
    {/each}
{#if render_advanced }
  </div>
</fieldset>
{/each}

<% unless form.object.errors[:identifier].blank? %>
  { nonced_javascript_tag do %>
    jQuery('#advanced-settings > .advanced-settings-inner').show();
  {/each}
{/each}
 -->