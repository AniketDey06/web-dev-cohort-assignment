import { verifyUserToken } from "../services/auth.service.js";

const isLoggedIn = async (req, res, next) => {
    console.log("in middle",req.cookies.token);
    
    let tokenCookies = req.cookies?.token || ""
    req.user = null;

    const user = verifyUserToken(tokenCookies)
    
    console.log(user);
    
    req.user = user
    return next()
}

export { isLoggedIn }