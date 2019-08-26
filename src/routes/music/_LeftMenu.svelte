<script>
  export let active = false;
</script>
<style src="./_LeftMenu.scss"></style>
    <div id="menu"  class={active ? "active" : ""}>
        <div class="pure-menu">
            <a class="pure-menu-heading" href="#!">Company</a>

            <ul class="pure-menu-list">
                <li class="pure-menu-item"><a href="#!" class="pure-menu-link">Dashboard</a></li>
                <li class="pure-menu-item"><a href="#!" class="pure-menu-link">Admins</a></li>
                <li class="pure-menu-item"><a href="#!" class="pure-menu-link">Executives</a></li>
                <li class="pure-menu-item"><a href="#!" class="pure-menu-link">Profile</a></li>

                <li class="pure-menu-item menu-item-divided pure-menu-selected">
                    <a href="#!" class="pure-menu-link">Services</a>
                </li>

                <li class="pure-menu-item"><a href="#!" class="pure-menu-link">Contact</a></li>
            </ul>
        </div>
    </div>