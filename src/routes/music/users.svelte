<script context="module">
/*
1. check is_logged_in then redirect back to dashboard page..
*/
import { Server as S_ } from "../_modules/ws_music.js";
import { ws_madmin, isAuthFn, getTableData } from "../_modules/functions.js";
export async function preload(page, session) {
  const login_url = 'music/login';
  let S; if (typeof S_ == "function") { S = new S_(ws_madmin, this.req, this.res); } else { S = S_; }
  const isAuth = await new Promise((resolve, reject) => { S.bind_( ["user", `is_logged_in`, 0], ([d]) => { resolve(d); }, [[]] ); });
  if(!isAuth){ this.redirect(302, login_url) }
  const menu = await new Promise((resolve, reject) => { S.bind_( ["ui","menu_data",1000], ([d]) => { resolve(d); }, [[]] ); });
      

  const getTableData = async(url, filterSettings=[]) => {
    let h = []
    let data = []
    let isAuth = false;
    await new Promise((resolve, reject) => {
        const batch1 = []
        let r1 = false, r2 = false
        const myResolve = () => {
          if(r1 && r2) resolve(1)
        }
        batch1.push([
          [url,"header",0], ([d]) => {h = d; r1 = true; myResolve()}, [[]]
        ])
        batch1.push([
          [url,"data",0], ([d]) => {data = d; r2 = true; myResolve()}, [filterSettings]
        ])
        S.batchBind_T(batch1)
      })
    return {h, data};
  }

    const url = "user"
    //const filterSettings = new Array(15);
    //filterSettings.fill(null);
    //filterSettings[14] = 'product'
    const {h, data} = await getTableData(url, []);
  
  return { isAuth, menu, h, data };
}
</script>
<script>
  import MyLayout from "./_myLayout.svelte"
  import TablePage from "./_TablePage.svelte";
  import ProductForm from "./_ProductForm.svelte";

  export let menu = {}
  export let isAuth = false
  export let url = ""
  export let h = []
  export let data = []
</script>

<style src="./_index.scss"></style>
<svelte:head>
  <title>Product</title>
</svelte:head>
<MyLayout {menu} >
        <div class="content">
            <div class="pure-g">
                <div class="pure-u">
                      <h1>Product</h1>
                      <TablePage
                        {url}
                        {h}
                        items={data}
                        formcomponent={ProductForm}
                        quickcomponent={ProductForm}
                        requiredFilter={{ 14: 'product' }} />
                </div>
            </div>
        </div>
</MyLayout>
