<script context="module">
  import { Server as S_ } from "../../_modules/ws_events_dispatcher.js";
  import { all, menuCategories, isAuthFn, getFooterData, getHeaderData } from "../../_modules/functions.js";

	export async function preload({ params, query }, session) {
    let S; if (typeof(S_) == "function") { S = new S_(this.req, this.res); } else { S = S_; }
		//if(!process.browser) setCookie(this.res)
		const { slug } = params;

    const categories = await menuCategories(S);
    const page = await new Promise((resolve, reject) => {
      S.bind_( all("post", 112), ([d]) => {
          resolve(d);
          // reject(new Error('Fail!'))
          // throw(new Error())
        },
        [[null, 'post', null, null, `=${slug}`]]
      ); // 6=code // = means excact
		});
    const isAuth = await isAuthFn(S)
    const footerData = await getFooterData(S)
    const headerData = await getHeaderData(S)

		return {categories, post: page[0] || [], isAuth, footerData, headerData }
	}
</script>

<script>
  import MyLayout from '../_myLayout.svelte'
  import ScrollTop from "../../_ScrollTop.svelte";
	export let post;
  export let categories = [];
  export let footerData = {};
  export let headerData = {};
  export let isAuth = false;
</script>
<style src="./_slug.scss"></style>

<svelte:head>
	<title>{post[3]}</title>
</svelte:head>

<MyLayout {categories}  {isAuth} {footerData}  {headerData} >

	{#if false}
		<h1>{post[3]}</h1>
	{/if}

	<div class='content'>
		{@html post[6]}
	</div>

<ScrollTop/>
</MyLayout>