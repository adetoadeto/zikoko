import Heading from "../heading"
import { articles } from "../lib/articles"
import ArticleCards from "../articles/article-cards"

const Latest = () => {
    return (
            <ArticleCards articles={articles} />
    )
}

export default Latest
