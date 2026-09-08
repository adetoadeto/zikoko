import { articles } from '@/components/lib/articles'
import ArticleTag from '../../articles/article-tag'
import ReadTime from '../read-time'

const SideCard = () => {
    return (
        <div className="flex flex-col justify-between gap-4 w-1/3">
            {articles.map((item, index) => {
                if (index < 3) {
                    return <div className=
                        "rounded-xl bg-cover bg-top text-white-100 h-1/3" style={{ backgroundImage: `url(${item.img.src})` }}>
                        <div className="w-[60%] h-full flex flex-col gap-4 justify-between p-4 bg-black/80 rounded-l-xl text-white">
                            <ArticleTag categoryColor={item.categoryColor} category={item.category} />
                            <h2 className="font-heading capitalize text-lg font-semibold">{item.title}</h2>
                            <ReadTime time={item.duration} />
                        </div>
                    </div>
                }
            })}
        </div>
    )
}

export default SideCard
