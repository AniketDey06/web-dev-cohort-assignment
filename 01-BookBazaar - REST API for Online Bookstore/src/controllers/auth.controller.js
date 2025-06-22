import crypto from 'crypto'

// model imports 
import User from "../models/User.model.js";
import ApiKey from '../models/Api_keys.model.js';

// utiliti method imports
import { ApiResponse } from "../utils/api-response.js";
import { setUserToke } from "../services/auth.service.js";

// controllers
const registerUser = async (req, res) => {
    const { name, email, phone, password } = req.body;
    console.log(name, email, phone, password);

    if (!name || !email || !phone || !password) {
        res.status(400).json(
            new ApiResponse(400, { message: "All fields are required" })
        )
    }

    try {
        const exsistingUser = await User.findOne({ email })

        if (exsistingUser) {
            return res.status(409).json(
                new ApiResponse(409, { message: "User is there already" })
            )
        }

        const user = await User.create({
            name,
            email,
            phone,
            password
        })

        res.status(201).json(
            new ApiResponse(201, { message: "User registered successfull" })
        )
    } catch (error) {
        res.status(400).json(
            new ApiResponse(400, { message: "something want wrong" })
        )
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json(
            new ApiResponse(400, { message: "All fields are required" })
        )
    }

    try {
        const user = await User.findOne({
            email
        })

        if (!user) {
            return res.status(400).json(
                new ApiResponse(400, { message: "User dose not exsists." })
            )
        }

        const token = setUserToke(user)

        const cookieOption = {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000
        }

        res.cookie("token", token, cookieOption)

        res.status(201).json(
            new ApiResponse(201, { message: user })
        )
    } catch (error) {
        res.status(400).json(
            new ApiResponse(400, { message: "something want wrong" })
        )
    }
}

const generateApiKey = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        const newApiKey = crypto.randomBytes(32).toString("hex")

        const existingkeys = await ApiKey

        res.status(200).json(
            new ApiResponse(200, { user: user })
        )
    } catch (error) {
        res.status(400).json(
            new ApiResponse(400, { message: "No user found" })
        )
    }
}

const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')

        res.status(200).json(
            new ApiResponse(200, { user: user })
        )
    } catch (error) {
        res.status(400).json(
            new ApiResponse(400, { message: "No user found" })
        )
    }


}

export {
    registerUser,
    loginUser,
    generateApiKey,
    getMe,
}