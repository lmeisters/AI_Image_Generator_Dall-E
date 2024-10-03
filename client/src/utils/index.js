import FileSaver from "file-saver";
import { surpriseMePrompts } from "../constants";

/**
 * Generates a random prompt that is different from the given prompt.
 * @param {string} prompt - The current prompt to avoid duplicating.
 * @returns {string} A randomly selected prompt that is different from the input prompt.
 */
export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if (randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}

/**
 * Downloads an image and saves it to the user's device.
 * @param {string} _id - The unique identifier for the image.
 * @param {Blob|string} photo - The image data or URL to be downloaded.
 * @returns {Promise<void>} A promise that resolves when the download is complete.
 */
export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
