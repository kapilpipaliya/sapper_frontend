<script>

</script>

<style>
  
</style>

<!-- 
<% html_title l(:label_administration), l(:label_enumerations) %>
{ toolbar title: l(:label_enumerations) %>
{#each Enumeration.descendants.each  as klass}
  <h3 class="-no-border">{ l(klass::OptionName) %></h3>
  { cell ::Enumerations::TableCell, klass.shared %>
{/each}
 -->