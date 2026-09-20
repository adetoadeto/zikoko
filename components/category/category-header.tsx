"use client"
import { CategoryHeaderProps } from "../../lib/interface"

const CategoryHeader = ({ subCategories, selectedSubCategory, onSelectSubCategory }: CategoryHeaderProps) => {
    const isActiveClass = "bg-purple-900 rounded-lg text-white"

    return (
        <ul className="w-[90%] absolute top-117 left-[50%] translate-x-[-50%] flex justify-center-safe gap-8 bg-white border border-black/14 rounded-lg shadow-[0_0_5px] shadow-black/80 overflow-x-auto no-scrollbar">
            {subCategories.map((item, index) => <li key={index} className={`min-w-fit font-semibold flex flex-col items-center gap-2 hover:cursor-pointer p-4 hover:bg-purple-900 hover:rounded-lg hover:text-white ${selectedSubCategory.name === item.text ? isActiveClass : undefined}`} onClick={() => onSelectSubCategory(item.text, item.icon)}><i className={`fa-solid fa-${item.icon}`}></i><span>{item.text}</span></li>)}
        </ul>
    )
} 

export default CategoryHeader

// clicking an header twice unselects it