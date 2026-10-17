import { MainArticleProps } from "@/lib/interface-types"
import MainArticleContent from "./main-article-content"
import MainArticleHeader from "./main-article-header"

const MainArticle = ({article}:MainArticleProps) => {
  
    return (
        <div className="lg:w-[70%]">
            <article>
                <MainArticleHeader article={article}/>
                <MainArticleContent img={article.img}/>
            </article>
        </div>
    )
}

export default MainArticle
