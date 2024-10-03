import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

/**
 * Handles GET requests to the root endpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} JSON response with a greeting message
 */
```
/**
 * Starts the server and connects to the database
 * @param {void} - This function doesn't take any parameters
 * @returns {Promise<void>} A promise that resolves when the server is started and database is connected
 */
```
app.get("/", async (req, res) => {
    res.status(200).json({
        message: "Hello from DALL-E",
    });
});

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () =>
            console.log("Server started on port http://localhost:8080")
        );
    } catch (error) {
        console.log(error);
    }
};

startServer();
