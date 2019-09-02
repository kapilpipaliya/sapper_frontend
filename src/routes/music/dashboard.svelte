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
    export let menu = {}
    export let user_account_type = ""
</script>
<style src="./_index.scss"></style>
<svelte:head>
  <title>{"DashBoard"}</title>
</svelte:head>
<MyLayout {menu} {user_account_type} >
        <div class="header">
            <h1>Dashboard</h1>
            <!-- <h2>A subtitle for your page goes here</h2> -->
        </div>

        <div class="content">
            <h2 class="content-subhead">Welcome {user_account_type}</h2>
            <p>
                
            </p>

        </div>
</MyLayout>