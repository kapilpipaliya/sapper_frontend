<script context="module">
/*
1. check is_logged_in then redirect back to dashboard page..
*/
import { Server as S_ } from "../_modules/ws_music.js";
import { ws_madmin, isAuthFn, getTableData } from "../_modules/functions.js";
export async function preload({query}, session) {
  const login_url = 'music/login';
  let S; if (typeof S_ == "function") { S = new S_(ws_madmin, this.req, this.res); } else { S = S_; }
  const isAuth = await new Promise((resolve, reject) => { S.bind_( ["user", `is_logged_in`, 0], ([d]) => { resolve(d); }, [[]] ); });
  if(!isAuth){ this.redirect(302, login_url) }
  const menu = await new Promise((resolve, reject) => { S.bind_( ["ui","menu_data",1000], ([d]) => { resolve(d); }, [[]] ); });

  const url = "song"
  const events = [
    [url,"header",0],
    [url,"data",0],
    [url,"count",0],
    [url,"del",0]
  ]

  const getTableData = async(filterSettings=[]) => {
    let h = []
    let data = []
    let count = 0;
    let accountFilter = {}
    let user_title = ""
    let user_account_type = ""
    await new Promise((resolve, reject) => {
        const batch1 = []
        let r1 = false, r2 = false, r3 = false, r4 = false, r5 = false, r6 = false
        const myResolve = () => {
          if(r1 && r2 && r3 && r4 && r5 && r6) resolve(1)
        }
        batch1.push([ events[0], ([d]) => {h = d; r1 = true; myResolve()}, [[]] ])
        batch1.push([ events[1], ([d]) => {data = d; r2 = true; myResolve()}, [filterSettings] ])
        batch1.push([ events[2], ([d]) => {count = d; r3 = true; myResolve()}, [filterSettings] ])
        batch1.push([ ["ui", "catalog_local", 0], ([d]) => {accountFilter = d; r4 = true; myResolve()}, [] ])
        batch1.push([ ["ui", "user_title", 0], ([d]) => {user_title = d; r5 = true; myResolve()}, [] ])
        batch1.push([ ["ui", "user_account_type", 0], ([d]) => {user_account_type = d; r6 = true; myResolve()}, [] ])
        S.batchBind_T(batch1)
      })
    return {h, data, count, accountFilter, user_title, user_account_type};
  }

  const {h, data, count, accountFilter, user_title, user_account_type} = await getTableData([]);
  
  return { isAuth, menu, events, h, data, count, accountFilter, user_title, user_account_type, query };
}
</script>
<script>
  import MyLayout from "./_myLayout.svelte"
  import TablePage from "./_TablePage.svelte";
  import SongForm from "./_SongForm.svelte";
  import { Server as S2_ } from "../_modules/ws_music.js";

  export let menu = {}
  export let isAuth = false
  export let events = []
  export let h = []
  export let data = []
  export let count = 0
  export let query = {}
  export let user_title = ""
  export let user_account_type = ""
  export let accountFilter = {}
  let customFilter = {
    2 : accountFilter
  }
  let S
  if (typeof S2_ == "function") { S = new S_(ws_madmin, {headers: {}}); } else { S = S2_; }
</script>

<style src="./_index.scss"></style>
<svelte:head>
  <title>{"Songs"}</title>
</svelte:head>
<MyLayout {menu} {user_account_type}>
        <div class="content">
            <div class="pure-g">
                <div class="pure-u">
                      <h1>{"Songs"}</h1>
                        <TablePage
                          {S}
                          {events}
                          {h}
                          {count}
                          {query}
                          items={data}
                          formcomponent={SongForm}
                          quickcomponent={SongForm}
                          {customFilter}
                          />
                </div>
            </div>
        </div>
</MyLayout>
