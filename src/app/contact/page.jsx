"use client"

import Image from 'next/image'
import styles from './contact.module.css'
import { useEffect, useState } from 'react'

function ContactPage () {

    const [isClient, setIsClient] = useState(false)

    useEffect(()=> {
        setIsClient(true);
    })

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src='/contact.png' alt='' fill/>
            </div>
            {isClient && 3}
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder='Name and Surname'/>
                    <input type="text" placeholder='Email Address'/>
                    <input type="text" placeholder='Phone Number (Optional)'/>
                    <textarea placeholder='Message' cols='30' rows="10"></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage