<script context="module">
/*
1. check is_logged_in then redirect back to dashboard page..
*/
import { Server as S_ } from "../../_modules/ws_todo.js";
import { ws_todo, isAuthFn, getTableData } from "../../_modules/functions.js";
export async function preload({query}, session) {
  let S; if (typeof S_ == "function") { S = new S_(ws_todo, this.req, this.res); } else { S = S_; }

  const url = 1 // "ui"
  const events = [
    [url,0,0], //header
    [url,1,0], // data
    [url,5,0], // count
    [url,4,0] // delete
  ]

  const getTableData = async(filterSettings=[]) => {
    // let isAuth = false;
    // let menu = []
    let h = []
    let data = []
    let count = 0;
    // let accountFilter = {}
    // let user_title = ""
    // let user_account_type = ""
    await new Promise((resolve, reject) => {
        const batch1 = []
        let r1 = false, r2 = false, r3 = false
        const myResolve = () => {
          if(r1 && r2 && r3) resolve(1)
        }
        // batch1.push([ ["user", `is_logged_in`, 0], ([d]) => {isAuth = d; r00 = true; myResolve()}, [[]] ])
        // batch1.push([ ["ui","menu_data",1000], ([d]) => {menu = d; r0 = true; myResolve()}, [[]] ])
        batch1.push([ events[0], ([d]) => {h = d; r1 = true; myResolve()}, [[]] ])
        batch1.push([ events[1], ([d]) => {data = d; r2 = true; myResolve()}, [filterSettings] ])
        batch1.push([ events[2], ([d]) => {count = d; r3 = true; myResolve()}, [filterSettings] ])
        // batch1.push([ ["ui", "user_type", 0], ([d]) => {accountFilter = d; r4 = true; myResolve()}, [] ])
        // batch1.push([ ["ui", "user_title", 0], ([d]) => {user_title = d; r5 = true; myResolve()}, [] ])
        // batch1.push([ ["ui", "user_account_type", 0], ([d]) => {user_account_type = d; r6 = true; myResolve()}, [] ])
        S.batchBind_T(batch1)
      })
    return {h, data, count};
  }

  const {h, data, count} = await getTableData([]);
  // if(!isAuth){ this.redirect(302, login_url) }
  
  return { events, h, data, count, query };
}
</script>
<script>

  import TablePage from "./_TablePage.svelte";
  import UIForm from "./_UIForm.svelte";
  import { Server as S2_ } from "../../_modules/ws_todo.js";

  // export let menu = {}
  // export let isAuth = false
  export let events = []
  export let h = []
  export let data = []
  export let count = 0
  export let query = {}
  // export let user_title = ""
  // export let user_account_type = ""
  // export let accountFilter = {}
  // let customFilter = {
  //   1 : accountFilter
  // }
</script>

<style src="./_index.scss"></style>
<svelte:head>
  <title>Ui</title>
</svelte:head>

        <div class="content">
            <div class="pure-g">
                <div class="pure-u">
                      <h1>Ui</h1>
                        <TablePage
                          {events}
                          {h}
                          {count}
                          {query}
                          items={data}
                          formcomponent={UIForm}
                          quickcomponent={UIForm}
                          />
                </div>
            </div>
        </div>

