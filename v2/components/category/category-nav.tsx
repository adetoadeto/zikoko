"use client"
import { useContext } from "react"
import { Context } from "@/store/context"

const CategoryNav = () => {
    const ctx = useContext(Context)

    const category = ctx.categories.find((item: any) => item.link === ctx.selectedCategory)
    const subCategories = category?.subCategories

    const isActiveClass = "bg-purple-900 rounded-xl text-white"

    return (
        <ul className="min-[480px]:w-[90%] min-[480px]:absolute top-112 xl:top-117 left-[50%] min-[480px]:translate-x-[-50%] mb-10 py-1 flex justify-center-safe gap-5  bg-white rounded-lg shadow-[0_0_3px] shadow-black/40 overflow-x-auto no-scrollbar">
            {subCategories?.map((item: any) => {
                const isActive = item.name === ctx.selectedSubCategory.name
                return (
                    <li key={item._id} className={`min-w-fit font-semibold flex flex-col items-center gap-2 py-2 px-4 hover:cursor-pointer hover:bg-purple-900 hover:rounded-xl hover:text-white ${isActive ? isActiveClass : null}`} onClick={() => ctx.storeSelectedSubCategory(item._id, item.name, item.icon)}>
                        <i className={`fa-solid fa-${item.icon}`}></i>
                        <span>{item.name}</span>
                    </li>) 
            })
            }
        </ul>
    )
}

export default CategoryNav
