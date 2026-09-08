import Link from "next/link"

const FeaturedCard = () => {
    return (
        <div className="w-2/3 rounded-xl pr-4 bg-[url('/latest/img1.png')] bg-contain bg-top-right">
            <div className="w-1/2 h-full rounded-l-xl bg-purple-transparent pl-7 py-10 flex flex-col gap-8 justify-between text-white">
                <div className="w-fit flex items-center gap-2 py-2 px-3 rounded-full text-xs bg-purple-900"><i className="fa-regular fa-star text-xs"></i><span className="uppercase">featured story</span></div>
                <h1 className="capitalize font-heading text-5xl/[60px] font-bold">why nigerians are secretly quiting their jobs</h1>
                <p className="w-[90%] leading-7 text-white/85">From burnout to better opportunities, young professionals are choosing peace over paychecks.</p>
                <Link href="/" className="font-heading rounded-button py-2 px-4 bg-white text-stone-900 w-fit font-bold flex items-center gap-6"><span>Read Story</span> <i className="fa-solid fa-arrow-right"></i></Link>
                <div className="flex items-center gap-2 font-heading">
                    <p>01</p>
                    <hr className="w-22.5" />
                    <p>05</p>
                </div>
            </div>

        </div>
    )
}

export default FeaturedCard
