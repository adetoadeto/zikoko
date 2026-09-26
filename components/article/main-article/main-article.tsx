import MainArticleContent from "./main-article-content"
import MainArticleHeader from "./main-article-header"

const MainArticle = async ({article}:Record<string,any>) => {

    return (
        <div className="lg:w-[70%]">
            <article>
                <MainArticleHeader title={article.title}/>
                <MainArticleContent img={article.img}/>
            </article>
        </div>
    )
}

export default MainArticle
