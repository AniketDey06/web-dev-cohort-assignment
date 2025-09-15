import Book from "../models/Book.model.js"
import { ApiError } from "../utils/api-error.js"
import { ApiResponse } from "../utils/api-response.js"

const addNewBooks = async (req, res) => {
    const { bookName, authorName, stock, price } = req.body
    const user = req.user

    if (!bookName || !authorName || !stock || !price) {
        return res.status(401).json(
            new ApiError(401, { message: "All fields are reqired" })
        )
    }

    if (!user) {
        return res.status(404).json(
            new ApiError(404, { message: "User Not Found" })
        )
    }

    try {
        const book = await Book.create({
            bookName,
            authorName,
            createdBy: user.id,
            stock,
            price,
        })

        book.save()

        return res.status(201).json(
            new ApiResponse(201, { message: "Book created successfully" })
        )
    } catch (error) {
        res.status(400).json(
            new ApiError(400, { message: "No user found" }, error)
        )
    }

}

const listAllBooks = async (req, res) => {
    try {
        const books = await Book.find({})

        return res.status(200).json(
            new ApiResponse(200, { message: books })
        )
    } catch (error) {
        res.status(404).json(
            new ApiError(404, { message: "No books found" }, error)
        )
    }
}

const getBookDetails = async (req, res) => {
    const bookID = req.params.id

    if (!bookID) {
        res.status(404).json(
            new ApiError(404, { message: "params has no id" }, error)
        )
    }

    try {
        const book = await Book.findById(bookID)

        if (!book) {
            res.status(404).json(
                new ApiError(404, { message: "No books found" }, error)
            )
        }

        return res.status(200).json(
            new ApiResponse(200, { message: book })
        )
    } catch (error) {
        res.status(400).json(
            new ApiError(400, { message: "something want wrong" }, error)
        )
    }
}

const updateBookDetails = async (req, res) => {
    const bookID = req.params.id

    if (!bookID) {
        res.status(404).json(
            new ApiError(404, { message: "params has no id" }, error)
        )
    }

    const { bookName, authorName, stock, price } = req.body

    const updateFields = {};
    if (bookName !== undefined) updateFields.bookName = bookName;
    if (authorName !== undefined) updateFields.authorName = authorName;
    if (stock !== undefined) updateFields.stock = stock;
    if (price !== undefined) updateFields.price = price;

    if (Object.keys(updateFields).length === 0) {
        return res
            .status(400)
            .json(new ApiError(400, "At least one field must be provided"));
    }

    try {
        const updatdBook = await Book.findByIdAndUpdate(
            bookID,
            {
                $set: updateFields
            },
            {
                new: true,
            }
        )

        if (updatdBook) {
            res.status(202).json(
                new ApiResponse(202, { message: updatdBook })
            )
        } else {
            res.status(404).json(
                new ApiError(404, "Book not found", { details: "Book ID invalid" })
            );
        }
    }
    catch (error) {
        res.status(400).json(
            new ApiError(400, { message: "something want wrong" }, error)
        )
    }
}

const deleteBook = async (req, res) => {
    const bookID = req.params.id

    try {
        const deletedBook = await Book.findByIdAndDelete(bookID)

        if (deletedBook) {
            res.status(200).json(
                new ApiResponse(200, { message: deletedBook })
            )
        } else {
            res.status(404).json(
                new ApiError(404, "Book not found", { details: "Book ID invalid" })
            );
        }
    }
    catch (error) {
        res.status(400).json(
            new ApiError(400, { message: "something want wrong" }, error)
        )
    }
}

export {
    addNewBooks,
    listAllBooks,
    getBookDetails,
    updateBookDetails,
    deleteBook,
}