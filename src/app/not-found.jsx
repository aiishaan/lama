import Link from "next/link";

export default function NotFound () {
    return (
        <div>
            <h2>NOT FOUND</h2>
            <p>Sorry the page your are looking for does not exist</p>
            <Link href={"/"}> Return Home </Link>
        </div>
    )
}