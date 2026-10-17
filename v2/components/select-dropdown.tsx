"use client"
import { useState } from "react"
import { SelectDropdownProps } from "@/lib/interface-types"

const SelectDropdown = ({ heading, options, onSelectOption, selectedOption, extraStyles }: SelectDropdownProps) => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

    const dropdownIcon = dropdownIsOpen ? 'down' : 'up'
    const dropdownState = dropdownIsOpen ? "block" : "hidden"

    const toggleDropdownBox = () => {
        setDropdownIsOpen(prevState => !prevState) 
    }

    return (
        <div className="">
            <div className={`relative flex items-center gap-3 justify-between border border-black/30 py-1 px-2 rounded-t-lg hover:cursor-pointer ${extraStyles}`} onClick={toggleDropdownBox}>
                <div className="flex items-center gap-2 font-heading"><span className="font-semibold">{heading} :</span><span>{selectedOption.toString().toLowerCase()}</span></div>
                <button><i className={`fa-solid fa-caret-${dropdownIcon} text-yellow-500`}></i></button>
            </div>
            <ul className={`absolute h-40 overflow-y-scroll no-scrollbar border-x border-b border-dashed border-black/30 rounded-b-lg bg-white [&>*:last-child]:rounded-b-lg shadow-lg ${dropdownState} ${extraStyles}`} onMouseLeave={() => setDropdownIsOpen(false)}>
                {options.map(option => <li key={option} className={`hover:cursor-pointer hover:font-bold py-1 px-2 capitalize ${selectedOption === option ? "bg-purple-950 text-white" : ""}`} onClick={() => onSelectOption(heading.toLowerCase(), option)}>{option}</li>)}
            </ul>
        </div>
    )
}

export default SelectDropdown
