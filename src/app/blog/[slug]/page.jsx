import Image from "next/image"
import styles from "./singlePost.module.css"
import PostUser from "@/components/postUser/postUser"
import { Suspense } from "react"
import { getPost } from "@/lib/data";

//Fetch data with an api
// const getData = async (slug) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    
//     if(!res.ok){
//         throw new Error(" OOPS!, Something went wrong")
//     }

//     return res.json()
// }

async function SinglePostPage ({params}) {

    const {slug} = params;

    // const post = await getData(slug)

    //fetching data locally
    const post = await getPost(slug)

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src="/about.png" alt="" fill/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post?.title}</h1>
                <div className={styles.detail}>
                <Image className={styles.avatar} src="/about.png" alt="" width={50} height={50}/>
               {post && ( <Suspense fallback={<div>Loading... </div>}>
                    <PostUser userId = {post.userId} />
                </Suspense>)}
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Published</span>
                    <span className={styles.detailValue}>25.06.2024</span>
                </div>
                </div>
                <div className={styles.content}>
                    {post.body}
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage