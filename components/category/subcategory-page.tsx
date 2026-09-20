import { SubCategoryPageProps } from "@/lib/interface"
import ArticleCard from "../article/article-card"
import SubHeading from "../sub-heading"

const SubCategoryPage = ({ selectedSubCategory, groupedBySubCategory }: SubCategoryPageProps) => {

  const articles = groupedBySubCategory?.filter(item => item.heading.toLowerCase() === selectedSubCategory.name.toLowerCase())[0]

  console.log(selectedSubCategory.icon)
  return (
    <div>
      <SubHeading title={articles?.heading} icon={selectedSubCategory.icon} />
      <div className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {articles?.articles.map(item => <ArticleCard key={item.title} item={item} noTag={true} />)}
        {articles?.articles.map(item => <ArticleCard key={item.title} item={item} noTag={true} />)}
        {articles?.articles.map(item => <ArticleCard key={item.title} item={item} noTag={true} />)}
      </div>
    </div>
  )
}

export default SubCategoryPage
