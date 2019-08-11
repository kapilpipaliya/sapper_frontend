<script context="module">
		import { Server as S_ } from "../../_modules/ws_events_dispatcher.js";
    import { all, menuCategories, isAuthFn, getFooterData, getHeaderData } from "../../_modules/functions.js";
    import MyLayout from '../_myLayout.svelte'
		export async function preload(page, session) {
      let S; if (typeof(S_) == "function") { S = new S_(this.req, this.res); } else { S = S_; }
      const categories = await menuCategories(S);
      let products = []
      for (let i = 0; i < categories.length; i++) {
        const ele = categories[i];
        products[i] = await new Promise((resolve, reject) => { S.bind_(all("product", 112), (data) => { resolve(data) }, [[], [], [5]]); });
      }
      const isAuth = await isAuthFn(S)
      const footerData = await getFooterData(S)
    const headerData = await getHeaderData(S)

			return { categories, products, isAuth, footerData, headerData };
    }
</script>
<script>
    export let categories = [];
    export let footerData = {};
  export let headerData = {};
    export let products = [];
    export let isAuth = false;
</script>


<MyLayout {categories} {isAuth} {footerData}  {headerData}>
  {#each categories as c, index}
    <h1>{c[6]}</h1>
    {#each products[index] as p}
      {p[0]}
    {/each}
  {/each}
</MyLayout>

