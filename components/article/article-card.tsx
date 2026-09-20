import Image from "next/image"
import Link from "next/link"
import { ArticleCardProps } from "../../lib/interface"
import { generateSlug, textShortener } from "../../lib/utils"
import ArticleTag from "./article-tag"
import ReadTime from "../read-time"

const ArticleCard = ({ item, isSubCategory, noTag }: ArticleCardProps) => {

    const useSubCategoryTag = Boolean(isSubCategory)
    const articleTitle = item.title
    const title = textShortener(articleTitle)
    const titleSlug = generateSlug(articleTitle)
    const categorySlug = generateSlug(item.category)

    return (
        <Link href={`/${categorySlug}/${titleSlug}`} className="h-70 min-w-65 rounded-xl border border-black/20 shadow-[0_0_10px] shadow-black/10 transition-transform animate-duration-transition hover:translate-y-up">
            <div className="bg-cover bg-center rounded-t-xl p-3.5 flex flex-col justify-between h-40 bg-purple-50" style={{ backgroundImage: `url(${item.img.src})` }}>
                {!noTag && <ArticleTag tagColor={item.categoryColor} tagName={useSubCategoryTag ? item.subCategory : item.category} />}
                <ReadTime time={item.duration} />
            </div>
            <div className="h-30 p-3.5 flex flex-col justify-between gap-6">
                <h3 className="capitalize font-semibold font-heading">{title}</h3>
                <div className="flex items-center gap-2 ">
                    <div className="h-5 w-5 rounded-[50%]">
                        <Image src={item.img} alt="author's picture" className="h-full w-full rounded-full object-cover" />
                    </div>
                    <p className="capitalize text-xs text-gray-600">{item.author}</p>
                </div>
            </div>
        </Link>
    )
}

export default ArticleCard
