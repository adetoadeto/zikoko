import Link from "next/link"
import { articles } from "../../lib/articles"
import VerticalScrollWrapper from "../wrappers/vertical-scroll-wrapper"
import { getByCategory } from "@/lib/utils"

const Shows = () => {
    const shows = getByCategory("shows")

    return (
        <VerticalScrollWrapper heading="Zikoko Originals" icon="crown" href="shows">
            {shows?.map(item => <Link href={`categories/shows`} key={item.subCategory} className="min-w-62.5 hover:animate-shift">
                <div className="rounded-xl p-3 h-42.5 mb-2 flex flex-col justify-center bg-cover bg-right bg-yellow-500" style={{ backgroundImage: `url(${item.img.src})` }} >
                    <p className="w-1/2 wrap-break-word uppercase font-bold text-white text-xl">{item.subCategory}</p>
                </div>
                <p className="font-semibold"> 5 episodes</p>
            </Link>)}
        </VerticalScrollWrapper>
    )
}

export default Shows
