import Link from "next/link"
import { AuthorProps } from "@/lib/interface"

const Author = ({author}: AuthorProps) => {
    const authorName = author.firstName + " " + author.lastName

    return (
        <div className="flex flex-col gap-5 bg-white border border-neutral-300 rounded-lg p-5">
            <strong className="font-heading">About the Author</strong>
            <div className="flex items-center lg:items-start gap-5">
                <div className="h-30 w-30 rounded-full">
                    <img src={author.image} alt="author's picture" height={120} width={120} className="rounded-full object-cover" />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-xl lg:text-[16px] capitalize text-purple-700 font-semibold font-heading">{authorName}</p>
                    <p className="text-neutral-500 leading-7 text-sm">Writer, creative and storyteller. I love sharing ideas that inspire growth and intentional living.</p>
                </div>
            </div>
            <Link href="/" className=" bg-neutral-300/50 p-2 rounded-sm flex justify-center items-center gap-3 text-center text-sm"><span className="font-semibold">View all posts</span><i className="fa-solid fa-arrow-right text-sm"></i></Link>
        </div>
    )
}

export default Author
