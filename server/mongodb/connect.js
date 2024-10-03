import mongoose from "mongoose";

/**
 * Connects to MongoDB using the provided URL.
 * @param {string} url - The MongoDB connection URL.
 * @returns {Promise<void>} A promise that resolves when the connection is established successfully, or rejects if there's an error.
 */
const connectDB = (url) => {
    mongoose.set("strictQuery", true);
    mongoose
        .connect(url)
        .then(() => console.log("MongoDB connected"))
        .catch((err) => {
            console.error("Failed to connect with MongoDB");
            console.error(err);
        });
};

export default connectDB;
