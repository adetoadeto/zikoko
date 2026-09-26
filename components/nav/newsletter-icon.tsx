import Link from "next/link"

const NewsLetterIcon = () => {
    return (
        <Link href="/newsletter" className="w-full rounded-md px-3 py-2 text-white font-bold bg-purple-700 hover:bg-purple-500 flex justify-center items-center gap-2"><i className="fa-regular fa-envelope"></i>Newsletter</Link>
    )
}

export default NewsLetterIcon
