"use client"
import { useContext } from "react"
import { Context } from "@/store/context"
import Dropdowns from "./dropdowns"
import ArchiveArticles from "./archive-articles"
import NoSelection from "./no-selection"

const Archive = () => {
    const ctx = useContext(Context)
    const noSelection = !ctx.archiveSelection.category || !ctx.archiveSelection.year

    return (
        <section className="min-h-screen pt-spacing-t">
            <div className="h-100 bg-[url('/archive.png')] bg-cover px-spacing-x flex flex-col gap-8 justify-center text-purple-800">
                <h2 className="font-heading text-7xl uppercase font-semibold tracking-wide">Archives</h2>
                <hr className="w-50 border-2 text-yellow-500" />
                <p className="w-1/2 leading-8">Explore stories dating from 2018 to present. All you have to do is select a category and your preferred year.</p>
                <Dropdowns />
            </div>

            <div className="px-spacing-x py-8">
                {noSelection ? <NoSelection /> : <ArchiveArticles />}
            </div>
        </section>
    )
}

export default Archive
