"use client"

import { useContext, useEffect } from "react"
import { Context } from "@/store/context"
import { CategoryProps } from "@/lib/interface"
import CategoryBanner from "./category-banner"
import CategoryBody from "./category-body"

const Category = ({ selectedCategory }: CategoryProps) => {

    const ctx = useContext(Context)
    const category = ctx.selectedCategory

    useEffect(() => {
        ctx.storeSelectedCategory(selectedCategory)
        ctx.clearSelectedSubCategory()
    }, [selectedCategory])

    let content;

    if (!category) {
        content = <p>Loading</p>
    } else {
        content = <><CategoryBanner /><CategoryBody /></>
    }

    return (
        <section className="min-h-screen pt-spacing-t-mobile xl:pt-spacing-t">
            {content}
        </section>
    )
}

export default Category
