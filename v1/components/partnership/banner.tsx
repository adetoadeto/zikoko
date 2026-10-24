import Link from "next/link"

const PartnershipBanner = () => {
    return (
        <div className="px-spacing-x py-10 bg-[url('/advertise.png')] bg-cover h-fit w-full flex items-center shadow-xl">
            <div className="w-1/2 flex flex-col gap-7">
                <span className="w-fit bg-purple-700 text-white rounded-xl py-1 px-3 text-[11px] font-semibold">partner with zikoko</span>
                <h2 className="text-6xl/15 flex flex-col gap-3 font-semibold font-heading mt-3"><span>Your content, </span> <span className="text-purple-800">Our audience</span></h2>
                <p className="w-[90%] leading-7">Promote your stories, products, events and more to our vibrant community. Reach a diverse and influential audience across Nigeria and globally</p>
                <div className="flex items-center gap-3 ">
                    <Link href="/" className="rounded-xl px-3.5 py-1.5 bg-purple-700 text-white font-heading">Promote Content</Link>
                    <Link href="/partners-announcements" className="rounded-xl px-3.5 py-1.5 border border-purple-800 font-heading">View Promotions</Link>
                </div>
            </div>
        </div>

    )
}

export default PartnershipBanner
