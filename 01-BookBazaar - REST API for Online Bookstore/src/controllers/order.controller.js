import Book from "../models/Book.model.js";
import Order from "../models/Orders.model.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";

const placeOrder = async (req, res) => {
    try {
        const userId = req.user.id;
        const { items } = req.body;

        if (!items || !Array.isArray(items) || items.length === 0) {
            throw new ApiError(400, "Order must contain at least one item");
        }

        let totalAmount = 0;
        const orderItems = [];

        for (const item of items) {
            const book = await Book.findById(item.bookId);
            if (!book) {
                throw new ApiError(404, `Book not found: ${item.bookId}`);
            }

            const quantity = item.quantity || 1;
            const price = book.price;

            totalAmount += price * quantity;

            orderItems.push({
                book: book._id,
                quantity,
                price
            });
        }

        const newOrder = await Order.create({
            user: userId,
            items: orderItems,
            totalAmount,
            status: "pending"
        });

        res
            .status(201)
            .json(new ApiResponse(201, newOrder, "Order placed successfully"));
    } catch (error) {
        res
            .status(error.statusCode || 500)
            .json(
                new ApiError(error.statusCode || 500, error.message || "Server Error")
            );
    }
}

const listUsersOrder = async (req, res) => {
    try {
        const userID = req.user.id

        if (!userID) {
            throw new ApiError(400, "no user id");
        }

        const orders = await Order.find({ user: userID })

        if (orders.length == 0) {
            throw new ApiError(404, `order not found`);
        }

        res
            .status(201)
            .json(new ApiResponse(201, orders));
    } catch (error) {
        res
            .status(error.statusCode || 500)
            .json(
                new ApiError(error.statusCode || 500, error.message || "Server Error")
            );
    }
}

const getOrderDetails = async (req, res) => {
    try {
        const userID = req.user.id
        const orderID = req.params.id

        if (!orderID) {
            throw new ApiError(400, "no order id");
        }

        const orderDetails = await Order.findOne({
            _id: orderID,
            user: userID,
        })

        if (!orderDetails) {
            throw new ApiError(404, `order not found`);
        }

        res
            .status(200)
            .json(new ApiResponse(200, orderDetails, "Order fetched successfully"));
    } catch (error) {
        res
            .status(error.statusCode || 500)
            .json(
                new ApiError(error.statusCode || 500, error.message || "Server Error")
            );
    }
}

const listAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({})

        if (!orders || orders.length === 0) {
            throw new ApiError(404, `order not found`);
        }

        res
            .status(201)
            .json(new ApiResponse(201, orders));
    } catch (error) {
        console.error("listAllOrders error =>", error);
        res
            .status(error.statusCode || 500)
            .json(
                new ApiError(error.statusCode || 500, error.message || "Server Error")
            );
    }
}

export {
    placeOrder,
    listUsersOrder,
    getOrderDetails,
    listAllOrders,
}