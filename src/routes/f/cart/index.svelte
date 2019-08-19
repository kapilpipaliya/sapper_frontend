<script context="module">
  import { Server as S_ } from "../../_modules/ws_events_dispatcher.js";
  import { menuCategories, getPurityName, getToneName, getClarityName, isAuthFn, getFooterData, getHeaderData } from "../../_modules/functions.js";
	export async function preload(page, session){
		// let user = session.user
		// if(!user) return {};
		// if(!!user && user.isActive){ this.redirect(302, '/rdv') }
    let S; if (typeof S_ == "function") { S = new S_(this.req, this.res); } else { S = S_; }
    const categories = await menuCategories(S);
    const footerData = await getFooterData(S)
    const headerData = await getHeaderData(S)

		return { categories, footerData, headerData }

	}
</script>
<script>
  import { onMount } from "svelte";
  import { Server as S } from "../../_modules/ws_events_dispatcher.js";
  import { save_, all, makeObject, first, productImage, product_purity_price, product_clarity_price, getTotalArray } from "../../_modules/functions.js";
  import FadeOutButton from "../_FadeOutButton.svelte";
	import user from '../../_modules/stores/user.js'
  import MyLayout from '../_myLayout.svelte'
  import StorageDB from "../../_modules/indexdb/storage.js";
	
	let form={};
	export let categories = [];
  export let footerData = {};
  export let headerData = {};

  let products = []
	
	let clarities = [];
	let tones = [];
	let purities = [];
	let sumAmount = 0
	const fns = [];

	let db = null
	let isAuth = false;
  onMount(async () => {
		db = new StorageDB("cart", 1);
		await get_all_product_ids()

		clarities = await new Promise((resolve, reject) => { S.bind_( all("clarity"), ([d]) => { if (d) { resolve(d); } else { reject(new Error("No Clarity Returned")); } }, [[]] ); });
    tones = await new Promise((resolve, reject) => { S.bind_( all("tone"), ([d]) => { if (d) { resolve(d); } else { reject(new Error("No Clarity Returned")); } }, [[]] ); });
    purities = await new Promise((resolve, reject) => { S.bind_( all("purity"), ([d]) => { if (d) { resolve(d); } else { reject(new Error("No Clarity Returned")); } }, [[]] ); });

    // check it already logged in
    isAuth = await isAuthFn(S)
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
				fetch_products()
      }
		// console.log(products)		
		})
	}
	const fetch_products = () => {
		if(products.length) {
			const f_array = [`{${products.join(",")}}`]; f_array[14] = `product`;
			fns.push(all("product", 124)); S.bind_(fns.i(-1), async ([d]) => { 
				S.unbind(all("product", 124));
				for(const it of d) {
					const v = await db.getItem(it[0])
					it.push(v.value)
					// console.log(v)
				}
				await productImage(S, d)
				product_purity_price(d, undefined, x=>x.i(-2).purity_id)
				product_clarity_price(d, undefined, x=>x.i(-3).clarity_id)
				products = d;
				getSum()
				}, [f_array]);
		}
	}

	const buy_now =() => {
    //db.setItem(product.id, {name: "ring1"});
	}
	const deleteItemCart = (prod) => {
    db.processCursor(cursor=>{
      if(cursor) {
        if(cursor.value.id === prod[0]) {
					const request = cursor.delete();
          request.onsuccess = function() {
            // console.log('Deleted From cart');
          };
        }
        cursor.continue();
      } else {
				products = products.filter((v, _) => v[0] !== prod[0]);
				getSum()				
      }
    })
	}
	
  const updateItemCart = (prod, pcs) => {
    db.processCursor(cursor=>{
      if(cursor) {
        if(cursor.value.id === prod[0]) {
          const updateData = cursor.value;
          
          updateData.value.pcs = Number(pcs);
					const request = cursor.update(updateData);
					prod.i(-4).pcs = Number(pcs)
					products = products
					getSum()
          request.onsuccess = function() {
            // console.log('Updated cart');
          };
        };
        cursor.continue();
      } else {

      }
    })
	}

const getSum = () => {
	// use reduce function:
	let sum = 0
	for (const it of products) {
		if (Array.isArray(it)){
			sum += it.i(-4).pcs * getTotalArray(it)
		}
	}
	sumAmount = sum.toFixed(0)
	return sum;
}
</script>

