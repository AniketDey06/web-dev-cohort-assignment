import { Router } from "express";
import { isAdmin } from "../middlewares/auth.middleware.js";
import { addNewBooks, deleteBook, getBookDetails, listAllBooks, updateBookDetails } from "../controllers/books.controller.js";
import { addReview, deleteReview, getAllReviews } from "../controllers/review.controller.js";

const bookRouter = Router()

bookRouter
    .route('/')
    .post(isAdmin, addNewBooks)
    .get(listAllBooks)

bookRouter
    .route('/:id')
    .get(getBookDetails)
    .put(isAdmin, updateBookDetails)
    .delete(isAdmin, deleteBook)

bookRouter
    .route('/:bookId/reviews')
    .post(addReview)
    .get(getAllReviews)

bookRouter
    .route('/reviews/:id')
    .delete(deleteReview)

export default bookRouter;