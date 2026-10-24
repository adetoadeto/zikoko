import { notFound } from "next/navigation"
import { Slug } from "@/lib/interface"
import { getSpecificCategoryByLink } from "@/lib/category"
import Category from "@/components/category/category"

export const generateMetadata = async ({ params }: Slug) => {
  const { category: slug } = await params
  const category = await getSpecificCategoryByLink(slug)

  if (!category) {
    return notFound()
  }

  return {
    title: `${category.name} | Zikoko`,
    description: category.shortDescription
  }
}

const CategoryPage = async ({ params }: Slug) => {
  const { category } = await params

  return (
    <Category selectedCategory={category} />
  )

}

export default CategoryPage
