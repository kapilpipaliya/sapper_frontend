<script>

</script>

<style>
  
</style>
<!-- 

{#if @project.activities(true).any? }
  { form_tag  project_enumerations_path(@project),
                method: :put,
                class: "tabular" do %>

    { render partial: 'projects/form/activities', locals: { project: @project, withControlls: true } %>
  {/each}

  <br/>
{:else}
  { no_results_box custom_title: t('projects.settings.activities.no_results_title_text') %>
{/each}
 -->