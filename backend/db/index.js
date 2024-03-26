import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    } catch (error) {
        console.log("MONGODB connection error: ", error);
    }
};
export default connectDB;
