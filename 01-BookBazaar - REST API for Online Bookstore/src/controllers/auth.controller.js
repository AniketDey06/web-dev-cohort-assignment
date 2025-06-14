// import User from "../models/User.model";

const registerUser = async (req, res) => {
    const { name, email, ph, password } = req.body;
    console.log(name, email, ph, password);
}

export {
    registerUser
}