<style>
    .container{
		display: flex;
		flex-direction: column;
	}
	.row{
		display: flex;
		flex-direction: row;
	}
	.aligncenter{align-items: center;}
	.row-center{
		flex: 1 1 auto;
	}
	img{width: 252px; height: 252px;}
	
	.title{

	}
	.top{
		vertical-align: top;
	}
	h1, h2 {text-align: center}
	.w100{width: 100px}
	td{white-space: nowrap;}
</style>

<svelte:head>
	<title>Cart</title>
</svelte:head>

<MyLayout {categories} {isAuth} {footerData}  {headerData}>
	<h1>Cart</h1>
	{#if false}
		IF gift message added give option to edit / remove it. show checkmark that its added.
	{/if}

	{#if !products.length}
		<h2>No Items in cart.</h2>
	{:else}
		<h2>My Shopping Cart({products.length} {products.length > 1 ? "Items" : "Item"})</h2>
		<div class="row">
			<div class="container">
				<div class="container">
					{#each products as p}
						{#if Array.isArray(p)}
						<div class="row aligncenter">
							<div>
								<img src={p[p.length - 3]} alt="product image"/>
							</div>
							<div class="row-center">
								<table>
									<tbody>
										<tr>
											<td colspan="2" class="title">{p[7]}</td>
										</tr>
										<tr>
											<td>Purity :</td>
											<td>{getPurityName(purities, p.i(-4).purity_id)}</td>
										</tr>
										<tr>
											<td>Tone :</td>
											<td>{getToneName(tones, p.i(-4).tone_id)}</td>
										</tr>
										<tr>
											<td>Clarity :</td>
											<td>{getClarityName(clarities, p.i(-4).clarity_id)}</td>
										</tr>
										<tr>
											<td>Price :</td>
											<td>{(p.i(-4).pcs * getTotalArray(p)).toFixed(0)}</td>
										</tr>
									</tbody>
								</table>
								{#if false}
									Description<br/>
									Ring Size<br/>
								{/if}
							</div>
							<div>
							<label>Quantity
							<input class="w100" type="number" value={p.i(-4).pcs} on:change={e=>updateItemCart(p, e.target.value)} min="1">
							</label>
							</div>
							<div><button on:click={_ => deleteItemCart(p)}>Remove</button></div>
						</div>
						{/if}
						{/each}

					<div class="row">
						<div class="">
							<a href="./f/page/30_day_money_back_policy" alt="30-day money back">30-Day Money back </a>
							<div class="">If you are not satisfied with the product, you can return within 30 days of delivery. We will refund 100% of your money. No Questions Asked!</div>
						</div>
						<div class="">
							<a href="./f/page/30_day_money_back_policy#lifetime-exchange">Eligible for Lifetime exchange &amp; Buy back </a>
							<div class="">If ever you feel like exchanging your old {headerData.company[0][4]} Jewellery for newer designs, we are game! Exchange the product for its current value or get Cash with just minor deductions.</div>
						</div>
						<div class="">
							<span class="top">Free &amp; Insured Delivery </span>
							<div class=""><span class="top">For 100% safe purchase, all goods are insured by us until they reach you securely. And it is FREE!</span></div>
						</div>
					</div>

				</div>
			</div>


			<div>
				<table>
					<tbody>
						<tr>
							<td colspan="2">Order Summery:</td>
						</tr>
						<tr>
							<td>Total {products.length} {products.length > 1 ? "Items" : "Item"}:</td>
							<td>Rs {sumAmount}</td>
						</tr>
						<tr>
							<td>Total Payable:</td>
							<td>Rs {sumAmount}</td>
						</tr>
					</tbody>
				</table>
				{#if false}
					<button>Gift Message (Optional):</button>

					<form>ADD YOUR GIFT MESSAGE<br/>
					Recipient's Name: <input id="giftTo"><br/>
					Your Name: <input id="giftFrom"><br/>
					Message: <input id="message"><br/>
					</form>
				{/if}

				<a class="checkout" href="./f/account/delivery" >Place Order</a><br/>
				{#if false}
					<button type="button">I have a voucher code</button><br/>
					<form>
						<input><br/>
						<button>Apply</button>
						{form.code_error}
					</form>
				{/if}

				<div class="contact-details"> Any Questions?<br>Please call us at <strong>1800-419-0066</strong> or <span class="live-chat">Chat with us</span> </div>
			</div>
		</div>
	{/if}
</MyLayout>