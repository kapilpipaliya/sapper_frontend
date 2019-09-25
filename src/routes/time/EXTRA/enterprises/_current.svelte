<script>

</script>

<style>
  
</style>
<!-- 
<div class="enterprise--active-token">
  <div class="attributes-group">
    <div class="attributes-key-value">
      <div class="attributes-key-value--key">{ EnterpriseToken.human_attribute_name(:subscriber) %></div>
      <div class="attributes-key-value--value-container">
        <div class="attributes-key-value--value -text">
          <span>{ @current_token.subscriber %></span>
        </div>
      </div>
      <div class="attributes-key-value--key">{ EnterpriseToken.human_attribute_name(:mail) %></div>
      <div class="attributes-key-value--value-container">
        <div class="attributes-key-value--value -text">
          <span>{ @current_token.mail %></span>
        </div>
      </div>
      {#each Hash(@current_token.restrictions).each  as key, value}
      <div class="attributes-key-value--key">{ EnterpriseToken.human_attribute_name("#{key}_restriction") %></div>
      <div class="attributes-key-value--value-container">
        <div class="attributes-key-value--value -text">
          <span>{ value %></span>
        </div>
      </div>
      {/each}
      <div class="attributes-key-value--key">{ EnterpriseToken.human_attribute_name(:starts_at) %></div>
      <div class="attributes-key-value--value-container">
        <div class="attributes-key-value--value -text">
          <span>{ format_date @current_token.starts_at %></span>
        </div>
      </div>
      {#if @current_token.will_expire? }
      <div class="attributes-key-value--key">{ EnterpriseToken.human_attribute_name(:expires_at) %></div>
      <div class="attributes-key-value--value-container">
        <div class="attributes-key-value--value -text">
          <span>{ format_date @current_token.expires_at %></span>
        </div>
      </div>
      {/each}
    </div>
  </div>
</div>

{ form_tag({ action: :destroy },
             method: :delete) do %>
  <confirm-form-submit></confirm-form-submit>
  { styled_button_tag t(:button_delete), type: 'submit', class: '-with-icon icon-delete' %>
{/each}

 -->