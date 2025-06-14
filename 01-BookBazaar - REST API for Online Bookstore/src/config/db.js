import mongoose from "mongoose";

const mongoDBconnect = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("mongodb connection error - ", error);
        return process.exit(1);
    }
}

export default mongoDBconnect