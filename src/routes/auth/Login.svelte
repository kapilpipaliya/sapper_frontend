<script>
  import { onMount } from "svelte";
  import { authChange } from "../_modules/store.js";

  let options = {
    company: null,
    branch: null,
    username: null,
    password: null,
  };
  // Todo redirectIfUserIsAuthenticated
  async function doMutation(values) {
    /*
    const data = await F.mutate(
      UPDATE_USER_SIGN_IN,
      values,
      "createOrUpdateUserSignIn"
    );
    if (data) {
      if (!data.errors && data.result && data.result.token) {
        // on signup curr_company and curr_branch will be same:
        await set("sceCurrCompany", values["company"]);
        await set("sceCurrBranch", values["branch"]);
        await set("sceCurrUsername", values["username"]);
        await set("sceCurrToken", data.result.token);
        await authChange(true);
        page("/")

        toastr.success('Signed in successfully.')
        // if (this.props.TabStore) {
        //   this.props.TabStore.closeNode("Register")
        //   this.props.TabStore.closeNode("Log In")
        // }
      } else {
        await remove("sceCurrCompany");
        await remove("sceCurrBranch");
        await remove("sceCurrUsername");
        await remove("sceCurrToken");
        // await authChange(false);
        return data.errors;
      }
    }*/
  }

</script>

<!-- <h3>Log In</h3>
<table>
<tbody>
<tr><td><label>Company Code</label></td><td><input bind:value={options.company} ></td></tr>
<tr><td><label>Branch Code</label></td><td><input bind:value={options.branch} ></td></tr>
<tr><td><label>User Name</label></td><td><input bind:value={options.username} ></td></tr>
<tr><td><label>Password</label></td><td><input bind:value={options.password} ></td></tr>
<tr><td><button on:click={() => doMutation(options)}>Log In</button></td></tr>
</tbody>
</table> -->

<div style="display: flex;">
      <div style="display: flex; margin-left: auto; margin-right: auto; flex: 1; justify-content: center;">
        <div style="padding: 0.2rem; margin: 0.2rem; borderRadius: .25rem; boxShadow: 0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08);">
          <div>
            <h3 style="margin: 1rem; textAlign: center; fontSize: 2.25rem;">Sign In</h3>
            <table style="margin: auto; tableLayout: fixed; borderCollapse: collapse; border: 1px solid #DAE1E7;">
              <tbody>
                <tr>
                  <td className="border border-solid border-grey-light">User Name</td>
                  <td className="border border-solid border-grey-light"><input bind:value={options.username} ></td>
                </tr>
                <tr>
                  <td className="border border-solid border-grey-light">Password</td>
                  <td className="border border-solid border-grey-light"><input type="password" bind:value={options.password} ></td>
                </tr>
                <tr><td colspan="2" style="text-align: center;"><button on:click={() => doMutation(options)}>Log In</button></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
