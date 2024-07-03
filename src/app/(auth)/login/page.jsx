import { handleGithubLogin, login } from "@/lib/action";

async function LoginPage () {

    

    return (
        <div>
            <form action={handleGithubLogin} >
                <button>LOGIN IN USING GITHUB</button>
            </form>
            <form action={login}>
                <input type="text" placeholder="username" name="username" />
                <input type="password" placeholder="password" name="password" />
                <button>Login with Credentials</button>
            </form>
        </div>
    )
}

export default LoginPage