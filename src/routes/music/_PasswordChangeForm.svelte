<script>

  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import {makeObject} from "../_modules/utils.js"
  import SubmitButton from './_SubmitButton.svelte'
  import CancelButton from './_CancelButton.svelte';
  
  const dp = createEventDispatcher();

  export let isSubmited = false
  export let S

  let isSaving = false;
  let er = "";
  let form = {
    // id: 0,
    old_password: "",
    new_password: "",
    confirm_password: "",
  }
  const fns = [];

  S.bind$(["user", "update_password", 0], ([d]) => { 
    isSaving = false; if (d.ok) { isSubmited = true;  er = ""; dp("successSave", {d});  } else { er = d.error; } }, 1); 

  async function save() { 
    if(form.new_password != form.confirm_password) {
      er = "new password and confirm password mismatch"
      return
    }
    isSaving = true; S.trigger([[ ["user", "update_password", 0], [form] ]]); }
  function clearError() { er = ""; }

  onDestroy(() => { if(process.browser) S.unbind_(fns) });
</script>

<form class="admin" on:submit|preventDefault={save} >
    <label><span>Old Password</span><input type="password" bind:value={form.old_password} required on:focus={clearError} /></label>
    <label><span>Password</span><input type="password" bind:value={form.new_password} required on:focus={clearError}/> </label>
    <label><span>Confirm Password</span><input type="password" bind:value={form.confirm_password} required on:focus={clearError} /></label>

  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
  </footer>
</form>