import mongoose, { Schema } from "mongoose";

const reviewSchema = new mongoose.Schema({
    reviewBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    comment: {
        type: String,
        require: true,
    },
    bookID: {
        type: Schema.Types.ObjectId,
        ref: 'Book',
        require: true,
    }
}, { timestamps: true })

const Review = mongoose.model('review', reviewSchema)

export default Review