<script>

</script>

<style>
  
</style>
<!-- 

<div class="news">
  { link_to_project(news.project) + ': ' unless @project %>
  <h4 class='overview'>{ link_to h(news.title), news_path(news) %></h4>
  <p class="author additional-information">{ authoring news.created_on, news.author %></p>
  <div class="comment">
    {#if news.summary.present? }
      <div class="summary">
        { format_text(news.summary, object: news) %>
      </div>
    {/each}
    { "(#{l(:label_x_comments, count: news.comments_count)})" if news.comments_count > 0 %>
  </div>
</div>
 -->