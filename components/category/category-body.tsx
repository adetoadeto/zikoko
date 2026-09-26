"use client"
import { useState } from "react"

import { categories } from "@/lib/categories"
import { getBySubCategory } from "@/lib/utils"
import { CategoryBodyProps } from "@/lib/interface"

import CategoryHeader from "./category-header"
import CategoryOverview from "./category-overview"
import SubCategoryPage from "./subcategory-page"

const CategoryBody = ({ slug }: CategoryBodyProps) => {

    const [selectedSubCategory, setSelectedSubCategory] = useState<Record<string, string>>({
        name: "",
        icon: ""
    })

    const subCategories = categories.find(item => item.href === slug)
    const groupedBySubCategory = getBySubCategory(slug)

    const handleOnSelectSubCategory = (selection: string, icon: string) => {
        if (selection === selectedSubCategory.name) {
            return setSelectedSubCategory({ name: "", icon: "" })
        }
        setSelectedSubCategory({ name: selection, icon })
    }

    return (
        <>
            <CategoryHeader subCategories={subCategories?.subCategories} selectedSubCategory={selectedSubCategory} onSelectSubCategory={handleOnSelectSubCategory} />
            {!selectedSubCategory.name && <CategoryOverview category={slug} groupedBySubCategory={groupedBySubCategory} />}
            {selectedSubCategory.name && <SubCategoryPage selectedSubCategory={selectedSubCategory} groupedBySubCategory={groupedBySubCategory} />}
        </>
    )
}

export default CategoryBody