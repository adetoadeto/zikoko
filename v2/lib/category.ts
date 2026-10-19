import Category from "@/models/category.model"
import connectDB from "./connectDB"

export const getAllCategories = async () => {
    await connectDB()
    try {
        const categories = await Category.find().populate("subCategories").lean()
        return JSON.parse(JSON.stringify(categories))
    } catch (err) {
        console.log(err)
        throw new Error("Failed to get categories ")
    }
}

export const getSpecificCategory = async (categoryName: string) => {
    await connectDB()
    try {
        const categories = await Category.find({ name: categoryName }).populate("subCategories").lean()
        return JSON.parse(JSON.stringify(categories))
    } catch (err) {
        console.log(err)
        throw new Error("Failed to get specified category ")
    }
}

export const getSpecificCategoryByLink = async (categoryLink: string) => {
    await connectDB()
    try {
        const category = await Category.findOne({ link: categoryLink }).lean()
        return JSON.parse(JSON.stringify(category))
    } catch (err) {
        console.log(err)
        throw new Error("Failed to get specified category ")
    }
}


