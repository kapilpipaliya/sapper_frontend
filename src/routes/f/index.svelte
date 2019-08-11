<script context="module">
  import { Server as S_ } from "../_modules/ws_events_dispatcher.js";
  import { all, getPost, menuCategories, getFooterData, getHeaderData } from "../_modules/functions.js";
  // Here We will Show some Top Images for each category
  export async function preload(_page, session) {
    let S; if (typeof(S_) == "function") { S = new S_(this.req, this.res); } else { S = S_; }
    
    const categories = await menuCategories(S);
    const footerData = await getFooterData(S)
    const headerData = await getHeaderData(S)
    let image_collection = await new Promise((resolve, reject) => { S.bind_( all('image_collection'), data => { if (data) { resolve(data); } else { reject(new Error("No Product Exist")); } }, [null, "=Home"] ); });
    let page = await getPost(S, "home")
    
    let images = []
    if(image_collection[0]){
      const filter = [null, `=${image_collection[0][0]}`]
      images = await new Promise((resolve, reject) => { S.bind_( all('image'), data => { if (data) { resolve(data); } else { reject(new Error("No Product Exist")); } }, [filter, [null, null, null, 0]] ); });
    }
    return { categories, images, post: page[0] || [], footerData, headerData };
  }
</script>

<script>
  import MyLayout from './_myLayout.svelte'
  import Banners from "../_components/block/Banners.svelte";
  // import Carousel from '../_components/ui/carousel/Carousel.svelte'
  import { onMount } from "svelte";

  export let categories = [];
  export let footerData = {};
  export let headerData = {};
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
</style>

<svelte:head>
  <title>{headerData.company[0][4]}</title>
</svelte:head>

<MyLayout {categories} {footerData} {headerData} >
  <Banners banners={images}/>
  {@html post[6]}
</MyLayout>