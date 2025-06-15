import express from "express";
import { registerUser, loginUser, generateApiKey, getMe } from "../controllers/auth.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const authRouter = express.Router();

authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)
authRouter.get('/api-kye', isLoggedIn, generateApiKey)
authRouter.get('/me', isLoggedIn, getMe)

export default authRouter;