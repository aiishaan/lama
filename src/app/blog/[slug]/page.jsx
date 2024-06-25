import Image from "next/image"
import styles from "./singlePost.module.css"

function SinglePostPage () {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src="/about.png" alt="" fill/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                <Image className={styles.avatar} src="/about.png" alt="" width={50} height={50}/>

                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Author</span>
                    <span className={styles.detailValue}>Max Verstappen</span>
                </div>
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Published</span>
                    <span className={styles.detailValue}>25.06.2024</span>
                </div>
                </div>
                <div className={styles.content}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, rem unde porro, doloribus consequuntur laudantium reiciendis eius magnam nulla ipsum illum perferendis libero ducimus tempore quod! Ipsum aliquid praesentium repellendus?
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage