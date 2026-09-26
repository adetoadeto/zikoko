import Image from "next/image"
import Link from "next/link"
import img1 from "@/public/profile_pic/img1.png"

const Author = () => {
    return (
        <div className="flex flex-col gap-5 bg-white border border-neutral-300 rounded-lg p-5">
            <strong className="font-heading">About the Author</strong>
            <div className="flex items-center lg:items-start gap-5">
                <div className="h-fit">
                    <Image src={img1} alt="author's picture" height={120} width={120} className="rounded-full object-cover" />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-xl lg:text-[16px] capitalize text-purple-700 font-semibold font-heading">bolu ayodeji</p>
                    <p className="text-neutral-500 leading-7 text-sm">Writer, creative and storyteller. I love sharing ideas that inspire growth and intentional living.</p>
                </div>
            </div>
            <Link href="/" className=" bg-neutral-300/50 p-2 rounded-sm flex justify-center items-center gap-3 text-center text-sm"><span className="font-semibold">View all posts</span><i className="fa-solid fa-arrow-right text-sm"></i></Link>
        </div>
    )
}

export default Author
