<script>

</script>

<style>
  
</style>

<!-- 

{#each texts.each_pair  as caption, text}
  <fieldset class="preview">
    <legend class="preview--legend">{ "#{l(:label_preview)} - #{caption}" %></legend>
    {#if text.blank? }
      <span class="preview--nothing-to-preview">{ l(:nothing_to_preview) %></span>
    {:else}
      <div class="wiki">
        { format_text text, attachments: attachments, object: previewed %>
      </div>
    {/each}
  </fieldset>
{/each}
 -->