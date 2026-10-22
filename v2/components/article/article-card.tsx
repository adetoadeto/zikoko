import Link from "next/link"
import { ArticleCardProps } from "@/lib/interface-types"
import { generateDate, generateSlug, textShortener } from "@/lib/utils"
import ArticleTag from "./article-tag"
import ReadDuration from "../ui/read-duration"

const ArticleCard = ({ item, headlineLength, tag, useSubCategory, extraStyle }: ArticleCardProps) => {

    // const shortenedHeadline = textShortener(item.headline, headlineLength)
    const headlineSlug = generateSlug(item.headline)
    const author = item.author.firstName + " " + item.author.lastName
    const date = generateDate(item.createdAt)
    const tagName = useSubCategory ? item.subCategory.name : item.category.name

    return (
        <Link href={`/article/${item.category.link}/${headlineSlug}/${item._id}`} className={`h-75 card-width rounded-xl box-shadow transition-transform animate-duration-transition hover:translate-y-up ${extraStyle}`}>
            <div className="bg-cover bg-top rounded-t-xl px-3 py-2 h-1/2 bg-purple-50 flex flex-col justify-between" style={{ backgroundImage: `url(${item.img})` }}>
                {tag && <ArticleTag tagColor={item.category.color} tagName={tagName} />}
                <ReadDuration time={item.readDuration} />
            </div>
            <div className="h-1/2 p-3.5 flex flex-col justify-between gap-article-cards overflow-hidden">
                <h3 className="capitalize font-semibold font-heading text-lg">{item.headline}</h3>
                <div className="flex items-center gap-5 sm:justify-between">
                    <div className="flex items-center gap-2 ">
                        <div className="h-5 w-5 rounded-[50%]">
                            <img src={item.author.image} alt="author's picture" className="rounded-full object-cover" />
                        </div>
                        <p className="capitalize text-xs text-gray-600">{author}</p>
                    </div>
                    <p className="capitalize text-xs text-gray-600">{date}</p>
                </div>

            </div>
        </Link >
    )
}

export default ArticleCard
