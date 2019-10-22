<script context="module">
  import { Server as S_ } from "../../../_modules/ws_user.js";
  import { ws_admin, all, all_h, ins_, upd_, makeObject, product_purity_price, product_clarity_price, productImage, get_p_purity_idx, get_p_clarity_idx, menuCategories, get_p_purity_tone_idx, getToneIdx,getPrice,getTotal, isAuthFn, getFooterData, getHeaderData  } from "../../../_modules/functions.js";
  export async function preload(page, session) {
    let S; if (typeof S_ == "function") { S = new S_(ws_admin, this.req, this.res); } else { S = S_; }
    const { p } = page.params;

    let table = "product";

    let purity_idx = 0;
    let d_clarity_idx = 0;


    
  const filter = [[p]]
  filter[14] = 'product'

  const getTableData = async(filterSettings=[]) => {
    let isAuth = false;
    let footerData = ""
    let headerData = ""
    let clarities = [];
    let tones = [];
    let purities = [];
    let policies = [];
    let certificates = [];
    let categories = [];
    let product_h = [];
    let product1 = [];
    await new Promise((resolve, reject) => {
        const batch1 = []
        let r00 = false, r0 = false, r = false, r1 = false, r2 = false, r3 = false, r4 = false, r5 = false, r6 = false, r7 = false, r8 = false
        const myResolve = () => {
          if(r00 && r0 && r && r1 && r2 && r3 && r4 && r5 && r6 && r7, r8) resolve(1)
        }
        batch1.push([ ["user", `is_logged_in`, 0], ([d]) => {isAuth = d; r00 = true; myResolve()}, [[]] ])
        batch1.push([ all("setting", 112), ([d]) => {footerData = {mobile: d}; r0 = true; myResolve()}, [[`=mobile`]] ])
        batch1.push([ all("setting", 113), ([d]) => {headerData = {company: d}; r = true; myResolve()}, [[`=company_name`]] ])
        batch1.push([ all("clarity"), ([d]) => {clarities = d; r1 = true; myResolve()}, [[]] ])
        batch1.push([ all("tone"), ([d]) => {tones = d; r2 = true; myResolve()}, [filterSettings] ])
        batch1.push([ all("purity"), ([d]) => {purities = d; r3 = true; myResolve()}, [filterSettings] ])
        batch1.push([ all("policy"), ([d]) => {policies = d; r4 = true; myResolve()}, [] ])
        batch1.push([ all("certified_by"), ([d]) => {certificates = d; r5 = true; myResolve()}, [] ])

        batch1.push([ all("category", 111), ([d]) => {categories = d; r6 = true; myResolve()}, [[null, "=NULL"],[null, null, null, null, 0]] ])
        batch1.push([ all_h(table), ([d]) => {product_h = d[1]; r7 = true; myResolve()}, filter ])
        batch1.push([ all(table), ([d]) => {product1 = d; r8 = true; myResolve()}, filter ])
        S.batchBind_T(batch1)
      })
    return {isAuth, footerData, headerData, clarities, tones, purities, policies, certificates, categories, product_h, product1};
  }
  const {isAuth, footerData, headerData, clarities, tones, purities, policies, certificates, categories, product_h, product1} = await getTableData([]);

  await productImage(S, product1)
  // product_purity_price(product1)
  // product_clarity_price(product1)
  purity_idx = get_p_purity_idx(product1[0])
  d_clarity_idx = get_p_clarity_idx(product1[0])
  let tone_id = 0;
  const tone_array = product1[0][46][purity_idx][1]
  if(tone_array){
    const idx = get_p_purity_tone_idx(tone_array)
    if(idx > -1) {tone_id = tone_array[idx][0]}
  }
  const product = makeObject([...product_h, "main_image" ], product1[0], [])
  product.p_purities_purity_id.forEach(x=> {if(x[3] == null) {x[3] = []; }  } ) // if its null tones cant loop
  return { categories, product, clarities, tones, purities, purity_idx, d_clarity_idx, tone_id, policies, certificates, isAuth, footerData, headerData };
  }
</script>

