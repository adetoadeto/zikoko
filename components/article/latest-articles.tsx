
const LatestArticles = () => {
    return (
        <div className=" bg-white border border-neutral-300 rounded-lg p-5">
            <strong className="capitalize font-bold font-heading">latest articles</strong>
            <div className="flex flex-col gap-5 mt-6">
                <div className="flex items-center gap-4">
                    <div className="bg-[url('/categories/aluta_chill/img2.png')] rounded-md w-30 h-20 bg-cover bg-right"></div>
                    <div className="flex flex-col gap-1 text-sm">
                        <strong className="capitalize">the soft life isn't lazy, it's smart</strong>
                        <span className="text-neutral-500">Aug 22,2025</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestArticles
