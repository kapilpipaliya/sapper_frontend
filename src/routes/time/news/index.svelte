<script>
// let header_tags =  auto_discovery_link_tag(:atom, params.merge({format: 'atom', page: nil, key: User.current.rss_key}))
</script>

<style>
  
</style>

<!-- 
<%
  managable = User.current.allowed_to?(:manage_news, @project)
 %>

<% html_title(l(:label_news_plural)) -%>
{ toolbar title: l(:label_news_plural) do %>
  {#if managable }
    <li class="toolbar-item">
      { link_to new_project_news_path(@project),
          { class: 'button -alt-highlight',
            id: 'new_news_link',
            aria: {label: t(:label_news_new)},
            title: t(:label_news_new)} do %>
        { op_icon('button--icon icon-add') %>
        <span class="button--text">{ t('activerecord.models.news') %></span>
      {/each}
    </li>
  {/each}
{/each}

{#if @newss.any? }
  {#each @newss.each  as news}
   <div class="news">
    <h3 class="news--header">{ avatar(news.author) %>{ link_to_project(news.project) + ': ' unless news.project == @project %>
      { link_to h(news.title), news_path(news) %>
      { "(#{l(:label_x_comments, count: news.comments_count)})" if news.comments_count > 0 %></h3>
    <p class="author additional-information">{ authoring news.created_on, news.author %></p>
    <div class="wiki">
      { format_text(news.summary.present? ? news.summary : truncate(news.description, length: 150, escape: false), object: news) %>
    </div>
   </div>
  {/each}
{:else}
  {#if managable }
    { no_results_box(action_url:     new_project_news_path(@project),
                       display_action: true) %>
  {:else}
    { no_results_box %>
  {/each}
{/each}

{ pagination_links_full @newss %>

{ other_formats_links do |f| %>
  { f.link_to 'Atom', url: {project_id: @project, key: User.current.rss_key} %>
{/each}
 -->