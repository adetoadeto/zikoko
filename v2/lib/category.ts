import Category from "@/models/category.model"

export const getAllCategories = async () => {
    try {
        const categories = await Category.find().populate("subCategories").lean()
        return JSON.parse(JSON.stringify(categories))
    } catch (err) {
        console.log(err)
        throw new Error("Failed to get categories ")
    }
}

export const getSpecificCategory = async (categoryName: string) => {
    try {
        const categories = await Category.find({ name: categoryName }).populate("subCategories").lean()
        return JSON.parse(JSON.stringify(categories))
    } catch (err) {
        console.log(err)
        throw new Error("Failed to get specified category ")
    }
}

