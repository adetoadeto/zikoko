import Image from "next/image"
import img1 from "@/public/profile_pic/img1.png"

const MainArticleInfo = () => {
    return (
        <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-3">
                <div className="h-12 w-12 contain rounded-full">
                    <Image src={img1} alt="author's picture" height={48} width={48} className="rounded-full" />
                </div>
                <div className="flex flex-col gap-1 text-sm">
                    <p>By <span className="text-purple-700 font-bold font-heading">Bolu Ayodeji</span></p>
                    <p>Aug 24, 2025 . 6 min read </p>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <a href="" className="h-10 w-10 rounded-full"><i className="fa-brands"></i></a>
            </div>
        </div>
    )
}

export default MainArticleInfo
