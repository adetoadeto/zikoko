import Image from "next/image"
import Link from "next/link"
import ArticleTag from "./article-tag"
import ReadTime from "../home/read-time"

const ArticleCard = ({item}) => {
    return (
        <Link href="/" className="rounded-xl h-full border border-black/10">
            <div className="bg-cover bg-center rounded-t-xl p-3.5 flex flex-col justify-between h-40" style={{ backgroundImage: `url(${item.img.src})` }}>
                <ArticleTag categoryColor={item.categoryColor} category={item.category} />
                <ReadTime time="6" />
            </div>
            <div className="p-3.5 flex flex-col gap-5">
                <h3 className="capitalize font-semibold">{item.title}</h3>
                <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-[50%]">
                        <Image src={item.img} alt="author's picture" className="h-full w-full rounded-full object-cover" />
                    </div>
                    <p className="capitalize text-xs text-gray-600">{item.author}</p>
                </div>
            </div>
        </Link>
    )
}

export default ArticleCard
