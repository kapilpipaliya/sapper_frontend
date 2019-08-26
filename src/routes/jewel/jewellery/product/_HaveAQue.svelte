
<script>
  import { fade, fly } from 'svelte/transition';
  import SupportForm from "./_SupportForm.svelte";
  let isSubmited = false
  export let headerData = {};
</script>
<style src="./_HaveAQue.scss"></style>
<div class="card">

  <h3>{headerData.company[0][4]} Promise</h3>

  <div class="column">
    <div class="row">
      <a href="./f/page/30_day_money_back_policy">30-DAY MONEY BACK</a>
      <a href="./f/page/30_day_money_back_policy#lifetime-exchange">
        LIFETIME EXCHANGE & BUY-BACK POLICY
      </a>
      <a href="./f/page/certifications">CERTIFIED JEWELLERY</a>
    </div>
    <div class="row">
      <a href="./f/page/30_day_money_back_policy#refund">100% REFUND</a>
      <a href="./f/page/30_day_money_back_policy#free_shipping">
        FREE SHIPPING
      </a>
      <a href="./f/page/30_day_money_back_policy#free-returns">FREE RETURNS</a>
    </div>
  </div>

  <h3>HAVE A QUESTION?</h3>
  CALL US AT 1800-419-0066
  {#if !isSubmited}
    <SupportForm bind:isSubmited />
  {:else}
  	<p in:fly="{{ y: 100, duration: 2000 }}" out:fade>
		  We Received your message successfully.<br/>We Will Contact you soon
	  </p>
  {/if}
  
  <section id="certificaton" class="clearfix">
    <span class="title">Certificate of Authenticity</span>
    <div class="content">
      Every piece of jewellery that we <br />
      make is certified for authenticity by <br />
      third-party international laboratories <br />
      like <strong>SGL</strong> , <strong>IGI</strong> , <strong>BIS</strong> , <strong>GIA</strong> , and <strong>HKD</strong> .
    </div>
  </section>

</div>
