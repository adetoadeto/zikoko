import { ReadDurationProps } from "@/lib/interface-types"

const ReadDuration = ({ time }: ReadDurationProps) => {
    return (
        <div className="w-fit rounded-full flex items-center gap-2 text-white/80 text-[11px] bg-black/60 py-1 px-2 font-bold"><i className="fa-regular fa-clock"></i><span>{time} min read</span></div>
    )
}

export default ReadDuration
