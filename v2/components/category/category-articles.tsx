"use client"
import { useContext, useEffect, useState } from "react"
import { Context } from "@/store/context"
import CategoryArticlesLatest from "./category-articles-latest"
import { CategoryArticlesGrouped } from "./category-articles-grouped"
import { getArticlesByCategoryId } from "@/lib/article"
import { groupCategoryArticlesBySubCategory } from "@/lib/utils"
import { CategoryArticlesType } from "@/lib/interface-types"

const CategoryArticles = () => {
    const [articles, setArticles] = useState<CategoryArticlesType>({
        latestArticles: [], 
        groupedArticles: [],
    })

    const ctx = useContext(Context)
    if (!ctx.categories) {
        return
    }
    const category = ctx.categories.find(item => item.link === ctx.selectedCategory)
    const categoryId = category?._id

    useEffect(() => {
        const getArticles = async () => {
            const categoryArticles = await getArticlesByCategoryId(categoryId)

            const latestArticles = categoryArticles.slice(0, 7)
            const groupedArticles = groupCategoryArticlesBySubCategory(categoryArticles)
           
            setArticles({latestArticles, groupedArticles})
        }
        getArticles()

    }, [categoryId])


    return (
        <div className="flex flex-col gap-10">
            <CategoryArticlesLatest latestArticles={articles.latestArticles}/>
            <CategoryArticlesGrouped groupedArticles={articles.groupedArticles} /> 
        </div>
    )
}

export default CategoryArticles
