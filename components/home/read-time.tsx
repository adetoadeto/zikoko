
const ReadTime = ({ time }) => {
    return (
        <div className="font-heading w-fit rounded-full flex items-center gap-2 text-white/80 text-xs bg-black/60 py-1.5 px-2.5"><i className="fa-regular fa-clock"></i><span>{time} min read</span></div>
    )
}

export default ReadTime
