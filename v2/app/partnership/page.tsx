import Link from "next/link"

const Partnership = () => {
    return (
        <section className="min-h-screen pt-spacing-t">
            <div className="bg-[url('/advertise.png')] bg-cover h-100 w-full flex flex-col gap-3">
                <span className="bg-purple-800 text-white uppercase font-semibold rounded-lg p-1">partner with zikoko</span>
                <h2><span>Your content, </span> <span>Our audience</span></h2>
                <p>Promote your stories, products, events and more to our vibrant community. Reach a diverse and influential audience across Nigeria and globally</p>
                <div className="flex items-center gap-2 ">
                    <Link href="/" className="rounded-lg px-1.5 py-2">Promote Content</Link>
                    <Link href="/partners-announcements" className="rounded-lg px-1.5 py-2">View Promotions</Link>
                </div>
            </div>
        </section>

    )
}

export default Partnership
