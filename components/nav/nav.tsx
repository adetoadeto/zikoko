"use client"
import Image from "next/image"
import Link from "next/link"
import NavLinks from "./nav-links"
import OurMission from "../our-mission"
import NewsLetterIcon from "./newsletter-icon"
import { categories } from "@/lib/categories"
import logo from "@/public/logo/logo_purple.png"
import MobileNav from "./mobile-nav"

const Navbar = () => {
    return (
        <>
            <OurMission />
            <nav className="fixed w-full z-2 bg-white flex justify-between items-center px-spacing-x py-5 border-b border-neutral-100">
                <Link href="/"><Image src={logo} alt="Zikoko logo" className="h-7 object-contain w-fit" /></Link>
                <NavLinks />
                <div className="hidden items-center gap-3 xl:flex">
                    <form className="px-3 flex items-center border border-gray-300 rounded-md">
                        <input type="text" className="py-1.5 focus:outline-0" placeholder="search" />
                        <i className="fa-solid fa-magnifying-glass text-lg text-purple-600"></i>
                    </form>
                    <NewsLetterIcon />
                </div>
            
               <MobileNav/>
            </nav>
        </>
    )
}

export default Navbar
