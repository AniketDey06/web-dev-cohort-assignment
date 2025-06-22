import mongoose from "mongoose";
import User from "./User.model.js";

const apikeysSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true,
    },
    apiKey: {
        type: String,
        unique: true,
        required: true,
    },
    expiresAt: {
        type: Date,
        default: null
    }
}, { timestamps: true })

const ApiKey = mongoose.model('apiKey', apikeysSchema)

export default ApiKey