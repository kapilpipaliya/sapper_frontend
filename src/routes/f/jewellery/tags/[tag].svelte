<script context="module">
  import { Server as S_ } from "../../../_modules/ws_events_dispatcher.js";
  import { p_all, productImage,  product_purity_price, product_clarity_price, menuCategories, isAuthFn, getFooterData, getHeaderData} from "../../../_modules/functions.js";

  // Here We will Show some Top Images for each tag
  export async function preload(page, session) {
    let S; if (typeof(S_) == "function") { S = new S_(this.req, this.res); } else { S = S_; }
    const { tag } = page.params;

    const categories = await menuCategories(S);
    const footerData = await getFooterData(S)
    const headerData = await getHeaderData(S)

    let products = [];

    //const tagRow = await new Promise((resolve, reject) => { S.bind_( p_all("tag", 223), data => { resolve(data); }, [[null, tagRow[0][0]]] ); });// 1=code // = means excact
    const tags = await new Promise((resolve, reject) => {
      const f_array = [];
      f_array[14] = `product`;
      f_array[40] = `=${tag}`; // tags_tags_id // server crash if not escape
      S.bind_( p_all("product", 225), data => { resolve(data); }, [f_array] );
    });
    products = tags;

	await productImage(S, products)
	product_purity_price(products)
	product_clarity_price(products)
    /*
		let product = "";
		if (process.browser) { 
				product = await new Promise((resolve, reject) => {
				const event_name = `get_product_attachment_data`;
				
				S.bind_(event_name, (data) => {
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

    return { categories, products, isAuth, footerData, headerData  };
  }
</script>

<script>
  import Cards from "../../../_components/ui/Cards.svelte";
  import CardItem from "../../../_components/ui/CardItem.svelte";
  import ScrollTop from "../../../_components/ui/ScrollTop.svelte";
  import TextButton from "../../../_components/ui/TextButton.svelte";
  import Filter from "../../../_components/block/Filter.svelte";
  import MyLayout from '../../_myLayout.svelte'
  import { getTotalArray } from "../../../_modules/functions.js";

  export let categories = [];
  export let footerData = {};
  export let headerData = {};
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

<style>
	img{
		width: 372px;
		height: 372px;
		display: block;
	}
	span{

		text-align: center;
	}
	a{
		display: contents;
		text-decoration: none;
	}

</style>

<svelte:head>
  <title>{headerData.company[0][4]}</title>
</svelte:head>

{#if false}
	<Filter />
{/if}

<MyLayout {categories}  {isAuth}  {footerData}  {headerData}>
  <div class="container">
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