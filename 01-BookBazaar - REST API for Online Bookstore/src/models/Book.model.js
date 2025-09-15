import mongoose, { Schema } from "mongoose";
import User from "./User.model.js";

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        require: true,
    },
    authorName: {
        type: String,
        require: true,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    stock: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true,
    }
}, { timestamps: true })

const Book = mongoose.model('book', bookSchema)

export default Book