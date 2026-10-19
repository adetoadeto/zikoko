"use client"
import { useContext } from "react"
import CategoryNav from "./category-nav"
import CategoryArticles from "./category-articles"
import SubCategoryPage from "./subcategory-page"
import { Context } from "@/store/context"

const CategoryBody = () => {

    const ctx = useContext(Context)

    return (
        <div className="min-[480px]:pt-20 px-spacing-x-mobile xl:px-spacing-x" id="explore">
            <CategoryNav />
            {!ctx.selectedSubCategory.id && <CategoryArticles />}
            {ctx.selectedSubCategory.id && <SubCategoryPage />}
        </div>
    )
}

export default CategoryBody