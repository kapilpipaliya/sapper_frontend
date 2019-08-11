<script context="module">
	export async function preload(page, session){
		// TODO: if no cookie , or cookie is rejected by server Redirect to login page.
		// user="ABCXYY"

		//1. Login page set cookie, restart ws connection
		//2. Logout page remove cookie, restart ws connection
		/*
		let user = session.user
		if(!user){
			this.redirect(302, '/connexion')
		}

		if(user && !user.isAdmin){
			this.redirect(302, '/connexion')
		}
		*/

		return {}
	}
</script>
<script>
	export let segment;
</script>

<svelte:head>
	<script src="https://cdn.tiny.cloud/1/smt6zl4b5zkhghams45ri2maeopvjhfo4euolf224yt2emhm/tinymce/5/tinymce.min.js"></script>
</svelte:head>

<style>
	div {
		display: flex;
	}
	b{
    	flex-basis: 100px;
	}
	a{
		text-decoration: none;
		background-color: aliceblue;
		padding: 0 10px;
		border: 1px solid rgb(125, 125, 125);
	}
	.common1{
		background-color: lightsalmon;
	}

	:global(form){
    background: lightseagreen;
	}
	:global(label) {
		display: flex;
		margin-bottom: 5px;
	}
	:global(label span) {
		flex-basis: 150px;
	}

	:global(label input,
	label select,
	label textarea){
		flex-basis: 250px;
	}
	/* .right{ float: right; } */
</style>
<nav>
	<a class="" href='/admin/account/LogOut'>Logout</a>
	<div>
		<b>Post:</b>
		<a href='/admin/post'>Post</a>
	</div>
	<div>
		<b>Product:</b>
		<a href='/admin/product'>Product</a>
		<a href='/admin/product/tag'>Tag</a>
		<a href='/admin/product/category'>Category</a>
		<a href='/admin/product/setting_type'>Setting Type</a>
		<a href='/admin/product/certified_by'>Certified By</a>
		<a href='/admin/product/policy'>Policy</a>
	</div>

	<div>
		<b>Metal:</b>
		<a href='/admin/metal/metal'>Metals</a>
		<a href='/admin/metal/purity'>Purity</a>
		<a href='/admin/metal/tone'>Tone</a>
		<a href='/admin/metal/accessory'>Accessory</a>
	</div>
	
	<div>
		<b>Diamond:</b>
		<a href='/admin/gem/clarity'>Clarity</a>
		<a href='/admin/gem/shape' class="common1">Shape</a>
		<a href='/admin/gem/diamond_color'>Color</a>
		<a href='/admin/gem/diamond_size'>Size</a>
	</div>

	<div>
		<b>Color Stone:</b>
		<a href='/admin/gem/cs_type'>Type</a>
		<a href='/admin/gem/shape' class="common1">Shape</a>
		<a href='/admin/gem/cs_color'>Color</a>
		<a href='/admin/gem/color_stone_size'>Size</a>
	</div>

	<div>
		<b>Setting:</b>
		<a href='/admin/setting/currency'>Currency</a>
		<a href='/admin/setting/image'>Image</a>
		<a href='/admin/setting/image_collection'>Image Collection</a>
		<a href='/admin/setting/payment_method'>Payment Method</a>
		<a href='/admin/setting/setting'>Setting</a>
	</div>
	<div>
		<b>Contacts:</b>
			{#if false}
		<a href='/admin/entity/address_type'>Adress Type</a>
		<a href='/admin/entity/contact_type'>Contact Type</a>
		<a href='/admin/entity/entity_type'>Entity Type</a>
			{/if}
		<a href='/admin/entity'>Entity</a>
	</div>
	{#if false}
		<div>
			<b>Account:</b>
			<a href='/admin/account/account_type'>Account Type</a>
			<a href='/admin/account/journal_type'>Journal Type</a>
		</div>
	{/if}
	<div>
		<b>Order:</b>
		<a href='/admin/account/txn'>Orders</a>
	</div>
	<div>
		<b>Setting:</b>
		<a href='/admin/setting/support'>Support</a>
	</div>
	{#if false}
	<div>
		<b>Mfg:</b>
		<a href='/admin/mfg/department_type'>Department Type</a>
		<a href='/admin/mfg/department'>Department</a>
		<a href='/admin/mfg/wax_setting'>Wax Setting</a>
		<a href='/admin/mfg/casting'>Casting</a>
		<a href='/admin/mfg/metal_issue'>Metal Issue</a>
		<a href='/admin/mfg/mfg_txn'>Mfg Txn</a>
		<a href='/admin/mfg/m_transfer'>Material Transfer</a>
		<a href='/admin/mfg/refining'>Refining</a>
	</div>
	{/if}
</nav>
<slot>
</slot>
