<script context="module">
/*
1. check is_logged_in then redirect back to dashboard page..
*/
import { Server as S_ } from "../_modules/ws_todo.js";
import { server, ws_todo, isAuthFn, getTableData } from "../_modules/functions.js";
export async function preload({query}, session) {
  const login_url = `${server.redirect}/login`;
  let S; if (typeof S_ == "function") { S = new S_(ws_todo, this.req, this.res); } else { S = S_; }

  const url = "catalog_local"
  const events = [
    [url,"header",0],
    [url,"data",0],
    [url,"count",0],
    [url,"del",0]
  ]

  const getTableData = async(filterSettings=[]) => {
    let isAuth = false;
    let menu = []
    let h = []
    let data = []
    let count = 0;
    let accountFilter = {}
    let user_title = ""
    let user_account_type = ""
    await new Promise((resolve, reject) => {
        const batch1 = []
        let r00 = false, r0 = false, r1 = false, r2 = false, r3 = false, r4 = false, r5 = false
        const myResolve = () => {
          if(r00 && r0 && r1 && r2 && r3 && r4 && r5) resolve(1)
        }
        batch1.push([ ["user", `is_logged_in`, 0], ([d]) => {isAuth = d; r00 = true; myResolve()}, [[]] ])
        batch1.push([ ["ui","menu_data",1000], ([d]) => {menu = d; r0 = true; myResolve()}, [[]] ])
        batch1.push([ events[0], ([d]) => {h = d; r1 = true; myResolve()}, [[]] ])
        batch1.push([ events[1], ([d]) => {data = d; r2 = true; myResolve()}, [filterSettings] ])
        batch1.push([ events[2], ([d]) => {count = d; r3 = true; myResolve()}, [filterSettings] ])
        batch1.push([ ["ui", "user_title", 0], ([d]) => {user_title = d; r4 = true; myResolve()}, [] ])
        batch1.push([ ["ui", "user_account_type", 0], ([d]) => {user_account_type = d; r5 = true; myResolve()}, [] ])
        S.batchBind_T(batch1)
      })
    return {isAuth, menu, h, data, count, user_title, user_account_type};
  }

  const {isAuth, menu, h, data, count, user_title, user_account_type} = await getTableData([]);
  if(!isAuth){ this.redirect(302, login_url) }
  
  return { isAuth, menu, events, h, data, count, user_title, user_account_type, query };
}
</script>
<script>
  import MyLayout from "./_myLayout.svelte"
  import TablePage from "./_TablePage.svelte";
  import CatalogForm from "./_CatalogForm.svelte";
  import { Server as S2_ } from "../_modules/ws_todo.js";

  export let menu = {}
  export let isAuth = false
  export let events = []
  export let h = []
  export let data = []
  export let count = 0
  export let query = {}
  export let user_title = ""
  export let user_account_type = ""

</script>

<style src="./_index.scss"></style>
<svelte:head>
  <title>{"Catalogs"}</title>
</svelte:head>
<MyLayout {menu} {user_account_type}>
        <div class="content">
            <div class="pure-g">
                <div class="pure-u">
                      <h1>{"Catalogs"}</h1>
                        <TablePage
                          {events}
                          {h}
                          {count}
                          {query}
                          items={data}
                          formcomponent={CatalogForm}
                          quickcomponent={CatalogForm}
                          />
                </div>
            </div>
        </div>
</MyLayout>
