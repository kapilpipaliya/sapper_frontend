<svelte:options immutable/>
<script>
 import TablePage from "../../_components/TablePage.svelte";
 import AccessoryForm from "../../_components/Forms/AccessoryForm.svelte";

</script>

<svelte:head>
  <title>Accessory</title>
</svelte:head>

<h1>Accessory</h1>

<TablePage url="accessory" formcomponent={AccessoryForm}/>
