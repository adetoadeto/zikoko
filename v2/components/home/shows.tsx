import Link from "next/link"
import HorizontalScrollWrapper from "../wrappers/horizontal-scroll-wrapper"
import { getArticlesByCategoryName } from "@/lib/article"

const Shows = async () => {

    const shows:Record<string,any>[] = await getArticlesByCategoryName("Shows")

    return (
        <HorizontalScrollWrapper heading="Zikoko Shows" icon="clapperboard" href="shows">
            {shows?.map(item => <Link key={item._id} href={`categories/shows`} className="card-width hover:animate-shift">
                <div className="rounded-xl p-3 h-42.5 mb-2 flex flex-col justify-center bg-cover bg-right" style={{ backgroundImage: `url(${item.img})` }} >
                    <p className="w-1/2 wrap-break-word uppercase font-bold text-white text-lg">{item.headline}</p>
                </div>
                {/* <p className="font-semibold"> {item.readDuration} mins watch</p> */}
            </Link>)}
        </HorizontalScrollWrapper>
    )
}

export default Shows
