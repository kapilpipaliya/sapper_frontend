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
  import ScrollTop from "../../_components/ScrollTop.svelte";
	export let post;
  export let categories = [];
  export let footerData = {};
  export let headerData = {};
  export let isAuth = false;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h2) {

		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}

</style>

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