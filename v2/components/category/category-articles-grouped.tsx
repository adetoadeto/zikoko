import { CategoryArticlesType } from "@/lib/interface"
import ArticleCard from "../article/article-card"
import SubHeading from "../ui/sub-heading"

export const CategoryArticlesGrouped = ({ groupedArticles }: CategoryArticlesType) => {

    const limit = 4

    return (
        groupedArticles?.map(item => <div key={item.subcategory.name} className="flex flex-col">
            <SubHeading title={item.subcategory.name} icon={item.subcategory.icon} />
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-article-cards mt-6 ">
                {item.articles.map((item: any, index: number) => { if (index < limit) { return <ArticleCard key={item._id} item={item} /> } })}
            </div>  
            {item?.articles.length > limit && <button className="w-fit self-center mt-4 border border-purple-500 text-purple-800 hover:bg-purple-500 hover:text-white hover:cursor-pointer font-semibold py-2 px-4 text-center rounded-lg">Load more</button>}
        </div>))
}
