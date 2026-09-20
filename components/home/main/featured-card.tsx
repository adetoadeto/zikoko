import Link from "next/link"
import { generateSlug, getFeaturedArticles } from "@/lib/utils"

const FeaturedCard = () => {
    const featured = getFeaturedArticles()[0]
    const titleSlug = generateSlug(featured!.title)

    return (
        <div className="w-2/3 rounded-xl pr-4 bg-cover bg-top-right bg-no-repeat" style={{ backgroundImage: `url(${featured?.img.src})` }}>
            <div className="w-1/2 h-full rounded-l-xl bg-purple-950/95 pl-7 py-10 flex flex-col gap-8 justify-between text-white">
                <div className="w-fit flex items-center gap-2 py-2 px-3 rounded-full text-xs bg-purple-600"><i className="fa-solid fa-star text-xs text-amber-300 animate-pulse"></i><span className="uppercase">featured story</span></div>
                <h1 className="capitalize font-heading text-5xl/[65px] font-bold">{featured?.title}</h1>
                <p className="w-[90%] leading-7 text-white/85">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates cum dolore quas, aut in dolor necessitatibus magni aliquam vero!</p>
                <Link href={`/${featured?.category}/${titleSlug}`} className="font-heading rounded-button py-2 px-4 bg-white text-purple-900 hover:text-purple-700 w-fit font-bold flex items-center gap-3 "><span>Read Story</span> <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>
    )
}

export default FeaturedCard
