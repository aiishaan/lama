import Image from 'next/image'
import styles from './contact.module.css'

function ContactPage () {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src='/contact.png' alt='' fill/>
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="text" placeholdername="" id="" />
                </form>
            </div>
        </div>
    )
}

export default ContactPage