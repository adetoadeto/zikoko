import Link from "next/link"
import HorizontalScrollWrapper from "../wrappers/horizontal-scroll-wrapper"
import { getByCategory } from "@/lib/utils"

const Shows = () => {
    const shows = getByCategory("shows")

    return (
        <HorizontalScrollWrapper heading="Zikoko Originals" icon="crown" href="shows">
            {shows?.map(item => <Link href={`categories/shows`} key={item.subCategory} className="card-width hover:animate-shift">
                <div className="rounded-xl p-3 h-42.5 mb-2 flex flex-col justify-center bg-cover bg-right" style={{ backgroundImage: `url(${item.img.src})` }} >
                    <p className="w-1/2 wrap-break-word uppercase font-bold text-white text-lg">{item.subCategory}</p>
                </div>
                <p className="font-semibold"> 5 episodes</p>
            </Link>)}
        </HorizontalScrollWrapper> 
    )
}

export default Shows
