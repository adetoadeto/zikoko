import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    headline: {
        type: String,
        required: true
    },
    deck: {
        type: String,
        required: true
    },
    readDuration: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }

}, { timestamps: true })

const Article = mongoose.models.Article || mongoose.model("Article", articleSchema)
export default Article;