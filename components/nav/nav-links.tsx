import Link from "next/link"
import { useState } from "react"
import { categories } from "../../lib/categories"
import NavLink from "./nav-link"

const NavLinks = () => {
    const [moreOpen, setMoreOpen] = useState(false)
    const navLinks = categories.slice(0, 5)
    const moreNavLinks = categories.slice(5)

    return (
        <ul className="flex items-center gap-10 font-semibold">
            {navLinks.map(item => <NavLink key={item.name} {...item} />)}

            <li className="relative hover:text-purple-600 hover:cursor-pointer" onClick={() => setMoreOpen(prev => !prev)}><span>More</span> <i className={`fa-solid ${moreOpen ? 'fa-caret-up' : 'fa-caret-down'} text-purple-600 text-lg`}></i></li>
            <ul className={`${moreOpen ? "visible" : "hidden"} absolute w-50 top-18 left-170 bg-white border border-purple-300 rounded-xl text-center`} onMouseLeave={() => setMoreOpen(false)}>
                {moreNavLinks.map(item => <li key={item.name} className="hover:bg-purple-800 hover:text-white rounded-xl capitalize"><Link href={`/${item.href}`} className="w-full p-2 block">{item.name}</Link></li>)}
            </ul>
        </ul>
    )
}

export default NavLinks
