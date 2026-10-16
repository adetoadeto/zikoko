import Link from "next/link"
import { useContext, useState } from "react"
import NavLink from "./nav-link"
import { Context } from "@/store/context"

const NavLinks = () => {
    const [moreOpen, setMoreOpen] = useState(false)
    const { categories } = useContext(Context)

    const navLinks: Record<string, any>[] = categories.slice(0, 5)
    const moreNavLinks: Record<string, any>[] = categories.slice(5)

    return (
        <ul className="hidden items-center gap-10 font-semibold xl:flex">
            {navLinks.map(item => <NavLink key={item._id} href={item.link} name={item.name} />)}

            <li className="relative hover:text-purple-600 hover:cursor-pointer" onClick={() => setMoreOpen(prev => !prev)}><span>More</span> <i className={`fa-solid ${moreOpen ? 'fa-caret-up' : 'fa-caret-down'} text-purple-600 text-lg`}></i></li>
            <ul className={`${moreOpen ? "visible" : "hidden"} absolute w-50 top-18 left-170 bg-white border border-purple-300 rounded-xl text-center`} onMouseLeave={() => setMoreOpen(false)}>
                {moreNavLinks.map(item => <li key={item._id} className="hover:bg-purple-800 hover:text-white rounded-xl capitalize"><Link href={`/${item.link}`} className="w-full p-2 block">{item.name}</Link></li>)}
            </ul>
        </ul>
    )
}

export default NavLinks
