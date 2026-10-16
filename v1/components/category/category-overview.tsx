"use client"

import { CategoryOverviewProps } from "@/lib/interface"
import ArticleCard from "../article/article-card"
import VerticalScrollWrapper from "../wrappers/vertical-scroll-wrapper"
import HorizontalScrollWrapper from "../wrappers/horizontal-scroll-wrapper"
import SubHeading from "../sub-heading"

const CategoryOverview = ({ category, groupedBySubCategory, onSelectSubCategory }: CategoryOverviewProps) => {

    const latestArticles = groupedBySubCategory?.map(item => item.articles[0])

    return (
        <div className="flex flex-col gap-10">
            <HorizontalScrollWrapper heading="Latest" icon="fire">
                {latestArticles?.map(item => <ArticleCard key={item.title} item={item} isSubCategory={category ? true : false} />
                )}
            </HorizontalScrollWrapper>

            {groupedBySubCategory?.map((item) =>
                <div className="flex flex-col">
                    <SubHeading title={item.heading} icon="book-open" />
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-article-cards mt-6 ">
                        {item.articles.map((item: any, index) => { if (index < 4) { return <ArticleCard key={item.title} item={item} isSubCategory={category ? true : false} noTag={true} /> } })}
                    </div>
                    {item.articles.length > 3 && <button className="w-fit self-center mt-4 border border-purple-500 text-purple-800 hover:bg-purple-500 hover:text-white hover:cursor-pointer font-semibold py-2 px-4 text-center rounded-lg" onClick={() => onSelectSubCategory(item.heading, "book-open")}>Load more</button>}
                </div>)}
        </div>
    )
}

export default CategoryOverview
