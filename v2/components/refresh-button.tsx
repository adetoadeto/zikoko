import Link from "next/link"

const RefreshButton = () => {
    return (
        <Link href="/" className="w-fit bg-purple-600 hover:bg-purple-600/60 text-white font-bold py-1.5 px-3 rounded-lg mt-2 flex items-center gap-2 tracking-wide"><i className="fa-solid fa-arrows-rotate text-xs"></i> <span>Try Again</span></Link>
    )
}

export default RefreshButton
