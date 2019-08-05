<script context="module">
  import { Server as S_ } from "../_modules/ws_events_dispatcher.js";
  import { s_all, p_all, getPost, menuCategories } from "../_modules/functions.js";
  // Here We will Show some Top Images for each category
  export async function preload(_page, session) {
    let S; if (typeof(S_) == "function") { S = new S_(this.req, this.res); } else { S = S_; }
    
    const categories = await menuCategories(S);
    let image_collection = await new Promise((resolve, reject) => { S.bind_( s_all('image_collection'), data => { if (data) { resolve(data); } else { reject(new Error("No Product Exist")); } }, [null, "=Home"] ); });
    let page = await getPost(S, "home")
    
    let images = []
    if(image_collection[0]){
      const filter = [null, `=${image_collection[0][0]}`]
      images = await new Promise((resolve, reject) => { S.bind_( s_all('image'), data => { if (data) { resolve(data); } else { reject(new Error("No Product Exist")); } }, [filter, [null, null, null, 0]] ); });
    }
    return { categories, images, post: page[0] || [] };
  }
</script>

<script>
  import MyLayout from './_myLayout.svelte'
  import Banners from "../_components/block/Banners.svelte";
  import Why from "../_components/block/Why.svelte";
  // import Carousel from '../_components/ui/carousel/Carousel.svelte'
  import CustomerSays from "../_components/block/CustomerSays.svelte";
  import { onMount } from "svelte";

  export let categories = [];
  export let images = [];
  export let post;
  // https://greensock.com/get-started-js
  onMount(() => {
    if (window.hasOwnProperty("TweenMax")) {
      TweenMax.to("h1", 1, { opacity: 0.8 });
    }
  });
</script>

<style>
  /* h1 { text-align: center; margin: 0 auto; } */



  .title {
    text-align: center;

    margin: 70px 0 0 0;
    font-family: Domine, serif;
  }
</style>

<svelte:head>
  <title>Marvel Art Jewellery</title>
</svelte:head>


<MyLayout {categories} >

  <Banners banners={images}/>
  
  {@html post[6]}
  {#if false}
    <h3 class="title">Customer Says</h3>
    <CustomerSays />


  {/if}
</MyLayout>