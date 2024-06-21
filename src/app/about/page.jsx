import Image from "next/image";
import styles from "./about.module.css"

function AboutPage () {
    return (
        <div>
            <div className={styles.imageContainer}>
            <Image src="/about.png" alt="about image" fill/>
            </div>
        </div>
    )
}

export default AboutPage;