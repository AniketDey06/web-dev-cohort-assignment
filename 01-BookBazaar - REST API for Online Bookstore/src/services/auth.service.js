import jwt from "jsonwebtoken";
import { ApiResponse } from "../utils/api-response.js";

const setUserToke = (user) => {
    return jwt.sign(
        {
            id: user._id,
            role: user.role,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRESIN,
        }
    )
}

const verifyUserToken = (token) => {
    if (!token) {
        new ApiResponse(400, {message: "no token is there"})
    }
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {

    }
}

export {
    setUserToke,
    verifyUserToken
}