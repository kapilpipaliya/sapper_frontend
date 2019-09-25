<script>

</script>

<style>
  
</style>
<!-- 


{
  "results":
  {
    "items":[
  {#each @roles.each_with_index  as role, ix}
  {
      "id":   { role.id.to_json.html_safe %>,
      "name": { role.name.to_json.html_safe %>
  } { "," unless ix == @roles.length - 1 %>
{/each} ],
    "total": { @total ? @total : @roles.size %>,
    "more": { @more ? @more : 0 %>
}
}
 -->