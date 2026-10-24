import Link from "next/link"
import { FeaturedCardProps } from "@/lib/interface"
import { generateSlug } from "@/lib/utils"
import Tagline from "@/components/ui/tagline"
import Button from "@/components/ui/button"

const FeaturedCardLarge = ({ featured }: FeaturedCardProps) => {
    const headlineSlug = generateSlug(featured.headline)

    return (
        <div className="max-[600px]:hidden w-full xl:w-2/3 h-80 md:h-auto rounded-xl md:pr-4 bg-cover bg-top bg-no-repeat overflow-y-scroll no-scrollbar shadow-xl" style={{ backgroundImage: `url(${featured?.img})` }}>
            <div className="w-1/2 min-h-full h-fit rounded-l-xl bg-purple-950/95 text-white p-4 pt-5 xl:pl-7 xl:py-10 flex flex-col justify-between gap-4 md:gap-8 ">
                <Tagline text="featured story" icon="star" />
                <h1 className="capitalize font-heading font-bold text-4xl/14">{featured.headline}</h1>
                <p className="hidden md:block w-[90%] leading-7 text-white/85">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates cum dolore quas, aut in dolor necessitatibus magni aliquam vero!</p>
                <Button href={`/article/${featured?.category.link}/${headlineSlug}/${featured._id}`} text="read story" icon="arrow-right" inverse={true} extraStyles={"flex-row-reverse"}/>
            </div>
        </div>
    )
}

export default FeaturedCardLarge
