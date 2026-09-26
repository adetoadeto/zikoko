import Link from "next/link"
import { generateSlug } from "@/lib/utils"

const RelatedArticles = ({ relatedArticles }) => {

    return (
        <div className=" bg-white border border-neutral-300 rounded-lg p-5">
            <strong className="text-xl capitalize font-bold font-heading">related articles</strong>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:flex flex-col gap-5 mt-6">
                {relatedArticles.map(item => {
                    const title = generateSlug(item.title)
                    return (
                        <Link href={`/${item.category}/${title}`} className="flex items-center gap-4">
                            <div className="rounded-md w-1/3 h-20 bg-cover bg-top " style={{ backgroundImage: `url(${item.img.src})` }}></div>
                            <div className="flex flex-col gap-1 text-sm w-2/3 ">
                                <strong className="capitalize">{item.title}</strong>
                                <span className="text-neutral-500">{item.date}</span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default RelatedArticles
