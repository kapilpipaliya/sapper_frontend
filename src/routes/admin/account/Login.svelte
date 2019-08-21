<script context="module">
  export async function preload(page, session) {}
</script>

<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import { goto } from "@sapper/app";
  const dp = createEventDispatcher();
  let isSaving = false;
  let er = "";  
  let form = { email: "", pass: "" };
  let formSave = false;
  let getCookie = false;
  $: isAuth = formSave && getCookie
  let username = null // to focus
  const fns = [];
  let S; 
  onMount(async ()=>{
    const { Server: S_ } = await import("../../_modules/ws_events_dispatcher.js");
    if (typeof S_ == "function") { S = new S_(); } else { S = S_; }

    fns.push(["legacy", "auth", "admin_login", 0]); S.bind$(fns.i(-1), ([d]) => {
      isSaving = false; if (d.ok) {  er = ""; formSave = true; dp("successSave", { d }); } else { er = d.error; } })
    fns.push(["legacy", "auth", "set_cookie", 0]); S.bind$(fns.i(-1), ([d]) => { 
      document.cookie = `admin=${d.admin}; path=/`; getCookie = true; })

    // check it already logged in
    isAuth = await new Promise((resolve, reject) => { S.bind_( ["legacy", "auth", "is_admin_auth", 0], ([d]) => { resolve(d); }, [[]] ); });
    username.focus()
  })
  onDestroy(() => { if(process.browser) S.unbind_(fns) });

  const save = async() => {isSaving = true; S.trigger([[ ["legacy", "auth", "admin_login", 0], form ]]); }
  const clearError = () => { er = ""; }

  const logout = async() => {isSaving = true; S.trigger([[ ["legacy", "auth", "admin_logout", 0] ]]); }
</script>

<style src="./_Login.scss"></style>
{#if !isAuth}
  <div class="row">
    <div class="box">
      <h3>Sign In</h3>
      <form class="admin" on:submit|preventDefault={save} >
        <table>
          <tbody>
            <tr>
              <td>User Name</td>
              <td>
                <input bind:value={form.email} required bind:this={username} />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input type="password" bind:value={form.pass} required/>
              </td>
            </tr>
            <tr>
              <td colspan="2" style="text-align: center;">
                <button>Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div>
  <div> {er} </div>
{:else}
  <a href="./admin/account/LogOut">Logout</a>
{/if}