<script context="module">
/*
1. check is_logged_in then redirect back to dashboard page..
*/
import { Server as S_ } from "../_modules/ws_todo.js";
import { server, ws_todo, isAuthFn } from "../_modules/functions.js";
export async function preload(page, session) {
  let S; if (typeof S_ == "function") { S = new S_(ws_todo, this.req, this.res); } else { S = S_; }
  const isAuth = await new Promise((resolve, reject) => { S.bind_( ["user", `is_logged_in`, 0], ([d]) => { resolve(d); }, [[]] ); });
  if(!isAuth){ this.redirect(302, `${server.redirect}/login`) }
  const menu = await new Promise((resolve, reject) => { S.bind_( ["ui","menu_data",1000], ([d]) => { resolve(d); }, [[]] ); });
  return { isAuth, menu };
}
</script>
<script>
    import MyLayout from "./_myLayout.svelte"
    export let menu = {}
</script>
<style src="./_index.scss"></style>

<MyLayout {menu} >
        <div class="header">
            <h1>For Mind Peace Todo</h1>
            <h2>Visit Proper Page from the left menu.</h2>
        </div>

        <div class="content">
            <h2 class="content-subhead">Todo</h2>
            <p>
               developed to increase mind development.
            </p>

            <div class="pure-g">
                <div class="pure-u-1-4">
                    <img class="pure-img-responsive" src="http://farm3.staticflickr.com/2875/9069037713_1752f5daeb.jpg" alt="Peyto Lake">
                </div>
                <div class="pure-u-1-4">
                    <img class="pure-img-responsive" src="http://farm3.staticflickr.com/2813/9069585985_80da8db54f.jpg" alt="Train">
                </div>
                <div class="pure-u-1-4">
                    <img class="pure-img-responsive" src="http://farm6.staticflickr.com/5456/9121446012_c1640e42d0.jpg" alt="T-Shirt Store">
                </div>
                <div class="pure-u-1-4">
                    <img class="pure-img-responsive" src="http://farm8.staticflickr.com/7357/9086701425_fda3024927.jpg" alt="Mountain">
                </div>
            </div>

        </div>
</MyLayout>