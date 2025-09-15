import Book from "../models/Book.model.js"
import Review from "../models/Review.model.js"
import { ApiResponse } from "../utils/api-response.js"
import { ApiError } from "../utils/api-error.js"

const addReview = async (req, res) => {
    const bookId = req.params.bookId
    const { review: reviewText } = req.body
    const userId = req.user.id

    if (!bookId || !reviewText || !userId) {
        res.status(400).json(
            new ApiError(400, { message: "All fields are required" }, error)
        )
    }

    try {
        const book = await Book.findById(bookId)

        if (!book) {
            res.status(404).json(
                new ApiError(400, "All fields are required")
            )
        }

        const review = await Review.create({
            reviewBy: userId,
            comment: reviewText,
            bookID: bookId,
        })

        review.save()

        return res.status(201).json(
            new ApiResponse(201, { message: review })
        )
    } catch (error) {
        res.status(400).json(
            new ApiError(400, { message: "something want wrong" }, error)
        )
    }
}

const getAllReviews = async (req, res) => {
    const bookID = req.params.bookId

    if (!bookID) {
        res.status(404).json(
            new ApiError(404, { message: "Book Id requred" }, error)
        )
    }

    try {
        const allReviews = await Review.find({ bookID })

        if (allReviews.length == 0) {
            return res.status(200).json(
                new ApiResponse(200, { message: "No reviews are there" })
            )
        }

        return res.status(200).json(
            new ApiResponse(200, { message: allReviews })
        )
    } catch (error) {
        res.status(400).json(
            new ApiError(400, { message: "something want wrong" }, error)
        )
    }
}

const deleteReview = async (req, res) => {
    const userID = req.user.id
    const reviewID = req.params.id

    if (!userID || !reviewID) {
        res.status(404).json(
            new ApiError(404, { message: "User Id or review Id is not there" }, error)
        )
    }

    try {
        const deleteReview = await Review.deleteOne({
            reviewBy: userID,
            _id: reviewID,
        })

        if (deleteReview.deletedCount === 0) {
            return res.status(404).json(
                new ApiResponse(404, { message: "Review not found or not authorized" })
            )
        }

        return res.status(200).json(
            new ApiResponse(200, { message: deleteReview })
        )
    } catch (error) {
        res.status(400).json(
            new ApiResponse(400, { message: "something want wrong" }, error)
        )
    }
}

export {
    addReview,
    getAllReviews,
    deleteReview,
}