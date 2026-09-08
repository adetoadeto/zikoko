import { url } from "inspector"
import Heading from "../heading"
import { shows } from "../lib/home"

const Shows = () => {
    return (
        <div>
            <Heading title="Zikoko Originals" icon="crown" text="shows" />
            <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                {shows.map(item => <div className="h-fit">
                    <div className="rounded-xl p-3 h-42.5 mb-2 flex flex-col justify-center bg-cover bg-right" style={{backgroundImage: `url(${item.img.src})`}} >
                        <p className="w-1/2 wrap-break-word uppercase font-bold text-white text-xl">{item.title}</p>
                    </div>
                    <p className="font-semibold">{item.episodes} episodes</p>
                </div>)}
            </div>
        </div>
    )
}

export default Shows
