
<script>
  import { onMount } from "svelte";
  import * as sapper from '@sapper/app';
  import { Server as S } from "../../../../_modules/ws_events_dispatcher.js";
  import { all_h, getUser } from "../../../../_modules/functions.js";
  import { fade, fly } from 'svelte/transition';
  import EntityForm from "../../../../_components/forms/entity/EntityForm.svelte";
  let isSubmited = false

  let user = []
	let headersSelectors = [];
	let id = 0
  onMount(async () => {
		S.bind_(all_h("entity_entity"), (data) => { headersSelectors = data[1] || []; S.unbind(all_h("entity_entity"))}, []);
		id = await new Promise((resolve, reject) => { S.bind_( "user_id", d => { if (d) { S.unbind("user_id"); resolve(d); } else { reject(new Error("No Clarity Returned")); } }, [[]] ); });
    user = (await getUser(S, id))[0]
    if (!user){sapper.goto('./f/auth/Login')}
  });
  
</script>
<style>
  p{

  font-family: arial;
  color: green;
  font-weight: 550;
  text-align: center;
  word-wrap: break-word;
}
</style>

<div class="card">
  {#if !isSubmited}
    {#if user && user.length && headersSelectors.length}
    <EntityForm bind:isSubmited item={user} hs={headersSelectors} rowIdx={id} nameHidden={true}/>
    {/if}
  {:else}
  	<p in:fly="{{ y: 100, duration: 2000 }}" out:fade>
		  Address Saved. now you can continue to checkout.
	  </p>
  {/if}
  
</div>
