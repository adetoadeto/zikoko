import ArticleCard from "../article/article-card";
import { getLatestArticles } from "../../lib/utils";
import HorizontalScrollWrapper from "../wrappers/horizontal-scroll-wrapper";

const Latest = () => {
    const latestArticles = getLatestArticles()

    return (
        <HorizontalScrollWrapper heading="Latest" icon="fire">
            {latestArticles.map((item) => {
                if (typeof (item) !== "string") {
                    return <ArticleCard key={item.title} item={item} />
                }
            })}
        </HorizontalScrollWrapper>
    )
}

export default Latest
