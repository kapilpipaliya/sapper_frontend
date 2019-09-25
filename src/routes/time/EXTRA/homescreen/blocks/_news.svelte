<script>

</script>

<style>
  
</style>
<!-- 
{ render 'homescreen/blocks/header', icon: 'news', title: t(:label_news_latest) %>

<% unless @news.empty? %>
  <ul class="widget-box--arrow-links">
  {#each @news.each  as news}
    <li class="-widget-box--arrow-multiline">
      <div>
        { avatar(news.author, {class: 'avatar-mini'}) %>
        { link_to_project(news.project) + ': ' %>
        { link_to h(news.title), news_path(news) %>
        <br/>
        <span class="additional-information">{ authoring news.created_on, news.author %></span>
      </div>
    </li>
  {/each}
  </ul>
{/each}
 -->