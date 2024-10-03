import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

/**
 * Handles GET requests to the root route
 * @param {Object} req - The request object from Express
 * @param {Object} res - The response object from Express
 /**
  * Handles POST request to generate an image using OpenAI's image creation API
  * @param {Object} req - Express request object containing the prompt in the request body
  * @param {Object} res - Express response object used to send the generated image or error
  * @returns {Promise<void>} Sends a JSON response with the generated image or an error message
  */
 * @returns {Object} JSON response with a greeting message
 */
router.route("/").get((req, res) => {
    res.status(200).json({ message: "Hello from DALL-E!" });
});

router.route("/").post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size: "1024x1024",
            response_format: "b64_json",
        });

        const image = aiResponse.data.data[0].b64_json;
        res.status(200).json({ photo: image });
    } catch (error) {
        console.error(error);
        res.status(500).send(
            error?.response.data.error.message || "Something went wrong"
        );
    }
});

export default router;
