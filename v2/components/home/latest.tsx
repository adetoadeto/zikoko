import { getLatestArticles } from "@/lib/article";
import ArticleCard from "../article/article-card";
import HorizontalScrollWrapper from "../wrappers/horizontal-scroll-wrapper";

const Latest = async () => {

    const latestArticles: Record<string, any>[] = await getLatestArticles()

    return (
        <HorizontalScrollWrapper heading="Latest" icon="fire-flame-curved">
            {latestArticles?.map(item =>
                <ArticleCard key={item._id} item={item} tag={true}/>
            )}
        </HorizontalScrollWrapper>
    )
}

export default Latest
