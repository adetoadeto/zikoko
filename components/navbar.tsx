"use client"
import Image from "next/image"
import Link from "next/link"
import { categories } from "./lib/home"
import logo from "../public/logo/logo_purple.png"
import { useState } from "react"

const Navbar = () => {
    const [moreOpen, setMoreOpen] = useState(false)

    return (
        <nav className="fixed w-full z-100 bg-white flex justify-between items-center px-10 py-5">
            <Link href="/"><Image src={logo} alt="Zikoko logo" height={130} width={130} /></Link>
            <ul className="flex items-center gap-10 font-semibold">
                {categories.map((item, index) => { if (index < 5) { return <li key={item.name} className="hover:text-purple-800 hover:cursor-pointer"><Link href={`/categories/${item.href}`}>{item.name}</Link></li> } })}

                <li className="relative hover:text-purple-800 hover:cursor-pointer" onClick={()=>setMoreOpen(prev => !prev)}><span>More</span> <i className={`fa-solid ${moreOpen ? 'fa-caret-up' : 'fa-caret-down'} text-purple-600 text-lg`}></i></li>
                <ul className={`${moreOpen ? "visible": "hidden"} absolute top-18 left-170 bg-white border border-purple-300 rounded-xl text-center`} onMouseLeave={()=>setMoreOpen(false)}>
                    {categories.map((item, index) => { if (index >= 5) { return <li key={item.name} className="hover:bg-purple-800 hover:text-white p-2 rounded-xl"><Link href={`/categories/${item.href}`}>{item.name}</Link></li> } })}
                </ul>
            </ul>
            <div className="flex items-center gap-5">
                <form className="px-3 flex items-center border-2 border-gray-300 rounded-md">
                    <input type="text" className="py-1 focus:outline-0" placeholder="search" />
                    <i className="fa-solid fa-magnifying-glass text-lg text-black/30"></i>
                </form>
                <button className="rounded-md px-3 py-2 text-white font-bold bg-purple-900 flex items-center gap-2"><i className="fa-regular fa-envelope"></i>Newsletter</button>
            </div>
        </nav>
    )
}

export default Navbar
