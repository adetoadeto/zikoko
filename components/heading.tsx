import Link from "next/link"

const Heading = ({ title, text, icon }) => {
    return (
        <div className="font-heading font-semibold flex justify-between items-center">
            <p className="text-3xl"><i className={`fa-solid fa-${icon} mr-2 text-purple-950`}></i>{title}</p>
            {text && <Link href="/" className="flex items-center gap-2"><span>Explore all {text}</span> <i className="fa-solid fa-arrow-right"></i></Link>}
        </div>
    )
}

export default Heading
