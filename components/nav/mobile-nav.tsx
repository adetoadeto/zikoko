"use client"
import Link from "next/link"
import { useState } from "react"
import { categories } from "@/lib/categories"
import NewsLetterIcon from "./newsletter-icon"

const MobileNav = () => {
    const [navIsOpen, setNavIsOpen] = useState(false)

    const handleBackdropClick = (event) => {
        if (event.target.id === "backdrop") {
            setNavIsOpen(false)
        }
    }

    return (
        <>
            <div className="flex gap-2 items-center xl:hidden">
                <i className="fa-solid fa-magnifying-glass text-2xl text-neutral-400"></i>
                <button className="relative text-3xl text-purple-600" onClick={() => setNavIsOpen(prevState => !prevState)}><i className="fa-solid fa-bars"></i></button>
            </div>

            <aside id="backdrop" className={`h-screen w-full absolute top-15 left-0 bg-black/90 xl:hidden ${navIsOpen ? "visible" : "hidden"}`} onClick={handleBackdropClick}>
                <ul className="bg-white h-screen w-[50%] md:w-[35%] absolute right-0 pt-5 px-10 pb-40 flex flex-col items-center gap-2 text-center text-xl overflow-scroll no-scrollbar">
                    {categories.map(item => <><li><Link href={item.href} className="block w-full p-3 text-purple-800 font-semibold lowercase hover:bg-purple-700 hover:text-white rounded-2xl">{item.name}</Link></li> <hr className="w-full border border-purple-50 " /></>)}
                    <div className="mt-5 w-full">
                        <NewsLetterIcon />
                    </div>
                </ul>
            </aside>
        </>
    )
}

export default MobileNav
