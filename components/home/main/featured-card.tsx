import Link from "next/link"
import { generateSlug, getFeaturedArticles } from "@/lib/utils"

const FeaturedCard = () => {
    const featured = getFeaturedArticles()[0]
    const title = featured!.title
    const titleSlug = generateSlug(title)

    return (
        <div className="w-full xl:w-2/3 h-80 md:h-auto rounded-xl md:pr-4 bg-contain md:bg-cover bg-top-right bg-no-repeat" style={{ backgroundImage: `url(${featured?.img.src})` }}>
            <div className="w-1/2 h-full rounded-l-xl bg-purple-950/95 text-white p-4 md:pl-7 md:py-10 flex flex-col justify-between gap-4 md:gap-8 overflow-scroll no-scrollbar ">
                <div className="w-fit flex items-center gap-2 py-1 md:py-2 px-2 md:px-3 rounded-full text-[9px] md:text-xs bg-purple-600"><i className="fa-solid fa-star text-amber-300 animate-pulse"></i><span className="uppercase">featured story</span></div>
                <h1 className="capitalize font-heading font-bold text-3xl/12 md:text-5xl/[65px]">{title}</h1>
                <p className="hidden md:block w-[90%] leading-7 text-white/85">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates cum dolore quas, aut in dolor necessitatibus magni aliquam vero!</p>
                <Link href={`/${featured?.category}/${titleSlug}`} className="w-fit font-heading font-bold text-sm md:text-[16px] rounded-button py-1 md:py-2 px-3 md:px-4 bg-white text-purple-900 hover:text-purple-700 flex items-center gap-3"><span>Read Story</span> <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>
    )
}

export default FeaturedCard
