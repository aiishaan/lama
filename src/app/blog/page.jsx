import PostCard from '@/components/postCard/postCard'
import styles from './blog.module.css'
import { getPosts } from '@/lib/data'

//Fetch data with an api
// const getData = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: "no-store"})
    
//     if(!res.ok){
//         throw new Error(" OOPS!, Something went wrong")
//     }

//     return res.json()
// }

async function BlogPage () {

    // const posts = await getData();

    //fetching data locally
    const posts = await getPosts();

    return (
        <div className={styles.container}>

            {posts.map(post => (
                <div className={styles.post} key={post.id}>
                <PostCard post={post}/>
                </div>
            ))}
            
        </div>
    )
}

export default BlogPage