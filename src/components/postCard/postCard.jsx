import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

export default function PostCard () {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="/post.png" alt='' fill className={styles.img} />
                </div>
                <span className={styles.date}>25.06.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>random text again bs for now, will try to add more stuff once the app goes live but for now this will be just placeholder bs</p>
                <Link className={styles.link} href="/blog/post"> READ MORE</Link>
            </div>
        </div>
    )
}