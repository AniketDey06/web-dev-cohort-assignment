import { Router } from "express";
import { isAdmin } from "../middlewares/auth.middleware.js";
import { getOrderDetails, listAllOrders, listUsersOrder, placeOrder } from "../controllers/order.controller.js";

const orderRouter = Router();

orderRouter
    .route('/')
    .post(placeOrder)
    .get(listUsersOrder)

orderRouter
    .route('/all')
    .get(isAdmin, listAllOrders)

orderRouter
    .route('/:id')
    .get(getOrderDetails)

export default orderRouter;