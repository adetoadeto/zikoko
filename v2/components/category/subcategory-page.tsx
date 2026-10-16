import { useContext, useEffect, useState } from "react"
import ArticleCard from "../article/article-card"
import SubHeading from "../sub-heading"
import { Context } from "@/store/context"
import { getArticlesBySubCategoryId } from "@/lib/article"

const SubCategoryPage = () => {

  const ctx = useContext(Context)
  const [articles, setArticles] = useState<Record<string, any>[] | null>([])
  const selectedSubCategory = ctx.selectedSubCategory

  useEffect(() => {
    if (!selectedSubCategory.id) {
      return
    }

    const getArticles = async () => {
      const result = await getArticlesBySubCategoryId(selectedSubCategory.id)
      setArticles(result)
    }
    getArticles()
  }, [selectedSubCategory])

  return (
    <div>
      <SubHeading title={selectedSubCategory.name} icon={selectedSubCategory.icon} />
      <div className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-article-cards">
        {articles?.map(item => <ArticleCard key={item._id} item={item} />)}
      </div>
    </div>
  )
}

export default SubCategoryPage
