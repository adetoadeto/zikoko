"use client"
import { useContext } from "react"
import { getYears } from "@/lib/utils"
import { Context } from "@/store/context"
import SelectDropdown from "../ui/select-dropdown"

const Dropdowns = () => {
    const years = getYears()
    const ctx = useContext(Context)

    const categoriesName =  ctx.categories.map(item => item.name)

    return (
        <div className="flex max-[420px]:flex-col flex-row items-center gap-5 mt-3">
            <SelectDropdown heading="Category" options={categoriesName} onSelectOption={ctx.storeArchiveSelection} selectedOption={ctx.archiveSelection.category} extraStyles="w-60" />
            <SelectDropdown heading="Year" options={years} onSelectOption={ctx.storeArchiveSelection} selectedOption={ctx.archiveSelection.year} extraStyles="w-40"/>
        </div>
    )
}

export default Dropdowns
