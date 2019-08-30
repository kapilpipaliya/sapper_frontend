<script context="module">
/*
1. check is_logged_in then redirect back to dashboard page..
*/
import { Server as S_ } from "../_modules/ws_music.js";
import { ws_madmin, isAuthFn } from "../_modules/functions.js";
export async function preload(page, session) {
  let S; if (typeof S_ == "function") { S = new S_(ws_madmin, this.req, this.res); } else { S = S_; }
  const isAuth = await new Promise((resolve, reject) => { S.bind_( ["user", `is_logged_in`, 0], ([d]) => { resolve(d); }, [[]] ); });
  if(!isAuth){ this.redirect(302, 'music/login') }
  const menu = await new Promise((resolve, reject) => { S.bind_( ["ui","menu_data",1000], ([d]) => { resolve(d); }, [[]] ); });
  return { isAuth, menu };
}
</script>
<script>
    import MyLayout from "./_myLayout.svelte"
    import PasswordChangeForm from "./_PasswordChangeForm.svelte"
    import { Server as S2_ } from "../_modules/ws_music.js";
    import { fade, fly } from 'svelte/transition';
    export let menu = {}
    let S
    let saved = false;
    const handleSave = () => { saved = true}
    if (typeof S2_ == "function") { S = new S_(ws_madmin, {headers: {}}); } else { S = S2_; }
</script>
<style src="./_index.scss"></style>

<MyLayout {menu} >
        <div class="header">
            <h1>Update Password</h1>
        </div>

        <div class="content">
            {#if !saved}
                <PasswordChangeForm {S} on:successSave={handleSave}/>
            {:else}
                <p class="fly" in:fly="{{ y: 100, duration: 2000 }}" out:fade>
                    Password is Updated
                </p>
            {/if}
        </div>
</MyLayout>