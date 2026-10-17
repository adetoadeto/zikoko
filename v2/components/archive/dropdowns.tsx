"use client"
import { useContext, useState } from "react"
import { getYears } from "@/lib/utils"
import { Context } from "@/store/context"
import SelectDropdown from "../select-dropdown"

const Dropdowns = () => {
    const years = getYears()
    const ctx = useContext(Context)

    const categoriesName =  ctx.categories.map(item => item.name)

    return (
        <div className="flex items-center gap-5 mt-3">
            <SelectDropdown heading="Category" options={categoriesName} onSelectOption={ctx.storeArchiveSelection} selectedOption={ctx.archiveSelection.category} extraStyles="w-60" />
            <SelectDropdown heading="Year" options={years} onSelectOption={ctx.storeArchiveSelection} selectedOption={ctx.archiveSelection.year} extraStyles="w-35"/>
        </div>
    )
}

export default Dropdowns
