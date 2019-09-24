<script context="module">
  import { Server as S_ } from "../../../_modules/ws_user.js";
  import { ws_admin, menuCategories, getPurityName, getToneName, getClarityName, isAuthFn, getFooterData, getHeaderData } from "../../../_modules/functions.js";
	export async function preload(page, session){
		// let user = session.user
		// if(!user) return {};
		// if(!!user && user.isActive){ this.redirect(302, '/rdv') }
    let S; if (typeof S_ == "function") { S = new S_(ws_admin, this.req, this.res); } else { S = S_; }
		
		const getTableData = async(filterSettings=[]) => {
			let isAuth = false;
			let footerData = ""
			let headerData = ""
			// let clarities = [];
			// let tones = [];
			// let purities = [];
			// let policies = [];
			// let certificates = [];
			let categories = [];
			// let product_h = [];
			// let product1 = [];
			await new Promise((resolve, reject) => {
					const batch1 = []
					let r00 = false, r0 = false, r = false, r1 = true, r2 = true, r3 = true, r4 = true, r5 = true, r6 = false, r7 = true, r8 = true
					const myResolve = () => {
						if(r00 && r0 && r && r1 && r2 && r3 && r4 && r5 && r6 && r7, r8) resolve(1)
					}
					batch1.push([ ["user", `is_logged_in`, 0], ([d]) => {isAuth = d; r00 = true; myResolve()}, [[]] ])
					batch1.push([ all("setting", 112), ([d]) => {footerData = {mobile: d}; r0 = true; myResolve()}, [[`=mobile`]] ])
					batch1.push([ all("setting", 113), ([d]) => {headerData = {company: d}; r = true; myResolve()}, [[`=company_name`]] ])
					// batch1.push([ all("clarity"), ([d]) => {clarities = d; r1 = true; myResolve()}, [[]] ])
					// batch1.push([ all("tone"), ([d]) => {tones = d; r2 = true; myResolve()}, [filterSettings] ])
					// batch1.push([ all("purity"), ([d]) => {purities = d; r3 = true; myResolve()}, [filterSettings] ])
					// batch1.push([ all("policy"), ([d]) => {policies = d; r4 = true; myResolve()}, [] ])
					// batch1.push([ all("certified_by"), ([d]) => {certificates = d; r5 = true; myResolve()}, [] ])

					batch1.push([ all("category", 111), ([d]) => {categories = d; r6 = true; myResolve()}, [[null, "=NULL"],[null, null, null, null, 0]] ])
					// batch1.push([ all_h(table), ([d]) => {product_h = d[1]; r7 = true; myResolve()}, filter ])
					// batch1.push([ all(table), ([d]) => {product1 = d; r8 = true; myResolve()}, filter ])
					S.batchBind_T(batch1)
				})
			return {categories, footerData, headerData};
		}
		const {categories, footerData, headerData} = await getTableData([]);


		return { categories, footerData, headerData }
	}
</script>
<script>
  import { onMount } from "svelte";
  import { Server as S } from "../../../_modules/ws_user.js";
  import { ins_, upd_, all, makeObject, first, productImage, product_purity_price, product_clarity_price, getTotalArray } from "../../../_modules/functions.js";
  import FadeOutButton from "../../_FadeOutButton.svelte";
	import user from '../../../_modules/stores/user.js' 
  import MyLayout from '../../_myLayout.svelte'
  import StorageDB from "../../../_modules/indexdb/storage.js";
	
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
				p.push([v.id, v.purity_id, v.tone_id, v.clarity_id, v.quantity])
				cursor.continue();
      } else {
				products = p
				fetch_products()
      }
		console.log(products)		
		})
	}
	const fetch_products = () => {
		if(products.length) {
			const f_array = [`{${products.map(x=>x[0]).join(",")}}`]; f_array[14] = `product`;
			fns.push(all("product", 125)); S.bind_(fns.i(-1), async ([d]) => { 
				S.unbind(all("product", 125));
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

<style src="./_index.scss"></style>
<svelte:head>
	<title>Payment</title>
</svelte:head>

<MyLayout {categories} {isAuth} {footerData} {headerData}>
	<h1>Payment</h1>
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
											<td>{@debug p}{getPurityName(purities, p.i(-4).purity_id)}</td>
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
									Description
									Ring Size
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
							<a href="jewel/page/30_day_money_back_policy" alt="30-day money back">30-Day Money back </a>
							<div class="">If you are not satisfied with the product, you can return within 30 days of delivery. We will refund 100% of your money. No Questions Asked!</div>
						</div>
						<div class="">
							<a href="jewel/page/30_day_money_back_policy#lifetime-exchange">Eligible for Lifetime exchange &amp; Buy back </a>
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

					<form>ADD YOUR GIFT MESSAGE
					Recipient's Name: <input id="giftTo">
					Your Name: <input id="giftFrom">
					Message: <input id="message">
					</form>
				{/if}

				<button type="button" >Place Order</button>
				{#if false}
					<button type="button">I have a voucher code</button>
					<form>
						<input>
						<button>Apply</button>
						{form.code_error}
					</form>
				{/if}

				<div class="contact-details"> Any Questions?<br>Please call us at <strong>{footerData.mobile[0][4]}</strong> or <span class="live-chat">Chat with us</span> </div>
			</div>
		</div>
	{/if}
</MyLayout>