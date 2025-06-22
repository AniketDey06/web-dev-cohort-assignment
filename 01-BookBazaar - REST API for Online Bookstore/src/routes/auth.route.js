import express from "express";
import { registerUser, loginUser, generateApiKey, getMe } from "../controllers/auth.controller.js";
import { isAdmin, isLoggedIn } from "../middlewares/auth.middleware.js";

const authRouter = express.Router();

authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)
authRouter.get('/api-key', isLoggedIn, generateApiKey)
authRouter.get('/me', isLoggedIn, isAdmin, getMe)

export default authRouter;