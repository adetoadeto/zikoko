import { useContext, useState } from "react"
import Link from "next/link"
import { Context } from "@/store/context"
import NewsLetterIcon from "./newsletter-icon"
import Button from "../ui/button"
import AdvertiseIcon from "./advertise-icon"

const MobileNav = () => {
    const [navIsOpen, setNavIsOpen] = useState(false)
    const { categories } = useContext(Context)

    const handleBackdropClick = (event: any, type?: string) => {
        if (event.target.id === "backdrop" || type === "list") {
            setNavIsOpen(false)
        }
    }

    return (
        <>
            <div className="flex gap-2 items-center xl:hidden">
                <i className="fa-solid fa-magnifying-glass text-2xl text-neutral-400"></i>
                <button className="relative text-3xl text-purple-600" onClick={() => setNavIsOpen(prevState => !prevState)}><i className="fa-solid fa-bars"></i></button>
            </div>

            <aside id="backdrop" className={`h-screen w-full absolute top-15 left-0 bg-black/90 xl:hidden ${navIsOpen ? "visible" : "hidden"}`} onClick={() => handleBackdropClick(event)}>
                <ul className="bg-white h-screen w-[50%] md:w-[35%] absolute right-0 pt-5 pb-100 flex flex-col items-center gap-2 text-center text-xl overflow-scroll no-scrollbar">
                    {categories.map((item: any) =>
                        <li key={item._id} onClick={() => handleBackdropClick(event, "list")} className="w-full border-b border-purple-100"><Link href={`/${item.link}`} className="block w-full p-3 text-purple-800 font-semibold lowercase hover:bg-purple-700 hover:text-white rounded-2xl">{item.name}</Link></li>

                    )}
                    <div className="mt-5 w-full flex justify-center items-center flex-wrap gap-4 ">
                        <NewsLetterIcon />
                        <AdvertiseIcon />
                    </div>
                </ul>
            </aside>
        </>
    )
}

export default MobileNav;