<script>
  import { onMount } from "svelte";
  import { fade, fly } from 'svelte/transition';
  import MyLayout from '../../_myLayout.svelte'
  import Cards from "../../_Cards.svelte";
  import FadeOutButton from "../../_FadeOutButton.svelte";
  import Slider from "./_Slider.svelte";
  import ScrollTop from "../../../_ScrollTop.svelte";
  import ProductDetail from "./_ProductDetail.svelte";
  import HaveAQue from "./_HaveAQue.svelte";
  import StorageDB from "../../../_modules/indexdb/storage.js";
  import { getClarityName, getToneName, getPurityName, product_img_url} from "../../../_modules/functions.js";
  export let isAuth = false;
  export let categories = [];
  export let product = {};
  export let clarities = [];
  export let tones = [];
  export let purities = [];
  export let policies = [];
  export let certificates = [];
  export let purity_idx = 0;
  export let tone_id = 0;
  export let d_clarity_idx = 0;
  export let footerData = {};
  export let headerData = {};
  let instruction = ""
  let isCartAdded = false
  //export let similer_products = [];

  const handlePurityChange = () => {
    //let idx = product.p_purities_purity_id.findIndex(v => v[0] === purity_id)
    const purityRow = product.p_purities_purity_id[purity_idx]
    if(purityRow){
      const toneIdx=purityRow[1].findIndex(x=>x[0]===tone_id)
      if(tone_id && toneIdx > -1) {
        product.purity_price = purityRow[1][toneIdx][2]  //46 =  [purity_id, [[tone_id, weight, price, ismain]], ismain ]
      } else {
        const tone_array = purityRow[1]
        for (let i = 0; i < tone_array.length; i++) {
          if(tone_array[i][0]){
            tone_id = tone_array[i][0]
            product.purity_price = purityRow[1][i][2]  //46 =  [purity_id, [[tone_id, weight, price]] ]
            break
          }
        }
      }
    }
  }
  const handleToneChange = () => {
      handlePurityChange()
  }
  // const getClarityPrice = () => {
  //   return d_clarity_idx > -1 ? product.p_clarity_clarity_id[d_clarity_idx][3] : 0
  // }
  $: clarityPrice = d_clarity_idx > -1 ? product.p_clarity_clarity_id[d_clarity_idx][3] : 0
  const handleDClarityChange = () => {
    ////let idx = product.p_clarity_clarity_id.findIndex(v => v[0] === d_clarity_idx)
    
    //product.clarity_price = d_clarity_idx > -1 ? product.p_clarity_clarity_id[d_clarity_idx][3] : 0
  }
  




  let db = null
  onMount(() => {
    db = new StorageDB("cart", 1);

  });

  const buy_now =() => {
    db.setItem(product.id, {purity_id: product.p_purities_purity_id[purity_idx][0], tone_id: tone_id, clarity_id: product.p_clarity_clarity_id[d_clarity_idx][0], pcs: 1, instruction});
    isCartAdded = true
  }
  const getPolicyUrl = (id) => {
    let policyIndx=policies.findIndex(x=>x[0]===id)
    if(policyIndx > -1) {
      return policies[policyIndx][2]
    }
    return "#!"
  }
  const getPolicyName = (id) => {
    let policyIndx=policies.findIndex(x=>x[0]===id)
    if(policyIndx > -1) {
      return policies[policyIndx][1]
    }
    return "#!"
  }
  const getCertificateRow = (id) => {
    if(id){
      let idx=certificates.findIndex(x=>x[0]===id)
      idx= idx > -1 ? idx : 0
      return certificates[idx]
    } else {
      return ["", "", ""]
    }
  }

</script>

<style src="./_P.scss"></style>
<svelte:head>
  <title>{headerData.company[0][4]}</title>
</svelte:head>

<MyLayout {categories}  {isAuth} {footerData} {headerData} >
  <div class="cards">
    <div class="card">
      {#if false}
        <img src={product.main_image} alt=""/>
      {/if}
      <Slider images={product.p_attachments_attachement_id} {product_img_url}/>
      {#if product.p_certified_by_certified_by[0] }
        <div class="certification">
            <span> Certified By </span>
            <ul>
              {#each product.p_certified_by_certified_by as s}
              <li> <span title={getCertificateRow(s)[3]}> {getCertificateRow(s)[2]}&nbsp; </span> </li>
              {/each}
            </ul>
        </div>
      {/if}

    </div>
    <div class="card">
      <h1>{product.title}</h1>
      <h2 class="price1">₹ {getTotal(product, purity_idx, tone_id, clarityPrice)}</h2>
      {#if false}
        TODO: add auto description here. ([Diamond Ring] in [18 kt] [yellow gold]
        [8.46 gram] with diamonds (0.2550 ct))
      {/if}
      {#if product.excerpt}
        <p>{product.excerpt}</p>
      {/if}
      {#if false}
        Stock Quantity: {product.stock_quantity} Stock Status: {product.stock_status}
      {/if}
      <form>
        {#if false}EMI Options... Delivery Options...{/if}
        <div>Customize this product:</div>
        <label>
          <span>Purity</span>
          <select bind:value={purity_idx} on:change={handlePurityChange}>
            {#each product.p_purities_purity_id as p, index}
              <option value={index}>{getPurityName(purities, p[0])}</option>
            {/each}
          </select>
        </label>
        <label>
          <span>Tones</span>
          <select bind:value={tone_id} on:change={handleToneChange}>
            {#each product.p_purities_purity_id[purity_idx][1] as s, index}
              <option value={s[0]}>{getToneName(tones, s[0])}</option>
            {/each}
          </select>
        </label>
        {#if false}
          {tone_id}
        {/if}
        <label>
          <span>Diamond Clarity</span>
          <select bind:value={d_clarity_idx} on:change={handleDClarityChange}>
            {#each product.p_clarity_clarity_id as c, index}
              <option value={index}>{getClarityName(clarities, c[0])}</option>
            {/each}
          </select>
        </label>
        {#if false}Ring Size:{/if}
        <label>
          <span>Instruction</span>
          <textarea cols="20" rows="2" bind:value={instruction} />
        </label>
  {#if !isCartAdded}
    <FadeOutButton class1={"w100p"} on:click={buy_now } >Buy Now</FadeOutButton>
  {:else}
  	<p class="fly" in:fly="{{ y: 100, duration: 2000 }}" out:fade>
		  Product added to cart successfully.<br/>
	  </p>
  {/if}
        
      </form>
      {#each product.p_policy_post_policy as p}
         <a href={getPolicyUrl(p)}>{getPolicyName(p)}</a>
      {/each}
      <a href="jewel/page/certifications">Certified Jewellery</a>

      <p>Any Questions? Please feel free to reach us at: {footerData.mobile[0][4]}</p>

    </div>

    <div class="break"></div>
    <div class="item3 card">
      <ProductDetail {product} {purity_idx} {d_clarity_idx} {purities} {tones} {tone_id} {clarityPrice}/>
    </div>

    <div class="card">
      <HaveAQue {headerData} {footerData}/>
    </div>

  </div>


  <ScrollTop/>
</MyLayout>