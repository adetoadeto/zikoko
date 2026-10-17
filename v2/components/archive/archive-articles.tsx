"use client"
import { useContext, useEffect, useState } from "react"
import { Context } from "@/store/context"
import { getArticlesByCategoryNameAndYear } from "@/lib/article"
import ArticleCard from "../article/article-card"
import SubHeading from "../sub-heading"

const ArchiveArticles = () => {
    const [articles, setArticles] = useState([])
    const ctx = useContext(Context)
    const archiveSelection = ctx.archiveSelection

    useEffect(() => {
        if (!archiveSelection.category || !archiveSelection.year) {
            return
        }

        const fetchArticles = async () => {
            const result = await getArticlesByCategoryNameAndYear(archiveSelection.category, archiveSelection.year)
            setArticles(result)
        }

        fetchArticles()

    }, [archiveSelection])

    return (
        <>
            {articles.length === 0 ? <p className="text-center text-xl font-bold">No article available for the selected year</p> :
            <div>
                <SubHeading title={archiveSelection.category} icon="folder-open" />
                <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-x-5 gap-y-6 h-fit mt-6">
                    {articles.map(item => <ArticleCard item={item} headlineLength={45} />)}
                </div>
            </div>
            }
        </>
    )
}

export default ArchiveArticles
