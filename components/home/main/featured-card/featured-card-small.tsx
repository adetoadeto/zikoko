import Link from 'next/link'
import { FeaturedCardsProps } from '@/lib/interface'

const FeaturedCardSmall = ({featured, title, titleSlug}: FeaturedCardsProps) => {
    return (
        <div className="min-[600px]:hidden w-full h-fit rounded-xl overflow-y-scroll no-scrollbar shadow-md mb-3">
            <div className="overflow-hidden relative h-50 pl-2 pt-3 bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url(${featured?.img.src})` }}>
                  <div className="absolute w-fit flex items-center gap-2 py-1 md:py-2 px-2 md:px-3 rounded-full text-[9px] md:text-xs text-purple-600 bg-white font-bold shadow"><i className="fa-solid fa-star text-amber-600 animate-pulse"></i><span className="uppercase">featured story</span></div>
            </div>
            <div className="h-fit px-2 py-3 flex flex-col gap-5 border-x border-b border-gray-300">
                <h1 className="capitalize font-heading font-bold text-3xl/12">{title}</h1>
                <Link href={`/${featured?.category}/${titleSlug}`} className="w-fit font-heading font-bold rounded-button py-2 px-4 bg-purple-800 text-white hover:text-purple-700 flex items-center gap-3"><span>Read Story</span> <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>
    )
}

export default FeaturedCardSmall
