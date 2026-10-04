import { generateSlug, getFeaturedArticles } from "@/lib/utils"
import FeaturedCardSmall from "./featured-card-small"
import FeaturedCardLarge from "./featured-card-large"

const FeaturedCard = () => {
    const featured = getFeaturedArticles()[0]
    const title = featured!.title
    const titleSlug = generateSlug(title)

    return (
        <>
            <FeaturedCardSmall featured={featured} title={title} titleSlug={titleSlug} />
            <FeaturedCardLarge featured={featured} title={title} titleSlug={titleSlug} />
        </>

    )
}

export default FeaturedCard
