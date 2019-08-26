<script context="module">
  import { Server as S_ } from "../../../_modules/ws_normal.js";
  import { ws_admin, menuCategories, getPurityName, getToneName, getClarityName, isAuthFn, getFooterData, getHeaderData } from "../../../_modules/functions.js";
	export async function preload(page, session){
		let S; if (typeof S_ == "function") { S = new S_(ws_admin, this.req, this.res); } else { S = S_; }
    const categories = await menuCategories(S);
    const isAuth = await isAuthFn(S)
		if(!isAuth){ this.redirect(302, './f/auth/Login') }
    const footerData = await getFooterData(S)
    const headerData = await getHeaderData(S)

		return { categories, isAuth, footerData, headerData }
	}
</script>
<script>
  import { onMount } from "svelte";
  import { Server as S } from "../../../_modules/ws_normal.js";
  import { all_h, ins_, all, makeObject, first, productImage, product_purity_price, product_clarity_price, getTotalArray } from "../../../_modules/functions.js";
  import MyLayout from '../../_myLayout.svelte'
	import StorageDB from "../../../_modules/indexdb/storage.js";
	import Form from './_form/Form.svelte'
	
	export let categories = [];
  export let footerData = {};
  export let headerData = {};
	let headersSelectors = [];

	let products = []

	let db = null
	let isAuth = false;
  onMount(async () => {
		db = new StorageDB("cart", 1);
		await get_all_product_ids()
	});

  const get_all_product_ids = async () => {
		const p = []
    await db.processCursor(cursor=>{
      if(cursor) {
				const v = cursor.value;
				p.push(v.id)
				cursor.continue();
      } else {
				products = p
				//fetch_products() // No need to fetch product data
      }
		})
	}
</script>
<style src="./_index.scss"></style>
<svelte:head>
	<title>Address</title>
</svelte:head>

<MyLayout {categories} {isAuth} {footerData} {headerData}>
	<h1>Shipping Address</h1>

	{#if !products.length}
		<h2>No Items in cart.</h2>
	{:else}
		<h2>Select Address For delivery:</h2>
		<div class="row">
			<div>
					<Form  />
			</div>

			<div>
				<a href="./f/account/checkout" >Checkout</a><br/>
				<div class="contact-details"> Any Questions?<br>Please call us at <strong>1800-419-0066</strong> or <span class="live-chat">Chat with us</span> </div>
			</div>

		</div>
	{/if}
</MyLayout>