"use client"
import { useContext } from "react"
import { Context } from "@/store/context"
import CategoryNavItem from "./category-nav-item"

const CategoryNav = () => {
    const ctx = useContext(Context)

    const category = ctx.categories.find((item: any) => item.link === ctx.selectedCategory)
    const subCategories = category?.subCategories

    const selectedSubCategoryName = ctx.selectedSubCategory.name

    return (
        <ul className="min-[480px]:w-[90%] min-[480px]:absolute top-112 xl:top-117 left-[50%] min-[480px]:translate-x-[-50%] mb-10 py-1 flex justify-center-safe gap-5  bg-white rounded-lg shadow-[0_0_3px] shadow-black/40 overflow-x-auto no-scrollbar">
            <CategoryNavItem text="All" icon="table-cells-large" isActive={!selectedSubCategoryName} onClickHandler={ctx.clearSelectedSubCategory} />
            {subCategories?.map((item: any) =>
                <CategoryNavItem key={item.name} text={item.name} icon={item.icon} isActive={item.name === selectedSubCategoryName} onClickHandler={() => ctx.storeSelectedSubCategory(item._id, item.name, item.icon)} />
            )
            }
        </ul>
    )
}

export default CategoryNav
