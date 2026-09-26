import { notFound } from "next/navigation"

import { generateSlug, getArticle, getRelatedArticles } from "@/lib/utils"
import { Slug } from "@/lib/interface"

import ArticleNav from "@/components/article/article-nav"
import Author from "@/components/article/author"
import MainArticle from "@/components/article/main-article/main-article"
import NewsLetterBox from "@/components/newsletter/newsletter-box"
import PageWrapper from "@/components/wrappers/page-wrapper"
import RelatedArticles from "@/components/article/related-articles"

const Article = async ({ params }: Slug) => {
    const { article } = await params

    const specificArticle = getArticle(article)[0]

    if (!specificArticle) {
        return notFound()
    }
    const href = generateSlug(specificArticle.category)!
    const relatedArticles = getRelatedArticles(article)

    return (
        <PageWrapper>
            <div className="mx-2 mt-7">
                <ArticleNav path={[specificArticle.category, specificArticle.subCategory, specificArticle.title]} href={href} />
                <div className="lg:flex justify-between gap-20 mt-12">
                    <MainArticle article={specificArticle} />
                    <div className="mt-10 lg:w-[30%] lg:mt-0 flex flex-col gap-7">
                        <Author />
                        <RelatedArticles relatedArticles={relatedArticles} />
                        <NewsLetterBox />
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}

export default Article
