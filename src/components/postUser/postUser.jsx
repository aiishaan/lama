import { getUser } from "@/lib/data"
import styles from "./postUser.module.css"

//Fetching data with an api
// const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache:"no-store"})
    
//     if(!res.ok){
//         throw new Error(" OOPS!, Something went wrong")
//     }

//     return res.json()
// }


async function PostUser({userId}) {

    // const user = await getData(userId)

    //fetching data without an api
    const user = await getUser(userId);
    
    return (
        <div className={styles.container}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{user.username}</span>
        </div>
    )
}


export default PostUser