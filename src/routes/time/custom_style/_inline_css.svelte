<script>

</script>

<style>
  
</style>
<!-- 

<style type="text/css">
  {#if CustomStyle.current.logo.present? }
    #logo .home-link {
      background-image: url("{ custom_style_logo_path(digest: CustomStyle.current.digest, filename: CustomStyle.current.logo_identifier) %>");
    }
  {/each}

  :root {
  {#each  DesignColor.overwritten.each  as design_color}
    --{ design_color.variable %>: { design_color.hexcode %>;
    {#if design_color.variable == "header-border-bottom-color" }
      --header-border-bottom-width: 1px;
    {/each}
    {#if design_color.variable == "main-menu-border-color" }
      --main-menu-border-width: 1px;
    {/each}
    {#if design_color.variable == "alternative-color" }
      --button--alt-highlight-background-hover-color: { darken_color design_color.hexcode, 0.82 %>;
    {/each}
  {/each}
  }

  <%# Conditional styles %>
  {#if DesignColor.overwritten.map(&:variable).include?('header-border-bottom-color') }
    <%# Remove top border of left menu to not have to borders adding to 2px %>
    #main-menu #toggle-project-menu {
      border-top: 0px;
    }

    <%# Trying to hit the query cache for the condition here: %>
    <% if DesignColor.overwritten.map(&:variable).include?('header-bg-color') &&
          DesignColor.overwritten.select { |design_color| design_color.variable == 'header-bg-color' }.try(:first).try(:hexcode) == '#FFFFFF' &&
          DesignColor.overwritten.select { |design_color| design_color.variable == 'header-item-bg-hover-color' }.try(:first).try(:hexcode) == '#FFFFFF' %>
      <%# Disable hover background color to not overlap border %>
      #top-menu li > a:hover,
      #top-menu li.drop-down:hover,
      #top-menu li.drop-down.open,
      .top-menu-search.-collapsed .top-menu-search--button:hover {
        background: transparent;
      }
    {/each}
  {/each}
</style>
 -->