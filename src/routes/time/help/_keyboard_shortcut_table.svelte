<script>

</script>

<style>
  
</style>
<!-- 
<table>
  <tr>
    <th>{ l(:label_keyboard_function) %></th>
    <th>{ l(:label_keyboard_shortcut) %></th>
    <th>{ l(:label_keyboard_accesskey) %></th>
  </tr>
  {#each shortcuts.each  as shortcut}
    <tr>
      <td>{ shortcut[:name] %></td>
      <td>
        {#each shortcut[:shortcut].split(' ').each  as key}
          <kbd>{ key %></kbd>
        {/each}
      </td>
      <td>{ shortcut[:accesskey] ? accesskey(shortcut[:accesskey]) : empty_element_tag %></td>
    </tr>
  {/each}
</table>
 -->