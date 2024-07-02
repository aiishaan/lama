import { handleGithubLogin } from "@/lib/action";

async function LoginPage () {

    

    return (
        <div>
            <form action={handleGithubLogin} >
                <button>LOGIN IN USING GITHUB</button>
            </form>
        </div>
    )
}

export default LoginPage