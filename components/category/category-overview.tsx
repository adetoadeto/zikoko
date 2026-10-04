import { CategoryOverviewProps } from "@/lib/interface"

import ArticleCard from "../article/article-card"
import VerticalScrollWrapper from "../wrappers/vertical-scroll-wrapper"

const CategoryOverview = ({ category, groupedBySubCategory }: CategoryOverviewProps) => {
    
    const latestArticles = groupedBySubCategory?.map(item => item.articles[0])

    return (
        <div className="flex flex-col gap-10">
            <VerticalScrollWrapper heading="Latest" icon="fire">
                {latestArticles?.map(item => <ArticleCard key={item.title} item={item} isSubCategory={category ? true : false} />
                )}
            </VerticalScrollWrapper>

            {groupedBySubCategory?.map((item) =>
                <VerticalScrollWrapper heading={item.heading} icon="book-open" key={item.heading}>
                    {item.articles.map((item: any) => <ArticleCard key={item.title} item={item} isSubCategory={category ? true : false} noTag={true} />
                    )}
                </VerticalScrollWrapper>)}
        </div>
    )
}

export default CategoryOverview
