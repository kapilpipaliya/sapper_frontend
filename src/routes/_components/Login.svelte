<svelte:options immutable/>
<script>
    let email = '';
    let password = '';

    const handleLogin = () => {
        window.location.href = '/dashboard'      
    }
</script>

<div class="container-fluid">
    <div class="row">
        <h1>Login</h1>
    </div>
    <div class="row">        
        <div class="col">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" bind:value={email}>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" bind:value={password}>
                </div>
                <button type="button" class="btn btn-primary" on:click="{handleLogin}">Submit</button>
            </form>
        </div>        
    </div>
</div>
