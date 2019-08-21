<script context="module">
  import { Server as S_ } from "../../_modules/ws_events_dispatcher.js";
  import { all, menuCategories, isAuthFn, getFooterData, getHeaderData } from "../../_modules/functions.js";

	export async function preload({ params, query }, session) {
    let S; if (typeof(S_) == "function") { S = new S_(this.req, this.res); } else { S = S_; }
		
    const categories = await menuCategories(S);
    const posts = await new Promise((resolve, reject) => {
      S.bind_( all("post", 111), ([d]) => {
          resolve(d);
          // reject(new Error('Fail!'))
          // throw(new Error())
        },
        [[null, "post"]]
      ); // 6=code // = means excact
		});
    const isAuth = await isAuthFn(S)
    const footerData = await getFooterData(S)
    const headerData = await getHeaderData(S)

		return {categories, posts, isAuth, footerData, headerData }

	}
</script>

<script>
  import MyLayout from '../_myLayout.svelte'
	export let posts;
  export let categories = [];
  export let footerData = {};
  export let headerData = {};
  export let isAuth = false;
</script>

<!-- <style src="./_index.scss"></style> -->

<svelte:head>
	<title>Page</title>
</svelte:head>


<MyLayout {categories}  {isAuth} {footerData} {headerData} >

	<h1>Pages</h1>

	<ul>
		{#each posts as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<li><a rel='prefetch' href='/f/page/{post[4]}'>{post[3]}</a></li>
		{/each}
	</ul>
</MyLayout>