"use client"
import { CategoryHeaderProps } from "../../lib/interface"

const CategoryHeader = ({ subCategories, selectedSubCategory, onSelectSubCategory }: CategoryHeaderProps) => {
    const isActiveClass = "bg-purple-900 rounded-4xl text-white"

    return (
        <ul className="min-[480px]:w-[90%] min-[480px]:absolute top-117 left-[50%] min-[480px]:translate-x-[-50%] mb-10 py-1 flex justify-center-safe gap-8 bg-white rounded-lg shadow-[0_0_3px] shadow-black/40 overflow-x-auto no-scrollbar">
            {subCategories.map((item, index) => <li key={index} className={`min-w-fit font-semibold flex flex-col items-center gap-2 py-3 px-5 hover:cursor-pointer hover:bg-purple-900 hover:rounded-4xl hover:text-white ${selectedSubCategory.name === item.text ? isActiveClass : undefined}`} onClick={() => onSelectSubCategory(item.text, item.icon)}><i className={`fa-solid fa-${item.icon}`}></i><span>{item.text}</span></li>)}
        </ul>
    )
}

export default CategoryHeader
