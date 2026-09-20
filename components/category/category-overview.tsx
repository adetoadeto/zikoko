import { getByCategory} from "@/lib/utils"
import { CategoryOverviewProps } from "@/lib/interface"

import ArticleCard from "../article/article-card"
import HorizontalScrollWrapper from "../wrappers/horizontal-scroll-wrapper"

const CategoryOverview = ({ category, groupedBySubCategory }: CategoryOverviewProps) => {
    
    const latestArticles = groupedBySubCategory?.map(item => item.articles[0])

    return (
        <>
            <HorizontalScrollWrapper heading="Latest" icon="fire">
                {latestArticles?.map(item => <ArticleCard key={item.title} item={item} isSubCategory={category ? true : false} />
                )}
            </HorizontalScrollWrapper>

            {groupedBySubCategory?.map((item) =>
                <HorizontalScrollWrapper heading={item.heading} icon="fire" key={item.heading}>
                    {item.articles.map((item: any) => <ArticleCard key={item.title} item={item} isSubCategory={category ? true : false} noTag={true} />
                    )}
                </HorizontalScrollWrapper>)}
        </>
    )
}

export default CategoryOverview
