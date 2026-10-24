"use client"
import { useContext } from "react"
import Link from "next/link"
import { colors } from "@/lib/colors"
import { Color } from "@/lib/interface"
import { Context } from "@/store/context"
import HorizontalScrollWrapper from "../wrappers/horizontal-scroll-wrapper"
import CardIcon from "../ui/card-icon"

const Categories = () => {
    const { categories } = useContext(Context)

    return (
        <HorizontalScrollWrapper heading="Explore Categories" icon="compass">
            {categories.map((item:any) =>
                <Link key={item._id} href={`/${item.link}`} className={`card-width p-4 rounded-2xl border flex flex-col gap-4 shadow-md transition-transform animate-duration-transition hover:scale-down ${colors[item.color as Color].border} ${colors[item.color as Color].bgTransparent}`}>
                    <CardIcon icon={item.icon} color={item.color} />
                    <p className="font-heading font-semibold text-lg capitalize">{item.name}</p>
                    <p className="leading-7 lowercase">{item.shortDescription}</p>
                    <div className="mt-2 flex justify-between items-center text-sm"><p className={`${colors[item.color as Color].text} font-semibold tracking-wider capitalize`}>Learn more</p><i className="fa-solid fa-arrow-right"></i></div>
                </Link>)}
        </HorizontalScrollWrapper>
    )
}        

export default Categories
