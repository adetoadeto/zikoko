import { notFound } from "next/navigation"

import { Slug } from "@/lib/interface"
import { categories } from "@/lib/categories"

import PageWrapper from "@/components/wrappers/page-wrapper"
import CategoryBanner from "@/components/category/category-banner"
import CategoryBody from "@/components/category/category-body"

export const generateMetadata = async ({ params }: Slug) => {
  const { category } = await params
  const categoryItem = categories.find(item => item.href === category)

  if (!categoryItem) {
    return notFound()
  }

  return {
    title: `${categoryItem.name} | Zikoko`,
    description: categoryItem.description
  }
}

const CategoryPage = async ({ params }: Slug) => {
  const { category } = await params

  return (
    <section className="min-h-screen pt-spacing-t">
      <CategoryBanner category={category} />
      <PageWrapper>
       <CategoryBody slug={category}/>
      </PageWrapper>
    </section>
  )
}

export default CategoryPage
