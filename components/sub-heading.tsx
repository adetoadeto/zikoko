import Link from "next/link"
import { SubHeadingProps } from "../lib/interface"

const SubHeading = ({ title, text, icon }: SubHeadingProps) => {
    return (
        <div className="font-heading font-semibold flex justify-between items-center">
            <p className="flex items-center gap-2 text-2xl sm:text-3xl capitalize"><i className={`fa-solid fa-${icon}`}></i><span>{title}</span></p>
            {/* {text && 
            <Link href={`/${text}`} className="flex items-center gap-2">
                <span>Explore all {text}</span> 
                <i className="fa-solid fa-arrow-right"></i>
            </Link>} */}
        </div>
    )
}

export default SubHeading
