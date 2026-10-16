import mongoose from "mongoose"

const subCategorySchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
}, { timestamps: true })

const SubCategory = mongoose.models.SubCategory || mongoose.model("SubCategory", subCategorySchema)
export default SubCategory