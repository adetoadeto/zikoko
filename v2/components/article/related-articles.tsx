import Link from "next/link"
import { generateDate, generateSlug } from "@/lib/utils"
import { RelatedArticlesProps } from "@/lib/interface-types"
import { getArticlesByCategoryId } from "@/lib/article"

const RelatedArticles = async ({ categoryId }: RelatedArticlesProps) => {

    const relatedArticles: Record<string, any>[] = await getArticlesByCategoryId(categoryId)

    return (
        <div className=" bg-white border border-neutral-300 rounded-lg p-5">
            <strong className="text-xl capitalize font-bold font-heading">related articles</strong>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] lg:flex flex-col gap-5 mt-6">
                {relatedArticles.slice(5).map(item => {

                    const headline = generateSlug(item.headline)
                    const date = generateDate(item.createdAt)

                    return (
                        <Link key={item._id} href={`/article/${item.category.link}/${headline}/${item._id}`} className="flex gap-4">
                            <div className="rounded-md w-1/3 h-20 bg-cover bg-top " style={{ backgroundImage: `url(${item.img})` }}></div>
                            <div className="flex flex-col gap-1 text-sm w-2/3 ">
                                <strong className="capitalize">{item.headline}</strong>
                                <span className="text-neutral-500">{date}</span>   
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default RelatedArticles
