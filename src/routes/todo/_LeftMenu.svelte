<script>
  export let active = false;
  export let menu = {}
  export let user_account_type = ""
  import { server } from "../_modules/functions.js";
</script>
<style src="./_LeftMenu.scss"></style>
    <div id="menu"  class={active ? "active" : ""}>
        <div class="pure-menu">
            <a class="pure-menu-heading" href={`/${server.redirect}/dashboard`}>MBA Music</a>
            <span class="pure-menu-heading">{user_account_type}</span>

            <ul class="pure-menu-list">
            {#each menu as m}
                <li class="pure-menu-item {m[2] ? "menu-item-divided pure-menu-selected" : ""}">
                    <a href="{m[1]}" class="pure-menu-link">{m[0]}</a>
                </li>
            {/each}
            </ul>
        </div>
    </div>