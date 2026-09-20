import { ReadTimeProps } from "../lib/interface"

const ReadTime = ({ time }: ReadTimeProps) => {
    return (
        <div className="w-fit rounded-full flex items-center gap-2 text-white/80 text-xs bg-black/60 py-1 px-2"><i className="fa-regular fa-clock"></i><span>{time} min read</span></div>
    )
}

export default ReadTime
