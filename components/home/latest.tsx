import ArticleCard from "../article/article-card";
import { getLatestArticles } from "../../lib/utils";
import VerticalScrollWrapper from "../wrappers/vertical-scroll-wrapper";

const Latest = () => {
    const latestArticles = getLatestArticles()

    return (
        <VerticalScrollWrapper heading="Latest" icon="fire">
            {latestArticles.map((item) => {
                if (typeof (item) !== "string") {
                    return <ArticleCard key={item.title} item={item} />
                }
            })}
        </VerticalScrollWrapper>
    )
}

export default Latest
