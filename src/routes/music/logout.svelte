
<script context="module">
/*
1. check is not logged_in then redirect back to dashboard page..
*/
import { Server as S_ } from "../_modules/ws_music.js";
import { ws_madmin, isAuthFn } from "../_modules/functions.js";
export async function preload(page, session) {
  const redirect_url = "music/login?message=Logged out successfully.&type=info"
  let S; if (typeof S_ == "function") { S = new S_(ws_madmin, this.req, this.res); } else { S = S_; }
  
  const getTableData = async(filterSettings=[]) => {
    let isAuth = false;
    let logout = {}
    await new Promise((resolve, reject) => {
        const batch1 = []
        let r00 = false, r0 = false
        const myResolve = () => {
          if(r00 && r0) resolve(1)
        }
        batch1.push([ ["user", `is_logged_in`, 0], ([d]) => {isAuth = d; r00 = true; myResolve()}, [[]] ])
        batch1.push([ ["auth", "logout", 0], ([d]) => {logout = d; r0 = true; myResolve()}, [[]] ])
        S.batchBind_T(batch1)
      })
    return {isAuth, logout};
  }

  const {isAuth, logout} = await getTableData([]);
  if(!isAuth){ this.redirect(302, redirect_url) }
  if(logout.ok){ 
    document.cookie = `admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    this.redirect(302, redirect_url) 
    }
  return { };
}
</script>
Logging out...


