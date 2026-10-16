import Link from 'next/link'
import { generateSlug, textShortener } from '@/lib/utils'
import { getFeaturedArticles } from '@/lib/article'
import ReadDuration from '../../read-duration'
import ArticleTag from '../../article/article-tag'

const SideCard = async () => {

    const featureds:Record<string,any>[] = await getFeaturedArticles()
    const featuredArticles = featureds?.slice(1, 4)

    return (
        <div className="hidden xl:flex flex-col justify-between gap-2 w-1/3">
            {featuredArticles.map(item => {
                const headline = textShortener(item.headline)
                const headlineSlug = generateSlug(item.headline)

                return <Link key={item._id} href={`/article/${item.category.link}/${headlineSlug}/${item._id}`} className=
                    "rounded-xl bg-cover bg-top text-white-100 h-1/3" style={{ backgroundImage: `url(${item.img})` }}>
                    <div className="w-[60%] h-full flex flex-col gap-4 justify-between p-3.5 bg-black/80 rounded-l-xl text-white">
                        <ArticleTag tagColor={item.category.color} tagName={item.category.name} />
                        <h2 className="font-heading capitalize text-lg font-semibold">{headline}</h2>
                        <ReadDuration time={item.readDuration} />
                    </div>
                </Link>

            })}
        </div>
    )
}

export default SideCard
