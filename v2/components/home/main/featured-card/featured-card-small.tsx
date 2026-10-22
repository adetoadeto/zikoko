import { FeaturedCardProps } from '@/lib/interface-types'
import { generateSlug } from '@/lib/utils'
import Tagline from '@/components/ui/tagline'
import Button from '@/components/ui/button'

const FeaturedCardSmall = ({ featured }: FeaturedCardProps) => {
    const headlineSlug = generateSlug(featured.headline)

    return (
        <div className="min-[600px]:hidden w-full h-fit rounded-xl overflow-y-scroll no-scrollbar shadow-md mb-3">
            <div className="overflow-hidden relative h-50 pl-2 pt-3 bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url(${featured?.img})` }}>
                <Tagline text="featured story" icon="star" inverse={true} extraStyles="absolute" />
            </div>
            <div className="h-fit px-2 py-3 flex flex-col gap-5 border-x border-b border-gray-300">
                <h1 className="capitalize font-heading font-bold text-3xl/12">{featured.headline}</h1>
                <Button href={`/article/${featured?.category.link}/${headlineSlug}/${featured._id}`} text="read story" icon="arrow-right" />
            </div>
        </div>
    )
}

export default FeaturedCardSmall
