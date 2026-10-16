import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Author = mongoose.models.Author || mongoose.model("Author", authorSchema)
export default Author;