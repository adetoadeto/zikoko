import { MainArticleProps } from "@/lib/interface"
import { generateDate } from "@/lib/utils"

const MainArticleInfo = ({article}: MainArticleProps) => {
    const authorName = article.author.firstName + " " + article.author.lastName
    const date = generateDate(article.createdAt)

    return (
        <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-3">
                <div className="h-12 w-12 contain rounded-full">
                    <img src={article.author.image} alt="author's picture" className="rounded-full" />
                </div>
                <div className="flex flex-col gap-1 text-sm text-neutral-500">
                    <p>By <span className="text-purple-700 font-bold font-heading">{authorName}</span></p>
                    <p>{date} . {article.readDuration} min read </p>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <a href="" className="h-10 w-10 rounded-full"><i className="fa-brands"></i></a>
            </div>
        </div>
    )
}

export default MainArticleInfo
