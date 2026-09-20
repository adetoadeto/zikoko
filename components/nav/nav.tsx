"use client"
import Image from "next/image"
import Link from "next/link"
import NavLinks from "./nav-links"
import logo from "@/public/logo/logo_purple.png"

const Navbar = () => {
    return (
        <nav className="fixed w-full z-100 bg-white flex justify-between items-center px-spacing-x py-5 border-b border-neutral-100">
            <Link href="/"><Image src={logo} alt="Zikoko logo" height={130} width={130} /></Link>
            <NavLinks />
            <div className="flex items-center gap-3">
                <form className="px-3 flex items-center border border-gray-300 rounded-md">
                    <input type="text" className="py-1.5 focus:outline-0" placeholder="search" />
                    <i className="fa-solid fa-magnifying-glass text-lg text-purple-600"></i>
                </form>
                <button className="rounded-md px-3 py-2 text-white font-bold bg-purple-700 flex items-center gap-2"><i className="fa-regular fa-envelope"></i>Newsletter</button>
            </div>
        </nav>
    )
}

export default Navbar
