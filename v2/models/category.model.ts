import mongoose from "mongoose";
import "./subcategory.model"

const categorySchema = new mongoose.Schema({
    icon: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    },
    totalArticles: {
        type: Number,
        required: true
    },
    categoryType: {
        type: String,
        enum: ["articles", "quizzes", "shows"],
        required: true
    },
    color: {
        type: String,
        enum: ["blue", "cyan", "green", "orange", "pink", "purple", "red"],
        required: true
    },
    bannerImg: {
        type: String,
        required: true
    },
    subCategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
        required: true
    }]
}, { timestamps: true })

const Category = mongoose.models.Category || mongoose.model("Category", categorySchema)

export default Category