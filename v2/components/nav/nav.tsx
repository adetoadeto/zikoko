"use client"
import Image from "next/image"
import Link from "next/link"
import OurMission from "../our-mission"
import NavLinks from "./nav-links"
import NewsLetterIcon from "./newsletter-icon"
import AdvertiseIcon from "./advertise-icon"
import MobileNav from "./mobile-nav"
import logo from "@/public/logo/logo_purple.png"

const Navbar = () => {

    return (
        <>
            <OurMission />
            <nav className="fixed w-full z-2 shadow-lg bg-white flex justify-between items-center px-spacing-x-mobile lg:px-spacing-x py-3 xl:py-5 border-b border-neutral-100">
                <Link href="/"><Image src={logo} alt="Zikoko logo" className="h-5 xl:h-6 object-contain w-fit" /></Link>
                <NavLinks />

                <div className="hidden items-center gap-3 xl:flex">
                    <NewsLetterIcon />
                    <AdvertiseIcon />
                    <button>
                        <i className="fa-solid fa-magnifying-glass text-2xl text-neutral-700"></i>
                    </button>
                </div>

                <MobileNav />
            </nav>
        </>
    )
}

export default Navbar
