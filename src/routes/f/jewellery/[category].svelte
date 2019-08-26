<script context="module">
  import { Server as S_ } from "../../_modules/ws_normal.js";
  import { ws_admin, all, productImage,  product_purity_price, product_clarity_price, menuCategories, isAuthFn, getFooterData, getHeaderData} from "../../_modules/functions.js";

  // Here We will Show some Top Images for each category
  export async function preload(page, session) {
    let S; if (typeof(S_) == "function") { S = new S_(ws_admin, this.req, this.res); } else { S = S_; }
    const { category } = page.params;

    let categories = []
    let footerData = {}
    let headerData = {}
    let categoryRow = []
    await new Promise((resolve, reject) => {
      const batch1 = []
      let r1 = false, r2 = false, r3 = false, r4 = false
      const myResolve = () => {
        if(r1 && r2 && r3 && r4) resolve(1)
      }
  
      batch1.push([
        all("category", 111), ([d]) => { categories = d; r1 = true; myResolve()},  [[null, "=NULL"],[null, null, null, null, 0]]
      ])
      batch1.push([
        all("setting", 112), ([d]) => {footerData.mobile = d; r2 = true; myResolve()}, [[`=mobile`]]
      ])
      batch1.push([
        all("setting", 113), ([d]) => {headerData.company = d; r3 = true; myResolve()}, [[`=company_name`]]
      ])
      batch1.push([
        all("category", 222), ([d]) => {categoryRow = d; r4 = true; myResolve()}, [[null, null, null, null, null, null, `=${category}`]] // 6=code // = means excact
      ])
      S.batchBind_T(batch1)
    })

    if (!categoryRow.length) {
      // console.log("No category exist.");
    }
    // This is not good programming
    let sub_categories = [];
    let sub_category_products = [];
    let products = [];

    if (categoryRow[0]) {
      sub_categories = await new Promise((resolve, reject) => {
        S.bind_( all("category", 223), ([d]) => {
            resolve(d);
          },
          [[null, categoryRow[0][0]]]
        ); // 1=parent
      });
      //let i = 0;
      if (sub_categories.length) {
        for (const it of sub_categories) {
          const p = await new Promise((resolve, reject) => {
            const f_array = [];
            f_array[14] = `product`;
            f_array[41] = `=${it[0]}`; // pc_category_id
            S.bind_( all("product", 224), ([d]) => {
                resolve(d);
              },
              [f_array]
            );
          });
          sub_category_products.push(p);
        }
      }
      const p = await new Promise((resolve, reject) => {
        const f_array = [];
        f_array[14] = `product`;
        f_array[41] = `=${categoryRow[0][0]}`; // pc_category_id
        S.bind_( all("product", 225), ([d]) => { resolve(d); }, [f_array] );
      });
      products = p;
    }



	for (let c of sub_category_products) {
		await productImage(S, c)
		product_purity_price(c)
		product_clarity_price(c)
	}
	await productImage(S, products)
	// console.log(products)
	product_purity_price(products)
	product_clarity_price(products)
    /*
		let product = "";
		if (process.browser) { 
				product = await new Promise((resolve, reject) => {
				const event_name = `attachment_data`;
				
				S.bind_(["legacy", "product", event_name, 0], (data) => {
					const url = URL.createObjectURL(data)
					resolve(url)
					// const reader = new FileReader();
					// reader.onload = function(e) { 
					// 	const url = e.target.result
					// 	resolve(url)
					// };
					// reader.readAsDataURL(data);
				}, 16);
			});
		} else {
			// http://localhost:8300/demo/v1/user/download?path=
			// TODO fix this : This should return server path.
			product = ""
		}*/
    const isAuth = await isAuthFn(S)

    return { categories, sub_categories, sub_category_products, products, isAuth, footerData, headerData  };
  }
</script>

<script>
  import Cards from "../_Cards.svelte";
  import CardItem from "../_CardItem.svelte";
  import ScrollTop from "../../_ScrollTop.svelte";
  import TextButton from "./_TextButton.svelte";
  import Filter from "./_Filter.svelte";
  import MyLayout from '../_myLayout.svelte'
  import { getTotalArray } from "../../_modules/functions.js";

  export let categories = [];
  export let footerData = {};
  export let headerData = {};
  export let sub_categories = [];
  export let sub_category_products = [];
  export let products = [];
  export let isAuth = false;

  if (process.browser) {
    window.onscroll = function(ev) {
      if (
        window.innerHeight + Math.ceil(window.pageYOffset) >=
        document.body.offsetHeight - 400
      ) {
        // Load More Products...
      }
      if (window.pageYOffset > 300) {
        // Show Move To TOp and make it working...
      }
    };
  }

</script>

<style src="./_Category.scss"></style>

<svelte:head>
  <title>{headerData.company[0][4]}</title>
</svelte:head>

{#if false}
	<Filter />
{/if}

<MyLayout {categories}  {isAuth}  {footerData}  {headerData}>
  <div class="container">
    {#if sub_categories.length}
      {#each sub_categories as c, index}
        <a class="categorytext" href={`./f/jewellery/${c[6]}`} alt="category">{c[5]} :</a>
        <Cards>
          {#each sub_category_products[index] as p}
            <CardItem>
              <a href={`./f/jewellery/product/${p[0]}`}>
                <img src={p[p.length - 3]} alt="product image"/>
                <span>{p[7]}</span>
                <TextButton><span>₹ {getTotalArray(p).toFixed(0)}</span></TextButton>
              </a>
            </CardItem>
          {/each}
        </Cards>
      {/each}
    {/if}
  {#if sub_categories.length && products.length} 
  <hr/>
  {/if}
    <Cards>
      {#each products as p}
        <CardItem>
          <a href={`./f/jewellery/product/${p[0]}`}>
            <img src={p[p.length - 3]} alt="product image"/>
            <span>{p[7]}</span>
            <TextButton><span>₹ {getTotalArray(p).toFixed(0)}</span></TextButton>
          </a>
        </CardItem>
      {/each}
    </Cards>

  </div>


  <ScrollTop/>

</MyLayout>