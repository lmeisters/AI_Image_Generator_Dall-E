## AI Image Generator

This project is an AI image generator application built using **React**, **Node.js**, **Express**, and **MongoDB**. It leverages the **DALL-E 2** AI model to create images from user-provided prompts. Users can generate unique images, share them on the website, and browse a community showcase of AI-generated art.

## Features

- **Image generation using DALL-E 2 AI model**
- **"Surprise Me" feature** for random prompt suggestions
- **Community showcase** of generated images
- **Search functionality** to find specific images
- **Image download capability**
- **Responsive design** for various screen sizes

## Technologies Used

-   **Backend**:
      - Node.js
      - Express
      - MongoDB
      - Mongoose
      - OpenAI API (for DALL-E 2)
      - Cloudinary (for image storage)
-   **Frontend**:
      - React
      - React Router
      - Tailwind CSS
      - Vite (build tool)
-   **Other**:
      - RESTful API
      - Axios (for HTTP requests)
      - File-Saver (for image downloads)

## How to Use

1. On the home page, you'll see a **community showcase** of AI-generated images.
2. To create a new image:
   - Click the **"CREATE"** button or navigate to the create page.
   - Enter your name and a prompt for the image you want to generate.
   - Optionally, use the **"Surprise Me"** button for a random prompt.
   - Click **"Generate"** to create the image.
   - Once generated, click **"Share on website"** to add it to the community showcase.
3. In the community showcase:
   - Browse through the collection of AI-generated images.
   - Use the **search bar** to find specific images by user name or prompt keywords.
   - Click on an image to view it in full size and **download** it if desired.
