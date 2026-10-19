"use server"
import Article from "@/models/article.model"
import Category from "@/models/category.model"
import connectDB from "./connectDB"

export const getFeaturedArticles = async () => {
    await connectDB()
    const featuredArticles = await Article.find({ featured: true }).populate("category").lean()
    return JSON.parse(JSON.stringify(featuredArticles))
}

export const getLatestArticles = async () => {
    await connectDB()
    const randomArticles = await Article.aggregate([
        { $match: { featured: false } },
        { $sample: { size: 5 } }
    ]);

    const latestArticles = await Article.populate(randomArticles, { path: "author category subCategory" })
    return JSON.parse(JSON.stringify(latestArticles))
}

export const getArticleById = async (articleId: string) => {
    await connectDB()
    const article = await Article.findById(articleId).populate("author category subCategory").lean()

    return JSON.parse(JSON.stringify(article))
}

export const getArticlesByCategoryId = async (categoryId: string) => {
    await connectDB()
    const articles = await Article.find({ category: categoryId }).populate("author category subCategory").lean()

    return JSON.parse(JSON.stringify(articles))
}

export const getArticlesByCategoryName = async (categoryName: string) => {
    await connectDB()
    const categoryId = await Category.find({ name: categoryName })
    const articles = await Article.find({ category: categoryId }).lean()

    return JSON.parse(JSON.stringify(articles))
}

export const getArticlesBySubCategoryId = async (subCategoryId: string) => {
    await connectDB()
    const articles = await Article.find({ subCategory: subCategoryId }).populate("author category subCategory").lean()

    return JSON.parse(JSON.stringify(articles))
}

export const getArticlesByCategoryNameAndYear = async (categoryName: string, filterYear: number) => {
    await connectDB()
    const startDate = new Date(`${filterYear}-01-01T00:00:00.000Z`)
    const endDate = new Date(`${(filterYear + 1)}-01-01T00:00:00.000Z`)
    const category = await Category.find({name: categoryName})
    
    const articles = await Article.find({category: category[0]._id, createdAt: {$gte: startDate, $lt: endDate}}).populate("author category").lean()
    return JSON.parse(JSON.stringify(articles))
}

