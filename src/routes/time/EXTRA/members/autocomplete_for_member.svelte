<script>

</script>

<style>
  
</style>
<!-- 


<%#
  Lists found users (principals) to be used for the select box.
  If the user enters an email address, a 'result' in the form of
  'Invite: <email>' will be returned.
#%>

{
  "results":
  {
    "items":[
      {#each @principals.each_with_index  as principal, ix}
        {
          "id":   { principal.id.to_json.html_safe %>,
          "name": { principal.name.to_json.html_safe %>
        } { "," unless !@email && ix == @principals.length - 1 %>
      {/each}
      {#if @email }
        {
          "id": "{ @email %>",
          "name": "Invite { @email %>"
        }
      {/each}
    ],
    "total": { @total ? @total : @principals.size %>,
    "more": { @more ? @more : 0 %>
}
}
 -->