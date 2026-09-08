import { articles } from "@/components/lib/articles"
import Banner from "@/components/category/banner"
import CategoryCard from "@/components/articles/article-card"
import Header from "@/components/category/header"
import Heading from "@/components/heading"
import ArticleCards from "@/components/articles/article-cards"
import SectionWrapper from "@/components/section-wrapper"

const Category = async ({ params }) => {

  const { category } = await params

  return (
    <section className="min-h-screen pt-spacing-t">
      <Banner slug={category} />
      <SectionWrapper>
        <Header />
          <ArticleCards articles={articles} />
      </SectionWrapper>
    </section>
  )
}

export default Category
