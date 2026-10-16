"use server"
import Article from "@/models/article.model"
import Category from "@/models/category.model"

export const getFeaturedArticles = async () => {
    const featuredArticles = await Article.find({ featured: true }).populate("category").lean()
    return JSON.parse(JSON.stringify(featuredArticles))
}

export const getLatestArticles = async () => {
    const randomArticles = await Article.aggregate([
        { $match: { featured: false } },
        { $sample: { size: 5 } }
    ]);

    const latestArticles = await Article.populate(randomArticles, { path: "author category subCategory" })
    return JSON.parse(JSON.stringify(latestArticles))
}

export const getArticlesByCategoryId = async (categoryId: string) => {
    const articles = await Article.find({ category: categoryId }).populate("author category subCategory").lean()

    return JSON.parse(JSON.stringify(articles))
}

export const getArticlesByCategoryName = async (categoryName: string) => {
    const categoryId = await Category.find({ name: categoryName })
    const articles = await Article.find({ category: categoryId }).lean()

    return JSON.parse(JSON.stringify(articles))
}

export const getArticleById = async (articleId: string) => {

    const article = await Article.findById(articleId).populate("author category subCategory").lean()

    return JSON.parse(JSON.stringify(article))
}

export const getArticlesBySubCategoryId = async (subCategoryId: string) => {
    const articles = await Article.find({ subCategory: subCategoryId }).populate("author category subCategory").lean()

    return JSON.parse(JSON.stringify(articles))
}

