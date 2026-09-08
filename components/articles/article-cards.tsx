import Heading from "../heading"
import ArticleCard from "./article-card"

const ArticleCards = ({ articles }) => {
    return (
        <div>
            <Heading title="Latest Stories" icon="fire" />
            <div className="h-75 mt-5 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 overflow-y-scroll">
                {articles.map((item, index) => {
                    if (index >= 3) {
                        return <ArticleCard item={item} />
                    }
                })}
            </div>
        </div>
    )
}

export default ArticleCards
