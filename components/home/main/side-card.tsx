import Link from 'next/link'
import { generateSlug, getFeaturedArticles, textShortener } from '@/lib/utils'
import ReadTime from '../../read-time'
import ArticleTag from '../../article/article-tag'

const SideCard = () => {
    const featuredArticles = getFeaturedArticles().slice(1, 4)
    
    return (
        <div className="flex flex-col justify-between gap-4 w-1/3">
            {featuredArticles.map((item, index) => {
                const title = textShortener(item.title)
                const titleSlug = generateSlug(item.title)
                return <Link key={index} href={`/${item.category}/${titleSlug}`} className=
                    "rounded-xl bg-cover bg-top text-white-100 h-1/3" style={{ backgroundImage: `url(${item.img.src})` }}>
                    <div className="w-[60%] h-full flex flex-col gap-4 justify-between p-4 bg-black/80 rounded-l-xl text-white">
                        <ArticleTag tagColor={item.categoryColor} tagName={item.category} />
                        <h2 className="font-heading capitalize text-lg font-semibold">{title}</h2>
                        <ReadTime time={item.duration} />
                    </div>
                </Link>

            })}
        </div>
    )
}

export default SideCard
