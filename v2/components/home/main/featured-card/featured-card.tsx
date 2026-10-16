import FeaturedCardSmall from "./featured-card-small"
import FeaturedCardLarge from "./featured-card-large"
import { getFeaturedArticles } from "@/lib/article"

const FeaturedCard = async () => {

    const featuredArticles = await getFeaturedArticles()
    const featuredArticle = featuredArticles[0]

    return (
        <>
            <FeaturedCardSmall featured={featuredArticle} />
            <FeaturedCardLarge featured={featuredArticle} />
        </>

    )
}

export default FeaturedCard
