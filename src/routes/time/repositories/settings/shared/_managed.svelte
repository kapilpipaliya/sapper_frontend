<script>

</script>

<style>
  
</style>
<!-- 

{#if repository.class.manages_remote? }
    <div class="form--field">
      { form.text_field(:url,
                          label: t('repositories.managed_url'),
                          value: t('repositories.managed_remote'),
                          disabled: true,
                          'aria-disabled' => true
          ) %>
      <div class="form--field-instructions">
        <p>{ t('repositories.managed_remote_note') %></p>
      </div>
    </div>
{:else}
<div class="form--field">
  { form.text_field(:url,
                      label: t('repositories.managed_url'),
                      value: repository.new_record? ? repository.managed_repository_url :
                              repository.url,
                      disabled: true,
                      'aria-disabled' => true,
                      container_class: '-wide'
      ) %>
  <div class="form--field-instructions">
    { t("repositories.#{vendor}.instructions.managed_url") %>
  </div>
</div>
{/each}
 -->