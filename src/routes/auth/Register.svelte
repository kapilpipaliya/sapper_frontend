<script>

  import { onMount } from "svelte";

  // import { COUNTRIES2 } from "../../queries/countries_query";


  import { authChange } from "../_modules/store.js";

  let options = {
    companyName: null,
    branchCode: null,
    username: null,
    email: null,
    password: null,
    passwordConfirmation: null,
    firstName: null,
    lastName: null,
    countryId: null
  };

  let countries;
  let placeholder = "";
  let submitting = false

  onMount(async () => {
    //const result = await F.fetchModel2(COUNTRIES2, {}, "countries2");
    //countries = result;
    //placeholder = "Select Country";
  });

  export async function doMutation(values) {
    submitting = true
    /*const data = await F.mutate(
      UPDATE_BRANCH_SIGN_UP,
      values,
      "createOrUpdateBranchSignUp"
    );
    if (data) {
      if (!data.errors && data.result && data.result.token) {
        // on signup curr_company and curr_branch will be same:
        await set("sceCurrCompany", values["branchCode"]);
        await set("sceCurrBranch", values["branchCode"]);
        await set("sceCurrUsername", values["username"]);
        await set("sceCurrToken", data.result.token);
        await authChange(true);
        page("/")

        toastr.success('Company registration completed successfully.')
        // if (this.props.TabStore) {
        //   this.props.TabStore.closeNode("Register")
        //   this.props.TabStore.closeNode("Log In")
        // }
      } else {
        await remove("sceCurrCompany");
        await remove("sceCurrBranch");
        await remove("sceCurrUsername");
        await remove("sceCurrToken");
        await authChange(false);
        return data.errors;
      }
    }*/
    submitting = false
  }

</script>

<div style="display: flex;">
      <div style="display: flex; margin-left: auto; margin-right: auto; flex: 1; justify-content: center;">
        <div style="padding: 0.2rem; margin: 0.2rem; borderRadius: .25rem; boxShadow: 0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08);">
          <div>
            <h3 style="margin: 1rem; textAlign: center; fontSize: 2.25rem;">Registration</h3>
            <h4 style="margin: 1rem; textAlign: center; color: #606f7b;">Remember main branch code, username and password to login.</h4>
            <table style="margin: auto; tableLayout: fixed; borderCollapse: collapse; border: 1px solid #DAE1E7;">
              <tbody>
                <tr>
                  <td className="border border-solid border-grey-light">email</td>
                  <td className="border border-solid border-grey-light"><input bind:value={options.email} ></td>
                </tr>
                <tr>
                  <td className="border border-solid border-grey-light">Password</td>
                  <td className="border border-solid border-grey-light"><input type="password" bind:value={options.password} ></td>
                </tr>
                <tr>
                  <td className="border border-solid border-grey-light">Password Confirmation</td>
                  <td className="border border-solid border-grey-light"><input type="password" bind:value={options.passwordConfirmation} ></td>
                </tr>
                <tr><td colspan="2" style="text-align: center;"><button on:click={() => doMutation(options)}>Register</button></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
<!-- <div class:spin={submitting} style="display: inline-block">☼</div> -->
