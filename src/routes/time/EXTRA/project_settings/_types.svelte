<script>

</script>

<style>
  
</style>
<!-- 


{#if  Type.all.any? }
  { form_for @project,
               url: { controller: '/projects', action: 'types', id: @project },
               method: :patch,
               html: {id: 'types-form'} do |f| %>
    { render partial: 'projects/form/types', locals: { f: f, project: @project, withControlls: true } %>

  {/each}

  <br/>
{:else}
  { no_results_box custom_title: t('projects.settings.types.no_results_title_text') %>
{/each}
 -->