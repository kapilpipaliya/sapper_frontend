
<script context="module">
/*
1. check is not logged_in then redirect back to dashboard page..
*/
import { Server as S_ } from "../_modules/ws_music.js";
import { ws_madmin, isAuthFn } from "../_modules/functions.js";
export async function preload(page, session) {
  const redirect_url = "music/login?message=Logout successfully...&type=info"
  let S; if (typeof S_ == "function") { S = new S_(ws_madmin, this.req, this.res); } else { S = S_; }
  const isAuth = await new Promise((resolve, reject) => { S.bind_( ["user", `is_logged_in`, 0], ([d]) => { resolve(d); }, [[]] ); });
  if(!isAuth){ this.redirect(302, redirect_url) }
  
  const logout = await new Promise((resolve, reject) => { S.bind_( ["auth", "logout", 0], ([d]) => { resolve(d); }, [[]] ); });
  if(logout.ok){ 
    document.cookie = `admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    this.redirect(302, redirect_url) 
    }
  return { };
}
</script>
Logging out...


