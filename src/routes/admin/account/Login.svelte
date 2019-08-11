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

    fns.push(["admin_login", "", ""]); S.bind$(...fns.i(-1), (d) => {
      isSaving = false; if (d.ok) {  er = ""; formSave = true; dp("successSave", { d }); } else { er = d.error; } })
    fns.push(["set_cookie", "", ""]); S.bind$(...fns.i(-1), (d) => { document.cookie = `admin=${d.admin}; path=/`; getCookie = true; })

    // check it already logged in
    isAuth = await new Promise((resolve, reject) => { S.bind_( "is_admin_auth", "", "", data => { 
      resolve(data); }, [[]] );
    });
    username.focus()
  })
  onDestroy(() => { if(process.browser) S.unbind_(fns) });

  const save = async() => {isSaving = true; S.trigger("admin_login", "", "", form); }
  const clearError = () => { er = ""; }

  const logout = async() => {isSaving = true; S.trigger("admin_logout", "", ""); }
</script>

<style>
  .row {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex: 1;
    justify-content: center;
  }
  table {
    margin: auto;
    table-layout: fixed;
    border-collapse: collapse;
    border: 1px solid #dae1e7;
  }
  .box {
    padding: 0.2rem;
    margin: 0.2rem;
    border-radius: 0.25rem;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
      0 5px 15px 0 rgba(0, 0, 0, 0.08);
  }
  h3 {
    margin: 1rem;
    text-align: center;

    font-family: monospace;
  }
  td {
    padding: 5px;
  }
</style>
{#if !isAuth}
  <div class="row">
    <div class="box">
      <h3>Sign In</h3>
      <form on:submit|preventDefault={save} >
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