<svelte:options immutable/>
<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import { onMount } from "svelte";
  // import { getItems, postItems } from "../../jreason/src/getJson.bs.js";
  // import { getFirstElementOr, tailOrEmpty } from "../../jreason/src/list.bs.js";
  // import { isSuccess } from "../../jreason/src/Api.bs.js";
  import { Server } from "../../_modules/ws_events_dispatcher.js";

  const baseUrl = "http://localhost:8800/demo/v1/user";

  export let url = "";
  export let item = [];

  let form = { material_id: 0, slug: "", name: "" };

  let buttonSaveIsLoading = false;

  $: buttonSaveClass =
    buttonSaveIsLoading === true
      ? "button is-success is-loading"
      : "button is-success";

  let materials = [];

  let error = "";

  let event_m_name = `get_material_data`;
  let event_save_name = `save_accessory_data`;

  onMount(() => {
    if (item.length > 6) {
      form = {
        id: item[0],
        material_id: item[1],
        slug: item[5],
        name: item[6]
      };
    }
    Server.unbind(event_m_name);
    Server.bind(event_m_name, function(data) {
      materials = data;
      if (item.length == 0) {
        // New Entry
        form.material_id = materials[0] ? materials[0][0] : 0;
      } else {
        form.material_id = item[1];
      }
    });
    Server.trigger(event_m_name, {
      name: "m",
      message: "m"
    });

    Server.unbind(event_save_name);
    Server.bind(event_save_name, function(data) {
      if (data.ok) {
        buttonSaveIsLoading = false;
        dispatch("successSave");
        dispatch("close");
        error = "";
      } else {
        error = data.error;
      }
    });
  });

  async function save() {
    buttonSaveIsLoading = true;
    const k = {
      material_id: form.material_id,
      slug: form.slug,
      name: form.name
    };
    Server.trigger(event_save_name, k);
  }
  function clearError() {
    error = "";
  }
</script>

<style>
  input {
    display: block;
    width: 500px;
    max-width: 100%;
  }
</style>

<section class="modal-body">
  <div class="field">
    <label class="label">Material</label>
    <select bind:value={form.material_id} on:focus={clearError}>
      {#each materials as m}
        <option value={m[0]}> {m[6]} </option>
      {/each}
    </select>

    <div class="field">
      <label class="label">Slug</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder=""
          bind:value={form.slug}
          required
          on:focus={clearError} />
      </div>
    </div>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder=""
          bind:value={form.name}
          on:focus={clearError} />
      </div>
    </div>
  </div>
  <div> {error} </div>
</section>

<footer class="modal-foot">
  <button class={buttonSaveClass} on:click={save}>Save changes</button>
  <button class="button" on:click={() => dispatch('close')}>Cancel</button>
</footer>
