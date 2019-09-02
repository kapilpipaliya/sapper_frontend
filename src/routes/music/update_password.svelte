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

  const getTableData = async(filterSettings=[]) => {
    let user_account_type = ""
    await new Promise((resolve, reject) => {
        const batch1 = []
        let r1 = true
        const myResolve = () => {
          if(r1) resolve(1)
        }
        batch1.push([ ["ui", "user_account_type", 0], ([d]) => {user_account_type = d; r1 = true; myResolve()}, [] ])
        S.batchBind_T(batch1)
      })
    return {user_account_type};
  }

  const {user_account_type} = await getTableData([]);
  
  return { isAuth, menu, user_account_type };
}
</script>
<script>
    import MyLayout from "./_myLayout.svelte"
    import PasswordChangeForm from "./_PasswordChangeForm.svelte"
    import { Server as S2_ } from "../_modules/ws_music.js";
    import { fade, fly } from 'svelte/transition';
    export let menu = {}
    export let user_account_type = ""
    let saved = false;
    const handleSave = () => { saved = true}
</script>
<style src="./_index.scss"></style>
<svelte:head>
  <title>{"Update Password"}</title>
</svelte:head>
<MyLayout {menu} {user_account_type} >
        <div class="content">
          <div class="pure-g">
            <div class="pure-u">
              <h1>{"Update Password"}</h1>
              {#if !saved}
                  <PasswordChangeForm on:successSave={handleSave}/>
              {:else}
                  <p class="fly" in:fly="{{ y: 100, duration: 2000 }}" out:fade>
                      Password is Updated
                  </p>
              {/if}
              </div>
            </div>            
        </div>
</MyLayout>