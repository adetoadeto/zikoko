import { notFound } from "next/navigation"
import { Slug } from "@/lib/interface-types"
import { getAllCategories } from "@/lib/category"
import Category from "@/components/category/category"
import { capitalizeSlug } from "@/lib/utils"

export const generateMetadata = async ({ params }: Slug) => {
  const { category: slug } = await params

  if (!slug) {
    return notFound()
  }

  const categories = await getAllCategories()
  const selectedCategory = categories.find((item: any) => item.link === slug)
  const capitalizedSlug = capitalizeSlug(slug)

  return {
    title: `${capitalizedSlug} | Zikoko`,
    description: selectedCategory.description
  }
}

const CategoryPage = async ({ params }: Slug) => {
  const { category } = await params

  return (
    <Category selectedCategory={category} />
  )

}

export default CategoryPage
