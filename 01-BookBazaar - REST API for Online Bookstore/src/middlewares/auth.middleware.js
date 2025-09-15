import { verifyUserToken } from "../services/auth.service.js";
import { ApiResponse } from "../utils/api-response.js";

const isLoggedIn = async (req, res, next) => {
    let tokenCookies = req.cookies?.token || ""
    req.user = null;

    const user = verifyUserToken(tokenCookies)

    req.user = user
    return next()
}

const isAdmin = async (req, res, next) => {
    // console.log("is admin", req.user);

    const user = req.user;

    if (user.role !== "ADMIN") {
        return res.status(402).json(
            new ApiResponse(402, { message: "user not athorise to access" })
        )
    }

    req.user = user
    next()
}

export { isLoggedIn, isAdmin }