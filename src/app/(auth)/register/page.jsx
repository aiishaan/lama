import { register } from "@/lib/action"
import styles from "./register.module.css"

function RegisterPage() {
    return (
        <div>
            <form className={styles.form} action={register}>
                <input type="text" placeholder="username" name="username" />
                <input type="email" placeholder="email" name="email" />
                <input type="password" placeholder="password" name="password" />
                <input type="password" placeholder="retype password" name="passwordrepeat" />
                <button>Register</button>

            </form>
        </div>
    )
}

export default RegisterPage