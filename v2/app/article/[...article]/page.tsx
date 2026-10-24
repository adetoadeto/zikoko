import { capitalizeSlug } from "@/lib/utils"
import { Slug } from "@/lib/interface"
import { getArticleById } from "@/lib/article"

import ArticleNav from "@/components/article/article-nav"
import Author from "@/components/article/author"
import MainArticle from "@/components/article/main-article/main-article"
import NewsLetterBox from "@/components/newsletter/newsletter-box"
import PageWrapper from "@/components/wrappers/page-wrapper"
import RelatedArticles from "@/components/article/related-articles"
import { notFound } from "next/navigation"

export const generateMetadata = async ({ params }: Slug) => {
    const { article } = await params

    const articleId = article[article.length - 1]

    if (!articleId) {
        return notFound()
    }
    const currentArticle = await getArticleById(articleId)
    const capitalizedSlug = capitalizeSlug(currentArticle.headline)

    return {
        title: `${capitalizedSlug}`,
        description: currentArticle.deck
    }
}

const Article = async ({ params }: Slug) => {
    const { article } = await params
    const articleId = article[article.length - 1]

    if (!articleId) {
        return
    }
    const currentArticle = await getArticleById(articleId)

    return (
        <PageWrapper>
            <div className="lg:mx-2 mt-7">
                <ArticleNav category={currentArticle.category} />
                <div className="lg:flex justify-between gap-20 mt-10">
                    <MainArticle article={currentArticle} />
                    <div className="mt-10 lg:w-[30%] lg:mt-0 flex flex-col gap-7">
                        <Author author={currentArticle?.author} />
                        <RelatedArticles categoryId={currentArticle.category._id} />
                        <NewsLetterBox />
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}

export default Article
