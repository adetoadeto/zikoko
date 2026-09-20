import Link from "next/link"
import { categories } from "../../lib/categories"
import { colors } from "../../lib/colors"
import VerticalScrollWrapper from "../wrappers/vertical-scroll-wrapper"
import { Color } from "../../lib/interface"

const Categories = () => {
    return (
        <VerticalScrollWrapper heading="Explore Categories" icon="compass">
            {categories.map(item =>
                <Link href={`/${item.href}`} className={`min-w-62.5 p-4 rounded-2xl border  flex flex-col gap-4 transition-transform animate-duration-transition hover:scale-down ${colors[item.color as Color].border} ${colors[item.color as Color].bgTransparent}`}>
                    <div className={`mb-2 p-0.5 rounded-xl flex justify-center items-center h-12 w-12 ${colors[item.color as Color].bg}`}><i className={`fa-solid fa-${item.icon} text-2xl text-white`}></i></div>
                    <p className="font-heading font-semibold text-lg capitalize">{item.name}</p>
                    <p className="leading-7 lowercase">{item.description}</p>
                    <div className="mt-2 flex justify-between items-center text-sm"><p className={`${colors[item.color as Color].text} font-semibold tracking-wider lowercase`}>{item.count}</p><i className="fa-solid fa-arrow-right"></i></div>
                </Link>)}
        </VerticalScrollWrapper>
    )
}

export default Categories
