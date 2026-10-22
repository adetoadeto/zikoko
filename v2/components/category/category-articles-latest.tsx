import { CategoryArticlesType } from "@/lib/interface-types"
import ArticleCard from "../article/article-card"
import HorizontalScrollWrapper from "../wrappers/horizontal-scroll-wrapper"

const CategoryArticlesLatest = ({latestArticles}: CategoryArticlesType) => {

    return (
        <HorizontalScrollWrapper heading="Latest" icon="fire-flame-curved">
            {latestArticles?.map(item => <ArticleCard key={item._id} item={item} tag={true} useSubCategory={true}/>
            )}
        </HorizontalScrollWrapper>
    )
}  

export default CategoryArticlesLatest
