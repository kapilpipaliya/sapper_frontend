<script>

</script>

<style>
  
</style>
<!-- 
<% content_for :styles do %>
  body {
    line-height: 2em;
    font-family: sans-serif;
    font-size: 1em;
  }
  h1 { font-size: 1.5em; }
  h2 { font-size: 1.2em; }
  kbd {
    background-color: #F2F2F2;
    border: 1px solid #CCCCCC;
    border-radius: 3px 3px 3px 3px;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.42), 0 0 0 2px #FFFFFF inset;
    color: #444444;
    display: inline-block;
    font-family: Arial,Helvetica,sans-serif;
    font-size: 13px;
    line-height: 1.5;
    margin: 0 0.5em 0 0.1em;
    padding: 0.15em 0.7em;
    text-shadow: 0 1px 0 #FFFFFF;
    white-space: nowrap;
  }
  table th {
    background-color: #dbdbdb;
    padding-left: 20px;
    padding-right: 20px;
  }
  table td {
    vertical-align: top;
    background-color: #f5f5f5;
    height: 2em;
    vertical-align: middle;
    padding-left: 20px;
    padding-right: 20px;
  }

  /* Accessibility specific styles */
  .hidden-for-sighted {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
{/each}

<h1>{ l(:label_keyboard_shortcut_help_heading) %></h1>
<hr />
<h2>{ l(:label_keyboard_shortcut_global_shortcuts) %></h2>
<% global_shortcuts = [ { name: l(:label_keyboard_shortcut_show_help), shortcut: '?' },
                        { name: l(:label_keyboard_shortcut_search_global), shortcut: 's', accesskey: :quick_search },
                        { name: l(:label_keyboard_shortcut_search_project), shortcut: 'p', accesskey: :project_search },
                        { name: l(:label_keyboard_shortcut_go_my_page), shortcut: 'g m' } ] %>

{ render partial: 'help/keyboard_shortcut_table', locals: { shortcuts: global_shortcuts } %>

<h2>{ l(:label_keyboard_shortcut_within_project) %></h2>
<% project_shortcuts = [ { name: l(:label_keyboard_shortcut_go_overview), shortcut: 'g o' },
                         { name: l(:label_keyboard_shortcut_go_work_package), shortcut: 'g w p' },
                         { name: l(:label_keyboard_shortcut_go_wiki), shortcut: 'g w i' },
                         { name: l(:label_keyboard_shortcut_go_activity), shortcut: 'g a' },
                         { name: l(:label_keyboard_shortcut_go_calendar), shortcut: 'g c' },
                         { name: l(:label_keyboard_shortcut_go_news), shortcut: 'g n' },
                         { name: l(:label_keyboard_shortcut_go_timelines), shortcut: 'g t' },
                         { name: l(:label_keyboard_shortcut_new_work_package), shortcut: 'n w p', accesskey: :new_work_package },
                         { name: l(:label_keyboard_shortcut_details_package), shortcut: 'd w p', accesskey: :details } ] %>

{ render partial: 'help/keyboard_shortcut_table', locals: { shortcuts: project_shortcuts } %>

<h2>{ l(:label_keyboard_shortcut_some_pages_only) %></h2>
<% special_shortcuts = [ { name: l(:label_keyboard_shortcut_go_edit), shortcut: 'g e', accesskey: :edit },
                         { name: l(:label_keyboard_shortcut_open_more_menu), shortcut: 'm', accesskey: :more_menu },
                         { name: l(:label_keyboard_shortcut_go_preview), shortcut: 'g p', accesskey: :preview },
                         { name: l(:label_keyboard_shortcut_focus_next_item), shortcut: 'j' },
                         { name: l(:label_keyboard_shortcut_focus_previous_item), shortcut: 'k' } ] %>
{ render partial: 'help/keyboard_shortcut_table', locals: { shortcuts: special_shortcuts } %>
 -->