<script>
  export let active = false;
  export let menu = {}
  console.log(menu)
</script>
<style src="./_LeftMenu.scss"></style>
    <div id="menu"  class={active ? "active" : ""}>
        <div class="pure-menu">
            <a class="pure-menu-heading" href="music/dashboard">MBA Music</a>

            <ul class="pure-menu-list">
            {#each menu as m}
                <li class="pure-menu-item {m[2] ? "menu-item-divided pure-menu-selected" : ""}">
                    <a href="{m[1]}" class="pure-menu-link">{m[0]}</a>
                </li>
            {/each}
            </ul>
        </div>
    </div>