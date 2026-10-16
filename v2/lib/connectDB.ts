import mongoose from "mongoose";
import "../models/index"

const DB_URL = process.env.URL!

let cached = (global as any).mongoose
if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null }
}

const connectDB = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(DB_URL).then((m) => {
            console.log("MongoDB connected")
            return m.connection
        })
    }

    try {
        cached.conn = await cached.promise
    } catch (err) {
        cached.promise = null
        console.log(err)
    }

    return cached.conn;
}

export default connectDB