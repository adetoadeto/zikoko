"use client"
import { useContext, useState } from "react"
import { getYears } from "@/lib/utils"
import { Context } from "@/store/context"
import SelectDropdown from "../select-dropdown"

const Dropdowns = () => {
    const years = getYears()
    const {categories} = useContext(Context)
    const [selectedOptions, setSelectedOptions] = useState({
        category: "",
        year: ""
    })

    const categoriesName =  categories.map(item => item.name)

    const handleSelectedOption = (optionType: string, value: string | number) => {
        setSelectedOptions(prevState => {
            return { ...prevState, [optionType.toLowerCase()]: value }
        })
    }

    return (
        <div className="flex items-center gap-5 mt-3">
            <SelectDropdown heading="Category" options={categoriesName} onSelectOption={handleSelectedOption} selection={selectedOptions} extraStyles="w-60" />
            <SelectDropdown heading="Year" options={years} onSelectOption={handleSelectedOption} selection={selectedOptions} extraStyles="w-35"/>
        </div>
    )
}

export default Dropdowns
