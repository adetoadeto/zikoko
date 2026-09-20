import { notFound } from "next/navigation"

import { articles } from "@/lib/articles"
import { generateSlug, getArticle } from "@/lib/utils"

import ArticleNav from "@/components/article/article-nav"
import Author from "@/components/article/author"
import LatestArticles from "@/components/article/latest-articles"
import MainArticle from "@/components/article/main-article/main-article"
import PageWrapper from "@/components/wrappers/page-wrapper"
import Subscribe from "@/components/newsletter/subscribe"
import { Slug } from "@/lib/interface"

const Article = async ({ params }: Slug) => {
    const { article } = await params

    const specificArticle = getArticle(article)[0]

    if (!specificArticle) {
        return notFound()
    }

    return (
        <PageWrapper>
            <div className="mx-2 mt-7">
                <ArticleNav path={[specificArticle.category, specificArticle.subCategory, specificArticle.title]} />
                <div className="flex justify-between gap-20 mt-12">
                    <MainArticle article={specificArticle} />
                    <div className="w-[30%] flex flex-col gap-7">
                        <Author />
                        <LatestArticles />
                        <Subscribe />
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}

export default Article
